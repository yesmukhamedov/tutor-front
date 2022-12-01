import { LESSON } from '../actions/directory'

const initialState = {
    branches: [],
    categories: [],
}

const directories = (state = initialState, action) => {
    switch(action.type) {
        case LESSON: {
            return {...state, branches: action.data};
        }
        default: {
            return state;
        }
    }
}

export default directories;