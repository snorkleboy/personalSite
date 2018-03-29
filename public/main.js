document.addEventListener('DOMContentLoaded', function () {
    const projectlist = document.getElementById('projects')
    projects.forEach(function (project) {
        createProject(projectlist, project);
    });
    activeLinker();

});

const Project = function(img, links, colors, title, header, points){
    this.img = img;
    this.links = links;
    this.colors = colors;
    this.title = title;
    this.header = header;
    this.points = points;
};

const projects = [];

projects.push(new Project(
    'http://res.cloudinary.com/flyakite/image/upload/q_60/v1514414844/search_rifri5.png',
    { source: 'https://github.com/snorkleboy/FlyAKite', live: 'http://flyakite.artemkharshan.com' },
    ['rgba(100,100,100,1)'],
    "FlyaKite",
    'React, Rails, and Postgres powered EventBrite clone',
    [
        `Implemented a Ruby On Rails powered PostgreSQL backend with custom routes and SQL queries to power front end searching and sorting`,
        `Designed an account system with authentication and protected routes on the front and backend`,
        `Integrated Cloudinary image hosting, Google Maps, and the Stripe Payment Gateway APIs`
    ]
));

projects.push(new Project(
    'http://res.cloudinary.com/flyakite/image/upload/q_60/v1515983798/tor-logo-large-89ac1c118b86d69953fff1ab31128550fcce9a74162e9b3fb7d0fc4bfd83e1ed_u2mbbn.png',
    { source: 'https://github.com/reidjs/onionup', live: 'http://onionup.artemkharshan.com' },
    ['rgba(100,100,100,1)'],
    "Onionup",
    'A Vue/Vuex App for pinging Sites on the Onion Network',
    [
`Utilized Ruby threads to send requests concurrently cutting wait times from nearly a minute to a few hundred milliseconds`,
`Designed Rails Tasks To ping sites in the background and maintained the Database limits using Heroku scheduler and ROR tasks`,
`Used Ruby's Socks Proxy implementation to route requests through a Tor network Node we established`
]
));

projects.push(new Project(
    'http://res.cloudinary.com/flyakite/image/upload/c_scale,q_56,w_203/v1515907377/download_1_fl6gow_kltvt8.png',
    { source: 'https://github.com/snorkleboy/Compression-visualizer', live: 'https://imagereader.herokuapp.com' },
    ['rgba(100,100,100,1)'],
    "TFin",
    'A stock visualizer that uses React and D3 to chart and organize data from IEX and Quandle',
    [
`Implimented D3 to create responsive and informative Stock Graphs`,
`integrated IEX,Quandle, and Yahoo and Economist RSS feeds using their API's`,
`Use Mongo and Express for user Authentication and storing common data`
    ]
));

projects.push(new Project(
    'https://www.tcpi.com/wp-content/themes/Divi-child/images/tcp-logo.svg',
    { source: 'https://github.com/snorkleboy/TCPchat', live: 'http://chat.artemkharshan.com' },
    ['rgba(100,100,100,1)'],
    "TCP chat",
    '-WIP- A CLI and Browser Instant Chat App',
    ['Designed a custom server using Ruby TCP Sockets', 'Made a CLI instant chat app with Ruby Threads and TCP sockets', 'Will make a HTML WebSocket based single page app instant chat that I will hook up with the TCP chat. ']
));

projects.push(new Project(
    'http://res.cloudinary.com/flyakite/image/upload/v1521700984/logo_kyeatu.png', {
        source: 'https://github.com/snorkleboy/Mern',
        live: 'http://tfin.artemkharshan.com'
    }, ['rgba(100,100,100,1)'],
    "Compression Visualizer",
    'A javascript Quadtree Compression Algorithm', [
        `Formulated a Quadtree data structure to hold images pixel data`,
        `Used Javascript Timeouts and some good old fashioned recursion to animate the process and allow the user to feed in
parameters and click on nodes as the algorithm runs`,
        `Created a Demo System that Runs the page and explains the algorithm`
    ]
));
const projTemplate = `
    <div id='project-modal' class='project-modal'>
        <h1 id='modal-title'></h1>
        <ul id='points'>

        </ul>
        <div class='modal-a-holder'>
            <a id='live' href=''>live</a>
            <a id='source' href=''>source</a>
        </div>

    </div>
    <div class='project-holder'>
            <img src='' />
        <span class='title-header'>
            <h1 class='title'></h1>
            <h2 class='header'></h2>
        </span>
    </div>
`

const createProject = function(parent,newproj){
    // create element from template
    const template = document.createElement('li');
    template.innerHTML = projTemplate;

    //setup modal
    const pointList = template.querySelector('#points');
    const liveEl = template.querySelector('#live');
    const sourceEl = template.querySelector('#source');
    const modalTitle = template.querySelector('#modal-title');

    modalTitle.innerText = newproj.title;
    newproj.points.forEach( function(point){
        const pointEl = document.createElement('li');
        pointEl.innerText=point;
        pointList.appendChild(pointEl);
    });
    liveEl.href = newproj.links.live;
    sourceEl.href = newproj.links.source;

    //setup image and header
    const img = template.querySelector('img');
    const titleEl = template.querySelector('.title');
    const headerEl = template.querySelector('.header');

    img.src = newproj.img;
    titleEl.innerText = newproj.title;
    headerEl.innerText = newproj.header;

    //change id and append

    template.id = newproj.title;
    // template.className = '';
    parent.appendChild(template);
}
const activeLinker = function(){
    let tick = false;
    let current = null;
    const seperators = document.querySelectorAll('.seperator')
    const anchors = document.querySelectorAll(`.aLink`);
    const sepY = [];
    seperators.forEach((sep) => {
        sepY.push(sep.offsetTop);
    });
    //run once for when you land on page
    let winY = window.scrollY;
    if (winY > sepY[0]*.7 && winY < sepY[1]) {
        current = anchors[0];
    } else if (winY > sepY[1] - .2*(sepY[1]-sepY[0]) && winY < sepY[2]) {
        current = anchors[1];
    } else if (winY > sepY[1] - .2 * (sepY[2] - sepY[1]) && winY < sepY[3]) {
        current = anchors[2];
    } else if (winY > sepY[3] - .2 * (sepY[3] - sepY[2])) {
        current = anchors[3];
    }   else{
        current= null;
    }
    anchors.forEach((a) => a === current ? a.classList.add('active') : a.classList.remove('active'));

    //run every time on scroll
    document.addEventListener('scroll', (e) => {
        if (!tick) {
            tick = true;
            setTimeout(() => {
                winY = window.scrollY;
                // sepY.forEach((sep, i) => console.log(i, sep))
                
                if (winY > sepY[0]-400 && winY < sepY[1]-500){
                    current = anchors[0];

                } else if (winY > (sepY[1] - 500) && winY < sepY[2]-400){
                    current = anchors[1];
                }else if (winY>sepY[2]-400 && winY< sepY[3]-400){
                    
                    current = anchors[2];
                }else if (winY>sepY[3]-300){
                    current = anchors[3];
                }else{
                    current = null;
                }
                anchors.forEach((a) => a === current ? a.classList.add('active') : a.classList.remove('active'));
                tick = false;
            }, 200);
        }
    });
};


