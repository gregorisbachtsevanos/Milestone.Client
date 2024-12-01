import {
  ProjectType,
  ProjectProps,
  Status,
  TaskType,
  TaskProps,
  SubtaskType,
  OptionsType,
} from "@/types";
import { api } from "./api";
import config from "@/.config/config";
import { Overview } from "@/features/profile/types";
import { toast } from "@/common/components/Toast/Toast";

const { projectManagerAPI: PROJECT_MANAGER_API } = config;

export const projectManagerAPI = api.injectEndpoints({
  endpoints: (build) => ({
    overview: build.query<Overview, void>({
      query: () => ({
        url: `${PROJECT_MANAGER_API}/v1/manager/overview`,
      }),
    }),
    getAllProjectsOverview: build.query<OptionsType[], void>({
      query: () => ({
        url: `${PROJECT_MANAGER_API}/v1/projects`,
      }),
      transformResponse: (response: ProjectType[]): OptionsType[] =>
        response?.map((project) => ({
          label: project.name,
          value: project.project_id,
        })),

      // providesTags: (result) => [{ type: "Projects", id: result?.id }],
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
    getAllTasksOverview: build.query<OptionsType[], void>({
      query: () => ({
        url: `${PROJECT_MANAGER_API}/v1/tasks`,
      }),
      transformResponse: (response: TaskType[]): OptionsType[] =>
        response?.map((task) => ({
          label: task.title,
          value: task.project_id,
        })),
    }),
    createNewSubtask: build.mutation<{ project_id: string }, ProjectProps>({
      query: (project) => ({
        url: `${PROJECT_MANAGER_API}/v1/subtask/new`,
        method: "POST",
        body: project,
      }),
    }),
    getAllSubtasks: build.query<SubtaskType[], { status?: Status }>({
      query: ({ status }) => ({
        url: `${PROJECT_MANAGER_API}/v1/subtasks`,
        params: { status },
      }),
    }),
  }),
});

export const {
  useOverviewQuery,
  useGetAllProjectsOverviewQuery,
  useGetProjectByIdQuery,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
  useCreateNewProjectMutation,
  useGetAllTasksOverviewQuery,
  useCreateNewTaskMutation,
  useGetAllSubtasksQuery,
} = projectManagerAPI;
