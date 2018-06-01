import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FootballerList from '../components/FootballerList.jsx';
import { searchConditions} from '../actions/search';
const mapStateToProps = (state) => ({
  config: state.config,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    searchConditions,
}, dispatch);

const FcContainer = connect(mapStateToProps, mapDispatchToProps)(FootballerList);

export default FcContainer;
