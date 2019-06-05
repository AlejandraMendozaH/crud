"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConexionDB_1 = __importDefault(require("../dbconfig/ConexionDB"));
class ContactoController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const c = yield ConexionDB_1.default.query('SELECT * FROM contacto');
            resp.json(c);
        });
    }
}
const contactoController = new ContactoController();
exports.default = contactoController;
