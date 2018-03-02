import $ from 'jquery';
import { TimelineLite, Power1 } from 'gsap';

$(document).ready(function () {
  const timeLine = new TimelineLite();

  const menuButton = $('.menu-button');

  $(menuButton).click(function () {
    $(menuButton).toggleClass('is-active');
  });
});
