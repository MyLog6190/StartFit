import { atom } from "recoil";

export const isDarkMode = atom({
  key: "isDark",
  default: false,
});

export const exerciseFilterItems = atom<String[]>({
  key: "bodyParts",
  default: ["필터 해제", "북마크", "하체", "가슴", "등", "어깨", "팔", "복근"],
});
