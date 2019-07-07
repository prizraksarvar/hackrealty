import {Observable, of} from 'rxjs';


export interface CacheService<T> {
    get(name: string): Promise<T>;
    exist(name: string): Promise<boolean>;
    set(name: string, value: T, expiries: number): Promise<void>;
    unset(name: string): Promise<void>;
}
