export default {
  '.scrollbar-hide': {
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  '.scrollbar-default': {
    '-ms-overflow-style': 'auto',
    'scrollbar-width': 'auto',
    '&::-webkit-scrollbar': {
      display: 'block',
    },
  },
};
