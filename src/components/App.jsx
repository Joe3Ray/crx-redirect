import React from 'react';
import { Card, Row, Col } from 'antd';
import 'antd/dist/antd.less';
import PropTypes from 'prop-types';
import Search from '../containers/Search';
import VisibleList from '../containers/VisibleList';
import AddItem from '../containers/AddItem';
import SwitchEnable from '../containers/SwitchEnable';
import ChangePanel from '../containers/ChangePanel';

const App = ({ type, id, isList }) => {
  /*
  const switcher = (
    <SwitchEnable />
  );
  */

  const listPanel = (
    <div className="main-panel">
      <Row>
        <Col span={16}>
          <Search />
        </Col>
        <Col span={8} className="right">
          <ChangePanel type="primary" icon="plus" text="新增规则" />
        </Col>
      </Row>
      <VisibleList />
    </div>
  );

  const addPanel = (
    <div className="add-panel">
      <AddItem id={id} type={type} />
    </div>
  );

  return (
    <Card title="Crx Redirect" bordered={false}/* extra={switcher}*/>
      {isList ? listPanel : addPanel}
    </Card>
  );
};

App.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string.isRequired,
  isList: PropTypes.bool.isRequired,
};

App.defaultProps = {
  id: null,
};

export default App;
