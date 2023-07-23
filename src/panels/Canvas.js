import React, { useRef, useState, useEffect } from 'react';

const Canvas = ({width, height, fillStyle}) => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;

        const ctx = canvas.getContext('2d');
        ctx.fillStyle = fillStyle;
        contextRef.current = ctx;
    }, []);

    const draw = ({nativeEvent}) => {
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.arc(offsetX, offsetY, 5, 0, Math.PI * 2);
        contextRef.current.fill();
    };

    return (
        <canvas
            width={width} height={height}
            onClick={draw}
            ref={canvasRef} />
    );
};

export default Canvas;