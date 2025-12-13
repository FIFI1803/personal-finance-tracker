import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5050/api',
});

export const getTransactions = () => API.get('/transactions');
export const createTransaction = (newTransaction) => API.post('/transactions', newTransaction);