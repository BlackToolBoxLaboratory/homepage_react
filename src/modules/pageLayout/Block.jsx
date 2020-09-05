import React from 'react';
import classnames from 'classnames';

const Block = (props) => {
  const { title, children, className, ...blockProps } = props;
  return (
    <div className={classnames('module-block', className)} {...blockProps}>
      {title ? <div className="block_title">{title}</div> : []}
      <div className="block_body">{children}</div>
    </div>
  );
};

export default Block;
