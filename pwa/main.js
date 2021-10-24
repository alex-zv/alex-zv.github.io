const apiServer = 'http://192.168.50.186';
function urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

const publicVapidKey = 'BKJ-bANXg_VFGvG2oGS-MaBUwOMKIDJoMEI0VBgQZQGL8cTbYp8aVay19Kk2IVgd3zATtuhlZnv3B8t8-TF-7Ek';
const regSw = async () => {
    if ('serviceWorker' in navigator) {
        try {
            const register = await navigator
                .serviceWorker
                .register('./serviceworker.js');

            const subscription = await register.pushManager.subscribe({
                userVisibleOnly: true,

                //public vapid key
                applicationServerKey: urlB64ToUint8Array(publicVapidKey)
            });

            await fetch(`${apiServer}/api/push/subscribe`, {
                method: "POST",
                body: JSON.stringify(subscription),
                headers: {
                    "content-type": "application/json"
                }
            });
        }
        catch (e) {
            console.log('SW registration failed');
            console.dir(e);
        }
    }
};

window.addEventListener('load', () => {
    regSw()
    const input = document.getElementById('push-data');
    const btn = document.getElementById('push');
    btn.addEventListener('click', async () => {
        setTimeout(async () => {
            try {
                await fetch(`${apiServer}/api/push/send`, {
                    method: "POST",
                    body: JSON.stringify({
                        text: input.value
                    }),
                    headers: {
                        "content-type": "application/json"
                    }
                });
            } catch (e) {
                alert(e)
            }
        }, 1000)
    })
});

