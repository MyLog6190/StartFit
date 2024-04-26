package startfit.common;

public interface ResponseMessage {
    String SUCCESS = "Success.";

    String VALIDATION_FAIL = "Validation failed.";
    String DUPLICATE = "Duplicate Id";

    String SIGN_IN_FAIL = "Login information mismatch";
    String CERTIFICATION_FAIL = "Certification failed.";

    String MAIL_FAIL = "Mail send failed.";
    String TOKEN_CREATE_ERROR = "Token create failed.";
    String DATABASE_ERROR = "Database error";
}
