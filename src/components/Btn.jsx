import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

const Btn = ({
  id,
  icon,
  type,
  text,
  onClick,
}) => (
  <Button
    type={type}
    icon={icon}
    onClick={() => onClick(id)}
  >
    {text}
  </Button>
);

Btn.propTypes = {
  id: PropTypes.number,
  icon: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Btn.defaultProps = {
  id: null,
  icon: '',
  type: '',
};

export default Btn;
