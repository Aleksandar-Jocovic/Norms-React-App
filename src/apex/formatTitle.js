export const formatTitle = (name) => {
  let nameArr = name.split('');
  if (nameArr.length > 16) {
    let shortName = nameArr.slice(0, 16).join('');
    return `${shortName}..`;
  }
  return name;
};
