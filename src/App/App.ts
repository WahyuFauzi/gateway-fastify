import Fastify from 'fastify';
import cors from '@fastify/cors';
import * as dotenv from 'dotenv';

dotenv.config();

const fastify = Fastify();

fastify.register(cors, {
	origin: '*',
});
fastify.register(require('@fastify/cookie'), {
	secret: process.env.SECRET_KEY, // for cookies signature
	parseOptions: {}, // options for parsing cookies
});
fastify.register(require('@fastify/multipart'));

//fastify.register(require('../routes/ItemManagerRoutes'), { prefix: 'gw/im' });
fastify.register(require('../routes/FolderRoutes'), { prefix: 'gw/folder' }); //folder routes
//fastify.register(require('../routes/ItemRoutes'), { prefix: 'gw/item' }); //item routes
//fastify.register(require('../routes/UserRoutes'), { prefix: 'gw/user' }); //user routes

export default fastify;
