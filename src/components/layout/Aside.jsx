import React from 'react';

const Aside = (props) => {
  return (
    <div className={["btb-layout-aside", props.className].join(' ')}>
      <div className="btb-vue-list aside_menu">
        <div className="container_entry">About</div>
        <div className="container_entry">Home v1</div>
      </div>
    </div>
  );
};

export default Aside;