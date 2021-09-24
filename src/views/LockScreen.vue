<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>LockScreen</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">LockScreen</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-card>
        <ion-card-header>
          <ion-card-title>Enter your Pin Code</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <ion-item lines="none">
            <ion-label position="floating">Enter your Pin Code</ion-label>
            <ion-input type="number"></ion-input>
          </ion-item>

          <ion-button @click="authenticateWithFingerprint"
            >Login with Fingerprint</ion-button
          >
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script >
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonLabel,
  IonItem,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonButton,
} from "@ionic/vue";

import { AndroidFingerprintAuth } from "@ionic-native/android-fingerprint-auth";

export default {
  name: "LockScreen",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonInput,
    IonLabel,
    IonItem,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonButton,
  },
  data() {
    return {
      faio: AndroidFingerprintAuth,
    };
  },
  methods: {
    async authenticateWithFingerprint() {
      const result = await this.faio.isAvailable();
      console.log(result);
      this.faio
        .encrypt({
          clientId: "myAppName",
          username: "myUsername",
          password: "myPassword",
        })
        .then((result) => {
          if (result.withFingerprint) {
            this.$router.push("/tabs/vault");
          } else if (result.withBackup) {
            this.$router.push("/tabs/vault");
          } else console.log("Didn't authenticate!");
        })
        .catch((error) => {
          if (error === this.faio.ERRORS.FINGERPRINT_CANCELLED) {
            console.log("Fingerprint authentication cancelled");
          } else console.error(error);
        });
    },
  },
};
</script>