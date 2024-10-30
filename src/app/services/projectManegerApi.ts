import { ProjectType } from "@/types";
import { api } from "./api";
import config from "@/.config/config";

const { projectManagerAPI: PROJECT_MANAGER_API } = config;

export const projectManagerAPI = api.injectEndpoints({
  endpoints: (build) => ({
    getAllProjects: build.query<ProjectType[], void>({
      query: () => ({
        url: `${PROJECT_MANAGER_API}/v1/projects`,
      }),
    }),
    getProjectById: build.query<ProjectType[], { project_id: string }>({
      query: ({ project_id }) => ({
        url: `${PROJECT_MANAGER_API}/v1/projects/${project_id} `,
      }),
    }),
    createNewProject: build.mutation<{ project_id: string }, ProjectType>({
      query: (project) => ({
        url: `${PROJECT_MANAGER_API}/v1/projects/add-new`,
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
  }),
});

export const { useGetAllProjectsQuery } = projectManagerAPI;
