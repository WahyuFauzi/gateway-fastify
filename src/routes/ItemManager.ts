import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import fileCondition from '../state/FilesCondition';

//TODO create backpressure mechanism

export default async function (fastify): Promise<void> {
	fastify.post('/upload', async (req, reply) => {
		const data = await req.file();
		const fileId: string = await data.filename;
		const fileBuffer: Buffer = await data.toBuffer();

		const gzipped: Buffer = zlib.gzipSync(fileBuffer);
		const gzippedFileSize: number = Buffer.byteLength(gzipped);

		if (!fs.existsSync(path.join(process.cwd(), '/files'))) {
			fs.mkdirSync(path.join(process.cwd(), '/files'));
		}

		fs.writeFileSync(path.join(process.cwd(), `/files/${fileId}`), gzipped);

		fileCondition.addFileId(fileId);
		fileCondition.setUsedSpace(gzippedFileSize);
	});

	fastify.post('/trigger-upload', async (req, reply) => {
		const fileMetadata = req.body;

		//merge item
		let uploadedDataBufferSize;

		//upload item to cloud

		fileCondition.setUsedSpace(-uploadedDataBufferSize);
	});
}
