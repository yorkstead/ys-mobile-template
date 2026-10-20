// Local starter content; replace this boundary with a validated API response.
export interface Project {
  id: string;
  title: string;
  summary: string;
}
export const projects: readonly Project[] = [
  {
    id: "first-slice",
    title: "Your first slice",
    summary:
      "Define one user outcome, its acceptance criteria, and a small verified task.",
  },
];
export async function listProjects(): Promise<readonly Project[]> {
  return projects;
}
export function findProject(id: string) {
  return projects.find((project) => project.id === id);
}
