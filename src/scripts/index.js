import $ from 'jquery';
import Desktop from './Desktop';
import Mobile from './Mobile'
import DomNodes from "./DomNodes";

$(document).ready(function () {
  const domNodes = new DomNodes().getNodes().list;

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
