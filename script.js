/****************************Drumset***************** */


/**
 * @author: N'goran Kouadio Jean Cyrille
 * @description: Drumset
 * Date : 25/01/2023
 */




// the height of the section must be that of the screen of the window
let section = document.querySelector('section');
section.style.height = window.innerHeight + "px";

// song list

const songList = ["boom", "clap", "hihat", "kick", "openhat", "ride", "snare", "tink", "tom"];

// play music

let boxes = document.querySelectorAll('.box');
for(let i in songList) {
    boxes[i].addEventListener('click', () => {
        let audio = document.querySelector('.song');
        audio.setAttribute('src', `sounds/${songList[i]}.wav`);
        audio.play();
    });
}
