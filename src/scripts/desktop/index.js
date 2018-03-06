import onLoadAnimation from '../onLoadAnimation';
import menuAnimation from './menuAnimation';
import anchorAnimation from "./anchorAnimation";

const desktop = function () {
  onLoadAnimation();
  menuAnimation();
  anchorAnimation();
};

export default desktop;