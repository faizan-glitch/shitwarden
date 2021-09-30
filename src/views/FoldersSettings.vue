<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Folders</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Folders</ion-title>
        </ion-toolbar>
      </ion-header>
      <FoldersContainer />
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
} from "@ionic/vue";

import FoldersContainer from "@/components/FoldersContainer.vue";

export default {
  name: "folders",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    FoldersContainer,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>