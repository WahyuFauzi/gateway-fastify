export default class UpdateUserRequest {
	constructor(responseBody: any) {
		(this.password = responseBody.password),
			(this.user_name = responseBody.user_name);
		(this.subscribed_space = responseBody.subscribed_space),
			(this.used_space = responseBody.used_space);
		this.recycle_bin = responseBody.recycle_bin;
	}

	password: string;
	user_name: string;
	subscribed_space: number;
	used_space: number;
	recycle_bin: Array<string>;
}
