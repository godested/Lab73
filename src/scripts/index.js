import $ from 'jquery';
import desktop from './desktop';

$(document).ready(function () {
  if(window.innerWidth >= 768) {
    desktop();
  }
});
