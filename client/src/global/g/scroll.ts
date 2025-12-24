const scroll = {
  getTop() {
    return window.scrollY || document.documentElement.scrollTop;
  },

  toTop(top = 0, smooth = false) {
    window.scrollTo({ left: 0, top, behavior: smooth ? 'smooth' : 'instant' });
  },
};

export default scroll;
