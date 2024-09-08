const config = {
  charitiesAPI: import.meta.env.VITE_CHARITY_API,
  identityAPI: import.meta.env.VITE_IDENTITY_API,
  adNetworkApi: import.meta.env.VITE_AD_NETWORK_API,
  usersApi: import.meta.env.VITE_USERS_API,
  // sentryDSN: import.meta.env.VITE_SENTRY_DSN,
  auth: {
    clientSecret: import.meta.env.VITE_CLIENT_SECRET,
    clientId: "adnetwork.client",
    machineSecret: import.meta.env.VITE_MACHINE_SECRET,
    machineId: "adnetwork.machine.client",
  },
  scopes: {
    machineToken: ["identity.api"],
    refreshToken: ["adnetwork.api", "users.api", "charities.api"],
    accessToken: ["adnetwork.api", "users.api", "charities.api"],
  },
  timezone: {
    id: "America/New_York",
    countryCode: "US",
  },
  bannerDimensions: {
    publicGood: {
      Small: "340x460",
      Large: "600x460",
    },
  },
  publicGoodPublisherId: "caa6e28f-36dd-4afa-a73c-f4fd8e6f3962",
  newsCorpPublisherId: "8812d071-2146-4e6c-a274-43a69a9d7060",
};

export default config;
