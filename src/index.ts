import {Application} from './core/application';
import {AutorizationController} from './components/autorization/autorization-controller';
import {BuildingController} from './components/building/building-controller';
import {DeveloperController} from './components/developer/developer-controller';
import {FilterController} from './components/filter/filter-controller';
import {ReviewController} from './components/review/review-controller';

const application = Application.create().then((app) => {
    app.registerController(new AutorizationController());
    app.registerController(new BuildingController());
    app.registerController(new DeveloperController());
    app.registerController(new FilterController());
    app.registerController(new ReviewController());
}).catch((err) => {
    console.log(err);
});
