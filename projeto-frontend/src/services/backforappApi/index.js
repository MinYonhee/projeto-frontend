import axios from 'axios';

const api = axios.create({
  baseURL: 'https://parseapi.back4app.com',
});

api.defaults.headers = {
    "X-Parse-Application-Id": "NpF0u4PbQaK9SC6WeXHruXXC0egyqJnh0P1QVE7Q",
    "X-Parse-REST-API-Key": "b3DGmG4eb4ExC9J5rrUbWqYydTyvTWqMl8r5Y3m1"
}

const getAllProperties = async () => {
  try {
    const response = await api.get('/classes/Property');
    return response.data;
  } catch (error) {
    console.error('Error fetching properties:', error);
    throw error;
  }
}

const getPropertyById = async (id) => {
  try {
    const response = await api.get(`/classes/Property/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching property with id ${id}:`, error);
    throw error;
  }
}

export { getAllProperties, getPropertyById };
