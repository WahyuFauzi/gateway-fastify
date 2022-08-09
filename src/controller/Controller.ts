import Fastify from 'fastify';
import cors from '@fastify/cors';
import FolderHelper from '../helper/FolderHelper';
import ItemHelper from '../helper/ItemHelper';
import UserHelper from '../helper/UserHelper';
import CreateFolderRequest from '../model/folder/CreateFolderRequest';
import UpdateFolderRequest from '../model/folder/UpdateFolderRequest';
import WebResponse from '../model/WebResponse';
import CreateItemRequest from '../model/item/CreateItemRequest';
import { response } from 'express';
import UpdateItemRequest from '../model/item/UpdateItemRequest';
import axios from 'axios';
import CreateUserRequest from '../model/user/CreateUserRequest';
import UpdateUserRequest from '../model/user/UpdateUserRequest';

const port = 3000;

const fastify = Fastify();
fastify.register(cors, {
	origin: '*',
});

// folder service

const axiosFolder = new FolderHelper();

fastify.post('/gateway/folder', async (req, reply) => {
	const createFolderRequest: CreateFolderRequest = new CreateFolderRequest(
		req.body
	);
	axiosFolder.createFolder(createFolderRequest).then((res) => {
		reply.send(
			new WebResponse<string>(
				res.statusText,
				res.status,
				'folder has been created'
			)
		);
	});
});

fastify.get('/gateway/folder/:folderId', async (req: any, reply) => {
	const res = await axiosFolder.getFolder(req.params.folderId);
	reply.send(new WebResponse<any>(res.statusText, res.status, res.data));
});

fastify.put('/gateway/folder/:folderId', async (req: any, reply) => {
	const updateFolderRequest: UpdateFolderRequest = new UpdateFolderRequest(
		req.body
	);
	axiosFolder
		.updateFolder(req.params.folderId, updateFolderRequest)
		.then(() => {
			reply.send({
				status: 'OK',
				code: 200,
				data: `folder with id: ${req.params.folderId} has been updated`,
			});
		});
});

fastify.delete('/gateway/folder/:folderId', async (req: any, reply) => {
	axiosFolder.deleteFolder(req.params.folderId).then(() => {
		reply.send({
			status: 'OK',
			code: 200,
			data: `folder with id: ${req.params.folderId} has been deleted`,
		});
	});
});

// item service

const axiosItem = new ItemHelper();

fastify.post('/gateway/item', async (req, reply) => {
	const createItemRequest: CreateItemRequest = new CreateItemRequest(req.body);
	axiosItem.createItem(createItemRequest).then((res) => {
		reply.send(
			new WebResponse<string>(
				res.statusText,
				res.status,
				'item has been uploaded'
			)
		);
	});
});

fastify.get('/gateway/item/:itemId', async (req: any, reply) => {
	axiosItem.getItem(req.params.itemId).then((res) => {
		reply.send(new WebResponse<any>(res.statusText, res.status, res.data));
	});
});

fastify.put('/gateway/item/:itemId', async (req: any, reply) => {
	const updateItemRequest: UpdateItemRequest = new UpdateItemRequest(req.body);
	axiosItem.updateItem(req.params.itemId, updateItemRequest).then((res) => {
		reply.send(
			new WebResponse<string>(
				res.statusText,
				res.status,
				'item name has been changed'
			)
		);
	});
});

fastify.delete('/gateway/item/:itemId', async (req: any, reply) => {
	axiosItem.deleteItem(req.params.itemId).then((res) => {
		reply.send(
			new WebResponse<string>(
				res.statusText,
				res.status,
				`item with id:${req.params.itemId} has been deleted`
			)
		);
	});
});

// user service

const axiosUser = new UserHelper();

fastify.post('/gateway/user', async (req, reply) => {
	const createUserRequest: CreateUserRequest = new CreateUserRequest(req.body);
	axiosUser.createUser(createUserRequest).then((res) => {
		reply.send(
			new WebResponse<string>(
				res.statusText,
				res.status,
				'user has been created'
			)
		);
	});
});

fastify.get('/gateway/user/:userId', async (req: any, reply) => {
	axiosUser.getUser(req.params.userId).then((res) => {
		reply.send(new WebResponse<any>(res.statusText, res.status, res.data));
	});
});

fastify.put('/gateway/user/:userId', async (req: any, reply) => {
	const updateUserRequest: UpdateUserRequest = new UpdateUserRequest(req.body);
	axiosUser.updateUser(req.params.userId, updateUserRequest).then((res) => {
		reply.send(
			new WebResponse<string>(
				res.statusText,
				res.status,
				`user data with id:${req.params.userId} name has been changed`
			)
		);
	});
});

fastify.delete('/gateway/user/:userId', async (req: any, reply) => {
	axiosUser.deleteUser(req.params.userId).then((res) => {
		reply.send(
			new WebResponse<string>(
				res.statusText,
				res.status,
				`user with id:${req.params.userId} has been deleted`
			)
		);
	});
});

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
