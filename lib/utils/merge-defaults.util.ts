import { NotionModuleOptions } from '../interfaces';

const defaultOptions: NotionModuleOptions = {
  notionVersion: '2022-06-28',
};

export function mergeDefaults(
  options: NotionModuleOptions,
  defaults: NotionModuleOptions = defaultOptions,
) {
  return {
    ...defaults,
    ...options,
  };
}
