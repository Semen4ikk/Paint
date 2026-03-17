import {setTool, type ToolType} from "../feature/Tool/toolSlice.ts";
import {useDispatch} from "react-redux";
import type {AppDispatch} from "../app/store/store.ts";

interface PointButtonProps {
    tool: ToolType;
}

export function PointButton({tool}: PointButtonProps){
    const dispatch = useDispatch<AppDispatch>();
    return(
        <button onClick={() => dispatch(setTool(tool))}>{tool}</button>
    )


}