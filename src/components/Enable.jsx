import React from 'react';
import { Switch } from 'antd';
import PropTypes from 'prop-types';

const Enable = ({
  enable,
  onSwitchClick,
}) => (
  <Switch
    onChange={onSwitchClick}
    defaultChecked={enable}
    checkedChildren="开"
    unCheckedChildren="关"
  />
);

Enable.propTypes = {
  enable: PropTypes.bool.isRequired,
  onSwitchClick: PropTypes.func.isRequired,
};

export default Enable;
