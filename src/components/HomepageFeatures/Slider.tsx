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
        "translate3d(-50%, -50%, -1rem) rotateY(-90deg) scale(0.01)",
    ];

    const content = [
        {
            title: "Lorem ipsum dolor sit amet",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            lightImage: 'img/slider/4.png',
            darkImage: 'img/slider/4.png'
        },
        {
            title: "Lorem ipsum dolor sit amet",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            lightImage: 'img/slider/1.svg',
            darkImage: 'img/slider/1_dark.svg'
        },
        {
            title: "Lorem ipsum dolor sit amet",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            lightImage: 'img/slider/2.png',
            darkImage: 'img/slider/2.png'
        },
        {
            title: "Lorem ipsum dolor sit amet",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            lightImage: 'img/slider/3.png',
            darkImage: 'img/slider/3.png'
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