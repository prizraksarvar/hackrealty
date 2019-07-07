import {Controller} from '../../core/component/controller';
import {RouteMiddlewareTypes} from '../../core/component/route-middleware-types';
import {RequestInterface} from '../../core/http/request-interface';
import {ResponseInterface} from '../../core/http/response-interface';
import {NextFunction} from '../../core/http/next.function';
import {ResponseResultEnum} from '../../core/component/response';
import {Building} from '../../entities/Building';
import {DI} from '../../di';
import {FilterResponse} from './filter-response';
import {Developer} from '../../entities/Developer';
import {Review} from '../../entities/Review';
import {AppartamentType} from '../../entities/AppartamentType';

export class FilterController extends Controller {
    initMiddleware(): void {
        this.registerRouteMiddleware(RouteMiddlewareTypes.get, '/filters', this.getList);
    }

    private async getList(request: RequestInterface, response: ResponseInterface, next: NextFunction) {
        const result = new FilterResponse();
        result.items = [];
        result.errors = [];
        result.result = ResponseResultEnum.error;

        // DI.provideBuildingService().importData();

        const buildingRepository = DI.provideDatabaseConnection().getRepository(Building);
        const aptRepository = DI.provideDatabaseConnection().getRepository(AppartamentType);

        let q1 = buildingRepository.createQueryBuilder("building")
            .select("developer")
            .groupBy("developer")
            .orderBy("developer")
            .execute();

        /*let q2 = buildingRepository.createQueryBuilder("appartament_type")
            .select("roomsCount")
            .groupBy("roomsCount")
            .orderBy("roomsCount")
            .execute();*/

        Promise.all([q1]).then((results) => {
            result.result = ResponseResultEnum.success;
            result.items = results;
            response.send(result);
        }).catch((err) => {
            result.errors.push('Ошибка на сервере ' + err);
            response.send(result);
        });
    }


}
