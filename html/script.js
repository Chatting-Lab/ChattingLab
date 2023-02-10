var socket;
var usernameInput
var chatIDInput;
var messageInput;
var chatRoom;
var dingSound;
var messages = [];
var numMessages = 0;
var delay = true;
const urlArgs = new URLSearchParams(window.location.search)
const commands = ["/test", "/copy", "/commands", "/verify", "/broadcast", "/kick"]
const cDescs = [
  "A Test Command.",
  "Use to copy certain room data. Valid Arguments - roomlink",
  "Shows the list of valid commands and what they do.",
  'Verify to use higher-level commands, requires a password, i.e, "/verify &ltpassword&gt"',
  'Broadcasts a message to all chat room, i.e "/broadcast &lttext&gt". Note it requires you to use the "/verify" command first.',
  'Kick a user, you must verify with the "/verify" command first.'
]
var verified = false

function onload(){
  document.getElementById("messageBox").style.display = "none"
  if (urlArgs.has("room")){
    document.getElementById("IDInput").value = urlArgs.get("room")
  }
  socket = io();
  usernameInput = document.getElementById("NameInput");
  chatIDInput = document.getElementById("IDInput");
  messageInput = document.getElementById("ComposedMessage");
  chatRoom = document.getElementById("RoomID");
  dingSound = document.getElementById("Ding");

  socket.on("join", function(room){
    postMessage('Chat "/commands" for a list of commands. To leave the room, either refresh the page or press the back button.')
    chatRoom.innerHTML = room;
    document.getElementById("messageBox").style.display = "block"
    document.getElementById("AccessPort").style.display = "none"
  })

  socket.on("recieve", function(message){
    postMessage(message)
  })

  socket.on("chatError", function(id, errorMessage){
    if (id === socket.id){
      if (errorMessage === "badUser"){
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
    window.location.reload()
  });

  socket.on("vResp", function(response){
    if (response === "fail"){
      postMessage("Incorrect Password.")
    } else if (response === "success"){
      postMessage("You have been verified!")
      verified = true
    } else {
      postMessage("Unknown Error - Not Verified")
    }
  })

  socket.on("kick", function(username){
    socket.emit("checkKick", username)
  })
}

function Connect(){
  myUser = usernameInput.value
  socket.emit("join", chatIDInput.value, usernameInput.value);
}

function Send(){
  if (messageInput.value.split(" ")[0].charAt(0) === "/"){
    if (commands.includes(messageInput.value.split(" ")[0])){
      let command = messageInput.value.split(" ")[0].split("/")[1]
      let args = messageInput.value.split(" ")
      args.shift()

      if (args === []){
        executeCommand(command)
      } else {
        executeCommand(command, args)
      }
    } else {
      postMessage('"' + messageInput.value.split(" ")[0] + '" is not a valid command.')
    }
    messageInput.value = ""
  } else {
    if (delay && messageInput.value.replace(/\s/g, "") != ""){
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
});

function delayReset(){
  delay = true;
}

function copyRoomLink(){
  const toCopy = "https://chat.chattinglab.repl.co/?room=" + encodeURIComponent(document.getElementById("IDInput").value)
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

function postMessage(message){
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
  for (i = 0; i < messages.length; i++){
    document.getElementById("Message"+i).innerHTML = messages[i];
    let div = document.getElementById("chat");
    div.scrollTop = div.scrollHeight - div.clientHeight;
  }
}

function isEqual(a, b) {
    return typeof a === 'string' && typeof b === 'string'
        ? a.localeCompare(b, undefined, { sensitivity: 'accent' }) === 0
        : a === b;
}

function executeCommand(command, args){
  if (isEqual(command, "test")){
    postMessage("YAY, it works!")
  } else if (isEqual(command, "copy")){
    if (isEqual(args[0], "roomlink")){
      copyRoomLink()
      postMessage("Room Link Copied.")
    } else {
      postMessage("Nothing to Copy.")
    }
  } else if (isEqual(command, "commands")){
    for (let i = 0; i < commands.length; i++){
      postMessage(commands[i] + " - " + cDescs[i])
    }
  } else if (command === "verify"){
    if (!verified){
      socket.emit("verify", args[0])
    } else {
      postMessage("You are already verified.")
    }
  } else if (command === "broadcast"){
    if (verified){
      let message = ""
      for (let i = 0; i < args.length; i++){
        message = message + args[i] + " "
      }
      socket.emit("broadcast", message)
    } else {
      postMessage('You are not verified, use the "/verify &ltpassword&gt" command to verify.')
    }
  } else if (command === "kick"){
    if (verified){
      let username = ""
      for (let i = 0; i < args.length; i++){
          username = username + args[i] + " "
      }
      postMessage("attemptKick" + username)
      socket.emit("kickRequest", username)
    } else {
      postMessage('You are not verified, use the "/verify &ltpassword&gt" command to verify.')
    }
  }
}