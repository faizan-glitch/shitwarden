<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Settings</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Settings</ion-title>
        </ion-toolbar>
      </ion-header>
      <!-- eslint-disable -->

      <ion-list-header>
        <ion-label color="medium">MANAGE</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item :detail="true" routerLink="/tabs/folders">
          <ion-label>Folders</ion-label>
        </ion-item>

        <ion-item :detail="true" routerLink="/tabs/sync">
          <ion-label>Sync</ion-label>
        </ion-item>

        <ion-item :detail="true" routerLink="/tabs/excluded-domains">
          <ion-label>Excluded Domains</ion-label>
        </ion-item>
      </ion-list>

      <ion-list-header>
        <ion-label color="medium">SECURITY</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item>
          <ion-label color="medium">Vault Timeout</ion-label>
          <ion-select>
            <ion-select-option value="immediate">Immediately</ion-select-option>
            <ion-select-option value="oneMinute">1 minute</ion-select-option>
            <ion-select-option value="fiveMinute">5 minutes</ion-select-option>
            <ion-select-option value="fifteenMinutes"
              >15 minutes</ion-select-option
            >
            <ion-select-option value="thirtyMinute"
              >30 minutes</ion-select-option
            >
            <ion-select-option value="oneHour">1 hour</ion-select-option>
            <ion-select-option value="fourHours">4 hours</ion-select-option>
            <ion-select-option value="browserRestart"
              >On Browser Restart</ion-select-option
            >
            <ion-select-option value="never">Never</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-label color="medium">Vault Timeout Action</ion-label>
          <ion-select>
            <ion-select-option value="lock">Lock</ion-select-option>
            <ion-select-option value="logout">Logout</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-label>Unlock with PIN</ion-label>
          <ion-checkbox color="primary"></ion-checkbox>
        </ion-item>

        <ion-item :detail="true" router-direction="back" @click="$router.push('/')">
          <ion-label>Lock Now</ion-label>
        </ion-item>

        <ion-item :detail="true">
          <ion-label>Two-step Login</ion-label>
        </ion-item>
      </ion-list>

      <ion-list-header>
        <ion-label color="medium">ACCOUNT</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item :detail="true">
          <ion-label>Change Master Password</ion-label>
        </ion-item>

        <ion-item :detail="true">
          <ion-label>Fingerprint Phase</ion-label>
        </ion-item>

        <ion-item :detail="true" router-direction="back" @click="$router.push('/')">
          <ion-label>Log Out</ion-label>
        </ion-item>
      </ion-list>

      <ion-list-header>
        <ion-label color="medium">TOOLS</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item :detail="true">
          <ion-label>Import Items</ion-label>
        </ion-item>

        <ion-item :detail="true">
          <ion-label>Export Vault</ion-label>
        </ion-item>

        <ion-item :detail="true">
          <ion-label>Shitwarden Web Vault</ion-label>
        </ion-item>
      </ion-list>

      <ion-list-header>
        <ion-label color="medium">OTHER</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item :detail="true">
          <ion-label>Options</ion-label>
        </ion-item>

        <ion-item :detail="true">
          <ion-label>About</ion-label>
        </ion-item>

        <ion-item :detail="true">
          <ion-label>Learn about Organization</ion-label>
        </ion-item>

        <ion-item :detail="true">
          <ion-label>Help & Feedback</ion-label>
        </ion-item>

        <ion-item :detail="true">
          <ion-label>Rate the Extension</ion-label>
        </ion-item>
      </ion-list>

      <!-- <h5 class="ion-margin">
        Please consider helping us out with a good review!
      </h5> -->
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
  IonList,
  IonLabel,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonCheckbox,
  IonListHeader,
} from "@ionic/vue";

export default {
  name: "Settings",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonList,
    IonLabel,
    IonItem,
    IonSelect,
    IonSelectOption,
    IonCheckbox,
    IonListHeader,
  },
};
</script>