const hamburgerButton = document.querySelector(".hamburgerButton");
const hamburgerButton_lines = document.querySelectorAll(".hamburgerButton div");

/**
 * Add and Remove a ClassName to DOMElement
 */
const classNameToggler = (
  targetElements: NodeListOf<Element>,
  classNames: string[]
) => {
  console.log(targetElements);
  console.log(classNames);
};
