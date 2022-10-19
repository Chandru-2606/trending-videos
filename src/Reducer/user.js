let defaultUserSate = {
    login: false,
    token: ""
}

export default (state = defaultUserSate, action) => {
    switch (action.type) {
        case 'SET_LOGIN':
            return {
                ...state,
                login: action.login,
                token: action.token
            };
        

        default:
            return state;
    }
};