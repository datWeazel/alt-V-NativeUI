
import * as alt from 'alt';
import * as game from 'natives';

const [_, x, y] = game.getActiveScreenResolution();

export const Screen = {
    width: x,
    height: y
};
