const projects = [
  /************************
   * Featured Projects
   *************************/
  // FeedSync
  {
    id: "2b2bad37-2a58-44c0-9138-35d473907dd31",
    isFeatured: true,
    title: "FeedSync",
    filter: ["react", "typescript", "tailwind", "nodejs", "express", "mongodb"],
    preview: "/projects/feed-sync.png",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node Js",
      "Express",
      "MongoDB",
    ],
    livePreview: "https://feedsync.netlify.app",
    code: "https://github.com/irahuldutta02/feed-sync",
    note: "",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/feed-sync",
  },
  // ExpenseEase
  {
    id: "243c2301-1421-4c95-8b17-9d1767bfedf3",
    isFeatured: true,
    title: "ExpenseEase",
    filter: [
      "react",
      "tailwind",
      "nodejs",
      "express",
      "mongodb",
      "redux",
      "rtk-query",
      "gemini-ai",
    ],
    preview: "/projects/expense-ease.png",
    techStack: [
      "React",
      "Tailwind CSS",
      "React Router Dom",
      "Axios",
      "Rtk Query",
      "Gemini AI",
      "Node Js",
      "Express",
      "Redux",
      "MongoDB",
    ],
    livePreview: "https://expense-ease-tracker.vercel.app",
    code: "https://github.com/irahuldutta02/expense-ease-tracker",
    note: "",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/expense-ease-tracker",
  },
  // RemoteRepo
  {
    id: "b9021fe0-1a76-46ac-979f-d53a5364fd8a",
    isFeatured: true,
    title: "RemoteRepo",
    filter: ["react", "tailwind", "nodejs", "express", "mongodb"],
    preview: "/projects/remote-repo.png",
    techStack: [
      "React",
      "Tailwind CSS",
      "React Router Dom",
      "Axios",
      "Node Js",
      "Express",
      "MongoDB",
    ],
    livePreview: "https://remote-repo-mern-app.onrender.com/",
    code: "https://github.com/irahuldutta02/remote-repo-mern-app",
    note: "",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/remote-repo-mern-app",
  },
  // ShopEase
  {
    id: "47934790-7f64-4cf6-9d02-1992d7f9c21e",
    isFeatured: true,
    title: "ShopEase",
    filter: [
      "react",
      "tailwind",
      "nodejs",
      "express",
      "mongodb",
      "redux",
      "rtk-query",
    ],
    preview: "/projects/shop-ease.png",
    techStack: [
      "React",
      "Tailwind CSS",
      "React Router Dom",
      "Axios",
      "Node Js",
      "Express",
      "Redux",
      "MongoDB",
      "Daisy UI",
      "RTK Query",
    ],
    livePreview: "https://shop-ease-a7ya.onrender.com/",
    code: "https://github.com/irahuldutta02/shop-ease",
    note: "",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/shop-ease",
  },
  // InterviewEase
  {
    id: "d9432efb-2751-40ef-8e15-804c0f60a731",
    isFeatured: true,
    title: "InterviewEase",
    filter: ["nextjs", "gemini-ai"],
    preview: "/projects/interview-ease.png",
    techStack: ["Next Js", "Gemini AI"],
    livePreview: "https://interviewease.vercel.app",
    code: "https://github.com/irahuldutta02/interview-ease",
    note: "Ai powered interview preparation platform",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/interview-ease",
  },
  /************************
   * Non-Featured Projects
   *************************/
  // FactChecker AI
  {
    id: "5a0e5662-2ef4-4355-8689-c20023b4f83b",
    title: "FactChecker AI",
    filter: ["nextjs", "gemini-ai", "tailwind"],
    preview: "/projects/fact-checker.png",
    techStack: ["Next Js", "Tailwind CSS", "Gemini AI"],
    livePreview: "https://factcheckai.netlify.app",
    code: "https://github.com/irahuldutta02/fact-check",
    note: "",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/fact-check",
  },
  // CineRental App
  {
    id: "6dc51944-bd44-409b-b513-fe2a1537cc3f",
    title: "CineRental App",
    filter: ["react", "tailwind"],
    techStack: ["React", "Tailwind CSS"],
    preview: "https://i.postimg.cc/xTrMh9Ph/output.png",
    note: "",
    livePreview: "https://cinerental-rd.vercel.app/",
    code: "https://github.com/irahuldutta02/cinerental",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/cinerental",
  },
  // Pomodoro App
  {
    id: "7e73fa97-2fae-446d-bfbc-5aa794b2f067",
    title: "Pomodoro App",
    filter: ["react", "tailwind"],
    preview: "https://i.postimg.cc/L5nCPcPc/image.png",
    techStack: ["React", "Tailwind CSS"],
    note: "This app can be downloaded as PWA",
    livePreview: "https://rd-pomodoro.vercel.app/",
    code: "https://github.com/irahuldutta02/pomodoro-timer",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/pomodoro-timer",
  },
  // Weather Dashboard
  {
    id: "63ad1dda-a99a-4cac-8485-e3a9a5e4d466",
    title: "Weather Dashboard",
    filter: ["react", "tailwind"],
    preview: "https://i.postimg.cc/D0pH0tvN/image.png",
    techStack: ["React", "Tailwind CSS"],
    note: "used debounce to avoid api call on every key stroke in the search bar; used openweathermap.org api",
    livePreview: "https://weather-dashboard-react-one.vercel.app/",
    code: "https://github.com/irahuldutta02/weather-dashboard-react",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/weather-dashboard-react",
  },
  // Cine Search
  {
    id: "d1a2535e-3dcf-40b3-a83e-89721a5bee88",
    title: "Cine Search",
    filter: ["react", "tailwind"],
    preview: "/projects/cine-search.png",
    techStack: [
      "React",
      "Tailwind CSS",
      "React Router Dom",
      "Axios",
      "OMDB API",
    ],
    livePreview: "https://cine-search-three.vercel.app/",
    code: "https://github.com/irahuldutta02/cine-search",
    note: "",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/cine-search",
  },
  // Basic Chat App
  {
    id: "8dd383eb-4249-4cff-8423-6bb8b3a806d6",
    title: "Basic Chat App",
    filter: ["react", "tailwind", "nodejs", "express", "socket.io"],
    preview: "/projects/basic-chat-app-01.png",
    techStack: [
      "React",
      "Daisy UI",
      "Tailwind CSS",
      "Node Js",
      "Express",
      "Socket.io",
    ],
    note: "",
    livePreview: "https://chat-app-rho-topaz.vercel.app/",
    code: "https://github.com/irahuldutta02/chat-app",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/chat-app",
  },
  // Random UUId Generator
  {
    id: "a87b10b4-4c5d-4693-a637-abff1b2a1079",
    title: "Random UUId Generator",
    filter: ["react", "tailwind"],
    preview: "https://i.postimg.cc/Zn7TF7Hk/image.png",
    techStack: ["React", "Tailwind CSS"],
    note: "",
    livePreview: "https://random-uuid-generator-eight.vercel.app/",
    code: "https://github.com/irahuldutta02/random-uuid-generator",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/random-uuid-generator",
  },
  // Qr Genie Telegram Bot
  {
    id: "9b67700d-2848-4ddb-8cb5-d6c9f40f240f",
    title: "Qr Genie Telegram Bot",
    filter: ["nodejs"],
    preview: "https://i.postimg.cc/Sx3q9jqQ/preview-not-available.jpg",
    techStack: ["Node Js", "Telegraf"],
    note: "Converts text or URL to QR code and vice versa",
    code: "https://github.com/irahuldutta02/qr-code-genie-telegram-bot",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/qr-code-genie-telegram-bot",
  },
  // quiz bot discord
  {
    id: "1233b24b-5c2d-4978-b789-0c9b40982aad",
    title: "Quiz Bot Discord",
    filter: ["nodejs"],
    preview: "https://i.postimg.cc/Sx3q9jqQ/preview-not-available.jpg",
    techStack: ["Node Js", "Discord.js"],
    note: "",
    code: "https://github.com/irahuldutta02/quiz-bot-discord",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/quiz-bot-discord",
  },
  // Rahul Dutta / Portfolio
  {
    id: "950d557b-977c-4f91-afe6-8fe9fc1828ea",
    title: "Rahul Dutta / Portfolio",
    filter: ["react", "css"],
    preview: "https://i.postimg.cc/J0DmDXHh/rahuldutta-portfolio.gif",
    techStack: ["React", "CSS"],
    note: "",
    livePreview: "https://rahuldutta.netlify.app/",
    code: "https://github.com/irahuldutta02/rahuldutta-portfolio",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/rahuldutta-portfolio",
  },
  // Shopping List React App
  {
    id: "31718d19-824f-49c4-aa9e-98298a113194",
    title: "Shopping List React App",
    filter: ["react", "tailwind"],
    techStack: ["React", "Tailwind CSS"],
    preview: "https://i.postimg.cc/jdxM35C8/output.gif",
    note: "Build this project to practice useReducer and context API in react",
    livePreview: "https://shopping-list-react-app-nu.vercel.app/",
    code: "https://github.com/irahuldutta02/shopping-list-react-app",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/shopping-list-react-app",
  },
  // Form Validation
  {
    id: "ea41fa48-45c3-49f5-88c7-89eaf1e13882",
    title: "Form Validation",
    filter: ["react", "tailwind"],
    techStack: ["React", "Tailwind CSS"],
    preview: "https://i.postimg.cc/vZQZYKb5/output.gif",
    note: "Build this project to practice useRef and useImperativeHandle hooks in react",
    livePreview: "https://form-validation-react-pi.vercel.app/",
    code: "https://github.com/irahuldutta02/form-validation-react",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/form-validation-react",
  },
  // Countdown App React
  {
    id: "f3e3e3e3-3e3e-3e3e-3e3e-3e3e3e3e3e3e",
    title: "Countdown App React",
    filter: ["react", "tailwind"],
    techStack: ["React", "Tailwind CSS"],
    preview: "https://i.postimg.cc/wTQ102YV/output.jpg",
    note: "Build this project to practice useRef hook with setInterval and clearInterval",
    livePreview: "https://countdown-app-react-six.vercel.app/",
    code: "https://github.com/irahuldutta02/countdown-app-react",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/countdown-app-react",
  },
  // Tic Tac Toe with moves history
  {
    id: "5bbb08fa-a198-4a98-88f0-d9085f54c0cf",
    title: "Tic Tac Toe with moves history",
    filter: ["react", "tailwind"],
    preview: "/projects/tick-tac-toe-with-move-history.png",
    techStack: ["React", "Tailwind CSS"],
    thumbnail: "https://i.postimg.cc/dVg5VNY3/output.jpg",
    note: "",
    livePreview: "https://react-tic-tac-toe-game-with-history.vercel.app/",
    code: "https://github.com/irahuldutta02/twitter-functionality-clone-react",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/react-tic-tac-toe-game",
  },
  // Twitter Functionality Clone
  {
    id: "7ce93791-b4cc-4e4a-a58e-70d9c0f95dd8",
    title: "Twitter Functionality Clone",
    filter: ["react"],
    preview: "https://i.postimg.cc/7LqFGjq7/image.png",
    techStack: ["React"],
    thumbnail: "https://i.postimg.cc/QNTgfBqC/output.jpg",
    note: "",
    livePreview: "https://twitter-functionality-clone-react.vercel.app/",
    code: "https://github.com/irahuldutta02/twitter-functionality-clone-react",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/twitter-functionality-clone-react",
  },
  // Tic Tac Toe Game React
  {
    id: "f45ce6d3-ae38-4045-9160-4b282ee042e3",
    title: "Tic Tac Toe Game React",
    filter: ["react"],
    preview: "/projects/tick-tac-toe.png",
    techStack: ["React"],
    thumbnail: "https://i.postimg.cc/CxjHWfSn/output.png",
    note: "",
    livePreview: "https://tic-tac-toe-react-rdtech2002.vercel.app/",
    code: "https://github.com/irahuldutta02/tic-tac-toe-react",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/tic-tac-toe-react",
  },
  // Simple React ToDo App
  {
    id: "1c01949d-5a1f-4f53-8ef7-21d99b5f3da4",
    title: "Simple React ToDo App",
    filter: ["react", "redux"],
    preview: "/projects/simple-react-todo-app.png",
    techStack: ["React", "Redux", "Redux-toolkit"],
    thumbnail: "https://i.postimg.cc/FRJbmPLp/output.png",
    note: "",
    livePreview: "https://simple-react-todo-app-rdtech2002.vercel.app/",
    code: "https://github.com/irahuldutta02/simple-react-todo-app",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/simple-react-todo-app",
  },
  {
    id: "33d62e82-3b77-4fca-ba9f-1d25446b547e",
    title: "Insect Catch Game",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/SRC5x54Y/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "JS: DOM, EventListener",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/050-insect-catch-game/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/050-insect-catch-game/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/050-insect-catch-game/",
  },
  {
    id: "896fb6de-85ba-454b-83e9-7bdb8d09500e",
    title: "ToDo List",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/Vs7SS4rM/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "JS: DOM, EventListener",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/049-todo-list/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/049-todo-list/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/049-todo-list/",
  },
  {
    id: "d6cd480c-ddf2-4448-ba03-9afffd6a84b1",
    title: "Random Image Generator",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/8CCZzrN5/output.png",
    techStack: ["HTML", "CSS", "JS"],
    note: "JS: DOM, EventListener",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/048-random-image-generator/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/048-random-image-generator/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/048-random-image-generator/",
  },
  {
    id: "902fa291-808c-48dd-aac4-53ec359bc439",
    title: "Testimonial Box Switcher",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/6QHgP4st/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "JS: DOM, EventListener",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/047-testimonial-box-switcher/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/047-testimonial-box-switcher/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/047-testimonial-box-switcher/",
  },
  {
    id: "e102a114-c101-4d1b-9116-27f2fc95e027",
    title: "Quiz App",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/dQgDYP02/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "JS: DOM, EventListener",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/046-quiz-app/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/046-quiz-app/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/046-quiz-app/",
  },
  {
    id: "802b4c8b-7dc5-478d-8086-a691422c1ce2",
    title: "Netflix Mobile Navigation",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/Dwsrf35F/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "CSS: Transition Transform; JS: DOM, EventListener",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/045-netflix-mobile-navigation/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/045-netflix-mobile-navigation/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/045-netflix-mobile-navigation/",
  },
  {
    id: "2d4f644a-8338-4db2-8b5d-f068d6d3fac3",
    title: "Custom Range Slider",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/qMT8gdQC/output.png",
    techStack: ["HTML", "CSS", "JS"],
    note: "JS: DOM, EventListener",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/044-custom-range-slider/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/044-custom-range-slider/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/044-custom-range-slider/",
  },
  {
    id: "5f6625f0-38b2-4ba9-a33c-29de62840cb9",
    title: "Feedback UI Design",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/YCZd0sPG/output.png",
    techStack: ["HTML", "CSS", "JS"],
    note: "JS: DOM, EventListener",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/043-feedback-ui-design/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/043-feedback-ui-design/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/043-feedback-ui-design/",
  },
  {
    id: "6e9794a0-e997-4ed0-bbd4-de98a5dafef3",
    title: "Space Shooter Game",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/4NdNdRJf/sace-shooter-game-output-image.png",
    techStack: ["HTML", "CSS", "JS"],
    note: "JS: DOM, EventListener, setTimeout, setInterval; (Not for smaller Screen)",
    livePreview:
      "https://irahuldutta02.github.io/javascript-projects-01/space-shooter-game",
    code: "https://github.com/irahuldutta02/javascript-projects-01/tree/main/space-shooter-game",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/javascript-projects-01/tree/main/space-shooter-game",
  },
  {
    id: "0ea27897-f97f-4f91-b0a8-4144e21430c1",
    title: "Snake Game",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/C5DCnrTJ/output.png",
    techStack: ["HTML", "CSS", "JS"],
    note: "JS: DOM, EventListener, setTimeout, setInterval",
    livePreview:
      "https://irahuldutta02.github.io/javascript-projects-01/snake-game",
    code: "https://github.com/irahuldutta02/javascript-projects-01/tree/main/snake-game",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/javascript-projects-01/tree/main/snake-game",
  },
  {
    id: "b4aa072e-063c-4c1f-a2d7-5403cecd3897",
    title: "ToDo App",
    filter: ["javascript", "css", "bootstrap", "html"],
    preview: "https://i.postimg.cc/Jzkw4Zhq/output.gif",
    techStack: ["HTML", "CSS", "Bootstrap", "JS"],
    note: "JS: DOM, EventListener; (Not for smaller Screen)",
    livePreview:
      "https://irahuldutta02.github.io/javascript-projects-01/07-todo-app",
    code: "https://github.com/irahuldutta02/javascript-projects-01/tree/main/07-todo-app",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/javascript-projects-01/tree/main/07-todo-app",
  },
  {
    id: "62ca7fed-8460-4b85-8b3f-d4bd9a52b8bd",
    title: "Ping Pong Game",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/fT7m4gcj/ping-pong-game-output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "JS: DOM, EventListener, SetInterval; (Not for smaller Screen)",
    livePreview:
      "https://irahuldutta02.github.io/javascript-projects-01/06-ping-pong-game",
    code: "https://github.com/irahuldutta02/javascript-projects-01/tree/main/06-ping-pong-game",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/javascript-projects-01/tree/main/06-ping-pong-game",
  },
  {
    id: "cb7c51d9-b69a-4891-8ea9-d3bc85dc2117",
    title: "Live User Filter",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/pTKc5SFg/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "JS: DOM, EventListener, fetch, async, await",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/042-live-user-filter/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/042-live-user-filter/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/042-live-user-filter/",
  },
  {
    id: "4090ac48-c5a9-4560-b2da-3ae3a166fb47",
    title: "Verify Your Account",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/76BBh6Fp/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "JS: DOM, EventListener",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/041-verify-account-ui/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/041-verify-account-ui/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/041-verify-account-ui/",
  },
  {
    id: "754eb1ff-474a-481f-a0a6-29d1fb57781f",
    title: "3D Background Boxes",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/pLvb3qty/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "JS: DOM, EventListener",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/040-3d-background-boxes/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/040-3d-background-boxes/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/040-3d-background-boxes/",
  },
  {
    id: "d6d15fd5-684b-4fe0-b8cd-6ff73f2d9cb5",
    title: "Password Strength Background",
    filter: ["javascript", "css", "html", "tailwind"],
    preview: "https://i.postimg.cc/525636SL/output.gif",
    techStack: ["HTML", "CSS", "JS", "Tailwind CSS"],
    note: "JS: DOM, EventListener",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/039-password-strength-background/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/039-password-strength-background/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/039-password-strength-background/",
  },
  {
    id: "148ce15a-2b91-413c-a568-9d3d6c4b5251",
    title: "Mobile Tab Navigation",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/nhBJ3yGH/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "JS: DOM, EventListener",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/038-mobile-tab-navigation/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/038-mobile-tab-navigation/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/038-mobile-tab-navigation/",
  },
  {
    id: "131af433-6372-44aa-bdf0-f9bf1214a921",
    title: "Pokedex",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/3R7H97GF/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "JS: DOM, EventListener, Fetch, Async-Await, Api Handling</br>CSS: Grid, Flex, Position",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/037-pokedex/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/037-pokedex/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/037-pokedex/",
  },
  {
    id: "3788aa4d-83d4-4680-bf1f-08126c9e2d72",
    title: "Hoverboard",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/dVxPJKgJ/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "JS: DOM, EventListener",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/036-hoverboard/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/036-hoverboard/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/036-hoverboard/",
  },
  {
    id: "f565b076-0397-40dc-9bbf-077e8b825101",
    title: "Image Carousel",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/3xs6tbx4/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "JS: DOM, EventListener",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/035-image-carousel/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/035-image-carousel/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/035-image-carousel/",
  },
  {
    id: "e2638dd7-05e8-4e4f-85b8-9b363bdda664",
    title: "Animated Countdown",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/cLfMYD31/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "JS: DOM, EventListener<br/>CSS: KeyFrames, Animation",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/034-animated-countdown/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/034-animated-countdown/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/034-animated-countdown/",
  },
  {
    id: "5a684b94-312a-46c5-8b1a-ac1451d07f32",
    title: "Notes App",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/htkBSkKy/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "JS: DOM, EventListener, LocalStorage, JSON parsing,  Marked library",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/033-notes-app/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/033-notes-app/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/033-notes-app/",
  },
  {
    id: "cecc98fb-d296-4eb7-8af3-10524ff32a24",
    title: "Good, Cheap, Fast",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/y658dVDY/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "JS: DOM, EventListener",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/032-good-cheap-fast/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/032-good-cheap-fast/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/032-good-cheap-fast/",
  },
  {
    id: "0024bffa-04d6-4049-a23c-9f8a8de30791",
    title: "Random Password",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/mkcQj6FT/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "JS: DOM, EventListener",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/031-random-password/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/031-random-password/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/031-random-password/",
  },
  {
    id: "4c6cafc1-9359-4551-824d-4b363947689b",
    title: "Auto Text Effect",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/nLp6YcPM/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "JS: DOM, EventListener",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/030-auto-text-effect/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/030-auto-text-effect/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/030-auto-text-effect/",
  },
  {
    id: "d8939ae0-e682-411f-8130-e59fd553b765",
    title: "Double Click Heart",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/k4y867sc/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "CSS: Animations, Transform</br>JS: DOM, EventListener",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/029-double-click-heart/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/029-double-click-heart/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/029-double-click-heart/",
  },
  {
    id: "5135e6eb-f58d-4b73-b3e9-ce1d98b2f0d1",
    title: "GitHub Profiles",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/d1Dgc08M/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "JS: DOM, EventListener, Axios, GitHub Api",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/028-github-profiles/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/028-github-profiles/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/028-github-profiles/",
  },
  {
    id: "11173377-7a0e-44d6-b1a6-a8c19572615d",
    title: "Toast Notification",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/6q3jTZ1y/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "CSS: Position</br>JS: DOM, EventListener, SetTimeout",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/027-toast-notification/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/027-toast-notification/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/027-toast-notification/",
  },
  {
    id: "be141609-6683-4bc9-924e-8e0e01c931bf",
    title: "Vertical Slider",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/L5D38Vsz/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "CSS: Position, Transform, Translate</br>JS: DOM, EventListener",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/026-vertical-slider/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/026-vertical-slider/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/026-vertical-slider/",
  },
  {
    id: "e2fe9f47-b9b8-41b1-a4fa-fb2e31d3b0bf",
    title: "Sticky Navbar",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/pr6QqNjh/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "CSS: Position</br>JS: DOM, EventListener",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/025-sticky-navbar/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/025-sticky-navbar/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/025-sticky-navbar/",
  },
  {
    id: "8ed72164-f0b1-476d-8c2c-5b6701025233",
    title: "Content Placeholder",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/CMmnz3C0/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "CSS: Animation</br>JS: DOM, SetTimeout",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/024-content-placeholder/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/024-content-placeholder/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/024-content-placeholder/",
  },
  {
    id: "1971c91f-952d-4e91-9fa5-b701adcf2b1c",
    title: "Kinetic CSS Loader",
    filter: ["css", "html"],
    preview: "https://i.postimg.cc/26ytJCWq/output.gif",
    techStack: ["HTML", "CSS"],
    note: "CSS: Animation",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/023-kinetic-css-loader/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/023-kinetic-css-loader/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/023-kinetic-css-loader/",
  },
  {
    id: "2a0f3cfb-2865-4397-a779-b41e089a9a89",
    title: "Draw App",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/XYDQVfhh/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "HTML: Canvas</br>JS: DOM, EventListener",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/022-drawing-app/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/022-drawing-app/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/022-drawing-app/",
  },
  {
    id: "bfa0122c-0bb5-4822-83d7-3fe4b0ca1bc6",
    title: "Drag N Drop",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/zXNhhLVL/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "JS: DOM, EventListener",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/021-drag-n-drop/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/021-drag-n-drop/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/021-drag-n-drop/",
  },
  {
    id: "3c10ba5d-b0f7-4976-83bf-a526449633cb",
    title: "Button Ripple Effect",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/SNyf62HY/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "JS: DOM, EventListener</br>CSS: Position",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/020-button-ripple-effect/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/020-button-ripple-effect/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/020-button-ripple-effect/",
  },
  {
    id: "7ed05418-02ae-4c04-9b8c-e0b9dfefce4f",
    title: "Theme Clock",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/TwWgkM4b/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "JS: DOM, EventListener, Date</br>CSS: Transition, Transform",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/019-theme-clock/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/019-theme-clock/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/019-theme-clock/",
  },
  {
    id: "e3890dc9-1165-4b21-964f-75d5f4aff2a8",
    title: "Background Slider",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/sg8bPqnk/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "JS: DOM, EventListener</br>CSS: Transition",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/018-background-slider/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/018-background-slider/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/018-background-slider/",
  },
  {
    id: "cf6c54ac-b992-4e5a-ac73-c2d04b38ef72",
    title: "Movie App",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/4dvShYk2/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "JS: DOM, EventListener, Fetch, Async-Await, Api Handling</br>CSS: Transition",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/017-movie-app/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/017-movie-app/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/017-movie-app/",
  },
  {
    id: "e579fc28-21d9-41e1-911a-eb8c66675058",
    title: "Drink Water",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/6pk1wZ6n/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "JS: DOM, EventListener</br>CSS: Transition",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/016-drink-water/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/016-drink-water/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/016-drink-water/",
  },
  {
    id: "830ac943-6550-47d5-b12a-207576dfcead",
    title: "Increment Counter",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/cHnBsXct/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "JS: DOM, EventListener, Coercion, SeTimeout</br>CSS: Transition, Transform",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/015-increment-counter/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/015-increment-counter/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/015-increment-counter/",
  },
  {
    id: "ec0bb3ae-480c-489e-a4ce-253e8ddbae65",
    title: "Animated Navigation",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/F1tF5rsL/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "JS: DOM, EventListener; CSS: Transition, Transform",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/014-animated-navigation/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/014-animated-navigation/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/014-animated-navigation/",
  },
  {
    id: "2b34eadc-4b96-47fc-a349-99c5aba96250",
    title: "Random Choice Picker",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/3Jj2mzxN/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "JS: DOM, EventListener, SetTimeout, SetInterval",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/013-random-choice-picker/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/013-random-choice-picker/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/013-random-choice-picker/",
  },
  {
    id: "6dfeab2b-c0c4-4edb-ac04-f2709321da2c",
    title: "FAQ Collapse",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/rFQLJcQY/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "JS: DOM, EventListener",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/012-faq-collapse/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/012-faq-collapse/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/012-faq-collapse/",
  },
  {
    id: "540645a6-47bd-4b78-9c9e-e1ebc0475fe6",
    title: "Event Key Codes",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/SxWJsBgQ/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "JS: DOM, EventListener",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/011-event-keycodes/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/011-event-keycodes/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/011-event-keycodes/",
  },
  {
    id: "8fa2502c-2035-458f-82a5-b20dd33a4a4c",
    title: "Dad Jokes",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/qRCfBTGj/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "JS: DOM, EventListener, Fetch, Async-await, Promises",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/010-dad-jokes/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/010-dad-jokes/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/010-dad-jokes/",
  },
  {
    id: "9743ac22-8664-4ac6-886e-e8e186137c08",
    title: "Sound Board",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/m2HNZH75/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "JS: DOM, EventListener",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/009-sound-board/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/009-sound-board/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/009-sound-board/",
  },
  {
    id: "bd9e05c0-06fb-456b-9306-9cf784590422",
    title: "Form Input Wave",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/wxSjzyqM/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "CSS: Transition, Transform, Position</br>JS: DOM, Map, Join, Split",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/008-form-wave-animation/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/008-form-wave-animation/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/008-form-wave-animation/",
  },
  {
    id: "c66f71c4-1a70-4b02-99cd-7137a6ea6944",
    title: "Split Landing Page",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/DZ97dHmF/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "CSS: Transition, Transform, Position, Flex</br>JS: DOM, Eventlistener",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/007-split-landing-page/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/007-split-landing-page/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/007-split-landing-page/",
  },
  {
    id: "380e2845-622d-4d86-a78b-ad26d25791a8",
    title: "Scroll Animation",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/QN9BQqBf/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "CSS: Transition, Transform</br>JS: DOM, Eventlistener",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/006-scroll-animation/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/006-scroll-animation/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/006-scroll-animation/",
  },
  {
    id: "b0fcce76-2d5b-497a-8ef6-0936a149da95",
    title: "Blurry Loading",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/htKx8YdV/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "CSS: Scale, Opacity, Blur, Filter</br>JS: DOM",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/005-blurry-loading/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/005-blurry-loading/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/005-blurry-loading/",
  },
  {
    id: "f71c36f2-718b-4da3-973f-a3fcb0e41c69",
    title: "Hidden Search Widget",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/FRZP9S3L/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "CSS: Transition, Transform</br>JS: DOM, Eventlistener",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/004-hidden-search-widget/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/004-hidden-search-widget/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/004-hidden-search-widget/",
  },
  {
    id: "8e3579d2-f5ec-4297-b271-6b89c2b16119",
    title: "Rotating Navigation",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/Pqvv4n2V/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "CSS: Transition, Transform</br>JS: DOM, Eventlistener",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/003-rotating-navigation/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/003-rotating-navigation/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/003-rotating-navigation/",
  },
  {
    id: "74ada76f-8349-485d-a2e2-87110ab4c748",
    title: "Progress Steps",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/qqG5644F/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "CSS: Transition, Transform</br>JS: DOM, Eventlistener",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/002-progress-steps/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/002-progress-steps/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/002-progress-steps/",
  },
  {
    id: "f7c92ad0-a988-4bcc-a345-d86429297799",
    title: "Expanding Cards",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/wj5MZNfY/output.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "CSS: Transition</br>JS: DOM, Eventlistener",
    livePreview:
      "https://irahuldutta02.github.io/html-css-js-only-projects/001-expanding-cards/",
    code: "https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/001-expanding-cards/",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/html-css-js-only-projects/tree/main/001-expanding-cards/",
  },
  {
    id: "813835da-7758-44b2-9bbf-e89ad4c27367",
    title: "One Card Clone",
    filter: ["css", "html"],
    preview: "https://i.postimg.cc/qvbTLQc7/one-card-clone.gif",
    techStack: ["HTML", "CSS"],
    note: "",
    livePreview: "https://irahuldutta02.github.io/web-dev-projects-01/one-card",
    code: "https://github.com/irahuldutta02/web-dev-projects-01/tree/main/one-card",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/web-dev-projects-01/tree/main/one-card",
  },
  {
    id: "5b9ddb7f-f8e7-45cf-93dc-ada924ed1c81",
    title: "Liquid Landing Page",
    filter: ["tailwind", "html"],
    preview: "https://i.postimg.cc/Ls2HChwy/liquid-landing-page.gif",
    techStack: ["Tailwind CSS"],
    note: "",
    livePreview:
      "https://irahuldutta02.github.io/web-dev-projects-01/liquid-landing-page/dist/",
    code: "https://github.com/irahuldutta02/web-dev-projects-01/tree/main/liquid-landing-page",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/web-dev-projects-01/tree/main/liquid-landing-page",
  },
  {
    id: "a5707b9f-d400-4fed-a26f-92848231bfab",
    title: "Trafalgar Landing Page",
    filter: ["tailwind", "html"],
    preview: "https://i.postimg.cc/pTnRy8FL/trafalgar-landing-page.gif",
    techStack: ["Tailwind CSS"],
    note: "",
    livePreview:
      "https://irahuldutta02.github.io/web-dev-projects-01/trafalgar-tailwind-landing-page/dist/",
    code: "https://github.com/irahuldutta02/web-dev-projects-01/tree/main/trafalgar-tailwind-landing-page",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/web-dev-projects-01/tree/main/trafalgar-tailwind-landing-page",
  },
  {
    id: "2697c01d-12de-4ee0-ae03-2012ca4f3620",
    title: "Farmman Login Page",
    filter: ["tailwind", "html"],
    preview: "https://i.postimg.cc/WzMWHpQn/farman-login-page.gif",
    techStack: ["Tailwind CSS"],
    note: "",
    livePreview:
      "https://irahuldutta02.github.io/web-dev-projects-01/farmman-loginpage-tailwind/dist/",
    code: "https://github.com/irahuldutta02/web-dev-projects-01/tree/main/farmman-loginpage-tailwind",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/web-dev-projects-01/tree/main/farmman-loginpage-tailwind",
  },
  {
    id: "890d03d2-75f6-4963-abe7-1436e184749e",
    title: "Pricing Card",
    filter: ["tailwind", "html"],
    preview: "https://i.postimg.cc/1tSNK9rP/pricing-card-tailwind.gif",
    techStack: ["Tailwind CSS"],
    note: "",
    livePreview:
      "https://irahuldutta02.github.io/web-dev-projects-01/tailwind-pricing-card-design-01/dist",
    code: "https://github.com/irahuldutta02/web-dev-projects-01/tree/main/tailwind-pricing-card-design-01",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/web-dev-projects-01/tree/main/tailwind-pricing-card-design-01",
  },
  {
    id: "2505bd1c-ff82-4037-a0f3-a371c7056967",
    title: "Calculator",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/sDmKQLyv/calculator.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "",
    livePreview:
      "https://irahuldutta02.github.io/web-dev-projects-01/calculator-01",
    code: "https://github.com/irahuldutta02/web-dev-projects-01/tree/main/calculator-01",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/web-dev-projects-01/tree/main/calculator-01",
  },
  {
    id: "c579f4cf-fcb9-4482-869e-a0de5435a37d",
    title: "ToDo List App",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/L8ZYKqy2/to-do-list.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "",
    livePreview:
      "https://irahuldutta02.github.io/web-dev-projects-01/to-do-list-01",
    code: "https://github.com/irahuldutta02/web-dev-projects-01/tree/main/to-do-list-01",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/web-dev-projects-01/tree/main/to-do-list-01",
  },
  {
    id: "6104f3f9-f881-43b5-9eae-29f3021a1159",
    title: "Unit Converter",
    filter: ["javascript", "css", "html"],
    preview: "https://i.postimg.cc/FRFHR1xf/unit-converter.gif",
    techStack: ["HTML", "CSS", "JS"],
    note: "",
    livePreview:
      "https://irahuldutta02.github.io/web-dev-projects-01/unit-converter-01",
    code: "https://github.com/irahuldutta02/web-dev-projects-01/tree/main/unit-converter-01",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/web-dev-projects-01/tree/main/unit-converter-01",
  },
  {
    id: "9fdc839a-4f52-45e6-8ca4-f3240521007f",
    title: "Tindog Landing Page",
    filter: ["bootstrap", "html"],
    preview: "https://i.postimg.cc/25GCPrfC/tindog.gif",
    techStack: ["Bootstrap"],
    note: "",
    livePreview:
      "https://irahuldutta02.github.io/web-dev-projects-01/tindog-bootstrap/index.html",
    code: "https://github.com/irahuldutta02/web-dev-projects-01/tree/main/tindog-bootstrap",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/web-dev-projects-01/tree/main/tindog-bootstrap",
  },
  {
    id: "1a208847-01e5-41f8-96fa-f79719ee6b5b",
    title: "Student Management Console App",
    filter: ["java"],
    preview: "https://i.postimg.cc/PrMhLdPY/student-management-console-app.gif",
    techStack: ["Java"],
    note: "",
    code: "https://github.com/irahuldutta02/java-projects-01/tree/main/basic-student-managment",
    download:
      "https://downgit.github.io/#/home?url=https://github.com/irahuldutta02/java-projects-01/tree/main/basic-student-managment",
  },
  {
    id: "4c069a07-ee9f-46ec-9914-7d8582299b89",
    title: "SignUp-LogIn-ForgotPass",
    filter: ["ui-ux"],
    preview: "https://i.postimg.cc/XY8MvL18/signup-login-figma.gif",
    techStack: ["Figma"],
    note: "",
    link: "https://www.figma.com/file/HVJhlP7JpvMLwyWhLZaPZr/SignUp-LogIn-ForgotPassword-for-Mobile-App?t=DswFYEZQKhzfmC8D-1",
  },
  /**
   * ! ------------------------------
   * ! Non Featured Projects (Ends) |
   * ! ------------------------------
   */
];

const techStack = [
  {
    id: 1,
    name: "HTML",
    iconSrc: "https://img.icons8.com/fluency/48/html-5.png",
  },
  {
    id: 2,
    name: "CSS",
    iconSrc: "https://img.icons8.com/fluency/48/css3.png",
  },
  {
    id: 3,
    name: "Bootstrap",
    iconSrc: "https://img.icons8.com/fluency/48/bootstrap.png",
  },
  {
    id: 4,
    name: "Tailwind",
    iconSrc: "https://img.icons8.com/color/48/tailwindcss.png",
  },
  {
    id: 5,
    name: "JavaScript",
    iconSrc: "https://img.icons8.com/color/48/javascript.png",
  },
  {
    id: 6,
    name: "TypeScript",
    iconSrc: "https://img.icons8.com/fluency/48/typescript--v2.png",
  },
  {
    id: 7,
    name: "ReactJs",
    iconSrc: "https://img.icons8.com/color/48/react-native.png",
  },
  {
    id: 8,
    name: "NextJs",
    iconSrc: "https://simpleicons.org/icons/nextdotjs.svg",
  },
  {
    id: 9,
    name: "Express Js",
    iconSrc: "https://img.icons8.com/fluency/48/express-js.png",
  },
  {
    id: 10,
    name: "Node Js",
    iconSrc: "https://img.icons8.com/color/48/nodejs.png",
  },
  {
    id: 11,
    name: "PostgreSQL",
    iconSrc: "https://img.icons8.com/color/48/postgreesql.png",
  },
  {
    id: 12,
    name: "MongoDB",
    iconSrc: "https://img.icons8.com/color/48/mongodb.png",
  },
  {
    id: 13,
    name: "Git",
    iconSrc: "https://img.icons8.com/color/48/git.png",
  },
  {
    id: 14,
    name: "GitHub",
    iconSrc: "https://img.icons8.com/fluency/48/github.png",
  },
  {
    id: 15,
    name: "Linux",
    iconSrc: "https://img.icons8.com/color/48/linux.png",
  },
  {
    id: 16,
    name: "Docker",
    iconSrc: "https://img.icons8.com/color/48/docker.png",
  },
  {
    id: 17,
    name: "Figma",
    iconSrc: "https://img.icons8.com/color/48/figma.png",
  },
];

import planysTechLogo from "../assets/images/planystech-logo.png";
import techMantraLogo from "../assets/images/techmantra-logo.png";

export const experiences = [
  {
    id: "planys",
    company: "Planys Technologies",
    role: "Software Engineer",
    logo: planysTechLogo,
    link: "https://planystech.com/",
    startDate: "2025-09-10",
    endDate: null,
    location: "Chennai, Tamil Nadu, India",
    employmentType: "Full Time, In Office",
  },
  {
    id: "techmantra",
    company: "Tech Mantra Co.",
    role: "MERN Stack Developer",
    logo: techMantraLogo,
    link: "https://techmantra.co/",
    startDate: "2024-04-01",
    endDate: "2025-08-31",
    location: "Kolkata, West Bengal, India",
    employmentType: "Full Time, In Office",
  },
];

function getProjects() {
  return projects;
}

function getFilterItems() {
  let filterItems = [];
  projects.forEach((project) => {
    project.filter.forEach((filterItem) => {
      if (!filterItems.includes(filterItem)) {
        filterItems.push(filterItem);
      }
    });
  });
  return filterItems;
}

function getTechStack() {
  return techStack;
}

function getFeaturedProjects() {
  return projects.filter((project) => project.isFeatured);
}

function getExperiences() {
  return experiences;
}

export {
  getFeaturedProjects,
  getFilterItems,
  getProjects,
  getTechStack,
  getExperiences,
};
