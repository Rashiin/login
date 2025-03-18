/* Rashin Gholijani Farahani */


import axios from 'axios';

const API_BASE_URL = 'https://67d7b5259d5e3a10152bb53e.mockapi.io/api/v1/auth';

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(API_BASE_URL, { email, password });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 409) {
      throw new Error('This email is already in use. Please try another one.');
    }
    throw error;
  }
};

export const getUserInfo = async (authId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${authId}/users/1`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
