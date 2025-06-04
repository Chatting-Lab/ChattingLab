var socket;
var usernameInput;
var chatIDInput;
var messageInput;
var chatRoom;
var dingSound;
var messages = [];
var numMessages = 0;
var delay = true;
const urlArgs = new URLSearchParams(window.location.search)
const commands = ["/test", "/copy", "/commands", "/verify", "/broadcast", "/kick", "/leave", "/lounge",];
const cDescs = [
	"A Test Command.",
	"Use to copy certain room data. Valid Arguments - roomlink",
	"Shows the list of valid commands and what they do.",
	'Verify to use higher-level commands, requires a password, i.e, "/verify &ltpassword&gt"',
	'Broadcasts a message to all chat room, i.e "/broadcast &lttext&gt". Note it requires you to use the "/verify" command first.',
	'Kick a user, you must verify with the "/verify" command first.',
	'This disconnects you from the room and takes you to the home page.',
	'Enters the high-priority, high-level Admin Lounge'
]

function randomIntFromInterval(min, max) { // min and max included
	return Math.floor(Math.random() * (max - min + 1) + min);
}


function pickBG() {



	const IDnum = randomIntFromInterval(1, 24);
	console.log(IDnum);

	if (IDnum == "1") {
		document.getElementById("mainHTML").style.background = "url('https://chattinglab.endrdragon44.repl.co//backgrounds/DPk.png')";
	} else if (IDnum == "2") {
		document.getElementById("mainHTML").style.background = "url('https://chattinglab.endrdragon44.repl.co//backgrounds/Red.png')";
	} else if (IDnum == "3") {
		document.getElementById("mainHTML").style.background = "url('https://chattinglab.endrdragon44.repl.co//backgrounds/Orange.png')";
	} else if (IDnum == "4") {
		document.getElementById("mainHTML").style.background = "url('https://chattinglab.endrdragon44.repl.co//backgrounds/Gold.png')";
	} else if (IDnum == "5") {
		document.getElementById("mainHTML").style.background = "url('https://chattinglab.endrdragon44.repl.co//backgrounds/Yellow.png')";
	} else if (IDnum == "6") {
		document.getElementById("mainHTML").style.background = "url('https://chattinglab.endrdragon44.repl.co//backgrounds/Green.png')";
	} else if (IDnum == "7") {
		document.getElementById("mainHTML").style.background = "url('https://chattinglab.endrdragon44.repl.co//backgrounds/Grass.png')";
	} else if (IDnum == "8") {
		document.getElementById("mainHTML").style.background = "url('https://chattinglab.endrdragon44.repl.co//backgrounds/Cloud.png')";
	} else if (IDnum == "9") {
		document.getElementById("mainHTML").style.background = "url('https://chattinglab.endrdragon44.repl.co//backgrounds/bbBlue.png')";
	} else if (IDnum == "10") {
		document.getElementById("mainHTML").style.background = "url('https://chattinglab.endrdragon44.repl.co//backgrounds/Water.png')";
	} else if (IDnum == "11") {
		document.getElementById("mainHTML").style.background = "url('https://chattinglab.endrdragon44.repl.co//backgrounds/Grape.png')";
	} else if (IDnum == "12") {
		document.getElementById("mainHTML").style.background = "url('https://chattinglab.endrdragon44.repl.co//backgrounds/Pink.png')";
	} else if (IDnum == "13") {
		document.getElementById("mainHTML").style.background = "url('https://chattinglab.endrdragon44.repl.co//backgrounds/DarkPurp.png')";
	} else if (IDnum == "14") {
		document.getElementById("mainHTML").style.background = "url('https://chattinglab.endrdragon44.repl.co//backgrounds/rainbow.gif')";
	} else if (IDnum == "15") {
		document.getElementById("mainHTML").style.background = "url('https://chattinglab.endrdragon44.repl.co//backgrounds/VDarkPurp.png')";
	} else if (IDnum == "16") {
		document.getElementById("mainHTML").style.background = "url('https://chattinglab.endrdragon44.repl.co//backgrounds/Teal.png')";
	} else if (IDnum == "17") {
		document.getElementById("mainHTML").style.background = "url('https://chattinglab.endrdragon44.repl.co//backgrounds/Pumpkin.png')";
	} else if (IDnum == "18") {
		document.getElementById("mainHTML").style.background = "url('https://chattinglab.endrdragon44.repl.co//backgrounds/Black.png')";
	} else if (IDnum == "19") {
		document.getElementById("mainHTML").style.background = "url('https://chattinglab.endrdragon44.repl.co//backgrounds/DGrey.png')";
	} else if (IDnum == "20") {
		document.getElementById("mainHTML").style.background = "url('https://chattinglab.endrdragon44.repl.co//backgrounds/Grey.png')";
	} else if (IDnum == "21") {
		document.getElementById("mainHTML").style.background = "url('https://chattinglab.endrdragon44.repl.co//backgrounds/DarkRed.png')";
	} else if (IDnum == "22") {
		document.getElementById("mainHTML").style.background = "url('https://chattinglab.endrdragon44.repl.co//backgrounds/DarkGreen.png')";
	} else if (IDnum == "23") {
		document.getElementById("mainHTML").style.background = "url('https://chattinglab.endrdragon44.repl.co//backgrounds/Blueberry.png')";
	} else if (IDnum == "24") {
		document.getElementById("mainHTML").style.background = "url('https://chattinglab.endrdragon44.repl.co//backgrounds/ClassicColors.png')";
	} else {
		console.log("ID not found in JSON");
	}

}



var wasClickedforVerifiedStatus = false

var verified = false

function clicked() {
	wasClickedforVerifiedStatus = true
	console.log("Click detected! Verification should succeed...")
}

function clickCheck() {
	if (wasClickedforVerifiedStatus = false) {
		postMessage("Check complete.")
		postMessage("<h1>You have not been <b>verified</b>.</h1>")
		postMessage("You most likely don't have proper access. If you think this is an error, please contact an admin, someone that has access to the code, or the creator.")
		console.log("Verification failed! Click is not detected!!")

	}
	else {
		postMessage("Check complete.")
		postMessage("<h1>You have been successfully <b>verified</b>.")
		postMessage('You can now access special administrative commands, such as broadcasting, kicking, banning, and more to come. To see a full <u>current</u> list of such commands, type "/commands".')
		console.log("The verfication succeeded!")

	}

}

function verifyMe() {
	verified = true
	wasClickedforVerifiedStatus = true
	document.cookie = "verified=true"
	alert('Chat with school friends! This chat is FILTERED! It is also MONITORED!  You can have private chat rooms or dont type any room code and just click connect for a public chat. To create a room, type anything. to join, enter a given room name. Please note that if you are using this at differ ant schools than some, joining PUBLIC with other students will result in the two schools interacting with each other. In the event of such, please do not share any personal info such as school, address, full name, or school email. You may share first names but that is all I as the developer would recommend. Any punishments by schools for sharing such info is not my responsibility, and will not be unless required by law and or Replit.com Staff. ')

}

function onload() {
	document.getElementById("messageBox").style.display = "none"
	if (urlArgs.has("room")) {
		document.getElementById("IDInput").value = urlArgs.get("room")


	}
	socket = io();
	usernameInput = document.getElementById("NameInput");
	chatIDInput = document.getElementById("IDInput");
	messageInput = document.getElementById("ComposedMessage");
	chatRoom = document.getElementById("RoomID");
	dingSound = document.getElementById("Ding");

	socket.on("join", function(room) {
		postMessage('Chat "/copy" for info about this room. To leave the room, either refresh the page or type "/leave"')
		chatRoom.innerHTML = room;
		document.getElementById("messageBox").style.display = "block"
		document.getElementById("AccessPort").style.display = "none"
		urlArgs.set("room") = chatIDInput.value
	}
	)









	socket.on("recieve", function(message) {
		postMessage(message)
	})

	socket.on("chatError", function(id, errorMessage) {
		if (id === socket.id) {
			if (errorMessage === "badUser") {
				const curUser = document.getElementById("NameInput").value;
				const text = '"' + curUser + '"' + " is unavailable."
				document.getElementById("NameInput").value = ""
				if (text.length <= 29) {
					document.getElementById("NameInput").placeholder = text
				} else {
					document.getElementById("NameInput").placeholder = "Invalid Username"
				}
			}
		}
	})

	socket.on("disconnect", () => {
		postMessage("You have been either disconnected, or kicked by an admin.")
		window.location.reload()
	});



	socket.on("kick", function(username) {
		socket.emit("checkKick", username)
	})
}




function Connect() {
	rawUser = usernameInput.value
	myUser = rawUser.split(' ').join('_');
	socket.emit("join", chatIDInput.value, myUser);
	postMessage("You have entered a private Secure Chat room. Only personell that you provide the room code to can join. Thit goes without saying, but this room is private, therefore is not monitored. Any site-specific information is still not allowed to be shared. If you are not sure what this means, please contact an admin.")")
}
function ConnectLounge() {
	rawUser = usernameInput.value
	myUser = rawUser.split(' ').join('_');

	document.getElementById("mainHTML").style.background = "url('https://chattinglab.endrdragon44.repl.co//backgrounds//Royalty.png')";
	socket.emit("join", "˜”*°•.˜”*°• 𝓐𝓭𝓶𝓲𝓷 𝓛𝓸𝓾𝓷𝓰𝓮 •°*”˜.•°*”˜", myUser);
}
function ConnectPub() {
	rawUser = usernameInput.value
	myUser = rawUser.split(' ').join('_');
	socket.emit("join", "SCPos Secure Chat Lobby", myUser);
	postMessage("You have joined a lobby room. Do not share Site-Specific information to members of other Sites. If you are not sure what this means, please contact an admin.")
}

function Send() {
	if (messageInput.value.split(" ")[0].charAt(0) === "/") {
		if (commands.includes(messageInput.value.split(" ")[0])) {
			let command = messageInput.value.split(" ")[0].split("/")[1]
			let args = messageInput.value.split(" ")
			args.shift()

			if (args === []) {
				executeCommand(command)
			} else {
				executeCommand(command, args)
			}
		} else {
			postMessage('"' + messageInput.value.split(" ")[0] + '" is not a valid command.')
		}
		messageInput.value = ""
	} else {
		if (delay && messageInput.value.replace(/\s/g, "") != "") {
			delay = false;
			setTimeout(delayReset, 1000);
			socket.emit("send", messageInput.value);
			messageInput.value = "";
			dingSound.currentTime = 0;
			dingSound.play();
		}
	}
}

document.addEventListener("keyup", function(event) {
	const mesElem = document.getElementById("ComposedMessage")
	if (event.code === 'Enter' && mesElem === document.activeElement) {
		Send()
	}
	const codeConnect = document.getElementById("ConnectButton")
});

function delayReset() {
	delay = true;
}

function copyRoomLink() {
	const toCopy = "https://chattinglab.endrdragon44.repl.co//?room=" + encodeURIComponent(document.getElementById("IDInput").value)
	const tooltip = document.getElementById("copyToolTip")
	const prevText = document.getElementById("ComposedMessage").value
	document.getElementById("ComposedMessage").value = toCopy
	var copyText = document.getElementById("ComposedMessage");
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(copyText.value);
	document.getElementById("ComposedMessage").value = prevText
	tooltip.innerHTML = "Copied!";
}

function postMessage(message) {
	let username = message.split(":")[0]
	messages.push(message);
	dingSound.currentTime = 0;
	dingSound.play();
	if (messages.length > numMessages) {
		let para = document.createElement("p");
		let node = document.createTextNode("message");
		para.appendChild(node);
		para.setAttribute("id", "Message" + numMessages);
		if (username == "Server") {
			para.setAttribute("class", "impMessage");
		} else {
			para.setAttribute("class", "message");
		}
		let element = document.getElementById("chat");
		element.appendChild(para);
		numMessages++
	}
	for (i = 0; i < messages.length; i++) {
		document.getElementById("Message" + i).innerHTML = messages[i];
		let div = document.getElementById("chat");
		div.scrollTop = div.scrollHeight - div.clientHeight;
	}
}

function isEqual(a, b) {
	return typeof a === 'string' && typeof b === 'string'
		? a.localeCompare(b, undefined, { sensitivity: 'accent' }) === 0
		: a === b;
}

function executeCommand(command, args) {
	if (isEqual(command, "leave")) {
		postMessage("Leaving room, please wait...");
		window.location.reload();
	} else if (isEqual(command, "copy")) {
		if (isEqual(args[0], "roomlink")) {
			copyRoomLink();
			postMessage("Room Link Copied.");
		} else {
			postMessage("Nothing to Copy.");
		}
	} else if (isEqual(command, "commands")) {
		for (let i = 0; i < commands.length; i++) {
			postMessage(commands[i] + " - " + cDescs[i]);
		}
	} else if (isEqual(command, "lounge")) {
		if (verified) {
			socket.emit("send", messageInput.value)
			ConnectLounge();
			postMessage("Welcome to the admin lounge! You can do anything in here. To see list of commands, type '/commands'");
		} else {
			postMessage('You are not verified. Ask the Creator to verify you.');
		}
	} else if (command === "verify") {
		const password = args.join(' ');
		const passwords = {
			"Yippe": true,
			"Samsung": true,
			"Josie": true,
			"DoomOS": true,
			"pass5": true
		};
		if (passwords.hasOwnProperty(password)) {
			verified = true;
			postMessage("Verified. Type /commands for admin tools.");
		} else {
			postMessage("Invalid password. Please try again.");
		}
	} else if (command === "broadcast") {
		if (verified) {
			let message = "";
			for (let i = 0; i < args.length; i++) {
				message = message + args[i] + " ";
			}
			socket.emit("broadcast", message);
		} else {
			postMessage('You are not verified. Ask the Creator to verify you.');
		}
	} else if (command === "kick") {
		if (verified) {
			let username = "";
			for (let i = 0; i < args.length; i++) {
				username = username + args[i] + " ";
			}
			postMessage("Kicked " + username);
			socket.emit("kickRequest", username);
		} else {
			postMessage('You are not verified. Ask the creator to verify you.');
		}
	}
}




function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}


function checkVerify() {
	if (verified = false) {


		let grabCookie = null
		if (getCookie("verified") = "true") {
			verified = true
			wasClickedforVerifiedStatus = true
			postMessage("You have been reverified.")
		} else if (getCookie("verified") = true) {
			verified = true
			wasClickedforVerifiedStatus = true
			postMessage("You have been reverified.")

		}


	} else if (verified = true) {
		console.log("Verified.")


	}


}



