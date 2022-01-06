const hamburgerButton = document.querySelector(".hamburgerButton");
const hamburgerButton_lines = document.querySelectorAll(".hamburgerButton div");
const sliderMenu__main = document.querySelectorAll(".sliderMenu__main");

/**
 * Add and Remove a ClassName to DOMElement
 */
const classNameToggler = (
  targetElements: NodeListOf<Element>,
  classNames: string[]
) => {
  if (targetElements.length === classNames.length) {
    for (let i = 0; i < classNames.length; i++) {
      targetElements[i].classList.toggle(classNames[i]);
    }
  }
};

/**
 * Rotate hamburgerMenu Button Lines
 */
hamburgerButton?.addEventListener("click", () => {
  classNameToggler(hamburgerButton_lines, [
    "hamburgerButton-top",
    "hamburgerButton-mid",
    "hamburgerButton-bot",
  ]);
  showMenu();
});

/**
 * Show or Hide hamburger Menu
 */
const showMenu = () => {
  classNameToggler(sliderMenu__main, ["sliderMenu-show"]);
};
