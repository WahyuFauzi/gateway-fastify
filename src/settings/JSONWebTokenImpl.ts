import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();

class JWTClass {
	signJWT(id) {
		const token = jwt.sign({ id: id }, process.env.SECRET_KEY);
		return token;
	}

	verify(token) {
		const decoded = jwt.verify(token, process.env.SECRET_KEY);
		return decoded;
	}
}

const JWTImpl = new JWTClass();

export default JWTImpl;
