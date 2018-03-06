import $ from 'jquery';
import { Power1, TimelineLite } from 'gsap';

const Mobile = function (options = {}) {
  this.menuIsOpen = false;
  this.domNodes = options.domNodes;
  this.animationConfig = options.animationConfig;
  this.scrollPos = 0;

  this.setHeroSizes = this.setHeroSizes.bind(this);
  this.animateWindow = this.animateWindow.bind(this);
  this.toggleMenu = this.toggleMenu.bind(this);
  this.delegateEvents = this.delegateEvents.bind(this);
  this.animateAnchorTransition = this.animateAnchorTransition.bind(this);
  this.render = this.render.bind(this);
};

Mobile.prototype.setHeroSizes = function () {
  const {hero, header} = this.domNodes;

  hero.find($('.row')).css('min-height', function () {
    return window.innerHeight - header.innerHeight();
  });

  return this
};

Mobile.prototype.animateWindow = function () {
  const {
    loader,
    header,
    heroTitle,
    heroDescription,
    parallaxLayers,
    heroKeywordBorder,
    arrowDown
  } = this.domNodes;

  const timeLine = new TimelineLite();

  const {duration} = this.animationConfig.onLoad;

  timeLine.set([
    heroTitle,
    heroDescription,
    parallaxLayers,
  ], {opacity: 0})
    .to(loader, duration, {opacity: 0}, 0.3)
    .set(loader, {display: 'none'})
    .fromTo(header, duration, {y: -100}, {y: 0, ease: Power1.easeIn}, 0.5)
    .add('headerTransitionEnd')
    .fromTo(heroTitle, duration, {y: 50}, {opacity: 1, y: 0}, 'headerTransitionEnd')
    .add('titleTransitionEnd')
    .fromTo(heroKeywordBorder, duration, {width: 0}, {width: '98%'}, 'titleTransitionEnd')
    .fromTo(heroDescription, duration, {y: 50}, {opacity: 1, y: 0}, 'titleTransitionEnd')
    .staggerFromTo(parallaxLayers, 0.3, {scale: 0.5}, {scale: 1, opacity: 1}, 0.5, 'headerTransitionEnd')
    .fromTo(arrowDown, duration, {opacity: 0}, {opacity: 1});

  return this;
};

Mobile.prototype.toggleMenu = function () {
  const {
    navigation,
    navigationList,
    mobileMenuHeader,
    logo,
  } = this.domNodes;

  const {duration} = this.animationConfig.onLoad;

  const timeLine = new TimelineLite();

  if (!this.menuIsOpen) {
    timeLine.set(navigation, {display: 'block'})
      .set(mobileMenuHeader, {opacity: 1})
      .to(logo, duration, {opacity: 0})
      .to(mobileMenuHeader, duration, {marginTop: 0}, '+=0')
      .fromTo(navigation, duration, {opacity: 0}, {opacity: 1})
      .staggerFromTo(navigationList, duration, {opacity: 0}, {opacity: 1}, 0.5);
  } else {
    timeLine.fromTo(navigation, duration, {opacity: 1}, {opacity: 0})
      .to(mobileMenuHeader, duration, {opacity: 0}, '+=0')
      .to(logo, duration, {opacity: 1}, '+=0')
      .set(navigation, {display: 'none',})
      .set(mobileMenuHeader, {marginTop: '-100px'})
      .set(navigationList, {opacity: 0});
  }
  this.menuIsOpen = !this.menuIsOpen;

  return this;
};

Mobile.prototype.animateAnchorTransition = function (ev) {
  ev.preventDefault();

  const {pageNavigation} = this.domNodes;

  let st = $(window).scrollTop();

  if (st > this.scrollPos || ev.type === 'click'){
    $('html, body').animate({
      scrollTop: $(pageNavigation).offset().top
    }, 1000);

    $(window).off('scroll');
  }
  this.scrollPos = st;

  return this;
};

Mobile.prototype.delegateEvents = function () {
  const {menuButton, arrowDownLink} = this.domNodes;
  const {toggleMenu, animateAnchorTransition} = this;

  $(menuButton).click(function () {
    $(this).toggleClass('is-active');
    toggleMenu();
  });

  $(arrowDownLink).click(animateAnchorTransition);
  $(window).scroll(animateAnchorTransition);

  return this;
};

Mobile.prototype.render = function () {
  this.setHeroSizes().animateWindow().delegateEvents();
};

export default Mobile;