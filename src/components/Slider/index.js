import { useEffect, useState } from 'react';
import styles from './Slider.module.css';

const Slider = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(1);

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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlideIndex((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 5 * 1000);

        return () => clearInterval(interval);
    }, [currentSlideIndex, slides.length]);

    function handleCurrentSlideClick(slideIndex) {
        setCurrentSlideIndex(slideIndex);
    }

    return (
        <div className={styles.slider}>
            <div className={styles.slides}>
                {slides.map((val, index) => (
                    <div className={`${styles.slide} ${index === currentSlideIndex ? styles.active : ''}`} key={val.id}>
                        <img src={val.imageUrl} alt={val.name} />
                    </div>
                ))}

                <div className={styles.manualNavigation}>
                    {slides.map((val, index) => (
                        <button type="button" key={val.id} className={`${styles.manualBtn} ${index === currentSlideIndex ? styles.active : ''}`} onClick={() => handleCurrentSlideClick(index)} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slider;
