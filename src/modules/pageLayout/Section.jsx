import React from 'react';

const Section = (props) => {
  return (
    <div className={['module-section', props.className].join(' ')}>
      {props.head ? <div className="section_head">{props.head}</div> : []}
      <div className="section_body">{props.children}</div>
    </div>
  );
};

export default Section;
