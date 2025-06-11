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

const registerNewUser = async (name, surname, email, phoneNumber, password) => {
  try {
    const respose = await api.post('/users', {
      username: email,
      email: email,
      password: password,
      name: name,
      surname: surname,
      phoneNumber: phoneNumber
    });

    return respose.data;
  } catch (error) {
    console.error(`An error occurred while trying to register a new user: ${error}`);
  }
}

const login = async (email, password) => {
  try {
    const respose = await api.post('/login', {
      username: email,
      password: password,
    }, {
      "X-Parse-Revocable-Session": 1,
    
    });

    return respose;
  } catch (error) {
    console.error(`An error occurred while trying to login: ${error}`);
  }
}

const getAllConsultants = async () => {
   try {
    const respose = await api.get('/classes/Consultant');

    return respose;
  } catch (error) {
    console.error(`An error occurred while trying to login: ${error}`);
  }
}

const saveANewContactInHistory = async (fullName, email, message) => {
   try {
    const respose = await api.post('/classes/Contact', {
      full_name: fullName,
      message,
      email
    });

    return respose;
  } catch (error) {
    console.error(`An error occurred while trying to save a contact: ${error}`);
  }
}

export { getAllProperties, getPropertyById, registerNewUser, login, getAllConsultants, saveANewContactInHistory };

