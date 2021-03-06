// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the code between BEGIN USER CODE and END USER CODE
// Other code you write will be lost the next time you deploy the project.

/**
 * Notification permissions are required to send a user push messages. Calling this action displays the permission dialog to the user.
 * Returns true if permission is granted, otherwise it returns false.
 * @returns {boolean}
 */
function RequestNotificationPermission() {
	// BEGIN USER CODE
    // Documentation https://rnfirebase.io/docs/v5.x.x/notifications/receiving-notifications
    const Platform = require("react-native").Platform;
    const firebase = require("react-native-firebase");
    return firebase
        .messaging()
        .requestPermission()
        .then(() => Platform.OS === "ios"
        ? firebase
            .messaging()
            .ios.registerForRemoteNotifications()
            .then(() => true)
        : true)
        .catch(() => false);
	// END USER CODE
}