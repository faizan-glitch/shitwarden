<template>
  <div>
    <!-- <ion-text>Categories</ion-text> -->
    <!-- eslint-disable -->

    <ion-list>
      <ion-item class="dark-bg">
        <ion-textarea
          rows="1"
          cols="20"
          placeholder="Random Password"
          :value="generatedRandomPassword"
          :auto-grow="true"
          readonly
          class="ion-text-center "
        ></ion-textarea>
      </ion-item>

      <ion-item button @click="lengthChanged">
        <ion-label>Regenerate Password</ion-label>
      </ion-item>

      <ion-item button>
        <ion-label>Copy Password</ion-label>
        <!-- <ion-badge color="primary" class="ion-margin-end">69</ion-badge> -->
      </ion-item>

      <ion-item-divider></ion-item-divider>

      <ion-item :detail="true">
        <ion-label>Password History</ion-label>
        <!-- <ion-badge color="primary" class="ion-margin-end">69</ion-badge> -->
      </ion-item>

      <ion-item-divider></ion-item-divider>

      <ion-item>
        <ion-label>Length</ion-label>

        <ion-range
          min="8"
          max="100"
          color="secondary"
          :pin="true"
          v-model="length"
          v-on:ionChange="lengthChanged"
        >
          <ion-label slot="start">8</ion-label>
          <ion-label slot="end">100</ion-label>
        </ion-range>
      </ion-item>

      <ion-item>
        <ion-label>A-Z</ion-label>
        <ion-checkbox color="primary"></ion-checkbox>
      </ion-item>
      <ion-item>
        <ion-label>a-z</ion-label>
        <ion-checkbox color="primary"></ion-checkbox>
      </ion-item>
      <ion-item>
        <ion-label>0-9</ion-label>
        <ion-checkbox color="primary"></ion-checkbox>
      </ion-item>
      <ion-item>
        <ion-label>!@#$%^&*</ion-label>
        <ion-checkbox color="primary"></ion-checkbox>
      </ion-item>
    </ion-list>

    <!-- <ion-button @click="lengthChanged"> Generate Random Password</ion-button> -->
  </div>
</template>

<script>
import {
  IonList,
  IonItem,
  IonLabel,
  IonRange,
  IonCheckbox,
  IonItemDivider,
  IonTextarea
} from "@ionic/vue";
import {
  earthOutline,
  cardOutline,
  idCardOutline,
  documentOutline,
} from "ionicons/icons";

export default {
  name: "PasswordGenerator",
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonRange,
    IonCheckbox,
    IonItemDivider,
    IonTextarea
    // IonIcon,
    // IonBadge,
  },
  data() {
    return {
      earthOutline,
      cardOutline,
      idCardOutline,
      documentOutline,
      length: 0,
      generatedRandomPassword: "",
    };
  },
  methods: {
    lengthChanged() {
      this.generatedRandomPassword = this.getRandomString();
    },
    getRandomString() {
      const randomChars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result = "";
      for (let i = 0; i < this.length; i++) {
        result += randomChars.charAt(
          Math.floor(Math.random() * randomChars.length)
        );
      }
      return result;
    },
  },
};
</script>

<style>

.dark-bg {
  --background: #2e2e2e;
}
</style>