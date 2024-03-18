import './style.css'
import Swiper from 'swiper'
import { EffectCreative, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-creative'

new Swiper('.swiper', {
    modules: [Navigation, Pagination, EffectCreative],
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    grabCursor: true,
    effect: 'creative',
    slidesPerView: 'auto',
    centeredSlides: true,
    creativeEffect: {
        limitProgress: 2,
        prev: {
            scale: 0.75,
            translate: ['-100%', 0, 0],
            opacity: 0.4,
        },
        next: {
            scale: 0.75,
            translate: ['100%', 0, 0],
            opacity: 0.4,
        },
    },
})
