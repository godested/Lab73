import $ from "jquery";

const DomNodes = function () {
  this.list = {};

  this.getNodes = this.getNodes.bind(this);
};

DomNodes.prototype.getNodes = function () {
  this.list = {
    menuButton: $('.menu-button'),
    navigation: $('.navigation'),
    navigationList: $('.navigation__item'),
    leftButton: $('.option--partner'),
    rightButton: $('.option--ad'),
    anchors: $('.option__link'),
    macbook: $('.parallax__layer--macbook'),
    hero: $('.hero'),
    heroTitle: $('.hero__title'),
    heroDescription: $('.hero__description'),
    parallaxViewport: $('.parallax'),
    logo: $('.logo'),
    logoContainer: $('.header__inner'),
    loader: $('.loader'),
    header: $('.header'),
    heroKeywordBorder: $('.hero__keyword .border'),
    pageNavigation: $('.page-navigation'),
    pageNavigationLink: $('.page-navigation__inner'),
    parallaxLayers: $('.parallax__layer'),
    arrowDown: $('.arrow-down'),
    arrowDownLink: $('.arrow-down__link')
  };

  return this;
};


export default DomNodes;