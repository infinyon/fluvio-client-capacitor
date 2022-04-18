export interface FluvioPlugin {
    connect(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    produce(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
