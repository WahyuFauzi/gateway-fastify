import FolderController from '../src/Controller/FolderController';
import axios from 'axios';

jest.mock('axios');

const controller = new FolderController();

const dummyRequest = {
	query: {
		folderId: 'dummy folder id',
	},
	body: {
		folder_name: 'dummy folder',
		nested_folders: ['dummy nested folder 1', 'dummy nested folder 2'],
		items: ['item 1', 'item 2'],
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
	it('create folder run with expected params', async () => {
		jest.spyOn(axios, 'post').mockResolvedValue(dummyResponse);

		const spec = jest.spyOn(controller, 'createFolder');
		controller.createFolder(dummyRequest, reply);
		expect(spec).toBeCalledWith(dummyRequest, reply);
	});

	it('get folder run with expected params', async () => {
		jest.spyOn(axios, 'get').mockResolvedValue(dummyResponse);
		const spec = jest.spyOn(controller, 'getFolder');
		controller.getFolder(dummyRequest, reply);
		expect(spec).toBeCalledWith(dummyRequest, reply);
	});

	it('update folder run with expected params', async () => {
		jest.spyOn(axios, 'put').mockResolvedValue(dummyResponse);
		const spec = jest.spyOn(controller, 'updateFolder');
		controller.updateFolder(dummyRequest, reply);
		expect(spec).toBeCalledWith(dummyRequest, reply);
	});

	it('delete folder run with expected params', async () => {
		jest.spyOn(axios, 'delete').mockResolvedValue({});
		const spec = jest.spyOn(controller, 'deleteFolder');
		controller.deleteFolder(dummyRequest, reply);
		expect(spec).toBeCalledWith(dummyRequest, reply);
	});
});
