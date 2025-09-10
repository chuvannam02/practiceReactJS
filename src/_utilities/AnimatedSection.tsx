/**
 * @Project: learn-react
 * @Author CHUNAM
 * @Date 9/10/2025
 * @Time 9:56 PM
 */

import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./animated-section.scss"; // chứa animation CSS

const AnimatedSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (inView) {
            setShow(true);
        }
    }, [inView]);

    return (
        <div
            ref={ref}
            className={`section ${show ? "fade-in-up" : "placeholder"}`}
            style={{ minHeight: "400px" }}
        >
            {show && children}
        </div>
    );
};

export default AnimatedSection;
