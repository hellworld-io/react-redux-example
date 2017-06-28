import * as actionTypes from '../actions/ActionTypes';

const initialState = {
    number: 0,
    dummy: 'dumdumdum',
    dumbObject: {
        d: 0,
        u: 1,
        m: 2,
        b: 3
    }
};

export default function counter(prevState = initialState, action) {

    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...prevState,
                number: prevState.number + 1,
                dumbObject: {
                    ...prevState.dumbObject,
                    u: 9
                }
            };
        case actionTypes.DECREMENT:
            return {
                ...prevState,
                number: prevState.number - 1
            }
        default:
            return prevState;
    }

}