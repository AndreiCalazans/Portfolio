import React from 'react';

var Text = React.createClass({
  render() {
    return (
    <div>
        <p>The Back-End API/Micro services are part of the FreeCodeCamp Back-End Certificate curriculum, It is a required challenge that must be done in order to complete the
      certification. The challenges required the student to build Micro services or small API which fulfill the user stories and requirements. Five different micro services were built by me
    during this section.</p>
    <ol>
      <li><a href="http://andrei-file-metadata.herokuapp.com/">File Metadata Microservice</a></li>
      <li><a href="http://andrei-image-search.herokuapp.com/">Image search API</a></li>
      <li><a href="http://andrei-little-url.herokuapp.com/">URL Shortener Microservice</a></li>
      <li><a href="http://andrei-timestamp-ms.herokuapp.com/">Timestamp Microservice</a></li>
      <li><a href="http://andrei-whoami-parser.herokuapp.com/">Request Header Parser Microservice</a></li>
    </ol>
  </div>
    )
  }
});
export var portfolios = [
  {
    url: 'http://andrei-voting-app.herokuapp.com/',
    img: require('../images/perspectives/votingApp3d.png'),
    displayImages: [
      require('../images/perspectives/votingApp3d.png'),
      require('../images/votingApp/votingApp2.png'),
      require('../images/votingApp/votingApp3.png'),
      require('../images/votingApp/votingApp4.png'),
      require('../images/votingApp/votingApp5.png'),
      require('../images/votingApp/votingApp6.png')
    ],
    name: 'VoteFast',
    info: 'A voting app to create , vote and monitor polls. Full stack ReactJs app with authentication system using passportJs.',
    completeInfo: `VoteFast is a Full stack web app which not only enables the user to vote on existing polls, but to also sign up, sign in,
    create/delete polls, log in with facebook and add more options to the polls. The development of this App included creating a database for the polls
    and users which were interconnected. Adapting ReactJs + Redux with passportjs was also another key point to making this app work appropriately, Redux played a critical
    role in keeping the maintenance state, making it possible to update the client as the state changed according to user interaction. The challenge involved with this
    project were not only in the coding of front and back end features, but also the design part which i realized a modern material like approach using the materializeCss library
    `,
    stack: 'NodeJs, Express, MongoDD, ReactJs, Redux and more',
    color: 'lightgreen',
    bgColor: 'white'
  },
  {
      url: 'http://andrei-stock-chart.herokuapp.com/',
      img: require('../images/stockChart/stockChart3d.png'),
      displayImages: [
        require('../images/stockChart/stockChart3d.png'),
        require('../images/stockChart/stockChart2.png'),
        require('../images/stockChart/stock-chart.png'),
      ],
      name: 'React Stock Chart',
      info: "Stock chart created using React, socket.io and HighCharts",
      completeInfo: `The StockChart app is part of the FreeCodeCamp Back-End Certificate curriculum, it is a required challenge that must be done in order to complete the
      certification. The challenge required the student to build an app that let's the user view a graph dispaying the recent trend lines for each added stock, add new stocks by their
      symbol name, remove stocks and see the changes in real-time when any other user adds or removes a stock. To resolve the real time sync between users I used socket.io which is a Web
      Socket package. `,
      stack: 'React, SocketIO, express and NodeJs',  
      color: 'white' ,
      bgColor: 'lightgrey'
    },
  {
    url: 'http://andrei-disc.surge.sh/',
    img: require('../images/perspectives/disc.png'),
    displayImages: [
      require('../images/perspectives/disc.png'),
      require('../images/disc/disc2.png'),
      require('../images/disc/disc3.png'),
      require('../images/disc/disc4.png')

    ],
    name: 'DISC',
    info:'Complete ReactJs app with Foundation Library. Easy Personality Assessment with 16 results',
    completeInfo: `The DISC App is a personality assessment test which quizzes the user with 15 different questions, then calculates the result using an algorithm
     then returns the personality type in 16 possible outcomes. The DISC app involved not only developing the app itself but also creating an algorithm which
     would replicate correctly the outcomes of a chart used in this test. The front-end was made with foundation and reactjs + redux, while the back-end was controlled
     with NodeJs and Express`,
    stack: 'NodeJs, Express, ReactJs, Redux and foundation',
    color: 'teal',
    bgColor: 'pink'
  },
    {
      url: 'http://nightlife-andrei.herokuapp.com/',
      img: require('../images/nightlife/nightlife3d.png'),
      displayImages: [
        require('../images/nightlife/nightlife3d.png'),
        require('../images/nightlife/nightlife.png'),
        require('../images/nightlife/nightlife2.png'),
      ],
      name: 'NightLife Web App',
      info: "Nightlife coordination app which let's you search bars to go in your city and see how many people are going",
      completeInfo: `The Nightlife coordination app is part of the FreeCodeCamp Back-End Certificate curriculum, it is a required challenge that must be done in order to complete the
      certification. The challenge required the student to build an app that let's the user authenticate, view bars in his/her city
      , see how many people are already attending that destination and also decide if you are or not going to that destination. This app use a Yelp API to find venues
      in the cities of the user search.`,
      stack: 'ReactJs, Autho0, express and NodeJs',  
      color: 'purple' ,
      bgColor: 'khaki'
    },
  {
    url:'https://andreicalazans.github.io/calculator1/index.html',
    img: require('../images/perspectives/calculator.png'),
    displayImages: [
      require('../images/perspectives/calculator.png')
    ],
    name: 'JS Calculator',
    info: 'HTML5, CSS3 and pure Vanilla JavaScript. Well designed calculator with complete functions',
    completeInfo: `The Js Calculator is part of the FreeCodeCamp Front-End Certificate curriculum, it is a required challenge, that must be done in order to complete the
    certification. The challenge required the student to build a completely functional Calculator using JavaScript. It was permitted to use any libraries but I chose to
    use plain JavaScript with the purpose to learn better the basics of development with the language. In the Design part i tried to imitate the look of the calculator on
    the Iphone.`,
    stack: 'HTML5, CSS3 and Vanilla Javascript',
    color: 'grey',
    bgColor: 'lightblue'
  },  {
      url: 'http://twitchtv-andrei.surge.sh/',
      img: require('../images/perspectives/twitch.png'),
      displayImages: [
        require('../images/perspectives/twitch.png'),
        require('../images/twitch/twitch1.png'),
        require('../images/twitch/twitch2.png')
      ],
      name: 'Twitch Stream',
      info: 'Twitch.tv streaming app made with vanilla JavaScript, html5 and css',
      completeInfo: `The Js Calculator is part of the FreeCodeCamp Front-End Certificate curriculum, it is a required challenge, that must be done in order to complete the
      certification. The challenge required the student to build a completely functional Twitch Streamer using JavaScript. This App must be able to show online, offline and
      inexistent channels in event of that. I managed to stream the videos thanks to the Twitch.tv API which not only shares the video streams but as well as information of the
      channels online or offline. The challenge was extremely good principally to get a better feel for AJAX calls.',
      stack: 'HTML5 , CSS, JQUERY and Vanilla JavaScript.`,
      color: 'white',
      bgColor: 'orange'
    },
    {
      url: 'http://react-todo-andrei.herokuapp.com/',
      img: require('../images/perspectives/Todo.png'),
      displayImages: [
        require('../images/perspectives/Todo.png'),
        require('../images/todo/todo.png'),
        require('../images/todo/todo2.png')
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
      url: 'http://pomodoro-timer.surge.sh/',
      img: require('../images/pomodoro/pomodoro3d.png'),
      displayImages: [
        require('../images/pomodoro/pomodoro3d.png'),
        require('../images/pomodoro/pomodoro1.png'),
        require('../images/pomodoro/pomodoro2.png'),
        require('../images/pomodoro/pomodoro3.png')

      ],
      name: 'Pomodoro Timer',
      info: 'HTML5, CSS3 and pure Vanila Javascript with great Responsive design',
      completeInfo: `The Pomodoro Timer is part of the FreeCodeCamp Front-End Certificate curriculum, it is a required challenge that must be done in order to complete the
      certification. The challenge required the student to build a completely functional Pomodoro Timer which will time intervals set by the user then give rest breaks
      between each round. The App was a great challenge because it included also a settings interface which managed all the preferences of the user. The other fact that made
      this challenge interesting was due to using only Vanilla JavaScript to handle everything.`,
      stack: 'HMTL , CSS3 and Vanilla Javascript',
      color: 'red',
      bgColor: 'white'
    },
    {
      url: 'https://codepen.io/AndreiCalazans/full/GjdpRB/',
      img: require('../images/perspectives/jepordy.png'),
      displayImages: [
        require('../images/perspectives/jepordy.png'),
        require('../images/jeopardy/jeopardy.png'),
        require('../images/jeopardy/jeopardy1.png'),
        require('../images/jeopardy/jeopardy2.png'),
      ],
      name: 'Jeopardy Game',
      info: 'Jeopardy game, made with HTML5, CSS and Jquery. Simple elegant design',
      completeInfo: `The Jeopardy game is single page game made with JQuery, as it was one of my first projects in the beginning of my learning process.`,
      stack: 'HTML5, Css3 and Jquery',
      color: 'lightgreen' ,
      bgColor: 'white'
    },
    {
      url: 'http://drum-set.surge.sh/',
      img: require('../images/drum/drumset3d.png'),
      displayImages: [
        require('../images/drum/drumset3d.png'),
        require('../images/drum/drumSet.png')

      ],
      name: 'Drum Set',
      info: 'Eletronic Drum set using only Vanila Javascript and some HTML5',
      completeInfo: `As a part of my learning process of Javascript, I made this electronic drum set to better understand how JavaScript manipulates the DOM.
       The project included making the design as well as implementing the audio interaction to user key strokes. This project immensely helped me to grasp the
       fundamentals of Js.`,
      stack: 'HTML5, Css3 and Javascript',
      color: 'lightblue' ,
      bgColor: 'khaki'
    },
    {
      url: '',
      img: require('../images/api.png'),
      displayImages: [
        require('../images/api.png')


      ],
      name: 'Back-End API',
      info: 'Back-End API/Microservices for different number of purposes to serve to the client-side',
      completeInfo: <Text></Text>,
      stack: 'NodeJs , express and JavaScript',
      color: 'lightgrey' ,
      bgColor: 'white'
    },
    {
      url: 'https://codepen.io/AndreiCalazans/full/ALYkvW/',
      img: require('../images/weatherApp/weatherApp3d.png'),
      displayImages: [
        require('../images/weatherApp/weatherApp3d.png'),
        require('../images/weatherApp/weatherApp.png')
      ],
      name: 'Weather App',
      info: 'This is a weather app using geolocation to return the weather of your current city',
      completeInfo: `The Weather App is part of the FreeCodeCamp Front-End Certificate curriculum, it is a required challenge that must be done in order to complete the
      certification. The challenge required the student to build a weather app which returns the weather for the current location of the user. This app not only returns the
      temperature but also converts the temperature to Celsius or Fahrenheit.`,
      stack: 'HTML5, Css3, Jquery and Javascript',  
      color: 'lightblue' ,
      bgColor: 'khaki'
    },
    {
      url: 'http://andrei-chat.herokuapp.com/',
      img: require('../images/socketChat/socketChat3d.png'),
      displayImages: [
        require('../images/socketChat/socketChat3d.png'),
        require('../images/socketChat/socketChat2.png'),
        require('../images/socketChat/socketChat.png'),
      ],
      name: 'Simple Chat app',
      info: "Simple Chat app using socket io",
      completeInfo: `Chat applicaton which permits you to chat with muiltiple users at the same time, it uses Socket io to get instant messages
      , who is typing and how many users are online`,
      stack: 'Jquery, SocketIO, express and NodeJs',  
      color: 'yellow' ,
      bgColor: 'lightgrey'
    }
];
