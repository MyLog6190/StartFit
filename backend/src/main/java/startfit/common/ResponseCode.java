package startfit.common;

public interface ResponseCode {
    String SUCCESS = "SU";

    String VALIDATION_FAIL = "VF";
    String DUPLICATE = "DI";

    String SIGN_IN_FAIL = "SF";
    String CERTIFICATION_FAIL = "CF";

    String MAIL_FAIL = "MF";
    String TOKEN_CREATE_ERROR = "TCE";
    String DATABASE_ERROR = "DBE";
}