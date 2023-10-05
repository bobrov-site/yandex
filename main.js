import './style.css'
import './normilize.css'
import Swiper from "swiper"
import { Navigation, Autoplay } from 'swiper/modules'
import './node_modules/swiper/swiper-bundle.min.css'
import 'animate.css';
import WOW from 'wow.js';
const swiper = new Swiper('.swiper', {
    modules: [Navigation, Autoplay],
    speed: 400,
    autoplay: true,
    navigation: {
        nextEl: '.swiper-button-next-modified',
        prevEl: '.swiper-button-prev-modified'
    },
    spaceBetween: 80,
});
swiper.init()

new WOW({
    live: false
}).init();
