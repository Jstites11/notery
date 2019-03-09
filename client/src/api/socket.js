import io from 'socket.io-client';
import Cookies from 'js-cookie';

const socket = io('http://localhost:5000', {query: {token: Cookies.get('jwt')}});
socket.on('connect', () => {
    console.log('Connected to server!')
})
socket.on('error', (err) => {
    console.log(err);
})
export default socket;