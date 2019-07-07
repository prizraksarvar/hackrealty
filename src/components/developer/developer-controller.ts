import {Controller} from '../../core/component/controller';
import {RouteMiddlewareTypes} from '../../core/component/route-middleware-types';
import {RequestInterface} from '../../core/http/request-interface';
import {ResponseInterface} from '../../core/http/response-interface';
import {NextFunction} from '../../core/http/next.function';
import {ResponseResultEnum} from '../../core/component/response';
import {Building} from '../../entities/Building';
import {DI} from '../../di';
import {DeveloperResponse} from './developer-response';
import {Developer} from '../../entities/Developer';

export class DeveloperController extends Controller {
    initMiddleware(): void {
        this.registerRouteMiddleware(RouteMiddlewareTypes.get, '/developers', this.getList);
    }

    private async getList(request: RequestInterface, response: ResponseInterface, next: NextFunction) {
        const result = new DeveloperResponse();
        result.items = [];
        result.errors = [];
        result.result = ResponseResultEnum.error;

        // DI.provideBuildingService().importData();

        const buildingRepository = DI.provideDatabaseConnection().getRepository(Developer);
        const cityId = 1;
        buildingRepository.find().then((items: Developer[]) => {
            result.result = ResponseResultEnum.success;
            result.items = items;
            response.send(result);
        }).catch((err) => {
            result.errors.push('Ошибка на сервере ' + err);
            response.send(result);
        });
    }


}
