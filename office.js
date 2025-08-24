document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slides li");
    let index = 0;

    function showSlide(i) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[i].classList.add("active");
    }

    function nextSlide() {
        index = (index + 1) % slides.length;
        showSlide(index);
    }

    // Show the first slide initially
    showSlide(index);

    // Auto slide every 5 seconds
    setInterval(nextSlide, 5000);
});

// document.addEventListener("DOMContentLoaded", function () {
//     const tourCards = document.querySelectorAll(".tour-mig-like-com");

//     tourCards.forEach(card => {
//         const img = card.querySelector("img");

//         // Hover Effect: Reduce opacity on hover
//         card.addEventListener("mouseenter", function () {
//             img.style.transition = "opacity 0.5s ease";
//             img.style.opacity = "0.8";
//         });

//         card.addEventListener("mouseleave", function () {
//             img.style.opacity = "1";
//         });

//         // Create and Append Overlay Gradient
//         const overlay = document.createElement("div");
//         overlay.classList.add("tour-overlay");
//         card.appendChild(overlay);
//     });
// });
document.addEventListener("DOMContentLoaded", function () {
    // Selecting all tips boxes
    const tipsSections = document.querySelectorAll(".tips_left");

    // Loop through each tips box
    tipsSections.forEach((tip, index) => {
        tip.style.cursor = "pointer";

        // Adding hover effect dynamically
        tip.addEventListener("mouseover", function () {
            tip.style.transform = "scale(1.05)";
            tip.style.transition = "all 0.3s ease-in-out";
        });

        tip.addEventListener("mouseout", function () {
            tip.style.transform = "scale(1)";
        });

        // Dynamic Background Change on Click
        tip.addEventListener("click", function () {
            const colors = ["#ffefdb", "#e7f3ff", "#eaf8e5"];
            tip.style.backgroundColor = colors[index % colors.length];
        });
    });

    // Change Heading Color on Scroll
    const heading = document.querySelector(".tips h3");
    window.addEventListener("scroll", function () {
        let scrollY = window.scrollY;
        if (scrollY > 100) {
            heading.style.backgroundColor = "#ff5733";
        } else {
            heading.style.backgroundColor = "#2ea5d3";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Social Icons Hover Effect
    const socialIcons = document.querySelectorAll(".footer_social ul li a i");

    socialIcons.forEach(icon => {
        icon.addEventListener("mouseover", function () {
            icon.style.transform = "scale(1.2)";
            icon.style.transition = "all 0.3s ease-in-out";
        });

        icon.addEventListener("mouseout", function () {
            icon.style.transform = "scale(1)";
        });
    });

    // Subscribe Form Validation
    const subscribeForm = document.querySelector(".footer_sub");
    if (subscribeForm) {
        const emailInput = subscribeForm.querySelector("input[type='email']");
        const submitButton = subscribeForm.querySelector("input[type='submit']");

        submitButton.addEventListener("click", function (event) {
            event.preventDefault();
            const emailValue = emailInput.value.trim();

            if (emailValue === "" || !emailValue.includes("@")) {
                alert("⚠️ Please enter a valid email address!");
            } else {
                alert("✅ Thank you for subscribing!");
                emailInput.value = "";
            }
        });
    }

    // Footer Background Change on Scroll
    const footer = document.querySelector(".footer");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 500) {
            footer.style.backgroundColor = "#222"; // Dark gray
        } else {
            footer.style.backgroundColor = "#000"; // Black
        }
    });

    // Footer Social Iframe Activation on Click
    const iframe = document.querySelector(".footer_social iframe");
    if (iframe) {
        iframe.addEventListener("click", function () {
            this.classList.add("clicked");
        });
    }
});
// document.addEventListener("DOMContentLoaded", function() {
//     const menuToggle = document.getElementById("menu-toggle");
//     const menuContent = document.getElementById("menu-content");
//     const menuClose = document.getElementById("menu-close");
    
//     menuToggle.addEventListener("click", function(event) {
//         event.preventDefault();
//         menuContent.style.display = "block";
//     });
    
//     menuClose.addEventListener("click", function(event) {
//         event.preventDefault();
//         menuContent.style.display = "none";
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    let dropdown = document.querySelector(".dropdown");
    let dropdownContent = document.querySelector(".dropdown-content");

    dropdown.addEventListener("mouseover", function() {
        dropdownContent.style.display = "block";
        setTimeout(() => {
            dropdownContent.style.opacity = "1";
            dropdownContent.style.transform = "translateY(0)";
        }, 10);
    });

    dropdown.addEventListener("mouseleave", function() {
        dropdownContent.style.opacity = "0";
        dropdownContent.style.transform = "translateY(10px)";
        setTimeout(() => {
            dropdownContent.style.display = "none";
        }, 300);
    });
});
