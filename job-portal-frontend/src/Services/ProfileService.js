import Axios from "../Utilities/Axios/Axios"

const getProfile = async (id) =>{
    return Axios.get(`/profiles/get/${id}`)
    .then(res => res.data)
    .catch(err => {throw err})
}


const updateProfile = async (profile) =>{
    return Axios.put(`/profiles/update`, profile)
    .then(res => res.data)
    .catch(err => {throw err})
}

export {updateProfile, getProfile}