import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    
    const cursorX = useSpring(0, { damping: 20, stiffness: 300 });
    const cursorY = useSpring(0, { damping: 20, stiffness: 300 });

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (
                target.tagName === 'A' || 
                target.tagName === 'BUTTON' || 
                target.closest('a') || 
                target.closest('button') ||
                window.getComputedStyle(target).cursor === 'pointer'
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            <motion.div
                className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
                style={{
                    left: cursorX,
                    top: cursorY,
                }}
            />
            <motion.div
                className="custom-cursor-dot"
                style={{
                    left: cursorX,
                    top: cursorY,
                }}
            />
        </>
    );
};

export default CustomCursor;
