let linkedin = 'https://www.linkedin.com/in/joashdaligcon/';
let github = 'https://github.com/zhoda-lii/';
let email = 'mailto:zhoda.lii@gmx.ca';

help = [
    '',
    '---------------------------------------------',
    '<span class="txtAqua">Command         Description</span>',
    '---------------------------------------------',
    '<span class="txtPurple">who</span>             Show who is zhoda-lii',
    '<span class="txtPurple">projects</span>        View coding projects',
    '<span class="txtPurple">socials</span>         Display social networks',
    '<span class="txtPurple">email</span>           Send an email to me',
    '<span class="txtPurple">clear</span>           Clear terminal',
    '<span class="txtPurple">banner</span>          Display the banner',
    '<span class="txtPurple">help</span>            Show available commands',
    '---------------------------------------------',
    '<br>',
];

who = [
    "",
    "Hey, my real name is Joash!👋",
    "I'm known as zhoda-lii by colleagues.",
    "I'm a computer science student in Canada.",
    "I like spicy ramen!",
    "<br>"
];

projects = [
    'Type the command to see the project overview.',
    '---------------------------------------------',
    '<span class="txtAqua">Command         Technology Used</span>',
    '---------------------------------------------',
    '<span class="txtPurple">fuelprice</span>       Excel, VBA, IE Automation',
    '<span class="txtPurple">stockmarket</span>     Excel, VBA',
    '<span class="txtPurple">gymtracker</span>      SQL, Python',
    '<span class="txtPurple">testgenius</span>      Python',
    '<span class="txtPurple">esports</span>         Web Development',
    '---------------------------------------------',
    'You can view some of my project files at my github page.',
    '<br>'
];

fuelprice = [
    "",
    '<span class="txtAqua">Fuel Price Data Scrape Tool</span>',
    '<br>',
    'This project automates the gathering of fuel price data from Motormouth.com.au and Petrolspy.com.au using Internet Explorer (IE) Automation and VBA. It gathers data for five different types of fuel: Unleaded, Premium Unleaded 95, Premium Unleaded 98, E10 and Diesel based on specific GPS coordinates.',
    '<br>',
    'The tool displays the information in a structured table with average prices as well as time data for the target area. Moreover, it has features like clearing previous data but keeping its necessary structure to enable easy updates. It also contains icon markers for a much clearer presentation of data.',
    '<br>',
    'This automated solution simplifies the updating and managing process of fuel price information making it easier to monitor fuel costs in the specified areas.',
    '<br>'
]

stockmarket = [
    "",
    '<span class="txtAqua">Portfolio Optimisation Tool</span>',
    '<br>',
    "This project calculates the expected return and risk level of the specified stock ticker symbol. It displays the Time Series Graphs of the stock price and expected returns.",
    "<br>",
    "It also calculates the possible combination of different portolio allocations and displays the Efficient Frontier Graph using the portfolio variance and the standard deviation.",
    "<br>",
    "Furthermore, it calculates the return and risk level depending on the user preference, either by maximizating return at an acceptable risk level or by minimizing risk at a targeted return.",
    '<br>'
]

gymtracker = [
    "",
    '<span class="txtAqua">Gym Progress Tracker Database</span>',
    '<br>',
    "This database project manages aspects of gym operations such as member registration, attendance tracking, and payment transactions.",
    "<br>",
    "It also monitors members’ progress through attributes such as calorie intake, height, and weight for effective fitness management.",
    "<br>",
    "Furthermore, it keeps track of trainer assignments and equipment usage, that can aid in determining training insights and optimizing the overall gym experience.",
    '<br>'
]

testgenius = [
    "",
    '<span class="txtAqua">TestGenius: Your Test Simulator</span>',
    '<br>',
    "This project aims to make exam preparation convenient through a test simulator tool that can help students reduce stress and boost confidence.",
    "<br>",
    "Students can consolidate Q&As for various topics and the tool reads them. This allows students to generate a customized study session in a simple click.",
    "<br>",
    "It provides immediate feedback on answers to each question and it outputs the practice test results and percentages at the end of each session.",
    '<br>'
]

esports = [
    "",
    '<span class="txtAqua">Esports Wiki: Coverage for Counter-Strike 2, Dota 2, and Valorant</span>',
    '<br>',
    "This project offers comprehensive coverage and resources for three popular esports titles: Counter-Strike 2, Dota 2, and Valorant.",
    "<br>",
    "It aims to provide players and fans with concise information, strategies, and updates to enhance their gaming experience and keep them informed about the latest developments in these competitive games.",
    '<br>'
]

socials = [
    "",
    'Linkedin:       <a href="' + linkedin + '" target="_blank">linkedin/joashdaligcon' + "</a>",
    'Github:         <a href="' + github + '" target="_blank">github/zhoda-lii' + '</a>',
    "<br>"
];

email = [
    "",
    'Email Address:  <a href="' + email + '">zhoda.lii@gmx.ca</a>',
    "<br>"
];

banner = [
    "",
    "<div>Web Terminal Portfolio [Version 1.2]</div>",
    "<div>Copymight (c) 2024. All right, lezgo.</div>",
    "<br>",
    '<div class="banner">.________  ___  ___  ________  ________  ________              ___       ___  ___      </div>',
    '<div class="banner">|\\_____  \\|\\  \\|\\  \\|\\   __  \\|\\   ___ \\|\\   __  \\            |\\  \\     |\\  \\|\\  \\ </div>',
    '<div class="banner"> \\|____/  /\\ \\  \\\\\\  \\ \\  \\|\\  \\ \\  \\_|\\ \\ \\  \\|\\  \\  _________\\ \\  \\    \\ \\  \\ \\  \\    </div>',
    '<div class="banner">     /  / /\\ \\   __  \\ \\  \\\\\\  \\ \\  \\ \\\\ \\ \\   __  \\|\\_________\\ \\  \\    \\ \\  \\ \\  \\   </div>',
    '<div class="banner">    /  /_/__\\ \\  \\ \\  \\ \\  \\\\\\  \\ \\  \\_\\\\ \\ \\  \\ \\  \\|_________|\\ \\  \\____\\ \\  \\ \\  \\  </div>',
    '<div class="banner">   |\\________\\ \\__\\ \\__\\ \\_______\\ \\_______\\ \\__\\ \\__\\           \\ \\_______\\ \\__\\ \\__\\ </div>',
    '<div class="banner">    \\|_______|\\|__|\\|__|\\|_______|\\|_______|\\|__|\\|__|            \\|_______|\\|__|\\|__| </div>',
    "<br><br>",
    `<div>To view the list of available commands, type '<span class="txtPurple">help</span>'.</div>`,
    "<br>"
];
