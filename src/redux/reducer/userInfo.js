import { THEME } from '../actions/userInfo'

const initialState = {
    username: '',
    name: '',
    lastname: '',
    theme: 'light'
}

const userInfo = (state = initialState, action) => {
    switch(action.type) {       
        case THEME: {
            return {...state, theme: action.data};
        }
        default: {
            return state;
        }
    }
}

export default userInfo;