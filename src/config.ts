const config = {
  projectManagerAPI: import.meta.env.VITE_PROJECT_MANAGER_API,
  identityAPI: import.meta.env.VITE_IDENTITY_API,
  userApi: import.meta.env.VITE_USER_API,
  commentaryApi: import.meta.env.VITE_COMMENTARY_API,
  notificationApi: import.meta.env.VITE_NOTIFICATION_API,
  // sentryDSN: import.meta.env.VITE_SENTRY_DSN,
  auth: {
    clientSecret: import.meta.env.VITE_CLIENT_SECRET,
    clientId: "adnetwork.client",
    machineSecret: import.meta.env.VITE_MACHINE_SECRET,
    machineId: "adnetwork.machine.client",
  },
  scopes: {
    machineToken: ["identity.api"],
    refreshToken: ["adnetwork.api", "user.api", "charities.api"],
    accessToken: ["adnetwork.api", "user.api", "charities.api"],
  },
};

export default config;
