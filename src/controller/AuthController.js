import api from '../services/api';

export function loginValidator(username) {
  return username.length > 0 ? true : false;
}

let users = [];
export const getAllUsers = async () => {
    const response = await api.get('users/index');
    users = response.data  

    return users;
};

