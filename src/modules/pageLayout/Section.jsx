import React from 'react';
import classnames from 'classnames';

const Section = (props) => {
  const { className, head, children, ...sectionProps } = props;
  return (
    <div className={classnames('module-section', className)} {...sectionProps}>
      {props.head ? <div className="section_head">{head}</div> : []}
      <div className="section_body">{children}</div>
    </div>
  );
};

export default Section;
