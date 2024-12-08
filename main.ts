// Add TypeScript functionality for the "Book a Session" button and contact form

// Add event listener for the "Book a Session" button
// const bookButton = document.getElementById("bookButton");
// if (bookButton) {
//     bookButton.addEventListener("click", () => {
//         alert("Thank you for your interest! Please fill out the contact form to book a session.");
//     });
// }

// // Handle contact form submission
// const contactForm = document.getElementById("contactForm") as HTMLFormElement;
// if (contactForm) {
//     contactForm.addEventListener("submit", (event: Event) => {
//         event.preventDefault();

//         const name = (document.getElementById("name") as HTMLInputElement).value;
//         const email = (document.getElementById("email") as HTMLInputElement).value;
//         const message = (document.getElementById("message") as HTMLTextAreaElement).value;

//         if (name && email && message) {
//             alert(`Thank you, ${name}! Your message has been sent.`);
//             contactForm.reset();
//         } else {
//             alert("Please fill out all fields.");
//         }
//     });
// }


const bookButton = document.getElementById("bookButton");
if (bookButton) {
    bookButton.addEventListener("click", () => {
        alert("Thank you for choosing World Pride Photography! Please contact us to book your session.");
    });
}

const contactForm = document.getElementById("contactForm") as HTMLFormElement;
if (contactForm) {
    contactForm.addEventListener("submit", (event: Event) => {
        event.preventDefault();

        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const message = (document.getElementById("message") as HTMLTextAreaElement).value;

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been received.`);
            contactForm.reset();
        } else {
            alert("Please complete all fields.");
        }
    });
}
