import React from 'react'
import BodyLeftItem from './BodyLeftItem';

function BodyLeft() {
  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h1 className="panel-title">List Products</h1>
        </div>
        <div className="panel-body" id="list-product">
          <BodyLeftItem />
          <BodyLeftItem />
          <BodyLeftItem />
          <BodyLeftItem />
        </div>
      </div>
    </div>
  );
}

export default BodyLeft