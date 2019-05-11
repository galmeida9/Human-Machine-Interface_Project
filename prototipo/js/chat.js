var receivedMessages = {"Gabriel": {
                                    Messages: ["Olá", "tudo bem?", "Também", "Foi brutal!!!"], 
                                    number: 4,
                                    src: "resources/gabriel_user.png",
                                    first: 1,
                                    },
                        "João": {
                                    Messages: ["Boas mano!", "Queres ir ao cinema?"],
                                    number: 2,
                                    src: "resources/joao_user.png",
                                    first: 1,
                                },
                        "Daniel": {
                                    Messages: ["Bora almoçar fora?"],
                                    number: 1,
                                    src: "resources/daniel_user.png",
                                    first: 1,
                                },
                        "Diogo": {
                                    Messages: [],
                                    number: 0,
                                    src: "resources/user.png",
                                    first: 0,
                                },
                        "Bernardo": {
                                    Messages: [],
                                    number: 0,
                                    src: "resources/bernardo_user.png",
                                    first: 0,
                                }
                        }

var sentMessages = {"Gabriel": {
                                Messages: ["Mekie", "yh e ctg?", "Já viste os Avengers?"],
                                number: 3,
                                },
                    "João": {
                                Messages: ["Então mano!"],
                                number: 1,
                            },
                    "Daniel": {
                                Messages: [],
                                number: 0,
                            },
                    "Diogo": {
                                Messages: [],
                                number: 0,
                            },
                    "Bernardo": {
                                Messages: [],
                                number: 0,
                            }
                    }

var displayedMessages = 0;
var personInMemory = ["Gabriel", "João", "Daniel"];
var currentPerson;

/*-----------------------------------------------------------------------------------
Disable/Enable Chat
-----------------------------------------------------------------------------------*/
function disableChat() {
    document.getElementsByClassName("chatScreen")[0].style.display = "none";
    document.getElementsByClassName("recentChat")[0].style.display = "none";
}

function enableChat() {
    document.getElementsByClassName("chatScreen")[0].style.display = "block";
    document.getElementsByClassName("recentChat")[0].style.display = "block";
}

/*-----------------------------------------------------------------------------------
Chat Popup for choosing people
-----------------------------------------------------------------------------------*/
document.getElementById("addChat").onclick = function() {
    document.getElementById("personPopup").style.display = "block";
    currentpage = "peoplepopup";
}

document.getElementsByClassName("close")[1].onclick = function() {
    document.getElementById("personPopup").style.display = "none";
    currentpage = "chat";
}


/*-----------------------------------------------------------------------------------
Open Chat
-----------------------------------------------------------------------------------*/
function chat(person) {
    if (mouseMovement < 3 && mouseMovement > -3) {
        currentPerson = person;
        el.scrollLeft = 0;
        el.scrollTop = 0;
        document.getElementsByClassName("recentChat")[0].style.display = "none";
        document.getElementsByClassName("chat")[0].style.display = "block";
        document.getElementsByClassName("microphoneChat")[0].style.display = "block";
        
        var messages = document.getElementsByClassName("chat")[0];
        var i=0, j=0, k = 1;

        while (k <= displayedMessages) {
            messages.removeChild(messages.childNodes[0]);
            k++;
        }
        if(k!=1) messages.removeChild(messages.childNodes[0]);

        displayedMessages = 0;

        while (i<receivedMessages[person]["number"] || j<sentMessages[person]["number"]){
            if ((i < receivedMessages[person]["number"] && j>0) || (receivedMessages[person]["first"] == 1 && j==0)) {
                var newMessage = document.createElement("div");
                newMessage.classList.add("messageReceived");
                newMessage.innerHTML = "<div class='messageReceived'><span><img src=" + receivedMessages[person]["src"] + "><button class='btn'><p>" + receivedMessages[person]["Messages"][i] +"</p></button></span></div>";
                messages.appendChild(newMessage);
                i++;
                displayedMessages++;
            }
            
            if (j < sentMessages[person]["number"]) {
                var newMessage = document.createElement("div");
                newMessage.classList.add("messageSent");
                newMessage.innerHTML = "<div class='messageReceived'><span><img src='resources/user.png'><button class='btn' style='background-color: #afafaf;border: 1px solid #919191;'><p>" + sentMessages[person]["Messages"][j] +"</p></button></span></div>";
                messages.appendChild(newMessage);
                j++;
                displayedMessages++;
            }
        }

        if (displayedMessages!=0) {
            var newMessage = document.createElement("div");
            newMessage.innerHTML = "<br><br>";
            messages.appendChild(newMessage);
        }
        el.scrollTop = 100000;
        currentpage="personChat";
    }
}


/*-----------------------------------------------------------------------------------
Add Person Chat
-----------------------------------------------------------------------------------*/
function addPerson(person) {
    var lastMessage;
    
    document.getElementById("personPopup").style.display = "none";
    
    if (personInMemory.includes(person)) chat(person);
    else {
        personInMemory += person;

        if (receivedMessages[person]["number"] > sentMessages[person]["number"]) lastMessage = receivedMessages[person]["Messages"]["number"];
        else lastMessage = sentMessages[person]["Messages"]["number"];

        if (lastMessage == null) lastMessage = "";

        var chatScreen = document.getElementsByClassName("recentChat")[0];
        var newChat = document.createElement("div");
        newChat.innerHTML = "<button class='btn chatPerson' style='margin-top: 4pt; height: 27pt; cursor:pointer; text-align: left;' onclick=\42chat(\47" + person + "\47)\42><h2 style='font-weight: bold'><img class='user' src=" + receivedMessages[person]["src"] + " style='margin-top: -2pt'> " + person + "</h2><p class='lastMessage'>" + lastMessage + "</p><br><br><br></button>"
        chatScreen.appendChild(newChat);
        chat(person);
    }
}


/*-----------------------------------------------------------------------------------
Send Message
-----------------------------------------------------------------------------------*/
function addMessage() {
    var random =  Math.round(Math.random() * 13) + 2;
    var person = currentPerson;

    sentMessages[currentPerson]["Messages"].push(textToPost);
    sentMessages[currentPerson]["number"] += 1;
    document.getElementsByClassName("showVoiceInput")[0].style.display = "none";
    chat(currentPerson);
    setTimeout(function(){reply(person);}, random*1000);
    console.log(random);
}

/*-----------------------------------------------------------------------------------
Receive Message
-----------------------------------------------------------------------------------*/
function reply(person) {
    var random =  Math.round(Math.random() * 11);
    receivedMessages[person]["Messages"].push(predictedTextChat[random]);
    receivedMessages[person]["number"] += 1;
    console.log(person + " sent a message");
}