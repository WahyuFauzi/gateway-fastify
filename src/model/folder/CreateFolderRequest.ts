export default class CreateFolderRequest {
	constructor(responseBody: any) {
		this.folder_name = responseBody.folder_name;
	}
	folder_name: string;
}
