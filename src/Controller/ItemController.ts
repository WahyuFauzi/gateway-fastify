import WebResponse from '../model/WebResponse';
import CreateItemRequest from '../model/item/CreateItemRequest';
import UpdateItemRequest from '../model/item/UpdateItemRequest';
import ItemHelper from '../helper/ItemHelper';
import JWTClass from '../settings/JsonWebTokenImpl';

export default class ItemController {
	constructor(axiosItem: ItemHelper, JsonWebToken: JWTClass) {
		(this.axiosItem = axiosItem), (this.JsonWebToken = JsonWebToken);
	}

	private axiosItem: ItemHelper;
	private JsonWebToken: JWTClass;

	createItem(req, reply) {
		this.JsonWebToken.verify(req, reply);
		const createItemRequest: CreateItemRequest = new CreateItemRequest(
			req.body
		);
		this.axiosItem.createItem(createItemRequest).then((res) => {
			reply.send(
				new WebResponse<string>(
					res.statusText,
					res.status,
					'item has been uploaded'
				)
			);
		});
	}

	getItem(req: any, reply) {
		this.JsonWebToken.verify(req, reply);
		this.axiosItem.getItem(req.query.itemId).then((res) => {
			reply.send(new WebResponse<any>(res.statusText, res.status, res.data));
		});
	}

	updateItem(req: any, reply) {
		this.JsonWebToken.verify(req, reply);
		const updateItemRequest: UpdateItemRequest = new UpdateItemRequest(
			req.body
		);
		this.axiosItem
			.updateItem(req.query.itemId, updateItemRequest)
			.then((res) => {
				reply.send(
					new WebResponse<string>(
						res.statusText,
						res.status,
						`item with id: ${req.query.itemId} has been updated`
					)
				);
			});
	}

	deleteItem(req: any, reply) {
		this.JsonWebToken.verify(req, reply);
		this.axiosItem.deleteItem(req.query.itemId).then((res) => {
			reply.send(
				new WebResponse<string>(
					res.statusText,
					res.status,
					`item with id:${req.query.itemId} has been deleted`
				)
			);
		});
	}
}
