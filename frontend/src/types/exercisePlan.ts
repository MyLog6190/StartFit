import { atom, selector } from "recoil";
import { Temporal } from "@js-temporal/polyfill";

export const dayOfWeekList = atom<String[]>({
  key: "dayOfWeekList",
  default: ["일", "월", "화", "수", "목", "금", "토"],
});

export const filterDate = atom<String>({
  key: "selectedDate",
  default: Temporal.Now.plainDateISO().toString(),
});

interface Exercise {
  id: number;
  image: string;
  name: string;
  categoryName: string;
  content: string;
}

export interface IExercisePlan {
  id: number;
  date: string;
  exerciseName: string;
  categoryName: string;
  image: string;
}

interface ExerciseVolume {
  id: number;
  planId: number;
  set: number;
  rep: number;
  kg: number;
  check: boolean;
}

export const ExercisePlanList = atom<IExercisePlan[]>({
  key: "exercisePlanList",
  default: [
    {
      id: 1,
      date: "2024-02-07",
      exerciseName: "벤치프레스",
      categoryName: "가슴",
      image: "",
    },
    {
      id: 2,
      date: "2024-02-07",
      exerciseName: "윗몸일으키기",
      categoryName: "복근",
      image: "",
    },
    {
      id: 3,
      date: "2024-02-07",
      exerciseName: "덤벨",
      categoryName: "팔",
      image: "",
    },
    {
      id: 4,
      date: "2024-02-08",
      exerciseName: "벤치프레스",
      categoryName: "가슴",
      image: "",
    },
    {
      id: 5,
      date: "2024-02-08",
      exerciseName: "윗몸일으키기",
      categoryName: "복근",
      image: "",
    },
    {
      id: 6,
      date: "2024-02-08",
      exerciseName: "덤벨",
      categoryName: "팔",
      image: "",
    },
    {
      id: 7,
      date: "2024-02-09",
      exerciseName: "벤치프레스",
      categoryName: "가슴",
      image: "",
    },
    {
      id: 8,
      date: "2024-02-09",
      exerciseName: "윗몸일으키기",
      categoryName: "복근",
      image: "",
    },
    {
      id: 9,
      date: "2024-02-09",
      exerciseName: "덤벨",
      categoryName: "팔",
      image: "",
    },
  ],
});

export const ExerciseVolumeList = atom<ExerciseVolume[]>({
  key: "exerciseVolumeList",
  default: [
    { id: 1, planId: 1, set: 1, rep: 10, kg: 10, check: true },
    { id: 2, planId: 1, set: 2, rep: 10, kg: 10, check: true },
    { id: 3, planId: 1, set: 3, rep: 10, kg: 10, check: true },
    { id: 4, planId: 2, set: 1, rep: 10, kg: 10, check: true },
    { id: 5, planId: 2, set: 2, rep: 10, kg: 10, check: true },
    { id: 6, planId: 2, set: 3, rep: 10, kg: 10, check: true },
    { id: 7, planId: 3, set: 1, rep: 10, kg: 10, check: true },
    { id: 8, planId: 3, set: 2, rep: 10, kg: 10, check: true },
    { id: 9, planId: 3, set: 3, rep: 10, kg: 10, check: true },
    { id: 10, planId: 4, set: 1, rep: 10, kg: 10, check: true },
    { id: 11, planId: 4, set: 2, rep: 10, kg: 10, check: true },
    { id: 12, planId: 4, set: 3, rep: 10, kg: 10, check: true },
    { id: 13, planId: 4, set: 4, rep: 10, kg: 10, check: true },
    { id: 14, planId: 5, set: 1, rep: 10, kg: 10, check: true },
    { id: 15, planId: 5, set: 2, rep: 10, kg: 10, check: true },
    { id: 16, planId: 5, set: 3, rep: 10, kg: 10, check: true },
    { id: 17, planId: 6, set: 1, rep: 10, kg: 10, check: true },
    { id: 18, planId: 6, set: 2, rep: 10, kg: 10, check: false },
    { id: 19, planId: 6, set: 3, rep: 10, kg: 10, check: false },
    { id: 20, planId: 7, set: 1, rep: 10, kg: 10, check: false },
    { id: 21, planId: 6, set: 2, rep: 10, kg: 10, check: false },
    { id: 22, planId: 7, set: 2, rep: 10, kg: 10, check: false },
    { id: 23, planId: 7, set: 3, rep: 10, kg: 10, check: false },
    { id: 24, planId: 8, set: 1, rep: 10, kg: 10, check: false },
    { id: 25, planId: 8, set: 2, rep: 10, kg: 10, check: false },
    { id: 26, planId: 8, set: 3, rep: 10, kg: 10, check: false },
    { id: 27, planId: 9, set: 1, rep: 10, kg: 10, check: false },
    { id: 28, planId: 9, set: 2, rep: 10, kg: 10, check: false },
    { id: 29, planId: 9, set: 3, rep: 10, kg: 10, check: false },
  ],
});

export const filterList = selector({
  key: "filterList",
  get: ({ get }) => {
    const planList = get(ExercisePlanList);
    const date = get(filterDate);
    return planList.filter((prop) => prop.date === date);
  },
});
