import { Power1, TimelineLite } from 'gsap';
import $ from "jquery";
import Parallax from "parallax-js";

const Desktop = function (options = {}) {
  this.menuIsOpen = false;
  this.domNodes = options.domNodes;
  this.animationConfig = options.animationConfig;

  this.animateWindow = this.animateWindow.bind(this);
  this.animateAnchorTransition = this.animateAnchorTransition.bind(this);
  this.toggleMenu = this.toggleMenu.bind(this);
  this.createParallax = this.createParallax.bind(this);
  this.delegateEvents = this.delegateEvents.bind(this);
  this.render = this.render.bind(this);
};

Desktop.prototype.animateWindow = function () {
  const {
    loader,
    header,
    heroTitle,
    heroDescription,
    parallaxLayers,
    pageNavigationLink,
    heroKeywordBorder
  } = this.domNodes;

  let {createParallax} = this;
  const animationConfig = this.animationConfig.onLoad;
  const timeLine = new TimelineLite();

  timeLine.set([
    heroTitle,
    heroDescription,
    parallaxLayers,
    pageNavigationLink
  ], {opacity: 0})
    .to(loader, animationConfig.duration, {opacity: 0}, 0.3)
    .set(loader, {display: "none"})
    .fromTo(header, animationConfig.duration , {y: -100}, {y: 0, ease: Power1.easeIn}, animationConfig.duration)
    .add('headerTransitionEnd')
    .fromTo(heroTitle, animationConfig.duration, {y: 50}, {opacity: 1, y: 0}, 'headerTransitionEnd')
    .add('titleTransitionEnd')
    .fromTo(heroKeywordBorder, animationConfig.duration, {width: 0}, {width: '98%'}, 'titleTransitionEnd')
    .fromTo(heroDescription, animationConfig.duration, {y: 50}, {opacity: 1, y: 0}, 'titleTransitionEnd')
    .staggerFromTo(parallaxLayers, animationConfig.duration, {scale: 0.5}, {scale: 1, opacity: 1}, animationConfig.duration, 'headerTransitionEnd')
    .call(createParallax)
    .staggerFromTo(pageNavigationLink, animationConfig.duration, {top: "50px"}, {opacity: 1, top: 0}, animationConfig.duration)
    .call(function () {
      pageNavigationLink.removeAttr('style');
    });

  return this;
};

Desktop.prototype.toggleMenu = function () {
  const {navigation, navigationList} = this.domNodes;
  const animationConfig = this.animationConfig.menu;
  const timeLine = new TimelineLite();

  if (!this.menuIsOpen) {
    timeLine.set(navigation, {display: 'block'})
      .fromTo(navigation, animationConfig.duration, {opacity: 0}, {opacity: 1})
      .to(navigation, animationConfig.duration, {backgroundPositionX: 0})
      .staggerFromTo(navigationList, 0.5, {
        x: -50,
        opacity: 0
      }, {
        x: 0,
        opacity: 1
      }, 0.5);
  } else {
    timeLine.fromTo(navigation, animationConfig.duration, {opacity: 1}, {opacity: 0})
      .set(navigation, {
        display: 'none',
        backgroundPositionX: '-100%'
      })
      .set(navigationList, {
        x: -50,
        opacity: 0
      });
  }
  this.menuIsOpen = !this.menuIsOpen;

  return this;
};

Desktop.prototype.animateAnchorTransition = function (ev) {
  ev.preventDefault();

  const getCenterX = function (parentNode, childNode) {
    return ((parentNode.innerWidth() / 2) - (childNode.outerWidth() / 2));
  };

  const animationConfig = this.animationConfig.anchorTransition;

  const timeLine = new TimelineMax();

  const {
    heroTitle,
    menuButton,
    parallaxViewport,
    heroDescription,
    macbook,
    leftButton,
    rightButton,
    logo,
    logoContainer
  } = this.domNodes;

  this.parallax.disable();

  timeLine.to([heroTitle, menuButton], animationConfig.duration, {y: -1000})
    .to(macbook, animationConfig.duration, {top: '-800', rotation: 60, ease: Power1.easeIn}, animationConfig.pause)
    .to([parallaxViewport, heroDescription], animationConfig.duration, {opacity: 0, y: 100}, animationConfig.pause)
    .to(leftButton, animationConfig.duration, {y: -1000, x: -600, rotation: -60, ease: Power1.easeIn}, animationConfig.pause)
    .to(rightButton, animationConfig.duration, {y: -1000, x: 600, rotation: 60, ease: Power1.easeIn}, animationConfig.pause)
    .to(logo, animationConfig.duration, {x: getCenterX(logoContainer, logo)}, animationConfig.pause)
    .set([
      heroTitle,
      heroDescription,
      leftButton,
      rightButton,
      menuButton,
      parallaxViewport,
    ], {opacity: 0});

  return this;
};

Desktop.prototype.createParallax = function () {
  this.parallax = new Parallax(document.querySelector('.parallax'), {
    relativeInput: true
  });
};


Desktop.prototype.delegateEvents = function () {
  const {menuButton, anchors} = this.domNodes;
  const {toggleMenu, animateAnchorTransition} = this;

  $(menuButton).click(function () {
    $(this).toggleClass('is-active');
    toggleMenu();
  });

  $(anchors).click(animateAnchorTransition);

  return this;
};

Desktop.prototype.render = function () {
  this.animateWindow().delegateEvents();

  return this;
};

export default Desktop;