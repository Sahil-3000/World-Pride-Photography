// Add TypeScript functionality for the "Book a Session" button and contact form
// Add event listener for the "Book a Session" button
const bookButton = document.getElementById("bookButton");
if (bookButton) {
    bookButton.addEventListener("click", () => {
        alert("Thank you for your interest! Please fill out the contact form to book a session.");
    });
}
// Handle contact form submission
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
            contactForm.reset();
        }
        else {
            alert("Please fill out all fields.");
        }
    });
}
