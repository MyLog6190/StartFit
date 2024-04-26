export default interface CreatePlanRequestDto {
  exerciseName: string;
  date: string;
  planInfos: PlanInfo[];
}

interface PlanInfo {
  setNum: number;
  weight: number;
  reps: number;
  doChecked: boolean;
}
