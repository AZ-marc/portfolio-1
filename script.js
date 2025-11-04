// script.js
    // Hamburger toggle
    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav");
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });

    // Header réduit au scroll
    window.addEventListener("scroll", () => {
      const header = document.querySelector("header");
      const scrollY = window.scrollY;
      if(scrollY > 50){
        header.style.padding = "10px 10px";
        header.querySelector("h1").style.fontSize = "18px";
        header.querySelector("p").style.fontSize = "10px";
      } else {
        header.style.padding = "20px 10px";
        header.querySelector("h1").style.fontSize = "24px";
        header.querySelector("p").style.fontSize = "14px";
      }
    });

    // Animation des sections
    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", () => {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const trigger = window.innerHeight - 100;
        if(sectionTop < trigger){
          section.style.opacity = "1";
          section.style.transform = "translateY(0)";
        }
      });
    });

