import $ from 'jquery';
import Parallax from 'parallax-js';
import { TimelineMax, Power1 } from 'gsap';

$(document).ready(function () {
  const timeLine = new TimelineMax();

  const header = $('.header');
  const parallaxLayers = $('.parallax__layer');
  const keywordBorder = $('.hero__keyword .border');
  const pageNavigation = $('.page-navigation__link');
  let parallax;

  timeLine.fromTo(header, 1, {y: -100}, {y: 0, ease: Power1.easeIn})
    .add("headerTransitionEnd")
    .staggerFromTo(parallaxLayers, 0.5, {scale: 0}, {scale: 1}, 0.3, "headerTransitionEnd")
    .fromTo(keywordBorder, 0.5, {width: '0'}, {width: '98%'}, "headerTransitionEnd")
    .add(function () {
      parallax = new Parallax (document.querySelector('.parallax'), {
        relativeInput: true
      });
    })
    .staggerFromTo(pageNavigation, 0.5, {opacity: 0, y: 50}, {opacity: 1, y: 0}, 0.5);


  const menuButton = $('.menu-button');

  $(menuButton).click(function () {
    $(menuButton).toggleClass('is-active');
  });
});
