import $ from 'jquery';
import Desktop from './Desktop';
import Mobile from './Mobile'
import domNodesParser from "./domNodesParser";
import animationConfig from "./animationConfig";

$(document).ready(function () {
  const domNodes = domNodesParser();
  const options = {
    domNodes: domNodes,
    animationConfig: animationConfig
  };

  if (window.innerWidth > 768) {
    const desktop = new Desktop(options);

    desktop.render();
  } else {
    const mobile = new Mobile(options);

    mobile.render();
  }
});
