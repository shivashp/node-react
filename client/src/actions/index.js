import axios from 'axios';

export const select_user = (user) => {
    return {
        type: "SELECT_USER",
        payload: user
    }
}

export const get_users = () => {
    return (dispatch) => {
        axios({
            method: "GET",
            url: "http://localhost:3000/api/v1/users",
            responseType: 'JSON'
        }).then(function(response) {
            dispatch({
                type: "GET_USERS",
                payload:response.data.data
            });
        });
    }
}