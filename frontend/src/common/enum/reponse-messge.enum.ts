enum ResponseMessage {
  SUCCESS = "Success.",

  VALIDATION_FAIL = "Validation failed.",
  DUPLICATE = "Duplicate Id.",

  SIGN_IN_FAIL = "Login information mismatch",
  CERTIFICATION_FAIL = "Certification failed.",

  MAIL_FAIL = "Mail send failed.",
  TOKEN_CREATE_ERROR = "Token create failed.",
  DATABASE_ERROR = "Database error",
}

export default ResponseMessage;
