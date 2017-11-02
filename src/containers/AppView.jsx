import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state) => {
  const { id, isList } = state.panels;
  const type = !id ? 'add' : 'modify';

  return {
    id,
    type,
    isList,
  };
};

const AppView = connect(mapStateToProps)(App);

export default AppView;
