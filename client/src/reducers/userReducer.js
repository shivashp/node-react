export default function(state = [], action) {
    console.log("Getting user", action);
    switch(action.type) {
        case 'GET_USERS':
            return action.payload;
        default: 
            return state;
    }
}
