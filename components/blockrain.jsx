import React, { useEffect, useRef } from 'react';
import 'blockrain/dist/blockrain.css'; // Import the CSS; the path may differ. Adjust as necessary.

const BlockrainComponent = () => {
    const blockrainRef = useRef(null); // Use a ref to reference the DOM element for Blockrain

    useEffect(() => {
        // Check if the 'blockrain' function is available and the ref is linked to an element
        if (typeof window.blockrain === "function" && blockrainRef.current) {
            window.blockrain(blockrainRef.current, {
                // Blockrain options go here
                theme: 'candy', // Example theme, adjust options as necessary
            });
        }

        // Include a cleanup function if blockrain creates something that needs to be cleaned
        return () => {
            // Cleanup logic here
        };
    }, []); // Empty dependency array means this effect will only run once, similar to componentDidMount

    return (
        <div ref={blockrainRef} style={{ width: '100%', height: '640px' }} />
        // Set a specific height, or alternatively control this with CSS
    );
};

export default BlockrainComponent;
