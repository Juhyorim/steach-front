import React, { useState } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const UpdateMyInfo: React.FC = () => {
  // 비밀번호 확인 Input 상태 및 핸들러 함수
  const [inputPassword, setInputPassword] = useState("");

  function handleInputPassword(event: any) {
    setInputPassword(event.target.value);
  }

  // 비밀번호 확인 상태
  const [checkPassword, setCheckPassword] = useState(false);

  // 현재 비밀번호 일치 여부 핸들러 함수
  function handleCheckPassword(event: any) {
    if (event.key === "Enter" || event.type === "click") {
      if (inputPassword === password) {
        setCheckPassword((prev) => !prev);
      }
    }
  }

  // 닉네임 상태 및 핸들러 함수
  const [nickNameUpdate, setNickNameUpdate] = useState("");

  function handleNickNameUpdate(event: any) {
    setNickNameUpdate(event.target.value);
  }

  // 비밀번호 변경 Input 상태 및 핸들러 함수
  const [passwordUpdateInput, setPasswordUpdateInput] = useState("");

  function handlePasswordUpdate(event: any) {
    setPasswordUpdateInput(event.target.value);
  }

  // 비밀번호 변경 확인 Input 상태 및 핸들러 함수
  const [updatePasswordCheckInput, setUpdatePasswordCheckInput] = useState("");

  function handlePasswordUpdateCheck(event: any) {
    setUpdatePasswordCheckInput(event.target.value);
  }

  const password = "1q2w3e4r";

  return (
    <div className="flex justify-center">
      {!checkPassword && (
        <div className="flex flex-col items-center mt-24">
          <h1 className="text-4xl m-2">비밀번호 확인</h1>
          <div className="border-2 rounded-xl w-96 relative m-2">
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요."
              className="w-full text-base p-2"
              value={inputPassword}
              onChange={handleInputPassword}
              onKeyDown={handleCheckPassword}
            />
            <button
              onClick={handleCheckPassword}
              className="absolute right-2 rounded-xl p-2 w-14 h-8 text-sm bg-orange-200 inset-y-1 hover:text-white hover:bg-orange-300"
            >
              확인
            </button>
          </div>
        </div>
      )}
      {checkPassword && (
        <div className="border-2 rounded-xl p-6 mt-12">
          <FormControl>
            <h1 className="text-center text-4xl my-2 p-2">내정보 수정</h1>
            <div className="my-4 p-2">
              <FormLabel className="text-2xl">닉네임</FormLabel>
              <Input
                type="text"
                value={nickNameUpdate}
                onChange={handleNickNameUpdate}
                className="border-2 rounded-lg p-2"
              />
            </div>
            <div className="my-4 p-2">
              <FormLabel className="text-2xl">비밀번호 변경</FormLabel>
              <Input
                type="password"
                value={passwordUpdateInput}
                onChange={handlePasswordUpdate}
                className="border-2 rounded-lg p-2"
              />
            </div>
            <div className="my-4 p-2">
              <FormLabel className="text-2xl">비밀번호 변경 확인</FormLabel>
              <Input
                type="password"
                value={updatePasswordCheckInput}
                onChange={handlePasswordUpdateCheck}
                className="border-2 rounded-lg p-2"
              />
            </div>
            <button className="w-full text-center bg-orange-300 p-2 rounded-lg hover:bg-orange-400 hover:text-white">
              변경하기
            </button>
          </FormControl>
        </div>
      )}
    </div>
  );
};

export default UpdateMyInfo;