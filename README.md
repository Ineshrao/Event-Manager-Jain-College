# Event Manager 
Welcome to the Event Manager repository for Jain College! This website was designed to help Jain college organize and host various events, allowing students and the faculty to participate and engage in a vibrant campus community. This README file provides an overview of the project and instructions on how to set it up and run using the XAMPP server.

## Table of Contents
- [Overview](#overview)
- [Key Features](#key-features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Future Work](#future-work)

## Overview

The Event Manager is a comprehensive platform, designed for Jain College to elevate event management to new heights. This GitHub repository houses the codebase for this web-based solution, where students and organizers can seamlessly orchestrate and partake in captivating events. 

## Key Features

- **Effortless Event Participation:** Students can effortlessly explore event listings, register with ease, and receive personalized confirmation emails for quick check-ins.

- **Organizer's Haven:** For an impeccable event coordination, the event organizers are provided with exclusive access to a private hidden page - generate.php, a feature that empowers organizers to download comprehensive lists of registered students, ensuring flawless event execution.


## Installation

To install the Event Manager Website on your local machine, follow these steps:

1. Make sure you have XAMPP installed. If not, download and install it from the official [XAMPP website](https://www.apachefriends.org/index.html).
2. Clone this repository to your local machine using the following command: git clone https://github.com/Ineshrao/Event-Manager-Jain-College.git
3. Move the cloned repository to the appropriate XAMPP directory. For example, in Windows, move it to `C:\xampp\htdocs\`.
4. Start the XAMPP control panel and ensure the Apache and MySQL services are running.
5. Import the database file into your SQL Server.
6. To enable the mailing feature, add your Email-ID and Google App Password in the submit.php.

## Usage

To use the Event Manager Website on your local machine, follow these steps:

1. Open a web browser and enter the following URL: http://localhost/Event-Manager-Jain-College. This will launch the Event Manager Website, allowing you to explore its full functionality within your local environment.
2. View Events: Navigate to the "Events" menu in the navigation bar to browse through the list of captivating events hosted by Jain College.
3. Contact Page: Should you wish to get in touch with the organizers or have any queries, visit the "Contact" page for seamless communication.
4. Event Registrations: Easily register for your preferred events through the intuitive event registration process.

For Organizers:

1. Download Student Details: As an organizer, you have exclusive access to the hidden webpage, generate.php, where you can effortlessly download all the details of the registered students in an Excel format. This feature streamlines your event coordination process, enabling you to manage participants with ease.
2. Use the following credentials for organizer's log in:
    Username: admin
    Password: admin

## Contributing

We welcome contributions to the Event Manager project! If you find any issues, have suggestions for improvements, or want to add new features, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch from the `main` branch to work on your changes.
3. Make your modifications, addressing the identified issue or adding the new feature.
4. Test your changes thoroughly.
5. Commit and push your changes to your forked repository.
6. Create a pull request to the original repository, clearly describing the changes you made.

We appreciate your contributions and will review your pull request as soon as possible.

## License

The Event Manager Website is licensed under the GNU General Public License (GPL). As a copyleft license, the GPL grants you the freedom to use, modify, and distribute the software and any derivative works based on it. However, it comes with the requirement that any redistributed versions of the software must also be licensed under the GPL, ensuring that the software remains open-source and freely available to the community. 

## Future Work

1. Admin Dashboard with Statistical Information: Develop an intuitive admin dashboard for event organizers. Provide valuable statistical insights, attendance data, participant demographics, and feedback analytics.
2. Database Structure Improvement: Optimize the database structure for efficiency, scalability, and better performance. Consider indexing, caching, and normalization to handle large volumes of data seamlessly.
