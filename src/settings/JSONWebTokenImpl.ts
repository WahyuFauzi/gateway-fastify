import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import WebResponse from '../model/WebResponse';
dotenv.config();

class JWTClass {
	signJWT(id) {
		const token = jwt.sign({ id: id }, process.env.SECRET_KEY, {
			algorithm: 'RS256',
		});
		return token;
	}

	verify(req, reply) {
		let decoded;
		try {
			decoded = jwt.verify(req.cookies.cookieName, process.env.SECRET_KEY, {
				algorithm: 'HS256',
			});
		} catch (err) {
			if (err) {
				reply.send(
					new WebResponse<string>('UNAUTHORIZED', 400, 'JWT UNAUTHORIZED')
				);
			}
		}
		return decoded;
	}
}

const JwtImplement = new JWTClass();

export default JwtImplement;
