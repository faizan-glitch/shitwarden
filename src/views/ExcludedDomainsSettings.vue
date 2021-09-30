<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Excluded Domains</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Excluded Domains</ion-title>
        </ion-toolbar>
      </ion-header>
      <!-- eslint-disable -->

      <ion-item>
        <ion-icon slot="start" :icon="addCircleOutline"></ion-icon>
        <ion-label>New URI</ion-label>
      </ion-item>
      <ion-list-header>
        <ion-label color="medium"
          >Bitwarden will not ask to save login details for these domains. You
          must refresh the page for changes to take effect.
        </ion-label>
      </ion-list-header>
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
} from "@ionic/vue";

import { addCircleOutline } from "ionicons/icons";

export default {
  name: "ExcludedDomains",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonLabel,
    IonItem,
    IonListHeader,
  },
  data() {
    return {
      addCircleOutline,
    };
  },
};
</script>