var smartgrid = require('smart-grid');

var settings = {
  outputStyle: 'scss', /* less || scss || sass || styl */
  columns: 14, /* number of grid columns */
  offset: '30px', /* gutter width px || % */
  mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
  container: {
    maxWidth: '1400px', /* max-width оn very large screen */
    fields: '15px' /* side fields */
  },
  breakPoints: {
    lg: {
      width: '1440px'
    },
    md: {
      width: '1024px'
    },
    sm: {
      width: '780px',
      fields: '15px'
    },
    xs: {
      width: '560px'
    }
  }
};

smartgrid('./src/styles', settings);