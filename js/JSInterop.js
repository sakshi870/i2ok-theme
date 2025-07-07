/* Begin: Goto Top */
function GoToTop() {

    const goToTopButton = document.getElementById('goToTopButton');

    goToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
/* End: Goto Top */

/* Begin: Mobile Drawer */
function MobileDrawer() {
    document.addEventListener('DOMContentLoaded', function () {
        const mobileDrawer = document.querySelector('.mobile-drawer');
        const openDrawerButton = document.querySelector('#open-drawer');

        openDrawerButton.addEventListener('click', function () {
            // Toggle the class to show/hide the drawer
            mobileDrawer.classList.toggle('open');
        });
    });                                                                                       /* End: Mobile Drawer */
}
/* End: Mobile Drawer */

/* Begin: On Scroll Function */
window.addEventListener('scroll', function () {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        // User has scrolled to the bottom
        DotNet.invokeMethodAsync('YourBlazorAppNamespace', 'OnScrollDown');
    }
});
/* End: On Scroll Function */

/* Begin: Load Entire JS Script */
function loadScript(scriptPath) {
    var scriptElement = document.createElement('script');
    scriptElement.src = scriptPath;
    scriptElement.type = 'text/javascript';
    document.head.appendChild(scriptElement);
}
/* End: Load Entire JS Script */

/* Begin: Hard Refresh Page */
function ReloadPage() {
    location.reload(true);
};
/* End: Hard Refresh Page */

/* Begin: Get Referrer URL */
window.getReferrer = function () {
    return document.referrer;
}
/* End: Get Referrer URL */

/* Begin: Detect User's Device */
window.detectDevice = function () {
    var userAgent = navigator.userAgent;

    if (userAgent.match(/Android/i)) {
        return "Mobile";
    } else if (userAgent.match(/iPhone|iPad|iPod/i)) {
        return "Mobile";
    } else if (userAgent.match(/Windows/i)) {
        return "PC";
    } else if (userAgent.match(/Mac/i)) {
        return "Mac";
    } else if (userAgent.match(/Linux/i)) {
        return "PC"; // For simplicity, consider Linux devices as PCs
    } else {
        return "Unknown";
    }
}
/* End: Detect User's Device */

/* Begin: Show Alert */
function ShowAlertMessage(name, email, mobile)
{
    var message = "Hello " + name + " welcome to O2YO, your email is " + email + " and your mobile number is " + mobile;
    alert(message);
}

function ChangeBackground(color) {
    document.body.style.background = color;
}
/* End: Show Alert */