import {BuildingShort} from './building-short';
import {Building as BuildingDB} from './../../entities/Building';
import {CacheService} from '../../core/cache.service';
import {parseString} from 'xml2js';
import https from 'https';
import {Service} from '../../core/component/service';
import {Connection, FindConditions} from 'typeorm';
import {Building as NewsDB} from '../../entities/Building';
import {DI} from '../../di';
import {AppartamentType} from '../../entities/AppartamentType';
import fs from "fs";

const config = require('../../../config.json');

export class BuildingService extends Service {

    constructor(private cacheService: CacheService<BuildingShort[]>, private databaseConnection: Connection) {
        super();
    }

    public async importData() {
        const aptTypeRepository = DI.provideDatabaseConnection().getRepository(AppartamentType);
        const buildingRepository = DI.provideDatabaseConnection().getRepository(BuildingDB);

        const raw = fs.readFileSync('./../newbuildings.json').toString();
        const json = JSON.parse(raw);

        json.data.rows.forEach((buildingJson: any) => {
            const building = BuildingDB.fromJson(buildingJson);
            buildingRepository.save(building).then(() => {
                buildingJson.apartaments_full.forEach((aptJson: any)=>{
                    const appartament = AppartamentType.fromJson(aptJson);
                    appartament.building = building;
                    aptTypeRepository.save(appartament);
                });
            });
        });
    }
}
