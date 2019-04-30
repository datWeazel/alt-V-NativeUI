import { Screen } from "includes/NativeUIMenu/utils/Screen.mjs";
import ResText from "includes/NativeUIMenu/modules/ResText.mjs";

import alt from 'alt';
import game from 'natives';
export default class StringMeasurer {
	static MeasureStringWidthNoConvert(input) {
		game.beginTextCommandWidth("STRING");
		ResText.AddLongString(input);
		game.setTextFont(0);
		game.setTextScale(0.35, 0.35);
		return game.endTextCommandGetWidth(true);
		
    }
    static MeasureString(str) {
        const screenw = Screen.width;
        const screenh = Screen.height;
        const height = 1080.0;
        const ratio = screenw / screenh;
        const width = height * ratio;
        return this.MeasureStringWidthNoConvert(str) * width;
    }
}
