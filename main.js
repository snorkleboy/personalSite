document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('app').innerText = 'hi';
    const svg1 = document.getElementById('path1');
    const svg2 = document.getElementById('path2');
    svg2.setAttribute('d', "M 150 0 C 0 150, 0 150, 150 300 S 250 400, 150 500 S 60 600, 150 680 S 200 750, 150 800 ")
    svg1.setAttribute('d', "M 150 0 C 0 150, 0 150, 150 300 S 250 400, 150 500 S 60 600, 150 680 S 200 750, 150 800 ")

    let startX = 150;
    let startY = 150;
    let opacity = 0;
    let factor = 1;
    setInterval(function(){
        startX = (startX+(factor)) ;
        opacity = (startX/300);
        if (startX > 299){
            factor = -1;
        } else if (startX < 1){
            factor = 1;
        }
        svg1.setAttribute('d', `M ${startX} ${startY} C 0 150, 0 150, 150 300 S 250 400, 150 500 S 60 600, 150 680 S 200 750, 150 800`)
        svg1.setAttribute('fill', `rgba(192,192,192,${opacity})`);
        svg2.setAttribute('fill',`rgba(255,255,0,${1-opacity})`)
        svg2.setAttribute('d', `M ${300-startX} ${startY} C 0 150, 0 150, 150 300 S 250 400, 150 500 S 60 600, 150 680 S 200 750, 150 800`)
    },10);
    



})