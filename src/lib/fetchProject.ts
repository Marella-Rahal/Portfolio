import { projectDetail } from "@/data/data";

export const fetchProject = (param: string) => {
  const displayedProject = projectDetail.filter(
    (one: projectDetail) => one.param === param
  );

  return displayedProject[0];
};
