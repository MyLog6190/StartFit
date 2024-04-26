enum ResponseCode {
  SUCCESS = "SU",

  VALIDATION_FAIL = "VF",
  DUPLICATE_ID = "DI",

  SIGN_IN_FAIL = "SF",
  CERTIFICATION_FAIL = "CF",

  MAIL_FAIL = "MF",
  TOKEN_CREATE_ERROR = "TCE",
  DATABASE_ERROR = "DBE",
}

export default ResponseCode;
