const regSw = async () => {
    if ('serviceWorker' in navigator) {
        try {
            await navigator
                .serviceWorker
                .register('./serviceworker.js');
        }
        catch (e) {
            console.log('SW registration failed');
        }
    }
};

window.addEventListener('load', () => {
    regSw()
});