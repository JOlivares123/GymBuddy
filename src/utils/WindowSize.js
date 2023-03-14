export const isMobile = () => {
  return window.innerWidth <= 480;
};

export const isTab = () => {
  return window.innerWidth >= 481 && window.innerWidth <= 768;
};

export const isDesktop = () => {
  return window.innerWidth >= 769;
};
