import { ConfigurationType } from './configuration.type';

export * from './configuration.enum';
export * from './configuration.type';

export default (): ConfigurationType => ({
  port: parseInt(process.env.API_PORT, 10) || 3000,
  host: process.env.API_HOST,
  protocol: process.env.API_PROTOCOL,
});
