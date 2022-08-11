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

	fastify.get('/:folderId', async (req: any, reply) => {
		const res = await axiosFolder.getFolder(req.params.folderId);
		reply.send(new WebResponse<any>(res.statusText, res.status, res.data));
	});

	fastify.put('/:folderId', async (req: any, reply) => {
		const updateFolderRequest: UpdateFolderRequest = new UpdateFolderRequest(
			req.body
		);
		axiosFolder
			.updateFolder(req.params.folderId, updateFolderRequest)
			.then(() => {
				reply.send({
					status: 'OK',
					code: 200,
					data: `folder with id: ${req.params.folderId} has been updated`,
				});
			});
	});

	fastify.delete('/:folderId', async (req: any, reply) => {
		axiosFolder.deleteFolder(req.params.folderId).then(() => {
			reply.send({
				status: 'OK',
				code: 200,
				data: `folder with id: ${req.params.folderId} has been deleted`,
			});
		});
	});
}
