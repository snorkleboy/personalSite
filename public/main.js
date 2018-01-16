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
    { source: 'http://www.github.com', live: 'heroku.com' },
    ['rgba(100,100,100,1)'],
    "FlyaKite",
    'React, Rails, and Postgres powered EventBrite clone',
    [
        `-Implemented a Ruby On Rails powered PostgreSQL backend with
custom routes and SQL queries to power front end searching and
sorting`,
        `-Designed an account system with authentication and protected
routes on the front and backend`,
        `-Integrated Cloudinary image hosting, Google Maps, and the
Stripe Payment Gateway APIs`
    ]
));

projects.push(new Project(
    'http://res.cloudinary.com/flyakite/image/upload/q_60/v1515983798/tor-logo-large-89ac1c118b86d69953fff1ab31128550fcce9a74162e9b3fb7d0fc4bfd83e1ed_u2mbbn.png',
    { source: 'http://www.github.com', live: 'heroku.com' },
    ['rgba(100,100,100,1)'],
    "Onionup",
    'A Vue/Vuex App for pinging Sites on the Onion Network',
    [
`-Utilized Ruby threads to send requests concurrently cutting wait times from nearly a minute to a few hundred milliseconds`,
`-Designed Rails Tasks To ping sites in the background and maintained the Database
limits using Heroku scheduler and ROR tasks`,
`-Used Ruby's Socks Proxy implementation to route requests
through a Tor network Node we established`
]
));

projects.push(new Project(
    'http://res.cloudinary.com/flyakite/image/upload/c_scale,q_56,w_203/v1515907377/download_1_fl6gow_kltvt8.png',
    { source: 'http://www.github.com', live: 'heroku.com' },
    ['rgba(100,100,100,1)'],
    "Compression Visualizer",
    'A javascript Quadtree Compression Algorithm',
    [
`-Formulated a Quadtree data structure to hold images pixel data`,
`-Used Javascript Timeouts and some good old fashioned
recursion to animate the process and allow the user to feed in
parameters and click on nodes as the algorithm runs`,
`-Created a Demo System that Runs the page and explains the algorithm`
    ]
));

projects.push(new Project(
    'https://www.tcpi.com/wp-content/themes/Divi-child/images/tcp-logo.svg',
    { source: 'http://www.github.com', live: 'heroku.com' },
    ['rgba(100,100,100,1)'],
    "TCP chat",
    '-WIP- A CLI and Browser Instant Chat App',
    ['-Designed a custom server using Ruby TCP Sockets', '-Made a CLI instant chat app with Ruby Threads and TCP sockets', '-Will make a HTML WebSocket based single page app instant chat that I will hook up with the TCP chat. ']
));
`


`


const createProject = function(parent,newproj){
    const template = document.getElementById('projectTemplate').cloneNode(true);
    // console.log('template',template);
    // console.log('childnode',template.childNodes);

    //setup modal
    const pointList = template.querySelector('#points');
    const liveEl = template.querySelector('#live');
    const sourceEl = template.querySelector('#source');
    newproj.points.forEach( function(point){
        const pointEl = document.createElement('p');
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

    //change id, take off display:none class and append

    template.id = newproj.title;
    template.className = '';
    parent.appendChild(template);
}
const activeLinker = function(){



    let tick = false;
    let current = null;
    const seperators = document.querySelectorAll('.seperator')
    const anchors = document.querySelectorAll(`.aLink`);
    const seperatorsY = [];
    seperators.forEach((sep) => {
        seperatorsY.push(sep.offsetTop);
    });

    let winY = window.scrollY;
    if (winY > seperatorsY[0]-400 && winY < seperatorsY[1]) {
        current = anchors[0];
    } else if (winY > seperatorsY[1]-400 && winY < seperatorsY[2]) {
        current = anchors[1];
    } else if (winY > seperatorsY[1]-500 && winY < seperatorsY[3]) {
        current = anchors[2];
    } else if (winY > seperatorsY[3] - 500) {
        current = anchors[3];
    }   else{
        current= null;
    }
    anchors.forEach((a) => a === current ? a.classList.add('active') : a.classList.remove('active'));


    document.addEventListener('scroll', (e) => {
        if (!tick) {
            tick = true;
            setTimeout(() => {
                winY = window.scrollY;
                // seperatorsY.forEach((sep, i) => console.log(i, sep))
                
                if (winY > seperatorsY[0]-400 && winY < seperatorsY[1]-500){
                    current = anchors[0];

                } else if (winY > (seperatorsY[1] - 500) && winY < seperatorsY[2]-400){
                    current = anchors[1];
                }else if (winY>seperatorsY[2]-400 && winY< seperatorsY[3]-400){
                    
                    current = anchors[2];
                }else if (winY>seperatorsY[3]-300){
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


document.addEventListener('DOMContentLoaded', function () {
    const projectlist = document.getElementById('projects')
    projects.forEach(function (project) {
        createProject(projectlist, project);
    });
    activeLinker();

});