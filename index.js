/*
cody by dishma gangulel madushanka;
date 1/11/2024;
Homework: JavaScript Interactive Photo Gallery;
Web Design for Everybody: Basics of Web Development & Coding Specialization;
Course|University of Michigan */

function upDate(altText, imageUrl) {
    document.getElementById('mainContent').innerText = altText;
    document.getElementById('mainContent').style.color='white';
    document.getElementsByClassName('preview1')[0].style.backgroundImage = `url(${imageUrl})`;
}

function unDo() {
    document.getElementById('mainContent').innerText = 'Hover over an image to see details.';
    document.getElementsByClassName('preview1')[0].style.backgroundImage = 'none';
}