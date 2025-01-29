import { Navigate } from "react-router-dom";
import Home from "../Pages/HomePage/Home";
import FindJobs from "../Pages/FindJobs/Findjobs";
import FindTalent from "../Pages/Find Talent/FindTalent";
import TalentProfile from "../Pages/TalentProfile/TalentProfile";
import UploadJobs from "../Pages/Upload Jobs/UploadJobs";
import JobProfile from "../Pages/JobProfile/JobProfile";
import ApplyJob from "../Pages/ApplyJob/ApplyJob";
import CompanyProfile from "../Pages/CompanyProfile/CompanyProfile";
import PostedJobs from "../Pages/Posted Jobs/PostedJobs";
import JobHistory from "../Pages/Job History/JobHistory";
import Signup from "../Pages/Signup/Signup";
import UserProfile from "../Pages/UserProfile/UserProfile";
const authedRouts = [
    { path: "/find-jobs", component: <FindJobs /> },
    { path: "/find-jobs/job-profile/:id", component: <JobProfile /> },
    { path: "/find-jobs/job-profile/apply/:id", component: <ApplyJob /> },
    { path: "/find-talent", component: <FindTalent /> },
    { path: "/upload-jobs", component: <UploadJobs /> },
    { path: "/posted-jobs", component: <PostedJobs /> },
    { path: "/job-history", component: <JobHistory /> },
    { path: "/home", component: <Home /> },
    { path: "/find-talent/talent-profile", component: <TalentProfile /> },
    { path: "/company-profile/:name", component: <CompanyProfile /> },
    { path: "/profile", component: <UserProfile /> },
    { path: "*", component: <Navigate to={"/home"} replace /> },
];

const unAuthedRouts = [
    { path: "/sign-up", component: <Signup /> },
    { path: "/login", component: <Signup /> },
    { path: "/home", component: <Home /> },
    { path: "*", component: <Navigate to={"/home"} replace /> },
]
export {authedRouts, unAuthedRouts}
