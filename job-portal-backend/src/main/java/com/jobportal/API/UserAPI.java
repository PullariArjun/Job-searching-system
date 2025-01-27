package com.jobportal.API;

import com.jobportal.DTO.LoginDTO;
import com.jobportal.DTO.ResponseDTO;
import com.jobportal.DTO.UserDTO;
import com.jobportal.Exceptions.JobPortalException;
import com.jobportal.Services.UserService;
import jakarta.mail.MessagingException;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Pattern;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/users")
@Validated
public class UserAPI {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<UserDTO> registerUser(@RequestBody @Valid UserDTO userDTO) throws JobPortalException {
        System.out.println(userDTO);
        userDTO = userService.registerUser(userDTO);
        return new ResponseEntity<>(userDTO, HttpStatus.CREATED);
    }

    @PostMapping("/changePassword")
    public ResponseEntity<ResponseDTO> changePassword(@RequestBody @Valid LoginDTO loginDTO) throws JobPortalException{
        return new ResponseEntity<>(userService.changePassword(loginDTO), HttpStatus.OK);
    }
    @PostMapping("/login")
    public ResponseEntity<UserDTO> loginUser(@RequestBody LoginDTO loginDTO) throws JobPortalException {
        return new ResponseEntity<>(userService.loginUser(loginDTO), HttpStatus.OK);
    }

    @PostMapping("/sendOtp/{email}")
    public ResponseEntity<ResponseDTO> sendOtp(@PathVariable("email") @Email(message = "{user.email.invalid}") String email) throws JobPortalException, MessagingException {
        System.out.println(email);
        userService.sendOtp(email);
        return new ResponseEntity<>(new ResponseDTO("OTP sent successfully.."), HttpStatus.OK);
    }

    @GetMapping("/verifyOtp/{email}/{otp}")
    public ResponseEntity<ResponseDTO> verifyOtp(@PathVariable("email") @Email(message = "{user.email.invalid}") String email, @PathVariable("otp") @Pattern(regexp = "^[0-9]{6}$", message = "{otp.invalid}") String otp) throws JobPortalException{
        userService.verifyOtp(email, otp);
        return new ResponseEntity<>(new ResponseDTO("OTP has been verified"), HttpStatus.OK);
    }
}
