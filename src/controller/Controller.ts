import Fastify from 'fastify';
import cors from '@fastify/cors';
import FolderHelper from '../helper/FolderHelper';
import ItemHelper from '../helper/ItemHelper';
import UserHelper from '../helper/UserHelper';
import CreateFolderRequest from '../model/folder/CreateFolderRequest';
import UpdateFolderRequest from '../model/folder/UpdateFolderRequest';
import WebResponse from '../model/WebResponse';
import CreateItemRequest from '../model/item/CreateItemRequest';
import UpdateItemRequest from '../model/item/UpdateItemRequest';
import CreateUserRequest from '../model/user/CreateUserRequest';
import UpdateUserRequest from '../model/user/UpdateUserRequest';

const port = 3000;

const fastify = Fastify();
fastify.register(cors, {
	origin: '*',
});

fastify.register(require('./FolderRoutes'), { prefix: 'gw/folder' }); //folder routes
fastify.register(require('./ItemRoutes'), { prefix: 'gw/item' }); //item routes
fastify.register(require('./UserRoutes'), { prefix: 'gw/user' }); //user routes

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
