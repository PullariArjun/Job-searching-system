package com.jobportal.API;

import com.jobportal.DTO.JobDTO;
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



}
