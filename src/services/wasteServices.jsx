import { protectedInstance } from './instance';

const wasteServices = {
    getAllServices: async () => {
        const token = localStorage.getItem('token');
        return protectedInstance.get('/waste/addwaste', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }
};

export default wasteServices;
