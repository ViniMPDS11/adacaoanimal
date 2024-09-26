import styles from './Slider.module.css';
import './Slider.css';
import { register } from 'swiper/element/bundle'; // Registrar módulos
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

register(); // Registrar todos os módulos do swiper/element

const Slider = () => {
    const slides = [
        {
            id: 1,
            imageUrl: "https://love.doghero.com.br/wp-content/uploads/2018/12/golden-retriever-1.png",
            name: "Cachorro 1"
        },
        {
            id: 2,
            imageUrl: "https://fisiocarepet.com.br/wp-content/uploads/2022/02/cachorro-768x512.png",
            name: "Cachorro 2"
        },
        {
            id: 3,
            imageUrl: "https://optimumpet.com.br/media/uploads/2023/11/racas-de-cachorro-pequeno-chihuahua-01-1024x682.webp",
            name: "Cachorro 3"
        },
<<<<<<< HEAD
        {
            id: 4,
            imageUrl: "https://optimumpet.com.br/media/uploads/2023/11/racas-de-cachorro-pequeno-dachshund-salsicha-1024x682.webp",
            name: "Cachorro 4"
        },
=======
>>>>>>> bf8354eaf015398986cf8f6ed2de409611b7c3d6
    ];

    return (
        <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={false}
            className={styles.slides}
<<<<<<< HEAD
=======
            centeredSlides={true}
            autoplay={{
                delay: 5000
            }}
>>>>>>> bf8354eaf015398986cf8f6ed2de409611b7c3d6
        >
            {slides.map((val) => (
                <SwiperSlide key={val.id}>
                    <img
                        className={styles.slideItem}
                        src={val.imageUrl}
                        alt={val.name}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
