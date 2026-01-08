import { Saasco } from 'saasco-sdk';

export const saasco = new Saasco({
  projectId: 'cmk61dpm1000092a71qf9bqje',
  debug: import.meta.env.DEV,
  enabled: import.meta.env.PROD,
});
