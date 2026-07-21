
export interface Project {
  id: number;
  name: string;
  description: string;
  status: "Active" | "Completed" | "Pending";
  members: number;
  progress: number;
}