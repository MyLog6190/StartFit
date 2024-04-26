import { ChangeEvent, FormEvent, forwardRef, useState } from "react";
import {
  Button,
  EditContainer,
  FormField,
  Input,
  Label,
} from "./EditProfile.style";
import { useRecoilState, useRecoilValue } from "recoil";
import { userInfo } from "@/store/atom";
import { updateUserInfo } from "@/api/user";
import UpdateUserInfoRequestDto from "@/types/request/user/update-user-info.request.dto";
import UserInfoResponseDto from "@/types/response/user/get-user-info.response.dto";
import { ResponseBody } from "@/types/response";
import { serverErrorMessage } from "@/common/error/error-message";
import { ResponseCode } from "@/common/enum";

const EditProfile = forwardRef<HTMLDivElement>((_, ref) => {
  const [user, setUser] = useRecoilState(userInfo);

  const [name, setName] = useState<string>(user.name);
  const [height, setHeight] = useState<number>(user.height);
  const [weight, setWeight] = useState<number>(user.weight);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const requestBody: UpdateUserInfoRequestDto = {
      name: name,
      height: height,
      weight: weight,
    };
    updateUserInfo(requestBody).then(updateUserInfoResponse);
  };

  const updateUserInfoResponse = (
    responseBody: ResponseBody<UserInfoResponseDto>
  ) => {
    if (!responseBody) return serverErrorMessage("서버에 응답이 없습니다.");
    const { code } = responseBody;

    if (ResponseCode.DATABASE_ERROR === code)
      return serverErrorMessage("서버 오류 입니다.");

    if (ResponseCode.SUCCESS !== code) return;

    if ("userEntity" in responseBody) {
      const { userEntity } = responseBody;
      setUser(userEntity);
    }
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleHeightChange = (event: ChangeEvent<HTMLInputElement>) => {
    setHeight(parseFloat(event.target.value));
  };
  const handleWeightChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWeight(parseFloat(event.target.value));
  };

  return (
    <EditContainer ref={ref}>
      <h2>Edit Profile</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="name">이름:</Label>
          <Input
            id="name"
            type="text"
            defaultValue={user.name}
            onChange={handleNameChange}
          />
        </FormField>
        <FormField>
          <Label htmlFor="height">신장 (cm):</Label>
          <Input
            id="height"
            type="number"
            defaultValue={user.height}
            onChange={handleHeightChange}
          />
        </FormField>
        <FormField>
          <Label htmlFor="weight">무게 (kg):</Label>
          <Input
            id="weight"
            type="number"
            defaultValue={user.weight}
            onChange={handleWeightChange}
          />
        </FormField>
        <Button type="submit">Update</Button>
      </form>
    </EditContainer>
  );
});

export default EditProfile;
