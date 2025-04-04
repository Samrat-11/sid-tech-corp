/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== Contact form ===============*/
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        let fullName = document.getElementById("form-floating-1").value.trim();
        let email = document.getElementById("form-floating-2").value.trim();
        let subject = document.getElementById("form-floating-3").value.trim();
        let message = document.getElementById("form-floating-4").value.trim();

        // Check if all fields are filled
        if (fullName === "" || email === "" || subject === "" || message === "") {
            alert("Please fill all the fields.");
            return;
        }

        // Format the message for WhatsApp
        let whatsappMessage = `Hello, I have a query:\n\n Name: ${fullName}\n Email: ${email}\n Subject: ${subject}\n Message: ${message}`;

        // Your WhatsApp number (with country code, without + sign)
        let whatsappNumber = "8247634398"; // Change this to your WhatsApp number

        // Create the WhatsApp URL
        let whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        // Open WhatsApp chat
        window.open(whatsappURL, "_blank");
    });
});
