import {Response} from '../../core/component/response';
import {Developer} from '../../entities/Developer';


export class DeveloperResponse extends Response {
    items: Developer[];
}
