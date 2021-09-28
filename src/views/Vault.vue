<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Vault</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Vault</ion-title>
        </ion-toolbar>
      </ion-header>
      <categories-my-vault/>
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
  // IonBackButton,
  // IonButtons,
} from "@ionic/vue";
import CategoriesMyVault from '@/components/CategoriesMyVault.vue';
// import ExploreContainer from "@/components/ExploreContainer.vue";

export default {
  name: "Vault",
  components: {
    // ExploreContainer,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    // IonBackButton,
    // IonButtons,
    IonPage,
    CategoriesMyVault,
  },
};
</script>