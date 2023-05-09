export type MongoOptions = {
  uri: string;
};

export type ConfigurationType = {
  port: number;
  host: string;
  protocol: string;
  mongo: MongoOptions;
};
