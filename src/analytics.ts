export const trackPageView = (path: string) => {
  if (window.gtag) {
    window.gtag('config', 'G-WDYZL10G97', {
      page_path: path,
    });
  }
};
