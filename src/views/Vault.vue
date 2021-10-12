<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-searchbar
          mode="ios"
          class="ion-margin-top"
        ></ion-searchbar>
        <!-- eslint-disable -->
        <ion-buttons slot="end">
          <ion-button @click="setOpen(true)" class="ion-margin-horizontal">
            <ion-icon :icon="addCircleOutline" />
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
      <categories-my-vault :items="items" />
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
import { addCircleOutline } from "ionicons/icons";

import { mapGetters } from "vuex";

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
      addCircleOutline,
      isOpenRef: false,
      items: [],
      searchValue: "",
    };
  },
  created() {
    this.items = this.getItems();
  },
  methods: {
    ...mapGetters(["getItems"]),
    setOpen(flag) {
      this.isOpenRef = flag;
    },
    // TODO
    // searchItems() {
    //   console.log(this.items)
    //   if (this.items.length > 0) {
    //     this.items = this.items.filter((item) =>
    //       item.name.toLowerCase().includes(this.searchValue.toLowerCase())
    //     );
    //   } else {
    //     console.log('else ran')
    //     this.items = this.getItems();
    //   }
    // },
  },
};
</script>