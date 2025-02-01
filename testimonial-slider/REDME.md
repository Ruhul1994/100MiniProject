Testimonial Slider Project Documentation

Overview

This project is a simple testimonial slider that dynamically updates user testimonials at a fixed interval. The testimonials include a user photo, name, and feedback. The slider changes automatically every 2 seconds.

Technologies Used

HTML: Structure of the testimonial component.

CSS: Styling for the testimonial layout.

JavaScript: Logic for dynamically updating testimonials.

File Structure
/project-folder
│── index.html      # Main HTML file
│── style.css       # Styling file
│── index.js        # JavaScript logic


How It Works

The testimonials array stores multiple user testimonials, including name, photoUrl, and text.

The JavaScript file selects the required HTML elements (img, .text, .username).

The updateTestimonial() function updates the testimonial data every 2 seconds using setInterval().

The slider loops back to the first testimonial when it reaches the end.

How It Works

The testimonials array stores multiple user testimonials, including name, photoUrl, and text.

The JavaScript file selects the required HTML elements (img, .text, .username).

The updateTestimonial() function updates the testimonial data every 2 seconds using setInterval().

The slider loops back to the first testimonial when it reaches the end.

Code Breakdown

1. HTML Structure (index.html****)

The testimonial container includes:

An image (<img>) for the user's photo.

A paragraph (<p class="text">) for the testimonial text.

A heading (<h4 class="username">) for the user’s name.


<div class="testimonial-container">
   <img src="default.jpg" alt="user-image">
   <p class="text">Placeholder text</p>
   <h4 class="username">Placeholder Name</h4>
</div>

2. Styling (style.css****)

The .testimonial-container is styled to look neat and centered.

The user image is positioned above the text.

The text is centered inside the box.

.testimonial-container {
    width: 400px;
    background-color: slateblue;
    color: white;
    padding: 70px 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    position: relative;
    text-align: center;
}

img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -25%;
}

3. JavaScript Functionality (index.js****)

Selects the required HTML elements (img, .text, .username).

Defines an array of testimonials.

Uses setInterval() to change the testimonial every 2 seconds.

const testimonials = [
    { name: "Mina", photoUrl: "URL_HERE", text: "Great service!" },
    { name: "Ruhul", photoUrl: "URL_HERE", text: "Amazing experience!" },
    { name: "Shaka", photoUrl: "URL_HERE", text: "Highly recommend!" },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

function updateTestimonial() {
    const { name, photoUrl, text } = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    
    idx++;
    if (idx === testimonials.length) idx = 0;
}

// Change testimonials every 2 seconds
setInterval(updateTestimonial, 2000);

// Initialize the first testimonial
updateTestimonial();


Improvements & Customization

Add Previous/Next Buttons: Users can manually switch testimonials.

Pause on Hover: Stop auto-change when hovering over the testimonial.

More Styling: Enhance the design with animations and transitions.


Summary

The project dynamically updates testimonials using JavaScript.

setInterval() is used to change testimonials every 2 seconds.

The slider loops back to the first testimonial when finished.

The UI is responsive and centered.

This project serves as a great beginner-friendly example of DOM manipulation, setInterval, and CSS styling.

