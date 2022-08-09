export default class UpdateFolderRequest {
	constructor(responseBody: any) {
		this.item_name = responseBody.item_name;
	}

	item_name: string;
}
