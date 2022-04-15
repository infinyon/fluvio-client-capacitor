export interface FluvioPlugin {
  connect(profile: Profile): Promise<Client>;
  produce(options: ProduceOpts): Promise<void>;
}

export interface Profile {
  endpoint: string;
  tls: ProfileTls;
}

export interface ProfileTls {
  policy: string;
  domain: string;
  key: string;
  cert: string;
  ca_cert: string;
}

export interface Client {
  clientId: number;
}

export interface ProduceOpts {
  clientId: number;
  topic: string;
  value: string;
}
