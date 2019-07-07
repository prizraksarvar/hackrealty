import * as querystring from 'querystring';
import {Service} from './component/service';
// import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';

export class HttpService extends Service {
    /*private readonly API_URL = 'http://localhost:8080/';

    constructor(
        private httpClient: HttpClient
    ) {
        super();
    }

    public get<T>(path:string) {
        return this.prepareRespomse(path,this.httpClient.get<T>(this.API_URL+path, this.getHttpOptions()));
    }

    public post<T>(path:string,data:any) {
        return this.prepareRespomse(path,this.httpClient.post<T>(this.API_URL+path, data, this.getHttpOptions()));
    }

    public delete<T>(path:string,data:any) {
        return this.prepareRespomse(path,this.httpClient.delete<T>(this.API_URL+path, this.getHttpOptions()));
    }

    public put<T>(path:string,data:any) {
        return this.prepareRespomse(path,this.httpClient.put<T>(this.API_URL+path, data, this.getHttpOptions()));
    }

    public head<T>(path:string,data:any) {
        return this.prepareRespomse(path,this.httpClient.head<T>(this.API_URL+path, this.getHttpOptions()));
    }

    public options<T>(path:string,data:any) {
        return this.prepareRespomse(path,this.httpClient.options<T>(this.API_URL+path, this.getHttpOptions()));
    }

    private getHttpOptions() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'X-Cookie': 'sessionId='+this.sessionId
            })
        };
    }

    private prepareRespomse<T>(path,observe:Observable<T>) {
        return observe.pipe(
            tap((result:T) => {
                if (result instanceof Response) {
                    this.log(`${path}: ${result.result}`, MessagelogStatus.default)
                } else {
                    this.log(`${path}: ${result}`, MessagelogStatus.default)
                }
            }),
            catchError(this.handleError<T>(path))
        );
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            this.log(`${operation} failed: ${error.message}`, MessagelogStatus.danger);
            return of(result as T);
        };
    }

    private log(message: string, status: MessagelogStatus) {
        this.messageService.add(`AppWebservice: ${message}`, status);
    }*/
}
