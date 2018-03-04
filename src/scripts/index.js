import $ from 'jquery';
import desktop from './desktop';
import mobile from './mobile';

$(document).ready(function () {
  if(window.innerWidth > 768) {
    desktop();
  } else {
    mobile();
  }
});
