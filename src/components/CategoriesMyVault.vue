<template>
  <div>
    <!-- eslint-disable -->

    <ion-list-header>
      <ion-label color="medium">CATEGORIES</ion-label>
    </ion-list-header>
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

    <ion-list-header>
      <ion-label color="medium">UNCATEGORIZED</ion-label>
    </ion-list-header>

    <ion-list>
      <ion-item v-for="item in getItems" :key="item.name">
        <ion-icon slot="start" :icon="earthOutline"></ion-icon>
        <ion-col>
          <ion-label class="small-margin-bottom">{{ item.name }}</ion-label>
          <ion-label color="medium">{{ item.username}}</ion-label>
        </ion-col>
        <ion-icon :icon="openOutline" class="ion-margin-start"></ion-icon>
        <ion-icon
          :icon="personCircleOutline"
          class="ion-margin-start"
        ></ion-icon>
        <ion-icon :icon="keyOutline" class="ion-margin-start"></ion-icon>
      </ion-item>
    </ion-list>
  </div>
</template>

<script>
import {
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonBadge,
  IonCol,
  IonListHeader
} from "@ionic/vue";
import {
  earthOutline,
  cardOutline,
  idCardOutline,
  documentOutline,
  openOutline,
  personCircleOutline,
  keyOutline,
} from "ionicons/icons";
import { mapGetters } from 'vuex';

export default {
  name: "CategoriesMyVault",
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
    IonBadge,
    IonCol,
    IonListHeader
  },
  data() {
    return {
      earthOutline,
      cardOutline,
      idCardOutline,
      documentOutline,
      openOutline,
      personCircleOutline,
      keyOutline,
    };
  },
  computed: {
    ...mapGetters(['getItems'])
  }
};
</script>

<style>
.small-margin-bottom {
  margin-bottom: 5px;
}
.text-muted {
  color: #2e2e2e;
}
</style>