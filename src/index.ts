import dotenv from 'dotenv';

dotenv.config();

const id = crypto.randomUUID();

console.log(typeof id);

console.log(crypto.randomUUID().toString());