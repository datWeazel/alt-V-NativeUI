import * as alt from 'alt';
import game from 'natives';
import Size from "./Size.mjs";
import Text from "../modules/Text.mjs";
const gameScreen = game.getActiveScreenResolution(0, 0);
export const Screen = {
    width: gameScreen[1],
    height: gameScreen[2],
    ResolutionMaintainRatio: () => {
        const ratio = Screen.width / Screen.height;
        const width = 1080.0 * ratio;
        return new Size(width, 1080.0);
    },
    getMousePosition: (relative = false) => {
        const res = Screen.ResolutionMaintainRatio();
        const cursor = alt.getCursorPos();
        let [mouseX, mouseY] = [cursor.x, cursor.y];
        if (relative)
            [mouseX, mouseY] = [cursor.x / res.Width, cursor.y / res.Height];
        return [mouseX, mouseY];
    },
    IsMouseInBounds: (topLeft, boxSize) => {
        const [mouseX, mouseY] = Screen.getMousePosition();
        return (mouseX >= topLeft.X &&
            mouseX <= topLeft.X + boxSize.Width &&
            (mouseY > topLeft.Y && mouseY < topLeft.Y + boxSize.Height));
    },
    GetTextWidth: (text, font, scale) => {
        // Start by requesting the game to start processing a width measurement
        game.beginTextCommandGetWidth("THREESTRINGS"); // CELL_EMAIL_BCON
        // Add the text string
        Text.AddLongString(text);
        // Set the properties for the text
        game.setTextFont(font);
        game.setTextScale(1.0, scale);
        // Ask the game for the relative string width
        const width = game.endTextCommandGetWidth(true);
        // And return the literal result
        const res = Screen.ResolutionMaintainRatio();
        return res.Width * width;
    },
    GetLineCount: (text, position, font, scale, wrap) => {
        // Tell the game that we are going to request the number of lines
        game.beginTextCommandLineCount("THREESTRINGS"); // CELL_EMAIL_BCON
        // Add the text that has been sent to us
        Text.AddLongString(text);
        // Get the resolution with the correct aspect ratio
        const res = Screen.ResolutionMaintainRatio();
        // Calculate the x and y positions
        const x = position.X / res.Width;
        const y = position.Y / res.Height;
        // Set the properties for the text
        game.setTextFont(font);
        game.setTextScale(1.0, scale);
        // If there is some text wrap to add
        if (wrap > 0) {
            // Calculate the wrap size
            const start = position.X / res.Width;
            const end = start + (wrap / res.Width);
            // And apply it
            game.setTextWrap(x, end);
        }
        // Finally, return the number of lines being made by the string  
        let lineCount = game.endTextCommandLineCount(x, y);
        return lineCount;
    }
};
