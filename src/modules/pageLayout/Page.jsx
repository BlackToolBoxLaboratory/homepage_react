import React from 'react';

const Page = (props) => {
  return (
    <div className={['module-page', props.className].join(' ')}>
      { props.children }
    </div>
  );
};

export default Page;