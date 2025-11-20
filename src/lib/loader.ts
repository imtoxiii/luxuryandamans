export const removeLoader = () => {
    const skeleton = document.getElementById('loading-skeleton');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');

    // Clear the simulation interval
    if ((window as any).loaderInterval) {
        clearInterval((window as any).loaderInterval);
    }

    if (skeleton && progressBar && progressText) {
        // Force progress to 100%
        progressBar.style.width = '100%';
        progressText.textContent = '100%';

        // Wait a moment for the 100% to be seen, then fade out
        setTimeout(() => {
            skeleton.classList.add('hidden');
            setTimeout(() => skeleton.remove(), 500);
        }, 500);
    }
};
