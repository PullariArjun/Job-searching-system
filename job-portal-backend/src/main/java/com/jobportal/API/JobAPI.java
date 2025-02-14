package com.jobportal.API;

import com.jobportal.DTO.ApplicantDTO;
import com.jobportal.DTO.JobDTO;
import com.jobportal.DTO.ResponseDTO;
import com.jobportal.Exceptions.JobPortalException;
import com.jobportal.Services.JobService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@Validated
@RequestMapping("/jobs")
public class JobAPI {

    @Autowired
    private JobService jobService;


    @PostMapping("/post-job")
    public ResponseEntity<JobDTO> postJob(@RequestBody @Valid JobDTO jobDTO) throws JobPortalException {
        return new ResponseEntity<>(jobService.postJob(jobDTO), HttpStatus.CREATED);
    }
    @GetMapping("/get-all-jobs")
    public ResponseEntity<List<JobDTO>> getAllJobs() throws JobPortalException{
        return new ResponseEntity<>(jobService.getAllJobs(), HttpStatus.OK);

    }

    @GetMapping("/get-job/{id}")
    public ResponseEntity<JobDTO> getJob(@PathVariable Long id) throws JobPortalException{
        return new ResponseEntity<>(jobService.getJob(id), HttpStatus.OK);

    }

    @PostMapping("/apply-job/{id}")
    public ResponseEntity<ResponseDTO> applyJob(@PathVariable Long id, @RequestBody @Valid ApplicantDTO applicantDTO) throws JobPortalException {
        jobService.applyJob(id, applicantDTO);
        return new ResponseEntity<>(new ResponseDTO("Applied Successfully..."), HttpStatus.OK);
    }

    @GetMapping("/get-jobs-posted-by/{id}")
    public ResponseEntity<List<JobDTO>> getJobsPostedBy(@PathVariable Long id) throws JobPortalException{
        return new ResponseEntity<>(jobService.getJobsPostedBy(id), HttpStatus.OK);

    }

//    @PostMapping("/change-app-status")
//    public ResponseEntity<ResponseDTO> changeAppStatus(@RequestBody ApplicantDTO applicantDTO){
//
//    }


}
