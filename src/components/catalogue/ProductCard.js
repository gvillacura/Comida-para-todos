import React from "react";
import { Icon } from "@iconify/react";
import plusIcon from "@iconify/icons-feather/plus";

import "./productList.css";

const ProductCard = (props) => {
  return (
    <div className="item">
      <img src={props.img} alt={props.name} />
      <h6>{props.price}</h6>
      <h5>{props.name}</h5>
      <p>{props.producer}</p>
      <div>
        <button type="button" onClick={props.open}>
          <Icon icon={plusIcon} />
        </button>
        <p>Ver datos</p>
      </div>
    </div>
  );
};

export default ProductCard;
