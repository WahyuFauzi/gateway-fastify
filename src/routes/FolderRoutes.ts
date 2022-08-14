import FolderController from '../Controller/FolderController';
const controller: FolderController = new FolderController();

export default async function (fastify) {
	fastify.post(
		'/',
		async (req, reply) => await controller.createFolder(req, reply)
	);
	fastify.get(
		'/',
		async (req, reply) => await controller.getFolder(req, reply)
	);
	fastify.put(
		'/',
		async (req, reply) => await controller.updateFolder(req, reply)
	);
	fastify.delete(
		'/',
		async (req, reply) => await controller.deleteFolder(req, reply)
	);
}
