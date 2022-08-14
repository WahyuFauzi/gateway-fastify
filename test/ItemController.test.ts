import ItemController from '../src/Controller/ItemController';
import axios from 'axios';

jest.mock('axios');

const controller = new ItemController();

const dummyRequest = {
	query: {
		folderId: 'dummy folder id',
	},
	body: {
		item_name: 'dummy folder',
		item_total_size: 69420,
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

describe('FolderController - UnitTestCase', () => {
	it('create item run with expected params', async () => {
		jest.spyOn(axios, 'post').mockResolvedValue(dummyResponse);
		const spec = jest.spyOn(controller, 'createItem');
		controller.createItem(dummyRequest, reply);
		expect(spec).toBeCalledWith(dummyRequest, reply);
	});

	it('get item run with expected params', async () => {
		jest.spyOn(axios, 'get').mockResolvedValue(dummyResponse);
		const spec = jest.spyOn(controller, 'getItem');
		controller.getItem(dummyRequest, reply);
		expect(spec).toBeCalledWith(dummyRequest, reply);
	});

	it('update item run with expected params', async () => {
		jest.spyOn(axios, 'put').mockResolvedValue(dummyResponse);
		const spec = jest.spyOn(controller, 'updateItem');
		controller.updateItem(dummyRequest, reply);
		expect(spec).toBeCalledWith(dummyRequest, reply);
	});

	it('delete item run with expected params', async () => {
		jest.spyOn(axios, 'delete').mockResolvedValue({});
		const spec = jest.spyOn(controller, 'deleteItem');
		controller.deleteItem(dummyRequest, reply);
		expect(spec).toBeCalledWith(dummyRequest, reply);
	});
});
