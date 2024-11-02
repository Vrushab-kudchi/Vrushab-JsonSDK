type Config = {
    apiKey?: string;
    baseUrl?: string;
};
export declare abstract class Base {
    private apiKey?;
    private baseUrl?;
    constructor(config: Config);
    protected Request<T>(endpoint: string, options?: RequestInit): Promise<T>;
}
export {};