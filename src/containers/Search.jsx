import React from 'react';
import { Icon, Input, AutoComplete } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterList } from '../actions';

const SearchBox = ({ dispatch }) => (
  <AutoComplete
    style={{ width: 300 }}
    placeholder="请输入查询关键词"
  >
    <Input
      onInput={(e) => {
        const keyword = e.target.value;
        dispatch(filterList(keyword));
      }}
      suffix={<Icon type="search" />}
    />
  </AutoComplete>
);

SearchBox.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const Search = connect()(SearchBox);

export default Search;
