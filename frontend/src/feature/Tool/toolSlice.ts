
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
export type ToolType = 'Кисть' | 'Стерка';
interface ToolState {
    tool: ToolType;
}

const initialState: ToolState = {
    tool: 'Кисть',
};

const toolSlice = createSlice({
    name: 'tool',
    initialState,
    reducers: {
        setTool: (state, action: PayloadAction<ToolType>) => {
            state.tool = action.payload;
        },
        resetTool: (state) => {
            state.tool = 'Кисть';
        },
    }
});

export const { setTool, resetTool } = toolSlice.actions;
export default toolSlice.reducer;