<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Add Item</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Add Item</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ion-button @click="closeModal">Click me to close modal</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, modalController, IonButton } from '@ionic/vue';

export default  {
  name: 'AddItemModal',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton },
  methods: {
    async closeModal() {
      await modalController.dismiss()
    }
  }
}
</script>