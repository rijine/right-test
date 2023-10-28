export const BASE_URL = 'http://localhost:3000/api';

export const getApi = async (url) => {
    try {
        const response = await fetch(`${BASE_URL}/${url}`);
        const data = await response.json();
        return { data, success: true };
    } catch (error) {
        return { message: error.message, success: false };
    }
};
