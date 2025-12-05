// Index page: Next Page button
const nextBtn = document.getElementById("nextPageBtn");
if (nextBtn) {
    nextBtn.addEventListener("click", function () {
        alert("Page 2 opened");
    });
}

// Page 2: contact form validation
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        const nameInput  = contactForm.querySelector('input[type="text"]');
        const emailInput = contactForm.querySelector('input[type="email"]');
        const msgInput   = contactForm.querySelector('textarea');

        if (!nameInput.value.trim() || !emailInput.value.trim() || !msgInput.value.trim()) {
            event.preventDefault();
            alert("Please fill all the fields before submitting.");
        } else {
            alert("Thank you! Your message has been sent.");
        }
    });
}



