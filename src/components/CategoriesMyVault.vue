<template>
  <div>
    <!-- <ion-text>Categories</ion-text> -->
    <!-- eslint-disable -->

    <ion-list>
      <ion-item :detail="true">
        <ion-icon slot="start" :icon="earthOutline"></ion-icon>
        <ion-label>Login</ion-label>
        <ion-badge color="primary" class="ion-margin-end">69</ion-badge>
      </ion-item>

      <ion-item :detail="true">
        <ion-icon slot="start" :icon="cardOutline"></ion-icon>
        <ion-label>Cards</ion-label>
      </ion-item>

      <ion-item :detail="true">
        <ion-icon slot="start" :icon="idCardOutline"></ion-icon>
        <ion-label>Identity</ion-label>
      </ion-item>

      <ion-item :detail="true">
        <ion-icon slot="start" :icon="documentOutline"></ion-icon>
        <ion-label>Secure Notes</ion-label>
      </ion-item>
    </ion-list>
  </div>
</template>

<script>
import { IonList, IonItem, IonLabel, IonIcon, IonBadge } from "@ionic/vue";
import {
  earthOutline,
  cardOutline,
  idCardOutline,
  documentOutline,
} from "ionicons/icons";

export default {
  name: "CategoriesMyVault",
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
    IonBadge,
  },
  data() {
    return {
      earthOutline,
      cardOutline,
      idCardOutline,
      documentOutline,
    };
  },
};
</script>

<style>
</style>