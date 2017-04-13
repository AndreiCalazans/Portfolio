export var portfolios = [
  {
    id: 1,
    url: 'http://andrei-voting-app.herokuapp.com/',
    img: require('../images/perspectives/votingApp3d.png'),
    displayImages: [
      require('../images/perspectives/votingApp3d.png'),
      require('../images/votingApp.png'),
      require('../images/votingApp.png')
    ],
    name: 'VoteFast',
    info: 'A voting app to create , vote and monitor polls. Full stack ReactJs app with authentication system using passportJs.',
    completeInfo: `VoteFast is a Full stack web app which not only enables the user to vote on existing polls, but to also sign up, sign in,
    create/delete polls, log in with facebook and add more options to the polls. The development of this App included creating a database for the polls
    and users which were interconnected. Adapting ReactJs + Redux with passportjs was also another key point to making this app work appropriatly, Redux played a critical
    role in keeping the maintaince state, making it possible to update the client as the state changed according to user interaction. The challenge involved with this
    project were not only in the coding of front and back end features, but also the design part which i realized a modern material like approach using the materializeCss library
    `,
    stack: 'NodeJs, Express, MongoDD, ReactJs, Redux and more',
    color: 'lightgreen',
    bgColor: 'white'
  },
  {
    id: 2,
    url: 'http://andrei-disc.surge.sh/',
    img: require('../images/perspectives/disc.png'),
    displayImages: [
      require('../images/perspectives/disc.png'),
      require('../images/disc/disc2.png'),
      require('../images/disc/disc3.png')
    ],
    name: 'DISC',
    info:'Complete ReactJs app with Foundation Library. Easy Personality Assessment with 16 results',
    completeInfo: `The DISC App is a personality assessment test which quizes the user with 15 different questions, then calculates the result using an algorithm
     then returns the personality type in 16 possible outcomes. The DISC app involved not only developing the app itself but also creating an algorithm which
     would replicate correctly the outcomes of a chart used in this test. The front-end was made with foundation and reactjs + redux, while the back-end was controlled
     with NodeJs and Express`,
    stack: 'NodeJs, Express, ReactJs, Redux and foundation',
    color: 'teal',
    bgColor: 'pink'
  },
  {
    id: 3,
    url:'https://andreicalazans.github.io/calculator1/index.html',
    img: require('../images/perspectives/calculator.png'),
    displayImages: [
      require('../images/perspectives/calculator.png')
    ],
    name: 'JS Calculator',
    info: 'HTML5, CSS3 and pure Vanila Javascript. Well designed calculator with complete functions',
    completeInfo: `The Js Calculator is part of the FreeCodeCamp Front-End Certificate curriculum, it is a required challenge, that must be done in order to complete the
    certification. The challenge required the student to build a completely functional Calculator using Javascript. It was permitted to use any libraries but I chose to
    use plain Javascript with the purpose to learn better the basics of development with the language. In the Design part i tried to imitate the look of the calculator on
    the Iphone.`,
    stack: 'HTML5, CSS3 and Vanilla Javascript',
    color: 'grey',
    bgColor: 'lightblue'
  },  {
      id: 4,
      url: 'http://twitchtv-andrei.surge.sh/',
      img: require('../images/perspectives/twitch.png'),
      displayImages: [
        require('../images/perspectives/twitch.png')
      ],
      name: 'Twitch Stream',
      info: 'Twitch.tv streaming app made with vanila javascript, html5 and css',
      completeInfo: `The Js Calculator is part of the FreeCodeCamp Front-End Certificate curriculum, it is a required challenge, that must be done in order to complete the
      certification. The challenge required the student to build a completely functional Twitch Streamer using javascript. This App must be able to show online, offline and
      inexistant channels in event of that. I managed to stream the videos thanks to the Twitch.tv API which not only shares the video streams but as well as information of the
      channels online or offline. The challenge was extremelly good principally to get a better feel for AJAX calls.',
      stack: 'HTML5 , CSS, JQUERY and Vanilla Javascript.`,
      color: 'white',
      bgColor: 'orange'
    },
    {
      id: 5,
      url: 'http://react-todo-andrei.herokuapp.com/',
      img: require('../images/perspectives/Todo.png'),
      displayImages: [
        require('../images/perspectives/Todo.png')
      ],
      name: 'Todo App',
      info: 'ReactJs To Do app using firebird for authentication and database with to do filters',
      completeInfo: `The Todo App is a full stack app with authentication and database using google's firebird app. This was a ReactJs app built for the purpose of learning not only
      ReactJs but also Redux. It was impressive how easy it is to integrate Firebird database and auth system with Redux.`,
      stack: 'NodeJs, Express, ReactJs+Redux and Firebird',
      color: 'khaki',
      bgColor: 'lightblue'
    },
    {
      id: 6,
      url: 'http://pomodoro-timer.surge.sh/',
      img: require('../images/perspectives/pomodoro.png'),
      displayImages: [
        require('../images/perspectives/pomodoro.png')
      ],
      name: 'Pomodoro Timer',
      info: 'HTML5, CSS3 and pure Vanila Javascript with great Responsive design',
      completeInfo: `The Pomodoro Timer is part of the FreeCodeCamp Front-End Certificate curriculum, it is a required challenge that must be done in order to complete the
      certification. The challenge required the student to build a completely functional Pomodoro Timer which will time intervals set by the user then give rest breaks
      between each round. The App was a great challenge because it included also a settings interface which managed all the preferences of the user. The other fact that made
      this challenge interesting was due to using only Vanilla javascript to handle everything.`,
      stack: 'HMTL , CSS3 and Vanilla Javascript',
      color: 'red',
      bgColor: 'white'
    },
    {
      id: 7,
      url: 'https://codepen.io/AndreiCalazans/full/GjdpRB/',
      img: require('../images/perspectives/jepordy.png'),
      displayImages: [
        require('../images/perspectives/jepordy.png'),
        require('../images/votingApp.png'),
        require('../images/votingApp.png')
      ],
      name: 'Jeopardy Game',
      info: 'Your classical home game with Jquery',
      completeInfo: "The Jeopardy game is single page game made with JQuery, as it was one of my first projects in the beginning of my learning process.",
      stack: 'HTML5, Css3 and Jquery',
      color: 'lightgreen' ,
      bgColor: 'white'
    },
];
