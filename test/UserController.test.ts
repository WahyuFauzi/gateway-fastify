import UserController from '../src/Controller/UserController';
import axios from 'axios';

jest.mock('axios');

const controller = new UserController();

const dummyRequest = {
	query: {
		folderId: 'dummy folder id',
	},
	body: {
		email: 'dummy@email.com',
		password: 'passowrd',
		user_name: 'username',
		subscribed_space: 69420,
		used_space: 69420,
		pinned: [],
		recycle_bin: [],
	},
};

const dummyResponse = {
	statusText: 'OK',
	status: 200,
	data: {
		data: 'dummy data',
	},
};

const reply = {
	send: jest.fn(),
	cookie: jest.fn(),
};

describe('UserController - UnitTestCase', () => {
	it('create user run with expected params', async () => {
		jest.spyOn(axios, 'post').mockResolvedValue(dummyResponse);

		const spec = jest.spyOn(controller, 'createUser');
		controller.createUser(dummyRequest, reply);
		expect(spec).toBeCalledWith(dummyRequest, reply);
	});

	it('get user run with expected params', async () => {
		jest.spyOn(axios, 'get').mockResolvedValue(dummyResponse);
		const spec = jest.spyOn(controller, 'getUser');
		controller.getUser(dummyRequest, reply);
		expect(spec).toBeCalledWith(dummyRequest, reply);
	});

	it('update user run with expected params', async () => {
		jest.spyOn(axios, 'put').mockResolvedValue(dummyResponse);
		const spec = jest.spyOn(controller, 'updateUser');
		controller.updateUser(dummyRequest, reply);
		expect(spec).toBeCalledWith(dummyRequest, reply);
	});

	it('delete user run with expected params', async () => {
		jest.spyOn(axios, 'delete').mockResolvedValue({});
		const spec = jest.spyOn(controller, 'deleteUser');
		controller.deleteUser(dummyRequest, reply);
		expect(spec).toBeCalledWith(dummyRequest, reply);
	});
});
