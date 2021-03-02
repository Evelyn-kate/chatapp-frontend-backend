import {Types} from './actionTypes';

export default function ActionCreators(user) {
return {
    type: Types.LOG_IN_SUCCESS,
    payload: user
    }
}