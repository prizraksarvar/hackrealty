import {BuildingService} from './components/building/building.service';
import {BuildingShort} from './components/building/building-short';
import {NotCacheService} from './core/not-cache.service';
import {Connection} from 'typeorm';


export class DI {
    private static databaseConnection: Connection;
    private static buildingService: BuildingService|null = null;
    public static setDatabaseConnection(connection: Connection) {
        this.databaseConnection = connection;
    }
    public static provideDatabaseConnection() {
        return this.databaseConnection;
    }
    public static provideBuildingService() {
        if (this.buildingService == null) {
            this.buildingService = new BuildingService(new NotCacheService<BuildingShort[]>(), this.provideDatabaseConnection());
        }
        return this.buildingService;
    }
}
