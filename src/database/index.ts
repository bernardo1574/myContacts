import { createConnections, getConnectionOptions } from 'typeorm';

getConnectionOptions().then(async () => {
  const connections = await createConnections();
  return connections;
});
