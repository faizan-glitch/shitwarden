<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-searchbar></ion-searchbar>
        <!-- eslint-disable -->
        <ion-buttons slot="end">
          <ion-button>
          <ion-icon :icon="addOutline" />
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Vault</ion-title>
        </ion-toolbar>
      </ion-header>
      <categories-my-vault />
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
  IonIcon,
  IonButton,
  IonButtons,
  IonSearchbar,
} from "@ionic/vue";
import CategoriesMyVault from "@/components/CategoriesMyVault.vue";
// import ExploreContainer from "@/components/ExploreContainer.vue";
import { addOutline } from 'ionicons/icons';

export default {
  name: "Vault",
  components: {
    // ExploreContainer,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
    IonButton,
    IonButtons,
    IonSearchbar,
    IonPage,
    CategoriesMyVault,
  },
  data() {
    return {
      addOutline
    }
  }
};
</script>