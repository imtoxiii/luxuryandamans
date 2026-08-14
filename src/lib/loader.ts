/**
 * Hands control of the boot preloader (see index.html) back to the page.
 *
 * The preloader owns its own progress simulation and exit choreography via
 * `window.__luxalLoader.finish()`. When the exit sweep begins it dispatches a
 * `luxal:reveal` event on `window` so pages can start their entrance animations
 * in sync with the reveal.
 *
 * @param immediate skip the choreography and remove the loader instantly
 *                  (used for blog deep-links and other content-first routes)
 */
export const removeLoader = (immediate = false) => {
    if (typeof window === 'undefined') return;

    const engine = (window as unknown as {
        __luxalLoader?: { finish: (immediate?: boolean) => void };
    }).__luxalLoader;

    if (engine?.finish) {
        engine.finish(immediate);
        return;
    }

    // Legacy fallback: stale cached HTML may still carry the old loader markup
    if ((window as any).loaderInterval) {
        clearInterval((window as any).loaderInterval);
    }
    const skeleton = document.getElementById('loading-skeleton');
    if (skeleton) {
        skeleton.style.pointerEvents = 'none';
        skeleton.classList.add('hidden');
        window.setTimeout(() => skeleton.remove(), immediate ? 0 : 500);
    }
    try {
        window.dispatchEvent(new Event('luxal:reveal'));
    } catch {
        /* no-op */
    }
};
