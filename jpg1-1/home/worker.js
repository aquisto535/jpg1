onmessage = function (event) {
	let rcvData = event.data;
	stopOperation(); //먹통
	let sendData = rcvData.Date + '백그라운드에서 동작합니다.';
	this.postMessage(sendData);
};

function stopOperation() {
	test();
	let endTime = new Date().getTime() + 5000;
	while (new Date().getTime() < endTime) {}
}
