import { connect } from 'react-redux';
import { switchItem, deleteItem, togglePanel } from '../actions';
import List from '../components/List';

const getVisibleList = list => (
  list.filter(item => item.visible)
);

const mapStateToProps = state => ({
  list: getVisibleList(state.lists),
});

const mapDispatchToProps = {
  onEnableClick: switchItem,
  onDeleteClick: deleteItem,
  onModifyClick: togglePanel,
};

const VisibleList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);

export default VisibleList;
