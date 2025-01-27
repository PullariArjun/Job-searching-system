package com.jobportal.Utilities;

public class Data {
    public static String getMessageBody(String otp, String name) {
        return "<!DOCTYPE html>"
                + "<html lang=\"en\">"
                + "<head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title>OTP Email</title></head>"
                + "<body>"
                + "<div style=\"max-width: 600px; margin: 20px auto; background: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\">"
                + "<h1 style=\"text-align: center; color: #007bff;\">Your OTP Code</h1>"
                + "<p>Hi, "+name+"</p>"
                + "<p>We received a request to verify your email address. Use the OTP code below to complete the process:</p>"
                + "<p style=\"font-size: 20px; font-weight: bold; color: #007bff; padding: 10px; background-color: #f8f9fa; border: 1px solid #007bff; border-radius: 5px;\">" + otp + "</p>"
                + "<p>If you did not request this, you can safely ignore this email. Your verification code will expire in 10 minutes.</p>"
                + "<p>Thank you,<br>The [Your Company Name] Team</p>"
                + "<footer style=\"text-align: center; font-size: 12px; color: #777777; padding-top: 20px;\">"
                + "<p>&copy; 2025 iJOBS. All rights reserved.</p>"
                + "<p>If you have any questions, contact us at <a href=\"\">support@yourcompany.com</a>.</p>"
                + "</footer>"
                + "</div>"
                + "</body>"
                + "</html>";
    }
}
