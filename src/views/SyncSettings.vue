<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Sync</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Sync</ion-title>
        </ion-toolbar>
      </ion-header>
      <!-- eslint-disable -->

      <ion-list-header>
        <ion-label color="medium">LOGINS</ion-label>
      </ion-list-header>
      <ion-item>
        <ion-col>
          <ion-label class="ion-text-center"
            >There are no logins available to auto-fill for the current browser
            tab.</ion-label
          >
          <ion-button color="primary">Add a Login</ion-button>
        </ion-col>
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonLabel,
  IonItem,
  IonListHeader,
  IonCol,
  IonButton,
} from "@ionic/vue";

export default {
  name: "Sync",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonLabel,
    IonItem,
    IonListHeader,
    IonCol,
    IonButton,
  },
};
</script>