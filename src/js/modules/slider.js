export default class Slider {
  #page;
  #slides;
  #btn;
  #currentSlideIndex;
  
  constructor(pageSelector, btnSelector) {
    this.#page = document.querySelector(pageSelector);
    this.#slides = this.#page.children;
    this.#btn = document.querySelectorAll(btnSelector);
    this.#currentSlideIndex = 0;
  }

  #showSlides(next = false, slideId = this.#currentSlideIndex) {
    if (next) slideId += 1;
    if (slideId === this.#slides.length) slideId = 0;
    if (slideId < 0) this.#slides = this.#slides.length - 1;
    this.#currentSlideIndex = slideId;
    Array.from(this.#slides).forEach((i, idx) =>
      idx === slideId ? i.style.display = 'block' : i.style.display = 'none');
  };

  #navBtn() {
    this.#btn.forEach(btn =>
      btn.addEventListener('click', event => {
        event.preventDefault();
        this.#showSlides(true);
      })
    );
  }

  render(startWithSlide = 1) {
    this.#showSlides(false, startWithSlide - 1);
    this.#navBtn();
  }
}