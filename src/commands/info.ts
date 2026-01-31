import { fetchRegistryInfo } from '../core/registry.js';
import { printJson } from '../utils/json.js';

export interface InfoCommandOptions {
  registry?: string;
}

export async function runInfo(slug: string, options: InfoCommandOptions): Promise<void> {
  const result = await fetchRegistryInfo(slug, options.registry);
  
  // Strip schemaVersion, author, and tags from the item to save tokens
  const { schemaVersion, author, tags, ...cleanedItem } = result.item as any;
  
  printJson({ item: cleanedItem });
}
