const menuOpenBtn = document.querySelector(".toggle_menu-btn");
const menuCloseBtn = document.querySelector(".toggle_menu-close");
const menuContainer = document.querySelector(".toggle_menu-container");
const overlay = document.querySelector(".overlay");

menuOpenBtn.addEventListener("click", () => {
  overlay.style.setProperty("display", "block");
  menuContainer.classList.add("open");
});

const closeMenu = () => {
  overlay.style.setProperty("display", "none");
  menuContainer.classList.remove("open");
};
menuCloseBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

// =================FAQS
const faqs = document.querySelectorAll(".faq");
const viewMoreBtn = document.querySelector(".viewMoreBtn");
const viewLessBtn = document.querySelector(".viewLessBtn");
const otherFaqs = document.querySelector(".faq-others");

viewMoreBtn.addEventListener("click", () => {
  otherFaqs.style.display = "flex";
  viewMoreBtn.style.display = "none";
  viewLessBtn.style.display = "block";
});
viewLessBtn.addEventListener("click", () => {
  otherFaqs.style.display = "none";
  viewLessBtn.style.display = "none";
  viewMoreBtn.style.display = "block";

});

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
      
      for (let faq of faqs) {
          const faqAns = faq.querySelector(".faq-answer");
          faqAns.classList.add("hide");
          faq.querySelector('.faq-question i').classList.remove('ri-subtract-line')
          faq.querySelector('.faq-question i').classList.add('ri-add-line')
        }
        
    const icon=faq.querySelector('.faq-question i')
    icon.classList.remove('ri-add-line')
    icon.classList.add('ri-subtract-line')

    const faqAns = faq.querySelector(".faq-answer");
    faqAns.classList.toggle("hide");
  });
});

// =======================FAQ SECTION
// const faqs=document.querySelectorAll
