import React from "react";

const Item = props => (
  <div>
    <h1>A Thing I'v Done</h1>
    <p>This is item with the id of {props.match.params.id}</p>
  </div>
);

export default Item;
