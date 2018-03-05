import { Power1, TimelineMax } from 'gsap';
import Parallax from 'parallax-js';
import $ from 'jquery';

const onLoadAnimation = function () {
  const timeLine = new TimelineMax();

  const loader = $('.loader');
  const header = $('.header');
  const heroTitle = $('.hero__title');
  const heroDescription = $('.hero__description');
  const heroKeywordBorder = $('.hero__keyword .border');
  const pageNavigationLink = $('.page-navigation__link');
  let parallax;
  const parallaxLayers = $('.parallax__layer');

  timeLine.to(loader, 0.5, {opacity: 0}, 0.3)
    .set(loader, {display: "none"})
    .fromTo(header, 0.5, {y: -100}, {y: 0, ease: Power1.easeIn}, 0.5)
    .add('headerTransitionEnd')
    .fromTo(heroTitle, 0.5, {opacity: 0, y: 50}, {opacity: 1, y: 0}, 'headerTransitionEnd')
    .add('titleTransitionEnd')
    .fromTo(heroKeywordBorder, 0.5, {width: 0}, {width: '98%'}, 'titleTransitionEnd')
    .fromTo(heroDescription, 0.5, {opacity: 0, y: 50}, {opacity: 1, y: 0}, 'titleTransitionEnd')
    .staggerFromTo(parallaxLayers, 0.3, {opacity: 0, scale: 0.5}, {scale: 1, opacity: 1}, 0.5, 'headerTransitionEnd')
    .call(function () {
      parallax = new Parallax(document.querySelector('.parallax'), {
        relativeInput: true
      });
    })
    .staggerFromTo(pageNavigationLink, 0.5, {opacity: 0, y: 80}, {opacity: 1, y: 0}, 0.5);
};

export default onLoadAnimation;