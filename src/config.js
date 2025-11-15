import { config } from 'dotenv';

// Cargar variables de entorno desde .env
config();

export default {
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
};