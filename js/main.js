let outputDiv = document.getElementById("output");
// let outputDiv = $("#output");
let outputEnd = document.getElementById("outputEnd");
let commandInput = document.getElementById("commandInput");


$(document).ready(function() {
    // Load banner
    loopLines(banner, "", 30);
    // Focus when click anywhere
    $("*").click(function() {
        $("#commandInput").focus();
    });
});

window.addEventListener("keyup", enterKey);
function enterKey(event) {
    if (event.key === "Enter") {
        let command = commandInput.value.toLowerCase();
        runCommand(command);
        // Clear input after some delay
        setTimeout(function() {
            commandInput.value = "";
        }, 80);
    }
}



function runCommand(cmd) {
    if (cmd == "clear") {
        setTimeout(function() {
            outputDiv.innerHTML = '<div id="outputEnd"></div>';
            outputDiv = document.getElementById("output");
            outputEnd = document.getElementById("outputEnd");
            commandInput = document.getElementById("commandInput");
            window.scrollTo(0, document.body.scrollTop);
        }, 1);
    } else {
        addLine(`<span class="txtGreen">guest@zhoda-lii.github.io</span><span class="txtWhite">:</span><span class="txtAqua">~</span><span class="txtWhite">$</span> <span class="txtWhite">${commandInput.value}</span>`, "", 80);
        switch(cmd.toLowerCase().trim()) {
            case "":
                break;
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
                addLine(`<div><span class="txtRed">Command not found: ${cmd}</span><br>To view the list of available commands, type '<span class="txtPurple">help</span>'.</div><br>`, "", 80);
                break;
        }
    }
}

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
            console.log(document.body.scrollHeight);
            window.scrollTo(0, document.body.scrollHeight + 1000);
            $("#commandInput").focus();
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