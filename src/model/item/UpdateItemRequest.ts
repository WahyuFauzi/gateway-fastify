export default class UpdateFolderRequest {
	constructor(requestBody: any) {
		this.item_name = requestBody.item_name;
	}

	item_name: string;
}
