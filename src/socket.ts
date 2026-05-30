import { io } from 'socket.io-client'
console.log("creating socket instance")
export const socket = io('http://localhost:4000')