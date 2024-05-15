document.addEventListener("DOMContentLoaded", function() {

    const commandInput = document.getElementById("commandInput");
    const output = document.getElementById("output");

    commandInput.focus();

    commandInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            const command = commandInput.value.toLowerCase().trim();
            processCommand(command);
            commandInput.value = ""; // Clear input
        }
    });

    function processCommand(command) {
        switch(command) {
            case "help":
                printOutput("Available commands:\n- help\n- about\n- projects\n- contact");
                break;
            case "about":
                printOutput("Hey, I am Joash!\nI'm a Computer Science student from Alberta, Canada!");
                break;
            case "projects":
                printOutput("You can visit my github page zhoda-lii for my projects.");
                break;
            case "contact":
                printOutput("You can contact me at my linkedin: /in/joashdaligcon");
                break;
            case "":
                printOutput("");
                break;
            default:
                printOutput(`Command not found: ${command}`);
        }
    }

    function printOutput(text) {
        output.innerHTML += `<br><br><span style="color: #00ff00;">guest@zhoda-lii.github.io:~$${commandInput.value}</span> <br><br> <span style="color: #fff;">${text}</span>`;
        output.scrollTop = output.scrollHeight; // Scroll to bottom
    }
});



