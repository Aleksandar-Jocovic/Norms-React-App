export const search = (el, searchStr) => {
  let mached = [];
  el.forEach((item) => {
    if (item.name.includes(searchStr) && searchStr !== '') {
      mached.push(item);
    }
  });
  return mached;
};
