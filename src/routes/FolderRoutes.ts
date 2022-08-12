import FolderHelper from '../helper/FolderHelper';
import CreateFolderRequest from '../model/folder/CreateFolderRequest';
import UpdateFolderRequest from '../model/folder/UpdateFolderRequest';
import WebResponse from '../model/WebResponse';
import JWTImpl from '../settings/JSONWebTokenImpl';

const axiosFolder = new FolderHelper();

export default async function (fastify) {
	fastify.post('/', async (req, reply) => {
		const createFolderRequest: CreateFolderRequest = new CreateFolderRequest(
			req.body
		);
		axiosFolder.createFolder(createFolderRequest).then((res) => {
			reply.send(
				new WebResponse<string>(
					res.statusText,
					res.status,
					'folder has been created'
				)
			);
		});
	});

	fastify.get('/', async (req: any, reply) => {
		const res = await axiosFolder.getFolder(req.query.folderId);
		reply.send(new WebResponse<any>(res.statusText, res.status, res.data));
	});

	fastify.put('/', async (req: any, reply) => {
		const updateFolderRequest: UpdateFolderRequest = new UpdateFolderRequest(
			req.body
		);
		axiosFolder
			.updateFolder(req.query.folderId, updateFolderRequest)
			.then(() => {
				reply.send({
					status: 'OK',
					code: 200,
					data: `folder with id: ${req.query.folderId} has been updated`,
				});
			});
	});

	fastify.delete('/', async (req: any, reply) => {
		axiosFolder.deleteFolder(req.query.folderId).then(() => {
			reply.send({
				status: 'OK',
				code: 200,
				data: `folder with id: ${req.query.folderId} has been deleted`,
			});
		});
	});
}
