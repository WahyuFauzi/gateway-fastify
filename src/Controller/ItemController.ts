import WebResponse from '../model/WebResponse';
import CreateItemRequest from '../model/item/CreateItemRequest';
import UpdateItemRequest from '../model/item/UpdateItemRequest';
import axios from 'axios';

export default class ItemController {
	private itemUrl = 'http://localhost:3003/api/v1/item';

	async createItem(req, reply) {
		const createItemRequest: CreateItemRequest = new CreateItemRequest(
			req.body
		);

		const res = await axios.post(this.itemUrl, createItemRequest);

		reply.send(new WebResponse(res.statusText, res.status, res.data.data));
	}

	async getItem(req: any, reply) {
		const res = await axios.get(`${this.itemUrl}/?itemId=${req.query.itemId}`);
		reply.send(new WebResponse(res.statusText, res.status, res.data.data));
	}

	async updateItem(req: any, reply) {
		const updateItemRequest: UpdateItemRequest = new UpdateItemRequest(
			req.body
		);

		const res = await axios.put(
			`${this.itemUrl}/?itemId=${req.query.itemId}`,
			updateItemRequest
		);

		reply.send(new WebResponse(res.statusText, res.status, res.data.data));
	}

	async deleteItem(req: any, reply) {
		axios.delete(`${this.itemUrl}/?itemId=${req.query.itemId}`);
		reply.send(
			new WebResponse(
				'OK',
				200,
				`item with id: ${req.query.params} has been deleted`
			)
		);
	}
}
