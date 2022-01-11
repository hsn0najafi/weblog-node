/**
 * Add and Remove [ClassList] to [classes]
 * @param eventHandler        Starts The Operation
 * @param classes             Host of The Operation
 * @param togglableClasses    Addables and Removables
 */
const classNameToggler = (
  eventHandlers: string[],
  classes: string[],
  togglableClasses: string[]
): void => {
  const main = () => {
    // Select Els
    for (let a = 0; a < eventHandlers.length; a++) {
      const targetEl = document.querySelector("." + eventHandlers[a])!;
      addEventListener(targetEl);
    }
  };

  // EventListner for Els
  const addEventListener = (targetEl: Element) => {
    targetEl!.addEventListener("click", () => {
      toggle();
    });
  };

  // Toggle Classes
  const toggle = () => {
    for (let b = 0; b < classes.length; b++) {
      document
        .querySelector("." + classes[b])!
        .classList.toggle(togglableClasses[b]);
    }
  };

  // Classes Length Should be Equal
  if (togglableClasses.length === classes.length) main();
};

/**
 * Hamburger Menu
 */
classNameToggler(
  ["hamburgerButton"],
  ["hamLine01", "hamLine02", "hamLine03"],
  ["hamburgerButton-top", "hamburgerButton-mid", "hamburgerButton-bot"]
);

/**
 * UserProfile PopUp
 */
classNameToggler(
  ["userPicture"],
  ["userProfile-popup__hidden"],
  ["userProfile-popup__hidden__show"]
);
