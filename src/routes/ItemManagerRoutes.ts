import ItemManagerController from '../Controller/ItemManagerController';
const controller = new ItemManagerController();

export default async function (fastify): Promise<void> {
	fastify.post(
		'/upload',
		async (req, reply) => await controller.uploadPatialItem(req, reply)
	);
	fastify.post(
		'/trigger-upload',
		async (req, reply) => await controller.triggerUploadToBlob(req, reply)
	);
}
