import $ from "jquery";

const domNodesParser = function () {
  return  {
    menuButton: $('.menu-button'),
    navigation: $('.navigation'),
    navigationBackground: $('.navigation__background'),
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
    arrowDownLink: $('.arrow-down__link'),
    mobileMenuHeader: $('.mobile-menu-header'),
    mobileLogo: $('.mobile-menu-header__logo')
  };
};

export default domNodesParser;