import generateJoke from "./generateJoke";
import '../styles/main.scss';
import favcoin from '../assets/favicon.png';

const img = document.getElementById('img');
img.src = favcoin

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke)

generateJoke();
