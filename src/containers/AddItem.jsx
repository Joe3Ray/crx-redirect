import React from 'react';
import { Form, Button, Input, InputNumber } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ChangePanel from './ChangePanel';
import { addItem, modifyItem, togglePanel } from '../actions';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      before: props.before,
      after: props.after,
      order: props.order,
    };
    this.getInputValue = this.getInputValue.bind(this);
    this.submitData = this.submitData.bind(this);
  }

  getInputValue(field) {
    const fn = (e) => {
      const val = e.target.value;
      this.setState({
        [field]: val,
      });
    };
    return fn;
  }

  submitData() {
    const data = {
      ...this.state,
      id: this.props.id || Date.now(),
      visible: true,
      enable: true,
    };
    const action = (this.props.type === 'add')
      ? addItem(data)
      : modifyItem(data);
    this.props.dispatch(action);
    this.props.dispatch(togglePanel());
  }

  render() {
    const FormItem = Form.Item;
    const layout = {
      labelCol: {
        span: 6,
      },
      wrapperCol: {
        span: 14,
      },
    };
    return (
      <Form>
        <FormItem label="替换前" {...layout}>
          <Input onInput={this.getInputValue('before')} defaultValue={this.state.before} />
        </FormItem>
        <FormItem label="替换后" {...layout}>
          <Input onInput={this.getInputValue('after')} defaultValue={this.state.after} />
        </FormItem>
        <FormItem label="优先级" {...layout}>
          <InputNumber
            value={this.state.order}
            onChange={
              (order) => {
                this.setState({
                  order,
                });
              }
            }
          />
        </FormItem>
        <div className="form-btns">
          <Button
            onClick={this.submitData}
            type="primary"
            style={{ marginRight: 8 }}
          >
            {this.props.type === 'add' ? '添加' : '修改'}
          </Button>
          <ChangePanel
            text="取消"
          />
        </div>
      </Form>
    );
  }
}

Add.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  before: PropTypes.string,
  after: PropTypes.string,
  order: PropTypes.number,
};

Add.defaultProps = {
  id: null,
  before: '',
  after: '',
  order: null,
};

const mapStateToProps = (state) => {
  const { id } = state.panels;
  if (id) {
    const data = state.lists.filter(item => item.id === id);
    const { before, after, order } = data[0] || {};
    return {
      before,
      after,
      order,
    };
  }
  return {
    before: null,
    after: null,
    order: null,
  };
};

const AddItem = connect(mapStateToProps)(Add);

export default AddItem;
