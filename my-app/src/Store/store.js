import { createStore } from 'redux';

import profile from '../Reducers/profile';

let preloadedState;
const persistentProfileString = localStorage.getItem('user');

if(persistentProfileString){
	preloadedState = {
		profile: JSON.parse(persistentProfileString)
	}
}

export default createStore(profile, preloadedState);