export const LOGIN = 'LOGIN_LANG';
export const THEME = 'CHANGE_THEME';

export const login = data =>{ //username, password
    // return function(dispatch) {
    //     dispatch({
    //         type: STORE,
    //         data: events
    //     })
    // }
};

export const setTheme = newTheme =>{
    return function(dispatch) {
        dispatch({
            type: THEME,
            data: newTheme
        })
    }
};