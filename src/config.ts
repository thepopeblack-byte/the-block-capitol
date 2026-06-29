const config = {
  appName: import.meta.env.VITE_APP_NAME || "The Block Capitol",
  baseURL: import.meta.env.VITE_BASE_URL || "http://localhost:3000",
  environment: import.meta.env.MODE || "development",
  debugMode: import.meta.env.VITE_DEBUG_MODE === "true",
  maxRetries: parseInt(import.meta.env.VITE_MAX_RETRIES || "3", 10),
  featureFlags: {
    enableNewFeature: import.meta.env.VITE_ENABLE_NEW_FEATURE === "true",
  },
};

export default config;
