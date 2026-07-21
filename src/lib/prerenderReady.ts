/** Static homepage title baked into index.html — not valid for inner routes during prerender */
const HOMEPAGE_SHELL_TITLE = /^Andaman Tour Packages 2026\s*\|\s*(Starting|From)/i;

export function resetPrerenderSignal(pathname: string): void {
  if (typeof document === 'undefined') return;
  document.documentElement.removeAttribute('data-prerender-ready');
  document.documentElement.setAttribute('data-prerender-path', pathname);
}

export function signalPrerenderReady(pathname: string): void {
  if (typeof document === 'undefined') return;
  document.documentElement.setAttribute('data-prerender-path', pathname);
  document.documentElement.setAttribute('data-prerender-ready', 'true');
}

function canonicalMatchesPath(pathname: string): boolean {
  const links = Array.from(
    document.querySelectorAll('link[rel="canonical"]')
  ) as HTMLLinkElement[];
  const hrefs = links.map((link) => link.getAttribute('href') || link.href || '');
  if (!hrefs.length) return false;

  if (pathname === '/') {
    return hrefs.some((href) => {
      try {
        const u = new URL(href, window.location.origin);
        return u.pathname === '/' || u.pathname === '';
      } catch {
        return /luxuryandamans\.com\/?$/i.test(href);
      }
    });
  }

  return hrefs.some((href) => href.includes(pathname));
}

/**
 * Returns true when the route has meaningful content and SEO tags for Puppeteer capture.
 */
export function evaluatePrerenderReady(
  pathname: string,
  initialTitle: string,
  startedAt: number
): boolean {
  const root = document.getElementById('root');
  const textLen = root?.textContent?.trim().length ?? 0;
  const hasTitle = Boolean(document.title?.trim());
  const hasContent = textLen > 80;

  if (!hasTitle || !hasContent) return false;

  const title = document.title;
  const titleChanged = pathname === '/' || title !== initialTitle;

  if (pathname !== '/' && HOMEPAGE_SHELL_TITLE.test(title)) {
    return false;
  }

  const seoReady =
    pathname === '/'
      ? true
      : canonicalMatchesPath(pathname) && titleChanged;

  if (seoReady) return true;

  // Lazy routes: allow capture once title updated and content mounted (max 8s)
  if (titleChanged && Date.now() - startedAt >= 8000) return true;

  return false;
}
