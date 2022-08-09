import axios from 'axios';
import CreateItemRequest from '../model/item/CreateItemRequest';
import UpdateItemRequest from '../model/item/UpdateItemRequest';
export default class ItemHelper {
	itemUrl = 'http://localhost:3003/api/v1/item';

	async createItem(createItemRequest: CreateItemRequest): Promise<any> {
		return new Promise((resolve, reject) => {
			axios
				.post(this.itemUrl, createItemRequest)
				.then((response) => {
					resolve(response);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}

	async getItem(itemId: string): Promise<any> {
		return new Promise((resolve, reject) => {
			axios
				.get(`${this.itemUrl}/${itemId}`)
				.then((response) => {
					resolve(response);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}

	async updateItem(
		itemId: string,
		updateItemRequest: UpdateItemRequest
	): Promise<any> {
		return new Promise((resolve, reject) => {
			axios
				.put(`${this.itemUrl}/${itemId}`, updateItemRequest)
				.then((response) => {
					resolve(response);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}

	async deleteItem(itemId: string): Promise<any> {
		return new Promise((resolve, reject) => {
			axios
				.delete(`${this.itemUrl}/${itemId}`)
				.then((response) => {
					resolve(response);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
}
