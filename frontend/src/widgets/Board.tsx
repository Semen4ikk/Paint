import {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import type {RootState} from "../app/store/store.ts";
import {PointButton} from "../shared/PointButton.tsx";
export function Board(){
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const tool = useSelector((state: RootState) => state.tool.tool);


    useEffect(() => {
        const canvas = canvasRef.current;
        if(canvas){
            canvas.width = 1200;
            canvas.height = 600;
            const ctx = canvas.getContext('2d');
            if(ctx){
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';
            }
        }

    }, []);

    const getCoordinates = (e: React.MouseEvent<HTMLCanvasElement>) => {
        const canvas = canvasRef.current;
        if (!canvas) return { x: 0, y: 0 };
        const rect = canvas.getBoundingClientRect();
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
    };
    const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

        const coords = getCoordinates(e);
        setIsDrawing(true);

        ctx.beginPath();
        ctx.moveTo(coords.x, coords.y);
        ctx.strokeStyle = tool === 'Стерка' ? '#ffffff' : '#000000';
        ctx.lineWidth = 5;
    };
    const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (!isDrawing) return;

        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

        const coords = getCoordinates(e);
        ctx.lineTo(coords.x, coords.y);
        ctx.stroke();
    };
    const drawing = () => {
        setIsDrawing(false);
    };




    return (
        <>
            <h2>рисовалка</h2>
            <PointButton tool={'Кисть'}/>
            <PointButton tool={'Стерка'}/>
            <canvas
                ref={canvasRef}
                id="myCanvas"
                style={{ border: "1px solid #d3d3d3" }}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={drawing}
                onMouseLeave={drawing}
            >
            </canvas>


        </>
    )
}


