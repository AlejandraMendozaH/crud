import { Router } from 'express';
import contactoController from '../controllers/ContactoController';

class ContactoRouter {

    router = Router();

    constructor() { }

    setConfig(): void {

        this.router.get('/', contactoController.list);


    }

}

const contactoRouter = new ContactoRouter();
export default contactoRouter.router;