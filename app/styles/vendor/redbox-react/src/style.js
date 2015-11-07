'use strict';

exports.__esModule = true;
exports['default'] = {
  redbox: {
    boxSizing: 'border-box',
    fontFamily: '"Fira Mono", sans-serif',
    position: 'absolute',
    background: 'rgba(0, 0, 0, .2)',
    padding: '3rem',
    left:  '0',
    right: '0',
    top: '0',
    bototm: '0',
    zIndex: 9999,
    textAlign: 'left',
    fontSize: '16px',
    lineHeight: 1.5,
    overflow: 'auto',
    textRendering: 'optimizeLegibility'
  },
  message: {
    color: 'rgba(255, 255, 255, .93)',
    position: 'relative',
    background: 'rgba(0, 0, 0, .5)',
    borderBottom: '1px solid rgba(0, 0, 0, .2)',
    margin: '-3rem -3rem 0',
    padding: '3rem 3rem 2rem',
    fontWeight: '200',
    textRendering: 'optimizeLegibility',
    fontSize: '20px',
    letterSpacing: '.5px',
    textShadow: '0px .2rem 0  rgba(0, 0, 0, .5)'
  },
  stack: {
    marginTop: '3rem',
  },
  frame: {
    marginTop: '2em',
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
    wordBreak: 'break-word',
    hyphens: 'auto',
    fontSize: '16px',
    letterSpacing: '.5px',
    color: 'rgba(0, 0, 0, 0.7)'
  },
  file: {
    fontSize: '12px'
  },
  linkToFile: {
    textDecoration: 'none',
    color: 'rgba(0, 0, 0, 0.5)'
  }
};
module.exports = exports['default'];