import {Controller} from '../../core/component/controller';
import {RouteMiddlewareTypes} from '../../core/component/route-middleware-types';
import {RequestInterface} from '../../core/http/request-interface';
import {ResponseInterface} from '../../core/http/response-interface';
import {NextFunction} from '../../core/http/next.function';
import {ResponseResultEnum} from '../../core/component/response';
import {Building} from '../../entities/Building';
import {DI} from '../../di';
import {ReviewResponse} from './review-response';
import {Developer} from '../../entities/Developer';
import {Review} from '../../entities/Review';
import {BuildingReview} from '../../entities/BuildingReview';

export class ReviewController extends Controller {
    initMiddleware(): void {
        this.registerRouteMiddleware(RouteMiddlewareTypes.get, '/reviews', this.getList);
    }

    private async getList(request: RequestInterface, response: ResponseInterface, next: NextFunction) {
        const result = new ReviewResponse();
        result.items = [];
        result.errors = [];
        result.result = ResponseResultEnum.error;

        // DI.provideBuildingService().importData();

        const buildingRepository = DI.provideDatabaseConnection().getRepository(BuildingReview);
        const cityId = 1;
        buildingRepository.find().then((items: Review[]) => {
            result.result = ResponseResultEnum.success;
            result.items = items;
            response.send(result);
        }).catch((err) => {
            result.errors.push('Ошибка на сервере ' + err);
            response.send(result);
        });
    }


}
