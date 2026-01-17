let btn = document.querySelector('button');
// let hexchars = "0123456789ABCDEF";

// btn.addEventListener('click', function(){
//     console.log('Generate random color');
//     let color = "#";
//     for(let i = 0; i<6; i++){
//         color += hexchars[Math.floor(Math.random() * 16)];
//     }
//     console.log('Generated color: ', color);
    

//     div.style.backgroundColor = color;
//     div.textContent = `This is your new color: ${color}`;
// })


//METHOD 2

btn.addEventListener("click", function(){
    let heading = document.querySelector('h3');
    // console.log('generate random color');
    let randomColor = getRandomColor();
    heading.innerText = randomColor;   
    
    let div = document.querySelector('div');
    div.style.backgroundColor = randomColor;

    console.log('color updated');
});

function getRandomColor() {
    // let red = Math.floor(Math.random() * 255);
    // let green = Math.floor(Math.random() * 255);
    // let blue = Math.floor(Math.random() * 255);

    // let color = `rgb(${red}, ${green}, ${blue})`;

    let r = Math.floor(Math.random() * 156) + 100; // 100-255
    let g = Math.floor(Math.random() * 156) + 100;
    let b = Math.floor(Math.random() * 156) + 100;
    return `rgb(${r}, ${g}, ${b})`;
    // return color;
}