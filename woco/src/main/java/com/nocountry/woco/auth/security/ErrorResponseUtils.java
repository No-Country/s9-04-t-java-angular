package com.nocountry.woco.auth.security;



import com.fasterxml.jackson.databind.ObjectMapper;
import com.nocountry.woco.exception.ErrorResponse;
import com.nocountry.woco.exception.TimestampUtils;
import org.apache.http.entity.ContentType;
import org.springframework.http.HttpStatus;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ErrorResponseUtils {

  private ErrorResponseUtils() {

  }

  public static void setCustomResponse(HttpServletResponse response) throws IOException {
    response.setStatus(HttpStatus.FORBIDDEN.value());
    response.setContentType(ContentType.APPLICATION_JSON.getMimeType());
    ObjectMapper mapper = new ObjectMapper();
    response.getWriter().write(mapper.writeValueAsString(getGenericErrorResponse()));
  }

  private static ErrorResponse getGenericErrorResponse() {
    ErrorResponse errorResponse = new ErrorResponse();
    errorResponse.setStatus(HttpStatus.FORBIDDEN.value());
    errorResponse.setTimestamp(TimestampUtils.now());
    errorResponse.add("Access denied. Please, try to login again or contact your admin.");
    return errorResponse;
  }

}