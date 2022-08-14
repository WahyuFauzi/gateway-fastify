import UserHelper from '../helper/UserHelper';
import WebResponse from '../model/WebResponse';
import CreateUserRequest from '../model/user/CreateUserRequest';
import UpdateUserRequest from '../model/user/UpdateUserRequest';
import JWTClass from '../settings/JsonWebTokenImpl';

export default class UserController {
	constructor(axiosUser: UserHelper, JsonWebToken: JWTClass) {
		(this.axiosUser = axiosUser), (this.JsonWebToken = JsonWebToken);
	}

	private axiosUser: UserHelper;
	private JsonWebToken: JWTClass;

	createUser(req, reply) {
		const createUserRequest: CreateUserRequest = new CreateUserRequest(
			req.body
		);
		this.axiosUser.createUser(createUserRequest).then((res) => {
			reply.send(
				new WebResponse<string>(
					res.statusText,
					res.status,
					'user has been created'
				)
			);
		});
	}

	getUser(req: any, reply) {
		this.axiosUser.getUser(req.query.userId).then((res) => {
			reply.send(new WebResponse<any>(res.statusText, res.status, res.data));
		});
	}

	updateUser(req: any, reply) {
		const updateUserRequest: UpdateUserRequest = new UpdateUserRequest(
			req.body
		);
		this.axiosUser
			.updateUser(req.query.userId, updateUserRequest)
			.then((res) => {
				reply.send(
					new WebResponse<string>(
						res.statusText,
						res.status,
						`user data with id:${req.query.userId} name has been changed`
					)
				);
			});
	}
	deleteUser(req: any, reply) {
		this.axiosUser.deleteUser(req.query.userId).then((res) => {
			reply.send(
				new WebResponse<string>(
					res.statusText,
					res.status,
					`user with id:${req.query.userId} has been deleted`
				)
			);
		});
	}
}
