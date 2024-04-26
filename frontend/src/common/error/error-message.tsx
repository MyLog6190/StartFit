import { toast } from "react-toastify";

export const requestErrorMessage = (message: string) => {
  return toast.error(
    <div>
      <h3 style={{ color: "red", fontWeight: "bold" }}>{message}</h3>
    </div>
  );
};

export const serverErrorMessage = (message: string) => {
  return toast.error(
    <div>
      <h3 style={{ color: "red", fontWeight: "bold" }}>{message}</h3>
      <h3>관리자에게 문의하세요.</h3>
    </div>
  );
};
