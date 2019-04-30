import Color from "includes/NativeUIMenu/utils/Color.mjs";
import Point from "includes/NativeUIMenu/utils/Point.mjs";
import Size from "includes/NativeUIMenu/utils/Size.mjs";
import Text from "includes/NativeUIMenu/modules/Text.mjs";
import { Screen } from "includes/NativeUIMenu/utils/Screen.mjs";
import alt from 'alt';
import game from 'natives';
export var Alignment;
(function (Alignment) {
    Alignment[Alignment["Left"] = 0] = "Left";
    Alignment[Alignment["Centered"] = 1] = "Centered";
    Alignment[Alignment["Right"] = 2] = "Right";
})(Alignment || (Alignment = {}));
export default class ResText extends Text {
    constructor(caption, pos, scale, color, font, justify) {
        super(caption, pos, scale, color || new Color(255, 255, 255), font || 0, false);
        this.TextAlignment = Alignment.Left;
        if (justify)
			this.TextAlignment = justify;
    }
    Draw(arg1, pos, scale, color, font, arg2, dropShadow, outline, wordWrap) {
        let caption = arg1;
        let centered = arg2;
        let textAlignment = arg2;
        if (!arg1)
            arg1 = new Size(0, 0);
        if (arg1 && !pos) {
            textAlignment = this.TextAlignment;
            caption = this.caption;
            pos = new Point(this.pos.X + arg1.Width, this.pos.Y + arg1.Height);
            scale = this.scale;
            color = this.color;
            font = this.font;
            if (centered == true || centered == false) {
                centered = this.centered;
            }
            else {
                centered = undefined;
                dropShadow = this.DropShadow;
                outline = this.Outline;
                wordWrap = this.WordWrap;
            }
        }
        const screenw = Screen.width;
        const screenh = Screen.height;
        const height = 1080.0;
        const ratio = screenw / screenh;
        const width = height * ratio;
        const x = this.pos.X / width;
		const y = this.pos.Y / height;

		//alt.nextTick(() => {
			//alt.log("Drawing Text (" + this.caption + " | " + caption + ")");
			game.setTextFont(parseInt(font));
			game.setTextScale(1.0, scale);
			game.setTextColour(color.R, color.G, color.B, color.A);
			if (centered !== undefined) {
				game.setTextCentre(centered);
			}
			else {
				if (dropShadow)
					game.setTextDropshadow(2, 0, 0, 0, 0);
				if (outline)
					alt.log("Outline not working!");
				switch (textAlignment) {
					case Alignment.Centered:
						game.setTextCentre(true);
						break;
					case Alignment.Right:
						game.setTextRightJustify(true);
						game.setTextWrap(0.0, x);
						break;
				}
				if (this.WordWrap) {
					const xsize = (this.pos.X + wordWrap.Width) / width;
					game.setTextWrap(x, xsize);
				}
			}
            game.beginTextCommandDisplayText("STRING");
            Text.AddLongString(caption);
            game.endTextCommandDisplayText(x, y);
        //});
    }
}
