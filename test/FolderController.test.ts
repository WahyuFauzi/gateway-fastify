import FolderController from '../src/Controller/FolderController';
import FolderHelper from '../src/helper/FolderHelper';
import CreateFolderRequest from '../src/model/folder/CreateFolderRequest';
import JWTClass from '../src/settings/JsonWebTokenImpl';

jest.mock('../src/helper/FolderHelper');
jest.mock('../src/settings/JsonWebTokenImpl');

const helper = new FolderHelper();
const jwt = new JWTClass();
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

const createFolderRequestDummy: CreateFolderRequest = new CreateFolderRequest(
	dummyRequest.body
);

const mockedValue = {
	dummy: 'dummy',
};

const reply = {
	send: jest.fn(),
	cookie: jest.fn(),
};

describe('FolderController - UnitTestCase', () => {
	it('create folder run with expected params', async () => {
		jest
			.spyOn(helper, 'createFolder')
			.mockImplementation(jest.fn(() => Promise.resolve(dummyResponse)));
		const spec = jest.spyOn(controller, 'createFolder');
		controller.createFolder(dummyRequest, reply);
		expect(spec).toBeCalledWith(dummyRequest, reply);
	});

	it('get folder run with expected params', async () => {
		jest
			.spyOn(helper, 'getFolder')
			.mockImplementation(jest.fn(() => Promise.resolve(dummyResponse)));
		const spec = jest.spyOn(controller, 'getFolder');
		controller.getFolder(dummyRequest, reply);
		expect(spec).toBeCalledWith(dummyRequest, reply);
	});

	it('update folder run with expected params', async () => {
		jest
			.spyOn(helper, 'updateFolder')
			.mockImplementation(jest.fn(() => Promise.resolve(dummyResponse)));
		const spec = jest.spyOn(controller, 'updateFolder');
		controller.updateFolder(dummyRequest, reply);
		expect(spec).toBeCalledWith(dummyRequest, reply);
	});

	it('delete folder run with expected params', async () => {
		jest
			.spyOn(helper, 'deleteFolder')
			.mockImplementation(jest.fn(() => Promise.resolve(dummyResponse)));
		const spec = jest.spyOn(controller, 'deleteFolder');
		controller.deleteFolder(dummyRequest, reply);
		expect(spec).toBeCalledWith(dummyRequest, reply);
	});
});
