import { Power1, TimelineMax } from "gsap";
import Parallax from "parallax-js";
import $ from "jquery";

const desktop = function () {
  const timeLine = new TimelineMax();

  const header = $('.header');
  const hero = $('.hero');
  const heroTitle = $('.hero__title');
  const heroDescription = $('.hero__description');
  const heroKeywordBorder = $('.hero__keyword .border');
  const pageNavigation = $('.page-navigation');
  const pageNavigationLink = $('.page-navigation__link');
  let parallax;
  const parallaxLayers = $('.parallax__layer');

  hero.css('min-height', function () {
    return window.innerHeight - header.outerHeight() - pageNavigation.outerHeight();
  });

  timeLine.to(header, 0.5, {y: 0, ease: Power1.easeIn})
    .add('headerTransitionEnd')
    .fromTo(heroTitle, 0.5, {y: 50}, {opacity: 1, y: 0}, 'headerTransitionEnd')
    .add('titleTransitionEnd')
    .fromTo(heroKeywordBorder, 0.5, {width: '0'}, {width: '98%'}, 'titleTransitionEnd')
    .fromTo(heroDescription, 0.5, {y: 50}, {opacity: 1, y: 0}, 'titleTransitionEnd')
    .staggerFromTo(parallaxLayers, 0.3, {scale: 0}, {scale: 1, opacity: 1}, 0.5, 'headerTransitionEnd')
    .add(function () {
      parallax = new Parallax(document.querySelector('.parallax'), {
        relativeInput: true
      });
    })
    .staggerFromTo(pageNavigationLink, 0.5, {y: 80}, {opacity: 1, y: 0}, 0.5);


  const menuButton = $('.menu-button');

  $(menuButton).click(function () {
    $(menuButton).toggleClass('is-active');
  });
};

export default desktop;