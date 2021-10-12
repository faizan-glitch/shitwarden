<template>
  <ion-page>
    <!-- eslint-disable -->
    <ion-header>
      <ion-toolbar>
        <ion-title>Account</ion-title>
        <ion-buttons slot="end">
          <ion-button> Edit </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Account</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list-header>
        <ion-label color="medium">ITEM INFORMATION</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item>
          <ion-label color="medium">Name</ion-label>
          <ion-input v-model="itemName" readonly></ion-input>
        </ion-item>
        <ion-item>
          <ion-label color="medium">Username</ion-label>
          <ion-input v-model="itemUsername" readonly></ion-input>
        </ion-item>
        <ion-item>
          <ion-label color="medium">Password</ion-label>
          <ion-input v-model="itemPassword" :type="passwordType" readonly></ion-input>
        </ion-item>
         <ion-row class="ion-justify-content-around" style="width: 90%">
            <ion-col size="1">
              <ion-button @click="passwordType == 'password' ? passwordType = 'text': passwordType = 'password'">
                <ion-icon :icon="passwordType == 'password' ? 'eyeOutline' : 'eyeOffOutline'" ></ion-icon>
              </ion-button>
            </ion-col>
            <ion-col size="1">
              <ion-button>
                <ion-icon :icon="refreshOutline"></ion-icon>
              </ion-button>
            </ion-col>
          </ion-row>

        <ion-item-divider></ion-item-divider>

        <ion-item>
          <ion-icon slot="start" :icon="removeCircleOutline"></ion-icon>
          <ion-col>
            <ion-label class="small-margin-bottom">URL</ion-label>
            <ion-label color="medium">Credentials</ion-label>
          </ion-col>
          <!-- <ion-icon :icon="openOutline" class="ion-margin-start"></ion-icon> -->
          <!-- <ion-icon
            :icon="personCircleOutline"
            class="ion-margin-start"
          ></ion-icon> -->
          <!-- <ion-icon :icon="keyOutline" class="ion-margin-start"></ion-icon> -->
        </ion-item>

        <ion-item-divider></ion-item-divider>

        <ion-item button>
          <ion-icon slot="start" :icon="copyOutline" />
          <ion-label>Clone Item</ion-label>
        </ion-item>
        <ion-item button>
            <ion-icon slot="start" :icon="trashBinOutline" />
          <ion-label>Delete Item</ion-label>
        </ion-item>

      </ion-list>

      <ion-list-header>
        <ion-label color="medium">NOTES</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item class="dark-bg">
          <ion-textarea rows="8" cols="20" :auto-grow="true" readonly></ion-textarea>
        </ion-item>
      </ion-list>
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
  modalController,
  IonButton,
  IonIcon,
  IonLabel,
  IonListHeader,
  IonItem,
  IonList,
  IonRow,
  IonCol,
  IonInput,
  IonItemDivider,
  IonTextarea,
  IonButtons,
} from "@ionic/vue";

import {
  checkmarkCircleOutline,
  eyeOffOutline,
  eyeOutline,
  refreshOutline,
  closeCircleOutline,
  removeCircleOutline,
  copyOutline,
  trashBinOutline,
} from "ionicons/icons";

import { useRoute } from 'vue-router';
import { mapGetters } from 'vuex';


export default {
  name: "ItemView",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButton,
    IonIcon,
    IonLabel,
    IonListHeader,
    IonItem,
    IonList,
    IonRow,
    IonCol,
    IonInput,
    IonItemDivider,
    IonTextarea,
    IonButtons,
  },
  data() {
    return {
      itemID: "",
      item: "",
      itemTypeSelected: "",
      itemName: "",
      itemUsername: "",
      itemPassword: "",
      closeCircleOutline,
      checkmarkCircleOutline,
      eyeOffOutline,
      eyeOutline,
      refreshOutline,
      removeCircleOutline,
      copyOutline,
      trashBinOutline,
      passwordType: "password"
    };
  },
  computed: {
    ...mapGetters(['getItemByID'])
  },
  methods: {
    async closeModal() {
      await modalController.dismiss();
    },
    saveItem() {
      this.pushItem({
        name: this.itemName,
        username: this.itemUsername,
        password: this.itemPassword
      })
      this.closeModal;
    },
  },
  ionViewWillEnter() {
    this.itemID = useRoute().params.itemID;
    this.item = this.getItemByID(this.itemID);
    this.itemName = this.item.name;
    this.itemUsername = this.item.username;
    this.itemPassword = this.item.password;
  },
};
</script>