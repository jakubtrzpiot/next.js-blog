const toUrl = title => {
  return title
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .replaceAll(' ', '-');
};
