package com.jobportal.Services;

import com.jobportal.DTO.ApplicantDTO;
import com.jobportal.DTO.JobDTO;
import com.jobportal.Exceptions.JobPortalException;

import java.util.List;

public interface JobService {

    JobDTO postJob(JobDTO jobDTO) throws JobPortalException;

    List<JobDTO> getAllJobs() throws JobPortalException;

    JobDTO getJob(Long id) throws JobPortalException;

    void applyJob(Long id, ApplicantDTO applicantDTO) throws JobPortalException;

    List<JobDTO> getJobsPostedBy(Long id);
}
