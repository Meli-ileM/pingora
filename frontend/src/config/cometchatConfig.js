import { CometChat } from "@cometchat-pro/chat";

const appID = import.meta.env.VITE_COMETCHAT_APP_ID; // Remplacez par votre App ID
const region = "eu"; // Exemple : "us", "eu"
const authKey = import.meta.env.VITE_COMETCHAT_AUTH_KEY; // Auth Key pour l'authentification

export const initializeCometChat = async () => {
  try {
    const appSetting = new CometChat.AppSettingsBuilder()
      .subscribePresenceForAllUsers()
      .setRegion(region)
      .build();

    await CometChat.init(appID, appSetting);
    console.log("CometChat initialisé avec succès !");
  } catch (error) {
    console.error("Erreur lors de l'initialisation de CometChat :", error);
  }
};

export { appID, authKey };
