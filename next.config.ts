const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
  env: {
    MSW_ENABLED: process.env.MSW_ENABLED,
  },
};

module.exports = nextConfig;
