LOOK THE IMG


<img width="1199" height="729" alt="negus-snap" src="https://github.com/user-attachments/assets/a434baf9-691c-402b-93c9-f8a578116ed1" />

***

# Negus Confession

Negus Confession is a real-time, anonymous university confession web app. Students can submit confessions safely and express their thoughts or secrets without revealing their identity. All confessions appear instantly, and each submission records the user's device brand for added insight.

## Features
- **Anonymous confessions:** Students submit posts with no login required.
- **Realtime updates:** New confessions show up instantly for all users.
- **Elegant UiTM-inspired design:** Purple, blue, and white theme, modern layout.
- **Device brand logging:** Each confession includes info about the detected device brand.
- **MySQL database:** Secure data storage and easy management.
- **Keyboard submit:** Hit Enter in the confession box to submit.

## Technologies Used
- Node.js
- Express.js
- EJS
- MySQL
- Socket.io (for realtime)
- ua-parser-js (device detection)
- Custom CSS (UiTM theme)

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/Yaekirua/negus-confession.git
   cd negus-confession
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create and set up your MySQL database, update your connection details in `app.js`.
4. Run the app:
   ```
   npm start
   ```
5. Visit `http://localhost:3000` to use your confession site.

## How it works

- Students open the site, type their confession, and hit "Submit" (or Enter).
- The confession is saved to MySQL with detected device brand using ua-parser-js.
- All users see new confessions instantly, no refresh needed.

## Deployment

This app can be deployed on Render, Heroku, or VPS. Just set your MySQL connection to a remote database and push to a supported Node.js host.

***


