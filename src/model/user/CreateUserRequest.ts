export default class CreateUserRequest {
	constructor(responseBody: any) {
		(this.email = responseBody.email), (this.password = responseBody.password);
		this.user_name = responseBody.user_name;
	}
	email: string;
	password: string;
	user_name: string;
}
