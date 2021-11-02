import { io } from 'socket.io-client';
console.log(process.env.REACT_APP_BE_URL);
export const socket = io(process.env.REACT_APP_BE_URL);
