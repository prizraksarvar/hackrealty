import {Connection} from 'typeorm';
import {Express, IRouterHandler, json, NextFunction, Request, Response} from 'express';
import {rejects} from 'assert';
import database from './database';
import serverStarter from './server';
import {Controller} from './component/controller';
import {RequestInterface} from './http/request-interface';
import {ResponseInterface} from './http/response-interface';
import {DefaultRequestState} from './http/default-request.state';
import {MiddlewareHandlerAdapter} from './http/middleware-handler-adapter';
import {DI} from '../di';
const config = require('./../../config.json');

export class Application {
    private connection: Connection;
    private server: Express;
    private controllers: Controller[];

    static create(): Promise<Application> {
        return new Promise<Application>((resolve, reject) => {
            const app = new Application();
            database.then((connection) => {
                console.log('DB connected');
                app.connection = connection;
                DI.setDatabaseConnection(connection);
            }).catch(reject);
            serverStarter(config.port, config.hostname).then((server) => {
                console.log('server started and listening on port ' + config.port);
                app.server = server;
                server.use(MiddlewareHandlerAdapter.handler(Application.prepareRequest));
                resolve(app);
            }).catch(reject);
        });
    }

    protected static prepareRequest(request: RequestInterface, response: ResponseInterface, next: NextFunction) {
        request.state = new DefaultRequestState();
        next();
    }

    public registerController(controller: Controller) {
        controller.setApplication(this);
        controller.init();
        this.controllers.push(controller);
    }

    public getServer() {
        return this.server;
    }

    public getConnecion() {
        return this.connection;
    }

    protected constructor() {
        this.controllers = [];
    }
}
