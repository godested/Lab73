import { Power1, TimelineMax } from "gsap";
import Parallax from "parallax-js";
import $ from "jquery";

const desktop = function () {
  const timeLine = new TimelineMax();

  const header = $('.header');
  const logo = $('.logo');
  const menuButton = $('.menu-button');
  const hero = $('.hero');
  const heroTitle = $('.hero__title');
  const heroDescription = $('.hero__description');
  const heroKeywordBorder = $('.hero__keyword .border');
  const pageNavigation = $('.page-navigation');
  const pageNavigationLink = $('.page-navigation__link');
  let parallax;
  const parallaxLayers = $('.parallax__layer');
  const navigation = $('.navigation');
  const navigationList = $('.navigation__item');

  hero.css('min-height', function () {
    return window.innerHeight - header.outerHeight() - pageNavigation.outerHeight();
  });

  timeLine.staggerTo([logo, menuButton], 0.5, {y: 0, ease: Power1.easeIn}, 0.5)
    .add('headerTransitionEnd')
    .fromTo(heroTitle, 0.5, {y: 50}, {opacity: 1, y: 0}, 'headerTransitionEnd')
    .add('titleTransitionEnd')
    .fromTo(heroKeywordBorder, 0.5, {width: '0'}, {width: '98%'}, 'titleTransitionEnd')
    .fromTo(heroDescription, 0.5, {y: 50}, {opacity: 1, y: 0}, 'titleTransitionEnd')
    .staggerFromTo(parallaxLayers, 0.3, {scale: 0}, {scale: 1, opacity: 1}, 0.5, 'headerTransitionEnd')
    .call(function () {
      parallax = new Parallax(document.querySelector('.parallax'), {
        relativeInput: true
      });
    })
    .staggerFromTo(pageNavigationLink, 0.5, {y: 80}, {opacity: 1, y: 0}, 0.5);

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

export default desktop;