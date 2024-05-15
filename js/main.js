let outputDiv = document.getElementById("output");
let outputEnd = document.getElementById("outputEnd");
let commandInput = document.getElementById("commandInput");


function addLine(text, style, time) {
    let txtString = "";
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
            txtString += "&nbsp;&nbsp;";
            i++;
        } else {
            txtString += text.charAt(i);
        }
    }

    setTimeout(
        function() {
            let pElement = document.createElement("p");
            pElement.innerHTML = txtString;
            pElement.className = style;

            outputEnd.parentNode.insertBefore(pElement, outputEnd);
            window.scrollTo(0, document.body.offsetHeight);
        }, time);
}
  
// function loopLines(name, style, time) {
//     name.forEach(function(item, index) {
//         addLine(item, style, index * time);
//     });
// }
  
function loopLines(name, style, time) {
    name.forEach(function(item) {
        addLine(item, style, time);
    });
}

function runCommand(cmd) {
    if (cmd == "clear") {
        setTimeout(function() {
            outputDiv.innerHTML = '<div id="outputEnd"></div>';
            outputDiv = document.getElementById("output");
            outputEnd = document.getElementById("outputEnd");
            commandInput = document.getElementById("commandInput");
        }, 1);
    } else {
        addLine(`<span style="color: #00ff00;">guest@zhoda-lii.github.io:~$ ${commandInput.value}</span>`, "", 80);
        switch(cmd.toLowerCase()) {
            case "who":
                loopLines(who, "", 80);
                break;
            case "projects":
                loopLines(projects, "", 80);
                break;
            case "socials":
                loopLines(socials, "", 80);
                break;
            case "email":
                addLine(`Email Address: <a href="${email}">zhoda.lii@gmx.ca</a><br><br>`, "", 80);
                break;
            case "banner":
                loopLines(banner, "", 80);
                break;
            case "help":
                loopLines(help, "", 80);
                break;
            default:
                addLine(`<div>Command not found: ${cmd}<br>For a list of available commands, type 'help'.</div><br>`, "", 80);
                break;
        }
    }
}

$(document).ready(function() {
    // Load banner
    loopLines(banner, "", 30);

});

window.addEventListener("keyup", enterKey);
function enterKey(event) {
    if (event.key === "Enter") {
        let command = commandInput.value.toLowerCase();
        runCommand(command);
        commandInput.value = ""; // Clear input
    }
}
