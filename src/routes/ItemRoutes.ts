import WebResponse from '../model/WebResponse';
import CreateItemRequest from '../model/item/CreateItemRequest';
import UpdateItemRequest from '../model/item/UpdateItemRequest';
import ItemHelper from '../helper/ItemHelper';

export default async function (fastify) {
	const axiosItem = new ItemHelper();

	fastify.post('/', async (req, reply) => {
		const createItemRequest: CreateItemRequest = new CreateItemRequest(
			req.body
		);
		axiosItem.createItem(createItemRequest).then((res) => {
			reply.send(
				new WebResponse<string>(
					res.statusText,
					res.status,
					'item has been uploaded'
				)
			);
		});
	});

	fastify.get('/', async (req: any, reply) => {
		axiosItem.getItem(req.query.itemId).then((res) => {
			reply.send(new WebResponse<any>(res.statusText, res.status, res.data));
		});
	});

	fastify.put('/', async (req: any, reply) => {
		const updateItemRequest: UpdateItemRequest = new UpdateItemRequest(
			req.body
		);
		axiosItem.updateItem(req.query.itemId, updateItemRequest).then((res) => {
			reply.send(
				new WebResponse<string>(
					res.statusText,
					res.status,
					`item with id: ${req.query.itemId} has been updated`
				)
			);
		});
	});

	fastify.delete('/', async (req: any, reply) => {
		axiosItem.deleteItem(req.query.itemId).then((res) => {
			reply.send(
				new WebResponse<string>(
					res.statusText,
					res.status,
					`item with id:${req.query.itemId} has been deleted`
				)
			);
		});
	});
}
