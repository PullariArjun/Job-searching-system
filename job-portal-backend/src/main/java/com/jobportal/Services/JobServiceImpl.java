package com.jobportal.Services;

import com.jobportal.DTO.ApplicantDTO;
import com.jobportal.DTO.ApplicationStatus;
import com.jobportal.DTO.JobDTO;
import com.jobportal.Entities.Applicant;
import com.jobportal.Entities.Job;
import com.jobportal.Exceptions.JobPortalException;
import com.jobportal.Repositories.JobRepository;
import com.jobportal.Utilities.Utilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service("jobService")
public class JobServiceImpl implements JobService {

    @Autowired
    private JobRepository jobRepository;

    @Override
    public JobDTO postJob(JobDTO jobDTO) throws JobPortalException {
        jobDTO.setId(Utilities.getNextSequence("jobs"));
        jobDTO.setPostTime(LocalDateTime.now());
        return jobRepository.save(jobDTO.toEntity()).toDTO();
    }

    @Override
    public List<JobDTO> getAllJobs() throws JobPortalException {
        return jobRepository.findAll().stream().map(x -> x.toDTO()).toList();
    }

    @Override
    public JobDTO getJob(Long id) throws JobPortalException {
        return jobRepository.findById(id).orElseThrow(()-> new JobPortalException("JOB_NOT_FOUND")).toDTO();
    }

    @Override
    public void applyJob(Long id, ApplicantDTO applicantDTO) throws JobPortalException {
        Job job = jobRepository.findById(id).orElseThrow(() -> new JobPortalException("JOB_NOT_FOUND"));
        List<Applicant> applicants = job.getApplicants();
        if(applicants == null){
            applicants = new ArrayList<>();
        }
        if(applicants.stream().filter(x -> x.getApplicantId() == applicantDTO.getApplicantId()).toList().size() > 0)throw new JobPortalException("JOB_APPLIED_ALREADY");
        applicantDTO.setApplicationStatus(ApplicationStatus.APPLIED);
        applicants.add(applicantDTO.toEntity());
        job.setApplicants(applicants);
        jobRepository.save(job);
    }

    @Override
    public List<JobDTO> getJobsPostedBy(Long id) {
        return jobRepository.findByPostedBy(id).stream().map(x -> x.toDTO()).toList();
    }
}
