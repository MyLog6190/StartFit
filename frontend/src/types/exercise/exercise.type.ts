export interface Exercise {
  id: number;
  exerciseName: string;
  categoryName: string | undefined;
  img: string;
  exerciseDescription: string;
}

export interface ExerciseProgram {
  id: number;
  programName: string;
  programCycle: string;
  level: string;
  programDescription: string;
  programImg: string;
}

export interface ProgramContents {
  programId: number;
  exerciseDto: Exercise;
  setNum: number;
  reps: number;
  weight: number;
}

export interface ExerciseCategory {
  category: string;
}

export interface ProgramLevel {
  level: string;
}
