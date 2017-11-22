import { connect } from 'react-redux';
import Users from '../components/Users';
import { select_user, get_users } from '../actions';
import { bindActionCreators } from 'redux';

function mapStateToProps (state) {
    return {
        users: state.users,
        activeUser: state.activeUser
    }
}
function dispatchToProps (dispatch) {
    return bindActionCreators({select_user, get_users}, dispatch);
}


export default connect(mapStateToProps, dispatchToProps)(Users);