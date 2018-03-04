import { TimelineMax } from "gsap";
import $ from "jquery";

const menuAnimation = function () {
  const menuButton = $('.menu-button');
  const navigation = $('.navigation');
  const navigationList = $('.navigation__item');

  let menuIsOpen = false;

  const toggleMenu = function () {
    const tl = new TimelineMax();

    if (!menuIsOpen) {
      tl.to(navigation, 0.5, {left: 0})
        .fromTo(navigation, 0.5, {backgroundPositionX: "-120%", opacity: 1}, {backgroundPositionX: 0})
        .staggerFromTo(navigationList, 0.5, {x: -50, opacity: 0}, {x: 0, opacity: 1}, 0.5, "backgroundTransitionEnd");
    } else {
      tl.fromTo(navigation, 0.5, {opacity: 1}, {opacity: 0})
        .set(navigation, {left: "-100%"}, "+=0.5")
    }

    menuIsOpen = !menuIsOpen;
  };

  $(menuButton).click(function () {
    $(this).toggleClass('is-active');
    toggleMenu();
  });

};

export default menuAnimation;