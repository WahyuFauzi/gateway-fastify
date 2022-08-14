import CreateFolderRequest from '../model/folder/CreateFolderRequest';
import UpdateFolderRequest from '../model/folder/UpdateFolderRequest';
import JwtImplement from '../settings/JsonWebTokenImpl';
import WebResponse from '../model/WebResponse';
import axios from 'axios';

export default class FolderController {
	private folderUrl = 'http://localhost:3003/api/v1/folder';

	async createFolder(req, reply) {
		const createFolderRequest: CreateFolderRequest = new CreateFolderRequest(
			req.body
		);
		const res = await axios.post(this.folderUrl, createFolderRequest);
		reply.send(new WebResponse(res.statusText, res.status, res.data.data));
	}

	async getFolder(req, reply) {
		const res = await axios.get(
			`${this.folderUrl}/?folderId=${req.query.params}`
		);
		reply.send(new WebResponse(res.statusText, res.status, res.data.data));
	}

	async updateFolder(req, reply) {
		const updateFolderRequest: UpdateFolderRequest = new UpdateFolderRequest(
			req.body
		);
		const res = await axios.put(
			`${this.folderUrl}/?folderId=${req.query.params}`,
			updateFolderRequest
		);
		reply.send(new WebResponse(res.statusText, res.status, res.data.data));
	}

	async deleteFolder(req, reply) {
		axios.delete(`${this.folderUrl}/?folderId=${req.query.params}`);
		reply.send(
			new WebResponse(
				'OK',
				200,
				`folder with id: ${req.query.params} has been deleted`
			)
		);
	}
}
