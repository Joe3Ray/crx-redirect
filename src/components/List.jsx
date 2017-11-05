import React from 'react';
import { Table, Icon } from 'antd';
import PropTypes from 'prop-types';

const List = ({
  list, onEnableClick, onDeleteClick, onModifyClick,
}) => {
  const columns = [
    /*
    {
      title: '禁用/启用',
      dataIndex: 'status',
      className: 'item',
    },
    */
    {
      title: '替换前',
      dataIndex: 'before',
      className: 'item',
    },
    {
      title: '替换后',
      dataIndex: 'after',
      className: 'item',
    },
    {
      title: '优先级',
      dataIndex: 'order',
      className: 'item',
    },
    {
      title: '操作',
      dataIndex: 'operate',
      className: 'item',
    },
  ];
  const data = list.map(item => ({
    ...item,
    key: item.id,
    status: <Icon type="check-circle" onClick={() => onEnableClick(item.id)} style={{ color: item.enable ? 'green' : 'gray', cursor: 'pointer' }} />,
    operate: (
      <div>
        <span
          onClick={() => onModifyClick(item.id)}
          onKeyPress={() => onModifyClick(item.id)}
          className="modify"
          role="button"
          tabIndex="0"
        >
          修改
        </span>
        &nbsp;/&nbsp;
        <span
          onClick={() => onDeleteClick(item.id)}
          onKeyPress={() => onDeleteClick(item.id)}
          className="delete"
          role="button"
          tabIndex="-1"
        >
          删除
        </span>
      </div>
    ),
  }));
  return (
    <div className="list">
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} size="small" />
    </div>
  );
};

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    enable: PropTypes.bool,
    before: PropTypes.string.isRequired,
    after: PropTypes.string.isRequired,
    order: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  onEnableClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onModifyClick: PropTypes.func.isRequired,
};

export default List;
