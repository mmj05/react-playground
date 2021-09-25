import React from 'react';
import './Split.css';

function Split(props) {
  return (
    <div 
      className={props.className}
      style={{ flex: props.flexBasis }}
    >
      {props.children}
    </div>
  );
}

export default Split;