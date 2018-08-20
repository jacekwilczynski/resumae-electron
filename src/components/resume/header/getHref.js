const isEmail = str => str.includes('@');

const isPhoneNo = str => str.match(/^[0-9+()\s]+$/);

const cleanPhoneNo = str => str.replace(/[\s.()]/g, '');

const getHref = str => {
  if (isEmail(str)) {
    return `mailto:${str}`;
  }
  if (isPhoneNo(str)) {
    return `tel:${cleanPhoneNo(str)}`;
  }
  return null;
};

export default getHref;
