import { atom } from "recoil";

export const recoilPersonal = atom({
  key: "aboutPersonal",
  default: true,
});
export const recoilProfessional = atom({
  key: "aboutProfessional",
  default: false,
});
