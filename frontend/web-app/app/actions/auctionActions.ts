'use server'

import { PagedResult, Auction } from '@/types';

export async function getData(query: string): Promise<PagedResult<Auction>> {
    var response = await fetch(`http://localhost:6001/search${query}`);
    if (!response.ok)
      throw new Error("Failed to fetch data!");
  
    return await response.json();
  }