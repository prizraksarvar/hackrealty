import {Response} from '../../core/component/response';
import {Developer} from '../../entities/Developer';
import {Review} from '../../entities/Review';


export class ReviewResponse extends Response {
    items: Review[];
}
