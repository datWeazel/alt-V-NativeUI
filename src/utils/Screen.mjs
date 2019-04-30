
import alt from 'alt';
import game from 'natives';

const [_, x, y] = game.getActiveScreenResolution();

export const Screen = {
    width: x,
    height: y
};
