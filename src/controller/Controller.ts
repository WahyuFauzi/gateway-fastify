import Fastify from 'fastify';
import cors from '@fastify/cors';
import * as dotenv from 'dotenv';

dotenv.config();

const port = parseInt(process.env.PORT || '');
const fastify = Fastify();

fastify.register(cors, {
	origin: '*',
});
fastify.register(require('@fastify/multipart'));

fastify.register(require('../routes/ItemManager'), { prefix: 'gw/im' });
fastify.register(require('../routes/FolderRoutes'), { prefix: 'gw/folder' }); //folder routes
fastify.register(require('../routes/ItemRoutes'), { prefix: 'gw/item' }); //item routes
fastify.register(require('../routes/UserRoutes'), { prefix: 'gw/user' }); //user routes

// start gateway
const start = async () => {
	try {
		await fastify
			.listen({ port: port })
			.then(() => console.log('success running'));
	} catch (err) {
		fastify.log.error(err);
		process.exit(1);
	}
};

start();
