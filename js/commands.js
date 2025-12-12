let linkedin = 'https://www.linkedin.com/in/joashdaligcon/';
let github = 'https://github.com/zhoda-lii/';
let email = 'mailto:zhoda.lii@gmx.ca';
let year = new Date().getFullYear();
let version = "1.4c"


banner = [
    "",
    "<div>Web Terminal Portfolio [Version " + version + "]</div>",
    "<div>Copymight (c) " + year + ". All right, lezgo.</div>",
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

help = [
    "",
    `<span class="txtAqua">Command         Description</span>`,
    '<span class="txtPurple">who</span>             Show who is zhoda-lii',
    '<span class="txtPurple">projects</span>        View coding projects',
    '<span class="txtPurple">socials</span>         Display social networks',
    '<span class="txtPurple">email</span>           Send an email to me',
    '<span class="txtPurple">banner</span>          Display the banner',
    '<span class="txtPurple">help</span>            List available commands',
    '<span class="txtPurple">clear</span>           Clear terminal',
    '<span class="txtPurple">exit</span>            Exit terminal',
    "<br>"
]

who = [
    "",
    "Hey there, my real name is Joash!👋",
    "I'm known as zhoda-lii by colleagues.",
    "I'm a computer programming student in Canada.",
    "Random fact: I like spicy ramen!",
    "<br>"
]

projects = [
    "",
    `<span class="txtAqua">Command         Technologies</span>`,
    '<span class="txtPurple">cloudkitchen</span>    Flutter/Dart, Firebase',
    '<span class="txtPurple">temperaments</span>    jQuery, HTML, CSS',
    '<span class="txtPurple">fuelprice</span>       Excel, VBA, UI Automation',
    '<span class="txtPurple">gymtracker</span>      SQL, Python',
    '<span class="txtPurple">stockmarket</span>     Excel, VBA',
    '<span class="txtPurple">carspecify</span>      jQuery, HTML, CSS',
    // '<span class="txtPurple">esports</span>         HTML, CSS',
    '<span class="txtPurple">testgenius</span>      Python',
    // '<span class="txtPurple">showall</span>         Show all projects',
    '<br>',
    'You can explore more of my project work on my GitHub page.',
    '<br>'
]

cloudkitchen = [
    "",
    '<span class="txtAqua">Cloud Kitchen Mobile App</span>',
    '<br>',
    'The Cloud Kitchen initiative aims to connect students in need with affordable meals while supporting local food providers.',
    '<br>',
    'Rising food costs are causing many students and underprivileged individuals to skip meals or choose unhealthy options, which affects their nutrition, academic performance, and overall well-being.',
    'Local food businesses are also looking for better ways to increase sales, reach more customers, and reduce food waste.',
    'The platform bridges this gap by offering affordable, subsidized meals from verified restaurants and home-based kitchens, creating a win-win system for both students and vendors.',
    '<br>',
    'This project is supported by funding from Red Deer Polytechnic (RDP) and the Natural Sciences and Engineering Research Council of Canada (NSERC).',
    '<br>'
];

temperaments = [
    "",
    '<span class="txtAqua">4 Temperaments Personality Tool</span>',
    '<br>',
    'An evaluation tool designed to help users explore their personality using the classical Four Temperaments framework: Sanguine, Choleric, Melancholic, and Phlegmatic.',
    '<br>',
    'The tool identifies core characteristics, behavioral tendencies, and personal preferences based on user responses, offering a simple yet insightful way to understand individual strengths and patterns.',
    'It provides an accessible method for self-reflection, helping users gain clarity about their temperament and how it influences decision-making, communication, and daily interactions.',
    '<br>',
    'This project highlights the integration of classical psychological concepts with modern user-friendly design to create an engaging self-assessment experience.',
    '<br>'
];

fuelprice = [
    "",
    '<span class="txtAqua">Fuel Price Data Scrape Tool</span>',
    '<br>',
    'This project automates the gathering of fuel price data from Motormouth.com.au and Petrolspy.com.au using data scraping through UI Automation and VBA. It gathers data for five different types of fuel: Unleaded, Premium Unleaded 95, Premium Unleaded 98, E10 and Diesel based on specific GPS coordinates.',
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
    "Furthermore, the optimisation is done depending on the user preference, either by maximizing the return at an acceptable risk level or by minimizing the risk at a targeted return.",
    '<br>'
]

gymtracker = [
    "",
    '<span class="txtAqua">Gym Progress Tracker Database</span>',
    '<br>',
    "This database project manages aspects of gym operations such as member registration, attendance tracking, and payment transactions.",
    "<br>",
    "It also monitors members' progress through attributes such as calorie intake, height, and weight for effective fitness management.",
    "<br>",
    "Furthermore, it keeps track of trainer assignments and equipment usage, that can aid in determining training insights and optimizing the overall gym experience.",
    '<br>'
]

carspecify = [
    "",
    '<span class="txtAqua">CarSpecify: Vehicle Specification and Price Comparison Web App</span>',
    '<br>',
    "This project is designed to simplify the process of researching and comparing vehicles for potential buyers.",
    "<br>",
    "It allows users to view comprehensive specifications for various car models, having all the details together in one website.",
    '<br>',
    "Furthermore, it empowers users to compare and contrast key features such as performance, safety ratings, fuel efficiency, and pricing.",
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

socials = [
    "",
    'Linkedin:       <a href="' + linkedin + '" target="_blank">linkedin/joashdaligcon' + "</a>",
    'Github:         <a href="' + github + '" target="_blank">github/zhoda-lii' + '</a>',
    "<br>"
]

email = [
    "",
    'Email Address:  <a href="' + email + '">zhoda.lii@gmx.ca</a>',
    "<br>"
]
