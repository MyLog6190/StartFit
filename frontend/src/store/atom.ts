import { Exercise, ExerciseProgram } from "@/types/exercise";
import { MyPlan, User } from "@/types/user/user.type";
import { Temporal } from "@js-temporal/polyfill";
import { UserInfo } from "os";
import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const isDarkMode = atom<boolean>({
  key: "isDark",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const isLoggedInState = atom<boolean>({
  key: "isLoggedIn",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
export const selectedDate = atom<Temporal.PlainDate>({
  key: "selectedDate",
  default: Temporal.Now.plainDateISO(),
});

export const exerciseFilterItems = atom<String[]>({
  key: "exerciseFilterItems",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const exercisesAtom = atom<Exercise[]>({
  key: "exercisesData",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const programsAtom = atom<ExerciseProgram[]>({
  key: "exercisePrograms",
  default: [],
});

export const myPlanAtom = atom<MyPlan[]>({
  key: "myPlan",
  default: [],
});

export const filterByPlanDate = selector<MyPlan[]>({
  key: "filterByPlanDate",
  get: ({ get }) => {
    const planList = get(myPlanAtom);
    console.log(planList);
    const date = get(selectedDate);
    return planList.filter((prop) => prop.date === date.toString());
  },
});

export const userInfo = atom<User>({
  key: "userInfo",
  default: undefined,
});
