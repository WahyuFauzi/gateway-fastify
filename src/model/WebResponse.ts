export default class WebResponse<T> {
	constructor(status: string, code: number, data: T) {
		(this.status = status), (this.code = code), (this.data = data);
	}
	status: string;
	code: number;
	data: T;
}
