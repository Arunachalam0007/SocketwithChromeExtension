var socket = io.connect('http://localhost:1337');
socket.on("hello", function (data) {
    console.log("TESTED");
    console.log(data.text);
    chrome.runtime.sendMessage({ msg: "socket", text: data.text }, function (response) { });
});