import React from 'react';

function ImageFuntion(props){
  return(
    <div>
     <img
       src= {props.source}
       alt = 'mon-image'
      />
    </div>

  );
};
export default ImageFuntion;
