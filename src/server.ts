import { App } from './app';
import './modules/config/dotenv';

const server = new App();

server.config();
server.routes();
server.listen();
