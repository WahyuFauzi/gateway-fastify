import UserController from '../Controller/UserController';
const controller = new UserController();

export default async function (fastify) {
	fastify.post(
		'/',
		async (req, reply) => await controller.createUser(req, reply)
	);
	fastify.get('/', async (req, reply) => await controller.getUser(req, reply));
	fastify.put(
		'/',
		async (req, reply) => await controller.updateUser(req, reply)
	);
	fastify.delete(
		'/',
		async (req, reply) => await controller.deleteUser(req, reply)
	);
}
