import { TimelineMax, Power1 } from 'gsap';
import $ from 'jquery';
import { parallax } from '../onLoadAnimation';

const anchorAnimation = function () {
  const leftButton = $('.option--partner');
  const rightButton = $('.option--ad');
  const anchors = $('.option__link');
  const macbook = $('.parallax__layer--macbook');
  const heroTitle = $('.hero__title');
  const heroDescription = $('.hero__description');
  const parallaxViewport = $('.parallax');
  const menuButton = $('.menu-button');
  const logo = $('.logo');
  const logoContainer = $('.header__inner');

  const getCenterX = function (parentNode, childNode) {
    return ((parentNode.innerWidth() / 2) - (childNode.outerWidth() / 2));
  };

  const animateTransition = function (ev) {
    ev.preventDefault();

    parallax.disable();

    const timeLine = new TimelineMax();

    timeLine.to([heroTitle, menuButton], 2, {y: -1000}, 0)
      .to([parallaxViewport, heroDescription], 1 ,{opacity: 0, y: 100}, 0.1)
      .to(macbook, 1, {top: '-600', rotation: 60, ease: Power1.easeIn}, 0.2)
      .to(leftButton, 1, {y: -1000, x: -600, rotation: -60, ease: Power1.easeIn}, 0.3)
      .to(rightButton, 1, {y: -1000, x: 600, rotation: 60, ease: Power1.easeIn}, 0.4)
      .to(logo, 1, {x: getCenterX(logoContainer, logo)}, 0.5)
      .set([
        heroTitle,
        heroDescription,
        leftButton,
        rightButton,
        menuButton,
        parallaxViewport,
      ], {opacity: 0})
  };

  anchors.click(animateTransition);
};

export default anchorAnimation;