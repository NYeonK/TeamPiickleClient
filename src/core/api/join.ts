import qs from "qs";

import { UserEmail, UserInfo } from "./../../types/users";
import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

function postJoin(userInfoFormData: FormData) {
  return realReq.POST(PATH.USERS_, userInfoFormData);
}

function fetchNickNameValid<T>(nickname: string) {
  const nicknameParams = qs.stringify({
    nickname: nickname,
  });
  return realReq.GET<T>(`${PATH.USERS_}/nickname/is-exist?${nicknameParams}`);
}

function postEmail(postingEmail: UserEmail) {
  return realReq.POST(`${PATH.USERS_}${PATH.USERS_EMAIL}`, postingEmail);
}

function postUserInfo(postingUserInfo: UserInfo) {
  return realReq.POST(PATH.USERS_, postingUserInfo);
}

export const joinApi = {
  postEmail,
  postUserInfo,
  postJoin,
  fetchNickNameValid,
};