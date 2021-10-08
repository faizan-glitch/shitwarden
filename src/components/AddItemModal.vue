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
            <ion-select-option value="login">Login</ion-select-option>
            <ion-select-option value="card">Card</ion-select-option>
            <ion-select-option value="identity">Identity</ion-select-option>
            <ion-select-option value="secureNote"
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
          <ion-input v-model="itemPassword"></ion-input>
          <ion-row class="ion-justify-content-around" style="width: 90%">
            <ion-col size="1">
              <ion-button>
                <ion-icon :icon="checkmarkCircleOutline"></ion-icon>
              </ion-button>
            </ion-col>
            <ion-col size="1">
              <ion-button>
                <ion-icon :icon="eyeOffOutline"></ion-icon>
              </ion-button>
            </ion-col>
            <ion-col size="1">
              <ion-button>
                <ion-icon :icon="refreshOutline"></ion-icon>
              </ion-button>
            </ion-col>
          </ion-row>
        </ion-item>
        <ion-item>
          <ion-label position="floating" color="medium"
            >Authenticator Key (TOTP)</ion-label
          >
          <ion-input v-model="itemAuthKey"></ion-input>
        </ion-item>

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
          <ion-checkbox color="primary"></ion-checkbox>
        </ion-item>

        <ion-item>
          <ion-label>Master password re-prompt</ion-label>
          <ion-checkbox color="primary"></ion-checkbox>
        </ion-item>
      </ion-list>

      <ion-list-header>
        <ion-label color="medium">NOTES</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item class="dark-bg">
          <ion-textarea rows="8" cols="20" :auto-grow="true"></ion-textarea>
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
  refreshOutline,
  closeCircleOutline,
  removeCircleOutline,
} from "ionicons/icons";

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
      itemTypeSelected: "",
      itemName: "",
      itemUsername: "",
      itemPassword: "",
      itemAuthKey: "",
      closeCircleOutline,
      checkmarkCircleOutline,
      eyeOffOutline,
      refreshOutline,
      removeCircleOutline,
    };
  },
  methods: {
    async closeModal() {
      await modalController.dismiss();
    },
    saveItem() {
      console.log(this.itemTypeSelected);
      console.log(this.itemName);
      console.log(this.itemUsername);
      console.log(this.itemPassword);
      console.log(this.itemAuthKey);
    },
  },
};
</script>