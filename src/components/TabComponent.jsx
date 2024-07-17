import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';

// Images
const images = [
  { id: 1, src: './MyLogin.svg', alt: 'Image 1' },
  { id: 2, src: './caseScreen.svg', alt: 'Image 2' },
  { id: 3, src: './csePhone.svg', alt: 'Image 3' },
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: 'spring',
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const TabComponent = () => {
  const [selectedTab, setSelectedTab] = useState(images[0]);

  const handleTabClick = (image) => {
    setSelectedTab(image);
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-left text-2xl font-bold mb-8">
        Every feature you need in an Astrology/psychology app. Try it for yourself.
      </h2>
      <div className="flex">
        <div className="w-2/3">
          <div className="relative w-full h-96">
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedTab.id}
                src={selectedTab.src}
                alt={selectedTab.alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full h-full object-contain"
              />
            </AnimatePresence>
          </div>
        </div>
        <div className="w-1/3 ml-8 flex flex-col items-center">
          {images.map((image) => (
            <button
              key={image.id}
              onClick={() => handleTabClick(image)}
              className={`w-full mb-4 px-4 py-2 cursor-pointer bg-blue-500 text-white rounded hover:bg-blue-700 ${
                selectedTab.id === image.id ? 'bg-blue-700' : ''
              }`}
            >
              {`Tab ${image.id}`}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();
      if (x === 0) {
        setImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    }, AUTO_DELAY);
    return () => clearInterval(intervalRef);
  }, [dragX]);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && imgIndex < images.length - 1) {
      setImgIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative overflow-hidden bg-neutral-950 py-8">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{ translateX: `-${imgIndex * 100}%` }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        {images.map((image, idx) => (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${image.src})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            animate={{ scale: imgIndex === idx ? 0.95 : 0.85 }}
            transition={SPRING_OPTIONS}
            className="w-full h-64 sm:h-96 shrink-0 bg-neutral-800 rounded-xl"
          />
        ))}
      </motion.div>
      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      <GradientEdges />
    </div>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {images.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setImgIndex(idx)}
          className={`h-3 w-3 rounded-full transition-colors ${
            idx === imgIndex ? 'bg-neutral-50' : 'bg-neutral-500'
          }`}
        />
      ))}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </>
  );
};

const ResponsiveComponent = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return isDesktop ? <TabComponent /> : <SwipeCarousel />;
};

export default ResponsiveComponent;
