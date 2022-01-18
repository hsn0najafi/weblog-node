/**
 * Add and Remove [ClassList] to [classes]
 * @param eventHandler        Starts The Operation
 * @param classes             Host of The Operation
 * @param togglableClasses    Addables and Removables
 */
function classNameToggler(
  eventHandlers: string[],
  classes: string[],
  togglableClasses: string[]
): void {
  // Toggle Classes
  function toggle() {
    for (var b = 0; b < classes.length; b++) {
      document
        .querySelector("." + classes[b])!
        .classList.toggle(togglableClasses[b]);
    }
  }

  // Main
  if (togglableClasses.length === classes.length) {
    for (var a = 0; a < eventHandlers.length; a++) {
      var targetEl = document.querySelector("." + eventHandlers[a])!;
      targetEl!.addEventListener("click", function () {
        toggle();
      });
    }
  } else {
    throw new Error("Hey, ClassNames List Should be Equal");
  }
}

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

/**
 * Hidden Menu
 */
classNameToggler(
  ["hamburgerButton"],
  ["sliderMenu__main"],
  ["sliderMenu-show"]
);
