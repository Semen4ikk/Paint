import {setTool, type ToolType} from "../../feature/Tool/toolSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../app/store/store.ts";
import styles from './PointButton.module.css'
interface PointButtonProps {
    tool: ToolType;
}

export function PointButton({tool}: PointButtonProps){
    const dispatch = useDispatch<AppDispatch>();
    const toolReal = useSelector((state: RootState) => state.tool.tool);
    return(
        <button className={`${styles.button} ${tool === toolReal ? styles.buttonActive : ''}`}
                onClick={() => dispatch(setTool(tool))}
                disabled={tool === toolReal}>{tool}</button>
    )


}