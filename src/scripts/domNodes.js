import $ from "jquery";

const domNodes = function () {
  return {
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
    pageNavigationLink: $('.page-navigation__inner'),
    parallaxLayers: $('.parallax__layer'),
  }
};


export default domNodes;