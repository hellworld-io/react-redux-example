import * as actionTypes from './ActionTypes';

export function increment() {
    return {
        type: actionTypes.INCREMENT
    };
}

export function decrement() {
    return {
        type: actionTypes.DECREMENT
    };
}

export function setColor(color) {
    return {
        type: actionTypes.SET_COLOR,
        color
    }
}