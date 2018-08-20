import PropTypes from 'prop-types';
import React from 'react';
import getHref from './getHref';

const Item = ({ data }) => {
  const href = getHref(data);
  return (
    <li className="header__list-item">
      {href ? <a href={href}>{data}</a> : data}
    </li>
  );
};

Item.propTypes = {
  data: PropTypes.string.isRequired
};

export default Item;
