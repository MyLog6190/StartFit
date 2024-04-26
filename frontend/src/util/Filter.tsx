import { Exercise } from "@/types/exercise";

export const filterExercises = (
  exercises: Exercise[],
  selectedCategory: string,
  searchTerm: string
) => {
  return exercises.filter((exercise) => {
    const matchesFilter =
      selectedCategory === "ALL" || exercise.categoryName === selectedCategory;
    const matchesSearch = exercise.exerciseName.includes(searchTerm);
    return matchesFilter && matchesSearch;
  });
};
