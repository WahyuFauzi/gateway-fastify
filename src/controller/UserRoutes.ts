import UserHelper from '../helper/UserHelper';
import WebResponse from '../model/WebResponse';
import CreateUserRequest from '../model/user/CreateUserRequest';
import UpdateUserRequest from '../model/user/UpdateUserRequest';
const axiosUser = new UserHelper();

export default async function (fastify) {
	fastify.post('/user', async (req, reply) => {
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

	fastify.get('/:userId', async (req: any, reply) => {
		axiosUser.getUser(req.params.userId).then((res) => {
			reply.send(new WebResponse<any>(res.statusText, res.status, res.data));
		});
	});

	fastify.put('/:userId', async (req: any, reply) => {
		const updateUserRequest: UpdateUserRequest = new UpdateUserRequest(
			req.body
		);
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

	fastify.delete('/:userId', async (req: any, reply) => {
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
}
