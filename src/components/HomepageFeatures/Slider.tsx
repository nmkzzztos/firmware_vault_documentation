import "./slider.css";
import { useState, useCallback, useEffect } from "react";
import ThemedImage from '@theme/ThemedImage';

const debounce = (func, delay) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
};

const Slider = () => {
    const [intervalId, setIntervalId] = useState(null);

    const generatedTransformsArr = [
        "translate3d(-140%, -50%, 0rem) rotateY(0deg) scale(0.6)",
        "translate3d(-50%, -50%, 0rem) rotateY(0deg) scale(1)",
        "translate3d(40%, -50%, 0rem) rotateY(0deg) scale(0.6)",
    ];
    

    const content = [
        {
            title: "Comprehensive Firmware Analysis Platform",
            description: "Our platform features an intuitive frontend with dynamic pages, allowing users to create analysis jobs for firmware images, interact with the database, and review detailed results in an organized and efficient manner.",
            lightImage: 'img/slider/pages.png',
            darkImage: 'img/slider/pages.png'
        },
        {
            title: "Automated Firmware Scraping",
            description: "A powerful scraper automatically collects firmware images from various sources, ensuring an up-to-date and extensive database for further analysis. This seamless automation saves time and enhances research capabilities.",
            lightImage: 'img/slider/scraper.svg',
            darkImage: 'img/slider/scraper.svg'
        },
        {
            title: "Advanced Analysis Tools",
            description: "Leverage three specialized tools for firmware examination: unpack firmware images, extract meaningful data, and identify vulnerabilities or anomalies. These tools provide deep insights and improve security assessments.",
            lightImage: 'img/slider/tools.svg',
            darkImage: 'img/slider/tools.svg'
        },
    ];

    const [transformsArr, setTransformsArr] = useState(generatedTransformsArr);

    const navigate = useCallback((isNext) => {
        setTransformsArr((prevTransforms) => {
            const newTransforms = [...prevTransforms];
            if (isNext) {
                newTransforms.unshift(newTransforms.pop());
            } else {
                newTransforms.push(newTransforms.shift());
            }
            return newTransforms;
        });
    }, []);

    const debouncedNavigateNext = useCallback(
        debounce(() => navigate(true), 200),
        [navigate]
    );
    const debouncedNavigatePrev = useCallback(
        debounce(() => navigate(false), 200),
        [navigate]
    );

    useEffect(() => {
        const id = setInterval(() => {
            debouncedNavigateNext();
        }, 7500);

        setIntervalId(id);

        return () => clearInterval(id);
    }, [debouncedNavigateNext]);

    const handleNextClick = useCallback(() => {
        if (intervalId) {
            clearInterval(intervalId);
        }
        debouncedNavigateNext();
        const id = setInterval(() => {
            debouncedNavigateNext();
        }, 5000);
        setIntervalId(id);
    }, [debouncedNavigateNext, intervalId]);

    const handlePrevClick = useCallback(() => {
        if (intervalId) {
            clearInterval(intervalId);
        }
        debouncedNavigatePrev();
        const id = setInterval(() => {
            debouncedNavigateNext();
        }, 5000);
        setIntervalId(id);
    }, [debouncedNavigatePrev, debouncedNavigateNext, intervalId]);

    return (
        <div className="slider-container">
            <div className="slider">
                {content.map((currentTransform, index) => (
                    <div
                        className="slide"
                        key={`slide-${index + 1}`}
                        style={{ transform: transformsArr[index] }}
                    >
                        <div className="slide-content">
                            <h2 className="slide-title">{currentTransform.title}</h2>
                            <ThemedImage
                                alt={`Slide ${index + 1}`}
                                sources={{
                                    light: currentTransform.lightImage,
                                    dark: currentTransform.darkImage
                                }}
                                style={{ maxHeight: '200px', height: 'auto' }}
                            />
                            <p className="slide-description">{currentTransform.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="slider-buttons">
                <button
                    id="prev-slide"
                    aria-label="Previous Slide"
                    title="Go To Previous Slide"
                    onClick={handlePrevClick}
                ></button>
                <button
                    id="nxt-slide"
                    aria-label="Next Slide"
                    title="Go To Next Slide"
                    onClick={handleNextClick}
                ></button>
            </div>
        </div>
    );
};

export default Slider;