import Axios from "../Utilities/Axios/Axios";

const postJob = async (job) => {
    return await Axios.post("/jobs/post-job", job)
    .then((res) => {
        return res.data;
    }).catch((err) => {
        throw err
    })
}

const getAllJobs = async () =>{
    return await Axios.get("/jobs/get-all-jobs")
    .then(res => res.data)
    .catch(err => {throw err})
}

const getJob = async (id) =>{
    return await Axios.get(`/jobs/get-job/${id}`)
    .then(res => res.data)
    .catch(err => {throw err})
}

export {postJob, getAllJobs, getJob}