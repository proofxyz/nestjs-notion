/// <reference types="node" />
import { NotionModuleOptions } from '../interfaces';
export declare function mergeDefaults(options: NotionModuleOptions, defaults?: NotionModuleOptions): {
    nestjsLogger?: import("@nestjs/common").Logger;
    auth?: string;
    timeoutMs?: number;
    baseUrl?: string;
    logLevel?: import("@notionhq/client").LogLevel;
    logger?: import("@notionhq/client").Logger;
    notionVersion?: string;
    fetch?: import("@notionhq/client/build/src/fetch-types").SupportedFetch;
    agent?: import("http").Agent;
};
