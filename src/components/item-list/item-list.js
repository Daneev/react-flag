import React from 'react';
import { Item } from '../item/item'
import './item-list.css'

export const ItemList = (props) => {
  const elements = props.visibleList.map((item) => {
    const {id, ...itemProps} = item;
  return (
    <li key={id} className="list-group-item shadow d-flex flex-column flex-sm-row">
      <Item {...itemProps}/>
    </li>
  )});
  return <ul className="list-group">{elements}</ul>;
}