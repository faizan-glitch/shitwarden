<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <!-- eslint-disable -->
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="vault" href="/tabs/vault">
          <ion-icon :icon="lockClosedOutline" />
          <ion-label>Vault</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="generator" href="/tabs/generator">
          <ion-icon :icon="createOutline" />
          <ion-label>Generator</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="settings" href="/tabs/settings">
          <ion-icon :icon="square" />
          <ion-label>Settings</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { lockClosedOutline, createOutline, settingsOutline } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      lockClosedOutline, 
      createOutline, 
      settingsOutline
    }
  }
}
</script>