import WebResponse from '../model/WebResponse';
import CreateUserRequest from '../model/user/CreateUserRequest';
import UpdateUserRequest from '../model/user/UpdateUserRequest';
import JWTClass from '../settings/JsonWebTokenImpl';
import axios from 'axios';

export default class UserController {
	private userUrl = 'http://localhost:3003/api/v1/user';
	async createUser(req, reply) {
		const createUserRequest: CreateUserRequest = new CreateUserRequest(
			req.body
		);
		const res = await axios.post(this.userUrl, createUserRequest);
		reply.send(new WebResponse(res.statusText, res.status, res.data.data));
	}

	async getUser(req: any, reply) {
		const res = await axios.get(`${this.userUrl}/?userId=${req.query.userId}`);
		reply.send(new WebResponse(res.statusText, res.status, res.data.data));
	}

	async updateUser(req: any, reply) {
		const updateUserRequest: UpdateUserRequest = new UpdateUserRequest(
			req.body
		);
		const res = await axios.put(
			`${this.userUrl}/?userId=${req.query.userId}`,
			updateUserRequest
		);
		reply.send(new WebResponse(res.statusText, res.status, res.data.data));
	}

	async deleteUser(req: any, reply) {
		axios.get(`${this.userUrl}/?userId=${req.query.userId}`);
		reply.send(
			new WebResponse(
				'OK',
				200,
				`user with id: ${req.query.params} has been deleted`
			)
		);
	}
}
