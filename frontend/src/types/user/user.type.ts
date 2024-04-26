export interface PlanInfo {
  id: number;
  setNum: number;
  weight: number;
  reps: number;
  doChecked: boolean;
}

export interface MyPlan {
  id: number;
  email: string;
  exerciseName: string;
  date: string;
  planInfos: PlanInfo[];
}

export interface User {
  name: string;
  height: number;
  weight: number;
}
