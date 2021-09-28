<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-searchbar></ion-searchbar>
        <!-- eslint-disable -->
        <ion-buttons slot="end">
          <ion-button @click="setOpen(true)">
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
      <ion-modal :is-open="isOpenRef" @didDismiss="setOpen(false)">
        <add-item-modal />
      </ion-modal>
      <categories-my-vault />
    </ion-content>
  </ion-page>
</template>

<script>
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
  IonModal,
} from "@ionic/vue";
import CategoriesMyVault from "@/components/CategoriesMyVault.vue";
import AddItemModal from "@/components/AddItemModal.vue";

// import ExploreContainer from "@/components/ExploreContainer.vue";
import { addOutline } from "ionicons/icons";

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
    IonModal,
    IonPage,
    CategoriesMyVault,
    AddItemModal,
  },
  data() {
    return {
      addOutline,
      isOpenRef: false,
    };
  },
  methods: {
    setOpen(flag) {
      this.isOpenRef = flag;
    },
  },
};
</script>