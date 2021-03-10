import { Router } from 'express';

import DevController from './app/controllers/DevController';
import SearchController from './app/controllers/SearchController';

import validatedDev from './app/validators/Dev';
import validatedSearch from './app/validators/Search';

const routes = new Router();

routes.get('/search', validatedSearch, SearchController.index);

routes.get('/devs', DevController.index);
routes.post('/devs', validatedDev, DevController.store);
routes.delete('/devs/:id', DevController.delete);

export default routes;
