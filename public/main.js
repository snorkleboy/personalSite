const Project = function(img, links, colors, title, header, points){
    this.img = img;
    this.links = links;
    this.colors = colors;
    this.title = title;
    this.header = header;
    this.points = points;
};

const projects = [];

projects.push( new Project(
    'http://res.cloudinary.com/flyakite/image/upload/v1514414844/search_rifri5.png',
    {source:'http://www.github.com',live:'heroku.com'},
    ['rgba(100,100,100,1)'],
    "FlyaKite",
    'React, Rails, and Postgres powered EventBrite clone',
    ['react','css','stuff']
));

projects.push(new Project(
    'https://foleysproduce.com/wp-content/uploads/2016/07/Yellw-Onions.jpg',
    { source: 'http://www.github.com', live: 'heroku.com' },
    ['rgba(100,100,100,1)'],
    "onionup",
    'React, Rails, and Postgres powered EventBrite clone',
    ['react', 'css', 'stuff']
));

projects.push(new Project(
    'http://res.cloudinary.com/flyakite/image/upload/v1514590288/download_2_hqyiv2.png',
    { source: 'http://www.github.com', live: 'heroku.com' },
    ['rgba(100,100,100,1)'],
    "Compression Visualizer",
    'A javascript Quadtree Compression Algorithm',
    ['Javascript', 'HTML5 Canvas', 'Single Page App']
));

projects.push(new Project(
    'https://www.tcpi.com/wp-content/themes/Divi-child/images/tcp-logo.svg',
    { source: 'http://www.github.com', live: 'heroku.com' },
    ['rgba(100,100,100,1)'],
    "TCP chat",
    'A TCP based cli chat App',
    ['Ruby', 'Sockets', 'TCP']
));

document.addEventListener('DOMContentLoaded', function(){
    const projectlist = document.getElementById('projects')
    projects.forEach(function(project){
        createProject(projectlist, project);
    });

});

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

