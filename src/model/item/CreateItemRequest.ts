export default class CreateItemRequest {
	constructor(requestBody: any) {
		(this.item_name = requestBody.item_name),
			(this.item_total_size = requestBody.item_total_size);
	}

	item_name: string;
	item_total_size: number;
}
