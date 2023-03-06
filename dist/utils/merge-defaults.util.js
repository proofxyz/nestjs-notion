"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeDefaults = void 0;
const defaultOptions = {
    notionVersion: '2022-06-28',
};
function mergeDefaults(options, defaults = defaultOptions) {
    return Object.assign(Object.assign({}, defaults), options);
}
exports.mergeDefaults = mergeDefaults;
