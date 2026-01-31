import { searchRegistry } from '../core/registry.js';
import { printJson } from '../utils/json.js';

export interface SearchCommandOptions {
  registry?: string;
  category?: string;
  limit?: number;
  offset?: number;
  sort?: string;
}

export async function runSearch(query: string, options: SearchCommandOptions): Promise<void> {
  const result = await searchRegistry(
    {
      q: query,
      category: options.category,
      limit: options.limit,
      offset: options.offset,
      sort: options.sort,
    },
    options.registry
  );
  const raw = result.raw as { registry?: unknown; version?: unknown; pagination?: unknown } | undefined;
  
  // Strip schemaVersion, author, and tags from items to save tokens for the agent
  const cleanedItems = result.items.map((item: any) => {
    const { schemaVersion, author, tags, ...rest } = item;
    return rest;
  });

  printJson({
    query,
    registry: raw?.registry,
    version: raw?.version,
    pagination: raw?.pagination,
    items: cleanedItems,
  });
}
