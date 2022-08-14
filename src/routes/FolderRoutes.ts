import FolderController from '../Controller/FolderController';
const controller: FolderController = new FolderController();

export default async function (fastify) {
	fastify.post('/', controller.createFolder);
	fastify.get('/', controller.getFolder);
	fastify.put('/', controller.updateFolder);
	fastify.delete('/', controller.deleteFolder);
}
