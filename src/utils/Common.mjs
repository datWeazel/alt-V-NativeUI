import * as game from 'natives';
export default class Common {
    static PlaySound(audioName, audioRef) {
        game.playSoundFrontend(-1, audioName, audioRef, false);
    }
}
