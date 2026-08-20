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
 * Inner routes must have a matching canonical — never fall back to "title changed" alone,
 * or the snapshot can keep the homepage canonical and ship a duplicate.
 */
export function evaluatePrerenderReady(
  pathname: string,
  initialTitle: string
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

  if (pathname === '/') {
    return canonicalMatchesPath('/') || titleChanged;
  }

  return canonicalMatchesPath(pathname) && titleChanged;
}
