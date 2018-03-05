import { TimelineMax } from 'gsap';
import $ from 'jquery';

const menuAnimation = function () {
  const timeLine = new TimelineMax();
  const menuButton = $('.menu-button');
  const navigation = $('.navigation');
  const navigationList = $('.navigation__item');

  let menuIsOpen = false;

  const toggleMenu = function () {

    if (!menuIsOpen) {
      timeLine.to(navigation, 0.5, {width: '100%'})
        .set(navigation, {backgroundSize: 'auto 100%'})
        .to(navigation, 0.5, {backgroundPositionX: 0})
        .staggerFromTo(navigationList, 0.5, {
          x: -50,
          opacity: 0
        }, {
          x: 0,
          opacity: 1
        }, 0.5);
    } else {
      timeLine.fromTo(navigation, 0.5, {opacity: 1}, {opacity: 0})
        .set(navigation, {
          width: 0,
          opacity: 1,
          backgroundSize: 'auto 0',
          backgroundPositionX: '-100%'
        })
        .set(navigationList, {
          x: -50,
          opacity: 0
        });
    }

    menuIsOpen = !menuIsOpen;
  };

  $(menuButton).click(function () {
    $(this).toggleClass('is-active');
    toggleMenu();
  });

};

export default menuAnimation;