<template>
  <ion-page>
    <!-- eslint-disable -->
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="closeModal">
            <ion-icon :icon="closeCircleOutline" />
          </ion-button>
        </ion-buttons>
        <ion-title>Add Item</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="saveItem"> Save </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Add Item</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list-header>
        <ion-label color="medium">ITEM INFORMATION</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item>
          <ion-label color="medium">Type</ion-label>
          <ion-select v-model="itemTypeSelected">
            <ion-select-option value="Login">Login</ion-select-option>
            <ion-select-option value="Card">Card</ion-select-option>
            <ion-select-option value="Identity">Identity</ion-select-option>
            <ion-select-option value="SecureNote"
              >Secure Note</ion-select-option
            >
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-label position="floating" color="medium">Name</ion-label>
          <ion-input v-model="itemName"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating" color="medium">Username</ion-label>
          <ion-input v-model="itemUsername"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating" color="medium">Password</ion-label>
          <ion-input v-model="itemPassword" :type="passwordType"></ion-input>
        </ion-item>
         <ion-row class="ion-justify-content-around" style="width: 90%">
            <ion-col size="1">
              <ion-button @click="passwordType == 'password' ? passwordType = 'text': passwordType = 'password'">
                <ion-icon  :icon="passwordType == 'password' ? eyeOutline : eyeOffOutline" ></ion-icon>
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

        <ion-item>
          <ion-label color="medium">Folder</ion-label>
          <ion-select>
            <ion-select-option value="noFolder">No Folder</ion-select-option>
            <ion-select-option value="folderName"
              >Folder Name</ion-select-option
            >
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-label>Favourite</ion-label>
          <ion-checkbox color="primary" v-model="itemFavourite"></ion-checkbox>
        </ion-item>

      </ion-list>

      <ion-list-header>
        <ion-label color="medium">NOTES</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item class="dark-bg">
          <ion-textarea rows="8" cols="20" v-model="itemNote"></ion-textarea>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>

import { v4 as uuidv4 } from 'uuid';

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  modalController,
  IonButton,
  IonButtons,
  IonIcon,
  IonLabel,
  IonListHeader,
  IonItem,
  IonList,
  IonSelectOption,
  IonSelect,
  IonCheckbox,
  IonRow,
  IonCol,
  IonInput,
  IonItemDivider,
  IonTextarea,
} from "@ionic/vue";

import {
  checkmarkCircleOutline,
  eyeOffOutline,
  eyeOutline,
  refreshOutline,
  closeCircleOutline,
  removeCircleOutline,
} from "ionicons/icons";

import { mapMutations } from 'vuex';


export default {
  name: "AddItemModal",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButton,
    IonButtons,
    IonIcon,
    IonLabel,
    IonListHeader,
    IonItem,
    IonList,
    IonSelectOption,
    IonSelect,
    IonCheckbox,
    IonRow,
    IonCol,
    IonInput,
    IonItemDivider,
    IonTextarea,
  },
  data() {
    return {
      itemTypeSelected: "Login",
      itemName: "",
      itemUsername: "",
      itemPassword: "",
      itemURLs: [],
      itemFavourite: false,
      itemNote: "",
      closeCircleOutline,
      checkmarkCircleOutline,
      eyeOffOutline,
      eyeOutline,
      refreshOutline,
      removeCircleOutline,
      passwordType: "password"
    };
  },
  methods: {
    ...mapMutations(['pushItem']),
    async closeModal() {
      await modalController.dismiss();
    },
    saveItem() {
      this.pushItem({
        id: uuidv4(),
        name: this.itemName,
        username: this.itemUsername,
        password: this.itemPassword,
        type: this.itemTypeSelected,
        urls: this.itemURLs,
        favourite: this.itemFavourite,
        note: this.itemNote
      })
      this.closeModal();
    },
  },
};
</script>