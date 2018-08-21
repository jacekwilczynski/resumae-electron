import * as React from 'react';
import getHref from './getHref';

interface ItemProps {
  data: string;
}

const Item: React.StatelessComponent<ItemProps> = ({ data }) => {
  const href = getHref(data);
  return (
    <li className="header__list-item">
      {href ? <a href={href}>{data}</a> : data}
    </li>
  );
};

export default Item;
