import {CacheService} from './cache.service';


export class NotCacheService<T> implements  CacheService<T> {
    private cache  = new Map<string, T>();
    exist(name: string): Promise<boolean> {
        return new Promise<boolean>(((resolve, reject) => {
            resolve(!!this.cache.get(name));
        }));
    }

    get(name: string): Promise<T> {
        return new Promise<T>(((resolve, reject) => {
            resolve(this.cache.get(name));
        }));
    }

    set(name: string, value: T, expiries: number): Promise<void> {
        return new Promise<void>(((resolve, reject) => {
            this.cache.set(name, value);
            resolve();
        }));
    }

    unset(name: string): Promise<void> {
        return new Promise<void>(((resolve, reject) => {

            resolve();
        }));
    }

}
