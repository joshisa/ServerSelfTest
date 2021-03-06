// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the code between BEGIN USER CODE and END USER CODE
// Other code you write will be lost the next time you deploy the project.

/**
 * @param {Big} duration - Android only setting. The time (in milliseconds) the device should vibrate. Set to empty to use the default value 500.
 * @returns {boolean}
 */
function Vibrate(duration) {
	// BEGIN USER CODE
    // Documentation https://facebook.github.io/react-native/docs/vibration#vibrate
    const Vibration = require("react-native").Vibration;
    const pattern = duration ? Number(duration) : 500;
    Vibration.vibrate(pattern, false);
    return true;
	// END USER CODE
}