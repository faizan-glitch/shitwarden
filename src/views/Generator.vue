<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Generator</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Generator</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <password-generator> </password-generator>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import PasswordGenerator from '@/components/PasswordGenerator.vue'

export default  {
  name: 'Generator',
  components: { PasswordGenerator, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>