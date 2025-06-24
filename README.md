# Real-time-Chat-bot-App
*COMPANY* : CODETECH IT SOLUTIONS

*NAME* : GURRALA KISHORE KUMAR 

*INTERN ID* : CT04DN1839

*DURATION* : 4-WEEKS

*MENTOR* : NEELA SANTOSH
*DISCRIPTION*:

This frontend chatbot application is a modern, single-page interface built using React.js, designed to communicate in real-time with a backend server through WebSocket protocol. It provides users with an interactive chat experience, mimicking a basic conversational interface between a user and a bot. The application starts with the ChatApp component, which is the core logic and visual structure of the interface. Within this component, React’s useState hook is used to maintain two primary state variables: one for the current message being typed (message) and another for the chat history (messages). These messages are dynamically rendered in the UI and updated as either the user sends a message or receives a response from the backend bot via WebSocket.

To manage the connection to the server, the app uses useEffect alongside useRef. When the component is mounted, a WebSocket connection is opened using new WebSocket("ws://localhost:3001"). This establishes a persistent real-time connection. Any message received from the server is parsed from JSON and added to the messages array, which automatically updates the chat display due to React's reactivity. The connection is gracefully closed when the component is unmounted to avoid memory leaks or broken connections.

The chat UI is styled using Tailwind CSS, offering a clean and modern visual with responsive design and rounded UI elements. The outer container of the app uses utility classes for layout, margins, padding, background gradient, and shadows. Inside this container, there’s a title header that displays “AI Chatbot” centered at the top. The main chat display area is scrollable and designed with overflow control to neatly hold chat bubbles. Each chat message is wrapped in a div with conditional styling: messages from the user appear aligned to the right in a blue bubble (bg-blue-200), and bot messages align to the left in a gray bubble (bg-gray-200). This creates a visually intuitive distinction between participants.

Below the chat display, there's an input field for users to type messages and a “Send” button. The input is controlled via the message state, and changes are captured using onChange. The onKeyDown handler checks for the “Enter” key and triggers the sendMessage function, allowing keyboard-based interaction. When the “Send” button is clicked, the function checks for empty inputs, formats the message object, appends it to the message state, and sends it via the WebSocket connection in JSON format.

The structure of the project is modular and scalable. The ChatApp component resides inside a components folder to maintain separation of concerns and allow for future expansion or reuse. The root of the React application starts with index.js, which mounts the App component to the DOM. The App.js file serves as a wrapper and imports the main ChatApp component. This clean separation of files makes the project easier to manage and debug.

Styling is powered by Tailwind CSS, a utility-first CSS framework that streamlines the development process by allowing rapid styling through predefined classes. The configuration is initialized using Tailwind’s CLI, and the tailwind.config.js file is updated to scan all .js, .jsx, .ts, and .tsx files inside the src folder. Tailwind’s base, component, and utility styles are imported in index.css, which serves as the root stylesheet.

From a development standpoint, this app is lightweight and highly efficient, making it ideal for internship-level frontend tasks. The use of WebSockets introduces students to real-time bidirectional communication, a critical concept in modern web development. Even though the backend server isn’t included in this version, the frontend is fully functional and scalable, and it is easy to connect it to any WebSocket-based backend.

To run this application, the user needs to set up a React environment using tools like create-react-app, install dependencies like Tailwind CSS and its peer packages, configure Tailwind for the project, and simply replace the boilerplate code with the split files (ChatApp.js, App.js, index.js, and index.css). Once running locally using npm start, the app presents a minimal, aesthetic chatbot interface that is responsive and user-friendly. It demonstrates clean code practices, structured file separation, modern frontend design, and real-time WebSocket implementation — a perfect submission for an internship task involving chat application development.

*OUTPUT*:
*Vedio output*:

https://github.com/user-attachments/assets/0164177c-feed-469a-b6db-18b4f7938f81

*PHOTO*:
![Image](https://github.com/user-attachments/assets/4551332b-646c-4e6f-8320-5e59d475367f)
