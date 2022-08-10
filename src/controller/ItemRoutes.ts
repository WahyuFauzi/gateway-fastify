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

	fastify.get('/:itemId', async (req: any, reply) => {
		axiosItem.getItem(req.params.itemId).then((res) => {
			reply.send(new WebResponse<any>(res.statusText, res.status, res.data));
		});
	});

	fastify.put('/:itemId', async (req: any, reply) => {
		const updateItemRequest: UpdateItemRequest = new UpdateItemRequest(
			req.body
		);
		axiosItem.updateItem(req.params.itemId, updateItemRequest).then((res) => {
			reply.send(
				new WebResponse<string>(
					res.statusText,
					res.status,
					'item name has been changed'
				)
			);
		});
	});

	fastify.delete('/:itemId', async (req: any, reply) => {
		axiosItem.deleteItem(req.params.itemId).then((res) => {
			reply.send(
				new WebResponse<string>(
					res.statusText,
					res.status,
					`item with id:${req.params.itemId} has been deleted`
				)
			);
		});
	});
}
