import PropTypes from 'prop-types';
import React from 'react';
import Item from './header/Item';

const Header = ({ caption, list }) => (
  <div className="header">
    <h1 className="header__caption">{caption}</h1>
    <div className="header__list">
      {list.map(item => (
        <Item key={item} data={item} />
      ))}
    </div>
  </div>
);

Header.propTypes = {
  caption: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string)
};

export default Header;
