export interface Task {
  id: number;
  title: string;
  description: string;
  status: "Todo" | "In Progress" | "Completed";
  priority: "Low" | "Medium" | "High";
  assignee: string;
}