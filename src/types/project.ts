export type ProjectStage = 'brief' | 'in_progress' | 'review' | 'delivered';

export type ProjectPriority = 'low' | 'medium' | 'high' | 'urgent';

export type TaskStatus = 'todo' | 'in_progress' | 'done';

export interface Project {
  id: string;
  userId: string;
  subscriptionId?: string | null;
  title: string;
  description?: string | null;
  stage: ProjectStage;
  priority: ProjectPriority;
  estimatedHours?: number | null;
  hoursSpent: number;
  deadline?: string | null;
  notes?: string | null; // Admin-only
  clientNotes?: string | null;
  archived: boolean;
  createdAt: string;
  updatedAt: string;
  completedAt?: string | null;
  tasks?: ProjectTask[]; // Populated via join
}

export interface ProjectTask {
  id: string;
  projectId: string;
  title: string;
  description?: string | null;
  status: TaskStatus;
  displayOrder: number;
  assignedTo?: string | null;
  dueDate?: string | null;
  completedAt?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface KanbanColumn {
  stage: ProjectStage;
  label: string;
  projects: Project[];
  color: string;
}

export interface ProjectCreateInput {
  userId: string;
  subscriptionId?: string;
  title: string;
  description?: string;
  stage?: ProjectStage;
  estimatedHours?: number;
  deadline?: string;
}

export interface ProjectUpdateInput {
  title?: string;
  description?: string;
  stage?: ProjectStage;
  priority?: ProjectPriority;
  hoursSpent?: number;
  deadline?: string;
  clientNotes?: string;
  archived?: boolean;
}