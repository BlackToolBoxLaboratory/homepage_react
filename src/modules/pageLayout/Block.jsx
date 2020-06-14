import React from 'react';

const Block = (props) => {
  return (
    <div className="module-block">
      {
        (props.title)?
          (
            <div className="block_title">
              {props.title}
            </div>
          ) : []
      }
      <div className="block_body">
        {props.children}
      </div>
    </div>
  );
};

export default Block;