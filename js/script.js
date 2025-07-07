/* Begin: Move Cursor To Next Input for OTP Verification */
document.addEventListener("DOMContentLoaded", function () {
    // Select all input elements with class "otp-input"
    const otpInputs = document.querySelectorAll(".otp-input");

    otpInputs.forEach((input, index) => {
        // Listen for the "input" event when user types in the input field
        input.addEventListener("input", function () {
            // Check if the input value length is 1 and if it's not the last input
            if (this.value.length === 1 && index < otpInputs.length - 1) {
                // Move focus to the next input
                otpInputs[index + 1].focus();
            }
        });

        // Listen for the "keydown" event when a key is pressed
        input.addEventListener("keydown", function (event) {
            // Check if the pressed key is "Backspace" and if it's not the first input
            if (event.key === "Backspace" && index > 0) {
                // Move focus to the previous input
                otpInputs[index - 1].focus();
            }
        });
    });
});
/* End: Move Cursor To Next Input for OTP Verification */


/* Begin: Goto Top */
const goToTopButton = document.getElementById('goToTopButton');

goToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
/* End: Goto Top */

/* Begin: Mobile Drawer */
document.addEventListener('DOMContentLoaded', function () {
    const mobileDrawer = document.querySelector('.mobile-drawer');
    const openDrawerButton = document.querySelector('#open-drawer');

    openDrawerButton.addEventListener('click', function () {
        // Toggle the class to show/hide the drawer
        mobileDrawer.classList.toggle('open');
    });
});
/* End: Mobile Drawer */