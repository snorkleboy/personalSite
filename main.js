document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('app').innerText = 'hi';
    const svg1 = document.getElementById('path1');
    const svg2 = document.getElementById('path2');
    svg2.setAttribute('d', "M 150 0 C 0 150, 0 150, 150 300 S 250 400, 150 500 S 60 600, 150 680 S 200 750, 150 800 ")
    svg1.setAttribute('d', "M 150 0 C 0 150, 0 150, 150 300 S 250 400, 150 500 S 60 600, 150 680 S 200 750, 150 800 ")

    let startX = 150;
    let startY = 150;
    setInterval(function(){
        startX = (startX+1) %300;
        svg1.setAttribute('d', `M ${startX} ${startY} C 0 150, 0 150, 150 300 S 250 400, 150 500 S 60 600, 150 680 S 200 750, 150 800`)
        svg2.setAttribute('d', `M ${300-startX} ${startY} C 0 150, 0 150, 150 300 S 250 400, 150 500 S 60 600, 150 680 S 200 750, 150 800`)
    },10);
    



})