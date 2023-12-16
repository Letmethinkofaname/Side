let inFrame;

try {
    inFrame = window !== top;
} catch (e) {
    inFrame = true;
};

if (!inFrame && !navigator.userAgent.includes("Firefox")) {
    const popup = open("about:blank", "_blank")
    if (!popup || popup.closed) alert("Please allow popups and redirects.")
    else {
        const doc = popup.document
        const iframe = doc.createElement("iframe")
        const style = iframe.style
        const link = doc.createElement("link")

        const name = localStorage.getItem("name") || "Classes";
        const icon = localStorage.getItem("icon") || "data:image/jpeg;base64,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";
        
        doc.title = name;
        link.rel = "icon";
        link.href = icon;
        
        iframe.src = location.href 
        style.position = "fixed"
        style.top = style.bottom = style.left = style.right = 0
        style.border = style.outline = "none"
        style.width = style.height = "100%"

        doc.head.appendChild(link);
        doc.body.appendChild(iframe);
        location.replace(localStorage.getItem('panicLink') || 'https://www.nasa.gov/');
    };
};

document.addEventListener("DOMContentLoaded", function(event) { 
    if (window.localStorage.getItem("v4Particles") == "true") {
        const scr = document.createElement("script");
        scr.src = "/assets/scripts/particles.js";
        document.body.appendChild(scr);
    }
});

window.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden')
        document.body.insertAdjacentHTML('beforeend', `<iframe src="/reviews/hvtrs8%2F-gmoelg.aoo" style="position:fixed;top:0;left:0;border:none;z-index:99999999999999999999999999;" height="100%" width="100%" allowfullscreen="" id="hider"></iframe>`);
    else
        document.querySelector('#hider')?.remove();
});