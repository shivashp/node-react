import Users from '../components/Users';
import { connect } from 'react-redux';
import { get_users } from '../actions';

const stateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(stateToProps, {
    get_users
})(Users);