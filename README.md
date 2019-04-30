# alt:V-NativeUI
This project is a port of [RageMP-NativeUI by XMGamingMaster](https://github.com/XMGamingMaster/RageMP-NativeUI) for alt:V. alt:V-NativeUI provides a simple module to use NativeUI menus in your clientside scripts.
# Usage
Simply copy the `NativeUIMenu`folder into your resource folder and add it to your `resource.cfg`. After that you can need to import`NativeUI`to your clientside script by adding this line to your script: 
`import * as NativeUI from 'includes/NativeUIMenu/NativeUI.mjs';`
## Example
    import * as NativeUI from 'includes/NativeUIMenu/NativeUI.mjs';
    
    const ui = new NativeUI.Menu("NativeUI Test", "Test Subtitle", new NativeUI.Point(50, 50));
    ui.AddItem(new NativeUI.UIMenuListItem(
    	"List Item",
    	"Description for List Item",
    	new NativeUI.ItemsCollection(["Item 1", "Item 2", "Item 3"])
    ));
    ui.AddItem(new NativeUI.UIMenuSliderItem(
    	"Slider Item",
    	["Fugiat", "pariatur", "consectetur", "ex", "duis", "magna", "nostrud", "et", "dolor", "laboris"],
    	5,
    	"Fugiat pariatur consectetur ex duis magna nostrud et dolor laboris est do pariatur amet sint.",
    	true
    ));
    ui.AddItem(new NativeUI.UIMenuCheckboxItem(
    	"Checkbox Item",
    	false,
    	"Fugiat pariatur consectetur ex duis magna nostrud et dolor laboris est do pariatur amet sint."
    ));
    
    ui.ItemSelect.on(item => {
    	if (item instanceof NativeUI.UIMenuListItem) {
    		alt.log(item.SelectedItem.DisplayText, item.SelectedItem.Data);
    	} else if (item instanceof NativeUI.UIMenuSliderItem) {
    		alt.log(item.Text, item.Index, item.IndexToItem(item.Index));
    	} else {
    		alt.log(item.Text);
    	}
    });
**Result:**
![enter image description here](https://i.imgur.com/StrdDxR.png)
## Functions
`new NativeUI.Menu(Title, Subtitle, Offset, spriteLibrary = "commonmenu", spriteName = "interaction_bgd")`
-   **Functions**
-   `AddItem(UIMenuItem)`
-   `BindMenuToItem(NativeUI, UIMenuItem)`
-   `ReleaseMenuFromItem(UIMenuItem)`
-   `Open()`
-   `Close()`
-   **Events**
-   `IndexChange: (Index)`
-   `ListChange: (UIMenuListItem, Index)`
-   `CheckboxChange: (UIMenuCheckboxItem, Checked)`
-   `ItemSelect: (UIMenuItem, Index)`
-   `SliderChange: (UIMenuSliderItem, Index, Value)`
-   `MenuClose: ()`
-   `MenuChange: (Menu)`
----------
`new NativeUI.UIMenuItem(Caption, Description = "")`
-   **Functions**
-   `SetLeftBadge(BadgeStyle)`
-   `SetRightBadge(BadgeStyle)`
-   `SetRightLabel(Text)`
-   **Variables**
-   `Text: String`
-   `Description: String`
-   `Enabled: Boolean`
-   `BackColor: Color`
-   `HighlightedBackColor: Color`
-   `ForeColor: Color`
-   `HighlightedForeColor: Color`
----------
`new NativeUI.UIMenuListItem(Caption, Description = "", collection = new ItemsCollection([]), startIndex = 0)`  (Extends  `UIMenuItem`)  
**Does not support  `SetRightBadge`  and  `SetRightLabel`**
-   **Variables**
-   `Collection: ItemsCollection`
-   `SelectedItem: string`
-   `SelectedValue: string`
----------
`new NativeUI.UIMenuCheckboxItem(Caption, checked = false, Description = "")`  (Extends  `UIMenuItem`)  
**Does not support  `SetRightBadge`  and  `SetRightLabel`**
-   **Variables**
-   `Checked: boolean`
-   **Events**
-   `CheckedChanged: (Checked)`
----------
`new NativeUI.UIMenuSliderItem(Caption, Items, Startindex, Description = "", Divider = false)`  (Extends  `UIMenuItem`)  
**Does not support  `SetRightBadge`  and  `SetRightLabel`**
-   **Variables**
-   `Index: number`
-   **Functions**
-   `IndexToItem: any`
----------
`new NativeUI.Point(X, Y)`
-   **Variables**
-   `X: number`
-   `Y: number`
----------
`new NativeUI.Size(Width, Height)`
-   **Variables**
-   `Width: number`
-   `Height: number`
----------
`new NativeUI.Color(Red, Green, Blue, Alpha = 255)`
-   **Variables**
-   `R: number`
-   `G: number`
-   `B: number`
-   `A: number`
----------
`new NativeUI.ItemsCollection(Array)`

## Enums

### BadgeStyle
```
enum BadgeStyle {
	None,
	BronzeMedal,
	GoldMedal,
	SilverMedal,
	Alert,
	Crown,
	Ammo,
	Armour,
	Barber,
	Clothes,
	Franklin,
	Bike,
	Car,
	Gun,
	Heart,
	Makeup,
	Mask,
	Michael,
	Star,
	Tatoo,
	Trevor,
	Lock,
	Tick
}
```
### Font
```
enum Font {
	ChaletLondon = 0,
	HouseScript = 1,
	Monospace = 2,
	CharletComprimeColonge = 4,
	Pricedown = 7
}
```