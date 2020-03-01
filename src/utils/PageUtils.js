export const setIcon = icon => {
  if (icon) {
    const link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = icon;

    document.getElementsByTagName('head')[0].appendChild(link);
  }
};

export const setTitle = title => {
  if (title && typeof title === 'string') {
    document.title = title;
  }
};

export const initStript = ref => {
  if (!ref) return;

  if (typeof ref === 'string') {
    const script = document.createElement('script');
    script.async = true;
    script.src = ref;

    document.body.appendChild(script);
  } else if (ref instanceof Array) {
    ref.forEach(s => initStript(s));
  }
};
