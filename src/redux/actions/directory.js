export const LESSON = 'FETCH_LESSON';
export const TASK = 'FETCH_TASK';

export const getLesson = code =>{
    return function(dispatch) {
        fetch('http://localhost:3000/db.json')
            .then(resp => resp.json())
            .then(json => {
                dispatch({
                    type: LESSON,
                    data: json.branches.map(
                        branch => ({
                            id: branch.id,
                            city: branch.city,
                            address: branch.address
                        }))})})
            .catch(error => {
                console.log(error);
            });
    };
};

export const getTask = (code, number) =>{
    return function(dispatch) {
        fetch('http://localhost:3000/db.json')
            .then(resp => resp.json())
            .then(json => {
                dispatch({
                    type: TASK,
                    data: json.data.map(
                        branch => ({
                            id: branch.id,
                            city: branch.city,
                            address: branch.address
                        }))})})
            .catch(error => {
                console.log(error);
            });
    };
};