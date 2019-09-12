import UUIDV4 from "../utils/UUIDV4.mjs";
export default class ListItem {
    constructor(text = "", data = null) {
        this.Id = UUIDV4();
        this.DisplayText = text;
        this.Data = data;
    }
}
