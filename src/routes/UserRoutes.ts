import UserHelper from '../helper/UserHelper';
import WebResponse from '../model/WebResponse';
import CreateUserRequest from '../model/user/CreateUserRequest';
import UpdateUserRequest from '../model/user/UpdateUserRequest';
const axiosUser = new UserHelper();

export default async function (fastify) {
	fastify.post('/', async (req, reply) => {
		const createUserRequest: CreateUserRequest = new CreateUserRequest(
			req.body
		);
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

	fastify.get('/', async (req: any, reply) => {
		axiosUser.getUser(req.query.userId).then((res) => {
			reply.send(new WebResponse<any>(res.statusText, res.status, res.data));
		});
	});

	fastify.put('/', async (req: any, reply) => {
		const updateUserRequest: UpdateUserRequest = new UpdateUserRequest(
			req.body
		);
		axiosUser.updateUser(req.query.userId, updateUserRequest).then((res) => {
			reply.send(
				new WebResponse<string>(
					res.statusText,
					res.status,
					`user data with id:${req.query.userId} name has been changed`
				)
			);
		});
	});

	fastify.delete('/', async (req: any, reply) => {
		axiosUser.deleteUser(req.query.userId).then((res) => {
			reply.send(
				new WebResponse<string>(
					res.statusText,
					res.status,
					`user with id:${req.query.userId} has been deleted`
				)
			);
		});
	});
}
