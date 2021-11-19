import { createConnections, getConnectionOptions } from 'typeorm';

getConnectionOptions().then(async () => {
  await createConnections();
});
