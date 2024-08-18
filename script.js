// HTML/CSS progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
    htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
    htmlEndValue = 80,
    htmlSpeed = 30;

let progressHtml = setInterval(() => {
    htmlStartValue++;

    htmlValue.textContent = `${htmlStartValue}%`;
    htmlProgress.style.background = `conic-gradient(#fca61f ${
        htmlStartValue * 3.6
    }deg, #ededed 0deg)`;

    if (htmlStartValue === htmlEndValue) {
        clearInterval(progressHtml);
    }
}, htmlSpeed);

// JavaScript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
    javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
    javascriptEndValue = 60,
    jsSpeed = 30;

let progressJs = setInterval(() => {
    javascriptStartValue++;

    javascriptValue.textContent = `${javascriptStartValue}%`;
    javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
        javascriptStartValue * 3.6
    }deg, #ededed 0deg)`;

    if (javascriptStartValue === javascriptEndValue) {
        clearInterval(progressJs);
    }
}, jsSpeed);

// PHP progress circular bar 
let phpProgress = document.querySelector(".php"),
    phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
    phpEndValue = 80,
    phpSpeed = 30;

let progressPhp = setInterval(() => {
    phpStartValue++;

    phpValue.textContent = `${phpStartValue}%`;
    phpProgress.style.background = `conic-gradient(#20c997 ${
        phpStartValue * 3.6
    }deg, #ededed 0deg)`;

    if (phpStartValue === phpEndValue) {
        clearInterval(progressPhp);
    }
}, phpSpeed);

// ReactJS progress circular bar 
let reactProgress = document.querySelector(".reactjs"),
    reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
    reactEndValue = 70,
    rjsSpeed = 30;

let progressReact = setInterval(() => {
    reactStartValue++;

    reactValue.textContent = `${reactStartValue}%`;
    reactProgress.style.background = `conic-gradient(#3f396d ${
        reactStartValue * 3.6
    }deg, #ededed 0deg)`;

    if (reactStartValue === reactEndValue) {
        clearInterval(progressReact);
    }
}, rjsSpeed);

// Filter using jQuery
$(document).ready(function() {
    $(".filter-item").click(function() {
        const value = $(this).attr("data-filter");
        if (value === "all") {
            $(".post").show("1000");
        } else {
            $(".post")
                .not("." + value)
                .hide("1000");
            $(".post")
                .filter("." + value)
                .show("1000");
        }
    });
});

// JavaScript for sticky navbar
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.getElementById('navbar-top').classList.add('fixed-top');
            // Add padding top to show content behind navbar
            let navbarHeight = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbarHeight + 'px';
        } else {
            document.getElementById('navbar-top').classList.remove('fixed-top');
            // Remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});

// Adding functionality to back-to-top button

// Get the button
let myButton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
myButton.addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
