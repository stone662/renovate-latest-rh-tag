import { api as dockerVersioning } from './versioning/docker';
import { api as redhatVersioning } from './versioning/redhat';

export function findLatestStable(tags: string[]): string | null {
    let stable: string | null = null;
  
    for (const tag of tags) {
      if (!dockerVersioning.isValid(tag) || !dockerVersioning.isStable(tag)) {
        continue;
      }
  
      if (!stable || dockerVersioning.isGreaterThan(tag, stable)) {
        stable = tag;
      }
    }
  
    return stable;
  }

export function findLatestStableRedhat(tags: string[]): string | null {
    let stable: string | null = null;
  
    for (const tag of tags) {
      if (!redhatVersioning.isValid(tag) || !redhatVersioning.isStable(tag)) {
        continue;
      }
  
      if (!stable || redhatVersioning.isGreaterThan(tag, stable)) {
        stable = tag;
      }
    }
  
    return stable;
  }