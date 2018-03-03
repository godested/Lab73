const smartgrid = require('smart-grid');

const settings = {
  outputStyle: 'scss',
  columns: 14,
  offset: '30px',
  mobileFirst: false,
  container: {
    maxWidth: '1400px',
    fields: '15px'
  },
  breakPoints: {
    lg: {
      width: '1280px'
    },
    md: {
      width: '1024px'
    },
    sm: {
      width: '768px',
      fields: '15px'
    },
    xs: {
      width: '480px'
    }
  }
};

smartgrid('./src/styles', settings);