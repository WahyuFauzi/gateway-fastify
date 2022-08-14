import ItemController from '../Controller/ItemController';
const controller = new ItemController();

export default async function (fastify) {
	fastify.post(
		'/',
		async (req, reply) => await controller.createItem(req, reply)
	);
	fastify.get('/', async (req, reply) => await controller.getItem(req, reply));
	fastify.put(
		'/',
		async (req, reply) => await controller.updateItem(req, reply)
	);
	fastify.delete(
		'/',
		async (req, reply) => await controller.deleteItem(req, reply)
	);
}
