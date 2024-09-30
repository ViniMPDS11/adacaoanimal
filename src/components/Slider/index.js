import styles from './Slider.module.css';
import './Slider.css';
import { register } from 'swiper/element/bundle'; // Registrar módulos
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow'; // Importar o CSS do efeito coverflow
import { EffectCoverflow } from 'swiper/modules'; // Importar o módulo do efeito coverflow

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
        {
            id: 4,
            imageUrl: "https://optimumpet.com.br/media/uploads/2023/11/racas-de-cachorro-pequeno-dachshund-salsicha-1024x682.webp",
            name: "Cachorro 4"
        },
    ];

    return (
        <Swiper
        effect="coverflow" // Ativa o efeito coverflow
        loop={true}
        centeredSlides={true} // Centraliza os slides
        slidesPerView={2} // Quantidade de slides visíveis ao mesmo tempo
        coverflowEffect={{
            rotate: 50, // Define o grau de rotação dos slides
            stretch: 0, // Define a distância entre os slides
            depth: 100, // Define a profundidade dos slides
            modifier: 1, // Define a intensidade do efeito
            slideShadows: false, // Desativa as sombras dos slides
        }}
        pagination={{ clickable: true }}
        navigation={false}
        className={styles.slides}
        autoplay={{
            delay: 5000,
        }}
        modules={[EffectCoverflow]} // Adiciona o módulo coverflow ao Swiper
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
