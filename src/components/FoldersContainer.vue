<template>
  <div>
    <h4 class="ion-margin">Categories</h4>
    <!-- eslint-disable -->

    <ion-list>
      <ion-item v-for="item in items" :key="item">
        <ion-label>Folder</ion-label>
      </ion-item>
    </ion-list>
  </div>
</template>

<script>
import { IonList, IonItem, IonLabel } from "@ionic/vue";

export default {
  name: "FoldersContainer",
  components: {
    IonList,
    IonItem,
    IonLabel,
  },
  data() {
    return {
      items: [1, 2, 3, 4],
    };
  },
};
</script>

<style>
</style>