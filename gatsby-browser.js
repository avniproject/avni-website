export const onRouteUpdate = () => {
  const send = () => window.gtag && window.gtag('event', 'page_view');
  if ('requestIdleCallback' in window) {
    requestIdleCallback(send, { timeout: 2000 });
  } else {
    setTimeout(send, 2000);
  }
};
