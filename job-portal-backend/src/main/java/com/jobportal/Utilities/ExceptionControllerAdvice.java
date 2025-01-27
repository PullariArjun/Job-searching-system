package com.jobportal.Utilities;

import com.jobportal.Exceptions.JobPortalException;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.stream.Collectors;

@RestControllerAdvice
public class ExceptionControllerAdvice {

    @Autowired
    private Environment environment;

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorInfo>  generalException(Exception exception){
        ErrorInfo errorInfo = new ErrorInfo(exception.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR.value(), LocalDateTime.now());
        return new ResponseEntity<>(errorInfo, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(JobPortalException.class)
    public ResponseEntity<ErrorInfo>  generalException(JobPortalException exception){
        String message = environment.getProperty(exception.getMessage());
        ErrorInfo errorInfo = new ErrorInfo(message, HttpStatus.INTERNAL_SERVER_ERROR.value(), LocalDateTime.now());
        return new ResponseEntity<>(errorInfo, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler({MethodArgumentNotValidException.class, ConstraintViolationException.class})
    public ResponseEntity<ErrorInfo> validationExceptionHandler(Exception exception){
        String message = "";
        if(exception instanceof MethodArgumentNotValidException methodArgumentNotValidException){
            message = methodArgumentNotValidException.getAllErrors().stream().map(ObjectError::getDefaultMessage).collect(Collectors.joining(", "));
        } else {
            ConstraintViolationException constraintViolationException = (ConstraintViolationException) exception;
            message = constraintViolationException.getConstraintViolations().stream().map(ConstraintViolation::getMessage).collect(Collectors.joining(", "));
        }
        ErrorInfo errorInfo = new ErrorInfo(message, HttpStatus.BAD_REQUEST.value(), LocalDateTime.now());
        return new ResponseEntity<>(errorInfo, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(ResponseStatusException.class)
    public ResponseEntity<ErrorInfo> handleResponseStatusException(ResponseStatusException ex) {
        ErrorInfo errorInfo = new ErrorInfo(ex.getReason(), ex.getStatusCode().value(), LocalDateTime.now());
        return new ResponseEntity<>(errorInfo, ex.getStatusCode());
    }

}
