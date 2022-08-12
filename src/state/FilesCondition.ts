class FilesCondition {
	fileInFilesFolder: Array<string> = [];
	usedSpace: number = 0;
	uploadingState: boolean = false;

	setUsedSpace(byteLength: number) {
		this.usedSpace += byteLength;
	}

	pushOutFilesFolder(pushedOutId: string) {
		const index = this.fileInFilesFolder.indexOf(pushedOutId);
		if (index > -1) {
			this.fileInFilesFolder.splice(index, 1);
		}
	}

	addFileId(id: string) {
		this.fileInFilesFolder.push(id);
	}
}

const fileCondition = new FilesCondition();

export default fileCondition;
