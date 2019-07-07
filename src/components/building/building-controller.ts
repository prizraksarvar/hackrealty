import {Controller} from '../../core/component/controller';
import {RouteMiddlewareTypes} from '../../core/component/route-middleware-types';
import {RequestInterface} from '../../core/http/request-interface';
import {ResponseInterface} from '../../core/http/response-interface';
import {NextFunction} from '../../core/http/next.function';
import {ResponseResultEnum} from '../../core/component/response';
import {BuildingsResponse} from './buildings-response';
import {Building} from '../../entities/Building';
import {DI} from '../../di';

export class BuildingController extends Controller {
    initMiddleware(): void {
        this.registerRouteMiddleware(RouteMiddlewareTypes.get, '/buildings', this.getList);
    }

    private async getList(request: RequestInterface, response: ResponseInterface, next: NextFunction) {
        const result = new BuildingsResponse();
        result.items = [];
        result.errors = [];
        result.result = ResponseResultEnum.error;

        // DI.provideBuildingService().importData();

        const buildingRepository = DI.provideDatabaseConnection().getRepository(Building);
        const cityId = 1;
        buildingRepository.find({where: {cityId: cityId}, relations: ["appartamentTypes"]}).then((building: Building[]) => {
            result.result = ResponseResultEnum.success;
            result.items = building;
            response.send(result);
        }).catch((err) => {
            result.errors.push("Ошибка на сервере "+err);
            response.send(result);
        });
    }


}
