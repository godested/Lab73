import $ from 'jquery';
import Desktop from './Desktop';

$(document).ready(function () {
  if(window.innerWidth > 768) {
    const desktop = new Desktop();
    desktop.render();
  } else {
  }
});
