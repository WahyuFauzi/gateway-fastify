import FolderHelper from '../helper/FolderHelper';
import CreateFolderRequest from '../model/folder/CreateFolderRequest';
import UpdateFolderRequest from '../model/folder/UpdateFolderRequest';
import JwtImplement from '../settings/JsonWebTokenImpl';
import WebResponse from '../model/WebResponse';

const axiosFolder = new FolderHelper();

export default class FolderController {
	createFolder(req, reply) {
		const createFolderRequest: CreateFolderRequest = new CreateFolderRequest(
			req.body
		);

		axiosFolder.createFolder(createFolderRequest).then((res) => {
			//const token = JwtImplement.signJWT(res.data.data.id);
			reply.send(
				new WebResponse<string>(res.statusText, res.status, res.data.data)
			);
		});
	}

	getFolder(req, reply) {
		axiosFolder.getFolder(req.query.folderId).then((res) => {
			//reply.cookie('csrf', JsonWebToken.signJWT(res.data.data.id));
			reply.send(
				new WebResponse<string>(res.statusText, res.status, res.data.data)
			);
		});
	}

	async updateFolder(req, reply) {
		const updateFolderRequest: UpdateFolderRequest = new UpdateFolderRequest(
			req.body
		);

		//JsonWebToken.verify(req, reply);

		axiosFolder
			.updateFolder(req.query.folderId, updateFolderRequest)
			.then((res) => {
				reply.send(
					new WebResponse<string>(res.statusText, res.status, res.data.data)
				);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	async deleteFolder(req, reply) {
		//JsonWebToken.verify(req, reply);

		axiosFolder.deleteFolder(req.query.folderId).then((res) => {
			reply.send(
				new WebResponse<string>(
					res.statusText,
					res.status,
					`folder with id: ${req.query.folderId} has been deleted`
				)
			);
		});
	}
}
