export default class UpdateUserRequest {
	constructor(requestBody: any) {
		(this.password = requestBody.password),
			(this.user_name = requestBody.user_name);
		(this.subscribed_space = requestBody.subscribed_space),
			(this.used_space = requestBody.used_space);
		this.pinned = requestBody.pinned;
		this.recycle_bin = requestBody.recycle_bin;
	}

	password: string;
	user_name: string;
	subscribed_space: number;
	used_space: number;
	pinned: Array<string>;
	recycle_bin: Array<string>;
}
