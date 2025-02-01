const testimonials = [
    {  
        name:"Mina",
        photoUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"apple has really helped our business. Definitely worth the investment. Thank you!"
    },
    {  
        name:"Ruhul",
        photoUrl:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"I love Apple! This is an amazing service and it has saved me and my small business so much time. I plan to use it for a long time to come."
    },
    {  
        name:"Shaka",
        photoUrl:"https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"I love Apple! This is an amazing service and it has saved me and my small business so much time. I plan to use it for a long time to come."
    },
    {  
        name:"Alex",
        photoUrl:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"We can't understand how we've been living without phone."
    },

    {  
        name:"Anal",
        photoUrl:"https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"I would recommend phone for anyone trying to get the word out about their business. It has saved me so much time!"
    },
];
const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");
 let idx = 0;
function updateTestimonial() {
    const {name, photoUrl, text} = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;

    idx++;
    if(idx === testimonials.length){
        idx=0;
    }
    
    
}
setInterval(updateTestimonial, 3000);
updateTestimonial()