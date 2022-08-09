import corsOptions from '../settings/corsOption';
import FolderHelper from '../helper/FolderHelper';
import CreateFolderRequest from '../model/folder/CreateFolderRequest';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors(corsOptions));

app.use(bodyParser.json());

// Folder db Service

const folderHelper = new FolderHelper();

app.post('/gateway/folder', async (req: any, res: any) => {
	if (req.body !== undefined) {
		const res = await folderHelper.createFolder(
			new CreateFolderRequest(req.body.folder_name)
		);
		console.log(res);
	}
});

app.get('/gateway/folder/:folderId', (req: any, res: any) => {
	console.log(req.params.folderId);
});

app.put('/gateway/folder/:folderId', (req: any, res: any) => {
	console.log(req.params.folderId);
});

app.delete('/gateway/folder/:folderId', (req: any, res: any) => {
	console.log(req.params.folderId);
});

// Item db Service

app.post('/gateway/item', (req: any, res: any) => {
	console.log(req.body);
});

app.get('/gateway/item/:itemId', (req: any, res: any) => {
	console.log(req.params.itemId);
});

app.put('/gateway/item/:itemId', (req: any, res: any) => {
	console.log(req.params.itemId);
});

app.delete('/gateway/item/:itemId', (req: any, res: any) => {
	console.log(req.params.itemId);
});

// User db Service

app.post('/gateway/user', (req: any, res: any) => {
	console.log(req.body);
});

app.get('/gateway/user/:userId', (req: any, res: any) => {
	console.log(req.params.userId);
});

app.put('/gateway/user/:userId', (req: any, res: any) => {
	console.log(req.params.userId);
});

app.delete('/gateway/user/:userId', (req: any, res: any) => {
	console.log(req.params.userId);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
