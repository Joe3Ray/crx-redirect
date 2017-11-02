import { connect } from 'react-redux';
import { togglePanel } from '../actions';
import Btn from '../components/Btn';

const mapDispatchToProps = {
  onClick: togglePanel,
};

const ChangePanel = connect(
  null,
  mapDispatchToProps,
)(Btn);

export default ChangePanel;
