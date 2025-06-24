import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isHoveringText, setIsHoveringText] = useState(false);
  const [bubbleSize, setBubbleSize] = useState(70);

  const generateRandomBubble = () => {
    // Random size between 45 and 95 pixels
    const randomSize = Math.floor(Math.random() * 50) + 45;
    setBubbleSize(randomSize);
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON') {
        setIsHoveringLink(true);
      } else if (['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'SPAN', 'LI'].includes(target.tagName)) {
        generateRandomBubble();
        setIsHoveringText(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON') {
        setIsHoveringLink(false);
      }
      if (['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'SPAN', 'LI'].includes(target.tagName)) {
        setIsHoveringText(false);
      }
    };
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const getBubbleStyle = () => {
    if (isHoveringText) {
      return {
        borderRadius: '50%',
        filter: 'blur(1px)',
        boxShadow: '0 0 15px rgba(255, 255, 255, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.2)',
        background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.3) 100%)'
      };
    }
    return {
      borderRadius: '50%',
      filter: 'none',
      boxShadow: 'none',
      background: '#ffffff'
    };
  };

  const cursorVariants = {
    default: {
      x: position.x - 15,
      y: position.y - 15,
      width: 30,
      height: 30,
      backgroundColor: '#ffffff',
      mixBlendMode: 'difference' as const,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 40
      }
    },
    textHover: {
      x: position.x - (bubbleSize / 2),
      y: position.y - (bubbleSize / 2),
      width: bubbleSize,
      height: bubbleSize,
      backgroundColor: '#ffffff',
      mixBlendMode: 'difference' as const,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 35
      }
    },
    linkHover: {
      x: position.x - 40,
      y: position.y - 40,
      width: 80,
      height: 80,
      backgroundColor: '#ffffff',
      mixBlendMode: 'difference' as const,
      transition: {
        type: 'spring',
        stiffness: 180,
        damping: 38
      }
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[99999]"
      style={getBubbleStyle()}
      variants={cursorVariants}
      animate={isHoveringLink ? 'linkHover' : isHoveringText ? 'textHover' : 'default'}
    />
  );
};

export default CustomCursor; 