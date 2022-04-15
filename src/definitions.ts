export interface FluvioPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
