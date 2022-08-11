import fs from 'fs';
import path from 'path';

let processBank: Array<string>;

// upload item

// merge item

export default async function (fastify) {
	fastify.post('/upload', async (req, reply) => {
		const data = await req.file();
		const fileName = await data.filename;
		const fileBuffer = await data.toBuffer();

		fs.writeFile(
			path.join(process.cwd(), `/files/${fileName}`),
			fileBuffer,
			() => {
				processBank.push(fileName);
			}
		);
	});

	fastify.get('/download', async (req, reply) => {
		//get item from cloud
	});

	//fastify.delete('/delete-file/:fileId', async (req, reply) => {
	//	const fileId = req.params.fileId;
	//	console.log(fileId);
	//	fs.unlink(path.join(process.cwd(), `/files/${fileId}`), () => {
	//		console.log('running');
	//	});
	//});
}
