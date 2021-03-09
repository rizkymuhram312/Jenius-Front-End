import axios from 'axios'
import apiURL from '../config/apiURL'

const listContact = async () => {
    try{
        let response = await axios.get(`${apiURL}/contact`)
        return await response.data
    } catch(err) {
        return await err.message
    }
};

export { listContact}