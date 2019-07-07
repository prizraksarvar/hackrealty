import {Response} from '../../core/component/response';
import {BuildingShort} from './building-short';


export class BuildingsResponse extends Response {
    items: BuildingShort[];
}
