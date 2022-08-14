export default class CreateUserRequest {
	constructor(requestBody: any) {
		(this.email = requestBody.email), (this.password = requestBody.password);
		this.user_name = requestBody.user_name;
	}
	email: string;
	password: string;
	user_name: string;
}
