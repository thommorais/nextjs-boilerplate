import React from 'react';
import PropTypes from 'prop-types';
import { IconBase } from './IconBase';

function Arrow({ side, ...restProps }) {
  const paths = {
    right: 'M13.643 16.471l-12.391-12.391 1.886-1.886 14.276 14.276-14.276 14.276-1.886-1.886z',
  };

  return (
    <IconBase viewBox="0 0 19 32" {...restProps}>
      <path d={paths[side]} />
    </IconBase>
  );
}

Arrow.propTypes = {
  side: PropTypes.string,
};

Arrow.defaultProps = {
  side: 'right',
};

export { Arrow };
