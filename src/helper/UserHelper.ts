import axios from 'axios';
import CreateUserRequest from '../model/user/CreateUserRequest';
import UpdateUserRequest from '../model/user/UpdateUserRequest';
export default class UserHelper {
	userUrl = 'http://localhost:3002/api/v1/user';

	async createUser(createUserRequest: CreateUserRequest): Promise<any> {
		return new Promise((resolve, reject) => {
			axios
				.post(this.userUrl, createUserRequest)
				.then((response) => {
					resolve(response);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}

	async getUser(userId: string): Promise<any> {
		return new Promise((resolve, reject) => {
			axios
				.get(`${this.userUrl}/${userId}`)
				.then((response) => {
					resolve(response);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}

	async updateUser(
		userId: string,
		updateUserRequest: UpdateUserRequest
	): Promise<any> {
		return new Promise((resolve, reject) => {
			axios
				.put(`${this.userUrl}/${userId}`, updateUserRequest)
				.then((response) => {
					resolve(response);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}

	async deleteUser(userId: string): Promise<any> {
		return new Promise((resolve, reject) => {
			axios
				.delete(`${this.userUrl}/${userId}`)
				.then((response) => {
					resolve(response);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
}
