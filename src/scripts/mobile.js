import $ from "jquery";

const mobile = function () {
  const header = $('.header');
  const hero = $('.hero');

  hero.css('min-height', function () {
    return window.innerHeight - header.outerHeight();
  });
};

export default mobile;