import {Request, Response} from 'express';
import cnn from '../dbconfig/ConexionDB';


class ContactoController{

    public async list(req:Request, resp:Response):Promise<any>{

        const c = await cnn.query('SELECT * FROM contacto');
        resp.json(c);

    }


}

const contactoController = new ContactoController();
export default contactoController;