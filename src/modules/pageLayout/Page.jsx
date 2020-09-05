import React from 'react';
import classnames from 'classnames';

const Page = (props) => {
  const { className, children, ...pageProps } = props;
  return (
    <div className={classnames('module-page', className)} {...pageProps}>
      {children}
    </div>
  );
};

export default Page;
