import axios from 'axios';

export const BASE_URL = 'http://localhost:5000';

export const apiSendMessage = (sender, receiver, message) => {
	return axios.post(`${BASE_URL}/message`, { sender, receiver, message });
}

export const apiExchangedMessage = (sender, receiver) => {
	return axios.get(`${BASE_URL}/exchanged`, {params: {sender: sender, receiver: receiver}});
}

export const apiGetUsersWithoutAdmin = () => {
	return axios.get(`${BASE_URL}/userswithoutadmin`);
}

export const apiGetAdminUser = () => {
	return axios.get(`${BASE_URL}/getadmin`);
}

export const apiGetAllUsers = () => {
	return axios.get(`${BASE_URL}/users`);
}

export const apiUpdateStatus = (userId, status) => {
	return axios.post(`${BASE_URL}/updatestatus`, {userId: userId, status: status});
}

export const apiLogin = (username, password) => {
	return axios.post(`${BASE_URL}/api/auth/signin`, { username, password });
}

export const apiSignUp = (username, email, password) => {
	return axios.post(`${BASE_URL}/api/auth/signup`, { username, email, password });
}

export const apiSaveUser = (user) => {
	return axios.post(`${BASE_URL}/user`, user);
}