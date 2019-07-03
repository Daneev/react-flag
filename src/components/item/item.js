import React from 'react';
import './item.css'

export const Item = (props) => {
  const { flag, name, population} = props;
  return (
    <React.Fragment>
    <div className="col-auto text-center align-self-center">
        <img className="d-sm-flex d-md-flex" src={flag} alt=''/>
      </div>
      <div className="col text-center align-self-center my-auto">
        <p>{name}</p>
      </div>
      <div className="col text-center align-self-center my-auto">
        <p className="text-center">{population}</p>
        <p className="text-center">population</p>
      </div>
    </React.Fragment>
  );
}
