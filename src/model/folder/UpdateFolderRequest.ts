export default class UpdateFolderRequest {
	constructor(responseBody: any) {
		(this.folder_name = responseBody.folder_name),
			(this.nested_folders = responseBody.nested_folders),
			(this.items = responseBody.items);
	}
	folder_name: string;
	nested_folders: Array<string>;
	items: Array<string>;
}
