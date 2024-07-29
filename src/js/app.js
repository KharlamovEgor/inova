import Glide from "@glidejs/glide";

const glide = new Glide(".glide", {
  perView: 1,
  dragThreshold: 0,
}).mount();

const controls = document.querySelectorAll(".service__variants");

controls.forEach((control) => {
  Array.from(control.children).forEach((variant, index) => {
    variant.addEventListener("click", () => {
      glide.go(`=${index}`);
    });
  });
});

const logosObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__animated", "animate__fadeInDown");
      }
    });
  },
  {
    rootMargin: "0px",
    threshold: 1.0,
  },
);

const logos = document.querySelectorAll(".success-logos__line img");

logos.forEach((logo) => logosObserver.observe(logo));

const phones = document.querySelector(".experience__image");

const phonesObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(phones);
      entry.target.classList.add("animate__animated", "animate__fadeInDown");
    }
  });
});

phonesObserver.observe(phones);

const family = document.querySelector(".results__card img");

const familyObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(phones);
      entry.target.classList.add("animate__animated", "animate__fadeInRight");
    }
  });
});

familyObserver.observe(family);

const experience = document.querySelectorAll(".experience__card");

const experienceObserverFirst = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(phones);
      entry.target.classList.add("animate__animated", "animate__fadeInLeft");
    }
  });
});

experienceObserverFirst.observe(experience[1]);
experienceObserverFirst.observe(experience[0]);

const experienceObserverSecond = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(phones);
      entry.target.classList.add("animate__animated", "animate__fadeInRight");
    }
  });
});

experienceObserverSecond.observe(experience[2]);
experienceObserverSecond.observe(experience[3]);
