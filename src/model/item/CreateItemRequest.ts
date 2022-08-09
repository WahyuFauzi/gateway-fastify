export default class CreateItemRequest {
	constructor(responseBody: any) {
		(this.item_name = responseBody.item_name),
			(this.item_total_size = responseBody.item_total_size);
	}

	item_name: string;
	item_total_size: number;
}
