const imageContainerEl = document.querySelector(".image-container");
const btnEL = document.querySelector(".btn");

btnEL.addEventListener("click",()=>{
     imageNumber = 10;
    addNewImages()
})

function addNewImages(){

    for (let index = 0; index < imageNumber; index++) {
        const newImgEl = document.createElement("img");

    newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`

    imageContainerEl.appendChild(newImgEl);
    
    }
        
}