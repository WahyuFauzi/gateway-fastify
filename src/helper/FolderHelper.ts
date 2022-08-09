import axios from 'axios';
import CreateFolderRequest from '../model/folder/CreateFolderRequest';
import UpdateFolderRequest from '../model/folder/UpdateFolderRequest';

export default class FolderHelper {
	folderUrl = 'http://localhost:3003/api/v1/folder';

	async createFolder(createFolderRequest: CreateFolderRequest): Promise<any> {
		return new Promise((resolve, reject) => {
			axios
				.post(this.folderUrl, createFolderRequest)
				.then((response) => {
					resolve(response);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}

	async getFolder(folderId: string): Promise<any> {
		return new Promise((resolve, reject) => {
			axios
				.get(`${this.folderUrl}/${folderId}`)
				.then((response) => {
					resolve(response);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}

	async updateFolder(
		folderId: string,
		updateFolderRequest: UpdateFolderRequest
	): Promise<any> {
		return new Promise((resolve, reject) => {
			axios
				.put(`${this.folderUrl}/${folderId}`, updateFolderRequest)
				.then((response) => {
					resolve(response);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}

	async deleteFolder(folderId: string): Promise<any> {
		return new Promise((resolve, reject) => {
			axios
				.delete(`${this.folderUrl}/${folderId}`)
				.then((response) => {
					resolve(response);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
}
