import $ from 'jquery';
import Desktop from './Desktop';
import Mobile from './Mobile'
import domNodesParser from "./domNodesParser";

$(document).ready(function () {
  const domNodes = domNodesParser();

  if (window.innerWidth > 768) {
    const desktop = new Desktop({
      domNodes: domNodes
    });

    desktop.render();
  } else {
    const mobile = new Mobile({
      domNodes: domNodes
    });

    mobile.render();
  }
});
