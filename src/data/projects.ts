import type { Project } from "../types/project";


export const projects: Project[] = [
  {
    id: 1,
    name: "TaskFlow Dashboard",
    description: "Project management dashboard",
    status: "Active",
    members: 5,
    progress: 75,
  },

  {
    id: 2,
    name: "E-Commerce Platform",
    description: "Online shopping application",
    status: "Completed",
    members: 8,
    progress: 100,
  },

  {
    id: 3,
    name: "AI Assistant",
    description: "AI powered productivity tool",
    status: "Pending",
    members: 3,
    progress: 20,
  },
];