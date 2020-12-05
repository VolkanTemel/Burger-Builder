import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-4d951-default-rtdb.firebaseio.com/'
});

export default instance;