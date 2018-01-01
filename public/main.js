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
    ['github.com','linkedin.com'],
    'rgba(100,100,100,1)',
    "FlyaKite",
    'React, Rails, and Postgres powered EventBrite clone',
    ['react','css','stuff']
));

projects.push(new Project(
    'http://res.cloudinary.com/flyakite/image/upload/v1514414844/search_rifri5.png',
    ['github.com', 'linkedin.com'],
    'rgba(100,100,100,1)',
    "FlyaKiteee",
    'React, Rails, and Postgres powered EventBrite clone',
    ['react', 'css', 'stuff']
));
document.addEventListener('DOMContentLoaded', function(){
    const projectlist = document.getElementById('projects')
    projects.forEach(function(project){
        createProject(projectlist, project);
    });

});

const createProject = function(parent,newproj){
    const template = document.getElementById('projectTemplate').cloneNode(true);
    console.log('template',template);
    console.log('childnode',template.childNodes);
    console.log('get', template.querySelector('#project-modal'));
    template.id = newproj.title;
    template.className = '';
    parent.appendChild(template);
}

