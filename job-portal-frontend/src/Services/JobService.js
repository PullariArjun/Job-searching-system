import Axios from "../Utilities/Axios/Axios";

const PostJob = async (job) => {
    return await Axios.post("/jobs/post-job", job)
    .then((res) => {
        return res.data;
    }).catch((err) => {
        throw err
    })
}

const GetAllJobs = async () =>{
    return await Axios.get("/get-all-jobs")
    .then(res => res.data)
    .catch(err => {throw err})
}

const GetJob = async (id) =>{
    return await Axios.get(`/get-job/${id}`)
    .then(res => res.data)
    .catch(err => {throw err})
}

export {PostJob, GetAllJobs, GetJob}