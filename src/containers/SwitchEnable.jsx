import { connect } from 'react-redux';
import { switchStatus } from '../actions';
import Enable from '../components/Enable';

const mapStateToProps = state => ({
  enable: state.enable,
});

const mapDispatchToProps = {
  onSwitchClick: switchStatus,
};

const SwitchEnable = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Enable);

export default SwitchEnable;
