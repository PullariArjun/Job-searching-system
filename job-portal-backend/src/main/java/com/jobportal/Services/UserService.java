package com.jobportal.Services;

import com.jobportal.DTO.LoginDTO;
import com.jobportal.DTO.ResponseDTO;
import com.jobportal.DTO.UserDTO;
import com.jobportal.Exceptions.JobPortalException;
import jakarta.mail.MessagingException;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    UserDTO registerUser(UserDTO userDTO) throws JobPortalException;

    UserDTO loginUser(LoginDTO loginDTO) throws JobPortalException;

    Boolean sendOtp(String email) throws JobPortalException, MessagingException;

    Boolean verifyOtp(String email, String otp) throws JobPortalException;

    ResponseDTO changePassword(LoginDTO loginDTO) throws JobPortalException;
}
