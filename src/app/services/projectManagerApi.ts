import { ProjectType, Status, TaskType } from "@/types";
import { api } from "./api";
import config from "@/.config/config";
import { Overview } from "@/features/profile/types";

interface getTasksRequest {
  status?: Status;
}

interface ProjectResponse {
  id: string;
  project_id: string;
  name: string;
  description?: string;
  tasks: number;
  comments: number;
  created_at: string;
  updated_at: string;
  deadline: string;
  // roadmaps: RoadmapType[];
  tags?: string[];
}

const { projectManagerAPI: PROJECT_MANAGER_API } = config;

export const projectManagerAPI = api.injectEndpoints({
  endpoints: (build) => ({
    overview: build.query<Overview, void>({
      query: () => ({
        url: `${PROJECT_MANAGER_API}/v1/manager/overview`,
      }),
    }),
    getAllProjects: build.query<ProjectResponse[], void>({
      query: () => ({
        url: `${PROJECT_MANAGER_API}/v1/projects`,
      }),
    }),
    getProjectById: build.query<ProjectResponse, { project_id: string }>({
      query: ({ project_id }) => ({
        url: `${PROJECT_MANAGER_API}/v1/projects/${project_id} `,
      }),
    }),
    createNewProject: build.mutation<{ project_id: string }, ProjectType>({
      query: (project) => ({
        url: `${PROJECT_MANAGER_API}/v1/projects/new`,
        method: "POST",
        body: project,
      }),
    }),
    updateProject: build.mutation<void, ProjectType>({
      query: (project) => ({
        url: `${PROJECT_MANAGER_API}/v1/edit/${project.project_id}`,
        method: "PATCH",
        body: project,
      }),
    }),
    deleteProject: build.mutation<void, ProjectType>({
      query: ({ project_id }) => ({
        url: `${PROJECT_MANAGER_API}/v1/delete/${project_id}`,
        method: "DELETE",
      }),
    }),
    getAllSubtasks: build.query<TaskType[], getTasksRequest>({
      query: ({ status }) => ({
        url: `${PROJECT_MANAGER_API}/v1/subtasks`,
        params: { status },
      }),
    }),
  }),
});

export const {
  useOverviewQuery,
  useGetAllProjectsQuery,
  useGetProjectByIdQuery,
  useCreateNewProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
  useGetAllSubtasksQuery,
} = projectManagerAPI;
