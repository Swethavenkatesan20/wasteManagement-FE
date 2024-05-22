import { protectedInstance } from './instance';

export const getProfile = async () => {
  try {
    const response = await protectedInstance.get('/users/profile');
    return response.data;
  } catch (error) {
    throw error;
  }
};