import { DynamicModule } from '@nestjs/common/interfaces';
import { NotionModuleOptions, NotionModuleAsyncOptions } from './interfaces';
export declare class NotionModule {
    static forRoot(options?: NotionModuleOptions): DynamicModule;
    static forRootAsync(options: NotionModuleAsyncOptions): DynamicModule;
    private static createAsyncProviders;
    private static createAsyncOptionsProvider;
}
