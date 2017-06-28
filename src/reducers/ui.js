import * as actionTypes from '../actions/ActionTypes';

const initialState = {
    color: [255, 255, 255]
};

export default function setColor(prevState = initialState, action) {
    if (action.type === actionTypes.SET_COLOR) {
        return {
            color: action.color
        };
    } else {
        return prevState;
    }
}