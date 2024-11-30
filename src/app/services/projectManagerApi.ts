import { ProjectType, ProjectProps, Status, TaskType, TaskProps } from "@/types";
import { api } from "./api";
import config from "@/.config/config";
import { Overview } from "@/features/profile/types";
import { toast } from "@/common/components/Toast/Toast";

interface getTasksRequest {
  status?: Status;
}

const { projectManagerAPI: PROJECT_MANAGER_API } = config;

export const projectManagerAPI = api.injectEndpoints({
  endpoints: (build) => ({
    overview: build.query<Overview, void>({
      query: () => ({
        url: `${PROJECT_MANAGER_API}/v1/manager/overview`,
      }),
    }),
    getAllProjects: build.query<ProjectType[], void>({
      query: () => ({
        url: `${PROJECT_MANAGER_API}/v1/projects`,
      }),
    }),
    getProjectById: build.query<ProjectType, { project_id: string }>({
      query: ({ project_id }) => ({
        url: `${PROJECT_MANAGER_API}/v1/projects/${project_id} `,
      }),
    }),
    createNewProject: build.mutation<{ project_id: string }, ProjectProps>({
      query: (project) => ({
        url: `${PROJECT_MANAGER_API}/v1/projects/new`,
        method: "POST",
        body: project,
      }),
      async onQueryStarted(args, { queryFulfilled }) {
        try {
          await queryFulfilled;
          toast.success("Project created successfully!");
        } catch (error) {
          toast.error("Project not created!");
          console.error("Failed to create the project:", error);
        }
      },
    }),
    updateProject: build.mutation<void, ProjectProps & { project_id: string }>({
      query: (project) => ({
        url: `${PROJECT_MANAGER_API}/v1/edit/${project.project_id}`,
        method: "PATCH",
        body: project,
      }),
    }),
    deleteProject: build.mutation<void, { project_id: string }>({
      query: ({ project_id }) => ({
        url: `${PROJECT_MANAGER_API}/v1/delete/${project_id}`,
        method: "DELETE",
      }),
    }),
    createNewTask: build.mutation<{ project_id: string }, TaskProps>({
      query: (project) => ({
        url: `${PROJECT_MANAGER_API}/v1/tasks/new`,
        method: "POST",
        body: project,
      }),
      async onQueryStarted(args, { queryFulfilled }) {
        try {
          await queryFulfilled;
          toast.success("Task created successfully!");
        } catch (error) {
          toast.error("Task not created!");
          console.error("Failed to create the project:", error);
        }
      },
    }),
    createNewSubtask: build.mutation<{ project_id: string }, ProjectProps>({
      query: (project) => ({
        url: `${PROJECT_MANAGER_API}/v1/subtask/new`,
        method: "POST",
        body: project,
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
  useCreateNewTaskMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
  useGetAllSubtasksQuery,
} = projectManagerAPI;
