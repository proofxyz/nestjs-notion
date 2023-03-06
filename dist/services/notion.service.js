"use strict";
var NotionService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotionService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const client_1 = require("@notionhq/client");
const notion_constants_1 = require("../notion.constants");
let NotionService = NotionService_1 = class NotionService {
    constructor(notionModuleOptions) {
        this.notionModuleOptions = notionModuleOptions;
        this.logger = new common_1.Logger(NotionService_1.name);
        const { nestjsLogger } = notionModuleOptions, notionOptions = tslib_1.__rest(notionModuleOptions, ["nestjsLogger"]);
        const logger = nestjsLogger !== null && nestjsLogger !== void 0 ? nestjsLogger : this.logger;
        this._notion = new client_1.Client(Object.assign({ logger: this.createLoggerBridge(logger) }, notionOptions));
    }
    get notion() {
        return this._notion;
    }
    get blocks() {
        return this.notion.blocks;
    }
    get databases() {
        return this.notion.databases;
    }
    get pages() {
        return this.notion.pages;
    }
    request(requestParameters) {
        return this.notion.request(requestParameters);
    }
    search(args) {
        return this.notion.search(args);
    }
    get users() {
        return this.notion.users;
    }
    get comments() {
        return this.notion.comments;
    }
    createLoggerBridge(logger) {
        return (level, message, extraInfo) => {
            switch (level) {
                case client_1.LogLevel.DEBUG:
                case client_1.LogLevel.WARN:
                case client_1.LogLevel.ERROR:
                    logger[level](message);
                    break;
                case client_1.LogLevel.INFO:
                    logger.log(message);
                    break;
                default:
                    throw new Error(`notion log level not found`);
            }
            if (typeof extraInfo !== 'undefined')
                logger.verbose(extraInfo);
        };
    }
};
NotionService = NotionService_1 = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(notion_constants_1.NOTION_MODULE_OPTIONS)),
    tslib_1.__metadata("design:paramtypes", [Object])
], NotionService);
exports.NotionService = NotionService;
