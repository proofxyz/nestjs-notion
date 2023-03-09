"use strict";
var NotionModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotionModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const notion_constants_1 = require("./notion.constants");
const services_1 = require("./services");
const utils_1 = require("./utils");
let NotionModule = NotionModule_1 = class NotionModule {
    static forRoot(options = {}) {
        return {
            global: true,
            module: NotionModule_1,
            providers: [
                {
                    provide: notion_constants_1.NOTION_MODULE_OPTIONS,
                    useValue: (0, utils_1.mergeDefaults)(options),
                },
            ],
        };
    }
    static forRootAsync(options) {
        return {
            global: true,
            module: NotionModule_1,
            imports: options.imports,
            providers: [
                ...this.createAsyncProviders(options),
                {
                    provide: notion_constants_1.NOTION_MODULE_ID,
                    useValue: (0, uuid_1.v4)(),
                },
            ],
        };
    }
    static createAsyncProviders(options) {
        if (options.useExisting || options.useFactory) {
            return [this.createAsyncOptionsProvider(options)];
        }
        return [
            this.createAsyncOptionsProvider(options),
            {
                provide: options.useClass,
                useClass: options.useClass,
            },
        ];
    }
    static createAsyncOptionsProvider(options) {
        if (options.useFactory) {
            return {
                provide: notion_constants_1.NOTION_MODULE_OPTIONS,
                useFactory: (...args) => tslib_1.__awaiter(this, void 0, void 0, function* () { return (0, utils_1.mergeDefaults)(yield options.useFactory(...args)); }),
                inject: options.inject || [],
            };
        }
        return {
            provide: notion_constants_1.NOTION_MODULE_OPTIONS,
            useFactory: (optionsFactory) => tslib_1.__awaiter(this, void 0, void 0, function* () { return (0, utils_1.mergeDefaults)(yield optionsFactory.createNotionOptions()); }),
            inject: [options.useExisting || options.useClass],
        };
    }
};
NotionModule = NotionModule_1 = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [services_1.NotionService],
        exports: [services_1.NotionService],
    })
], NotionModule);
exports.NotionModule = NotionModule;
