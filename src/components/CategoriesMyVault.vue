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
        <ion-badge color="primary" class="ion-margin-end">{{
          getItems.filter((item) => item.type == "Login").length
        }}</ion-badge>
      </ion-item>

      <ion-item :detail="true">
        <ion-icon slot="start" :icon="cardOutline"></ion-icon>
        <ion-label>Cards</ion-label>
        <ion-badge color="primary" class="ion-margin-end">{{
          getItems.filter((item) => item.type == "Cards").length
        }}</ion-badge>
      </ion-item>

      <ion-item :detail="true">
        <ion-icon slot="start" :icon="idCardOutline"></ion-icon>
        <ion-label>Identity</ion-label>
        <ion-badge color="primary" class="ion-margin-end">{{
          getItems.filter((item) => item.type == "Identity").length
        }}</ion-badge>
      </ion-item>

      <ion-item :detail="true">
        <ion-icon slot="start" :icon="documentOutline"></ion-icon>
        <ion-label>Secure Notes</ion-label>
        <ion-badge color="primary" class="ion-margin-end">{{
          getItems.filter((item) => item.type == "SecureNote").length
        }}</ion-badge>
      </ion-item>
    </ion-list>

    <ion-list-header>
      <ion-label color="medium">UNCATEGORIZED</ion-label>
    </ion-list-header>

    <ion-list v-if="getItems.length > 0">
      <ion-item
        v-for="item in getItems"
        :key="item.name"
        @touchstart="longpress(true)"
        @touchend="longpressed = false"
      >
        <ion-icon slot="start" :icon="skullOutline"></ion-icon>
        <ion-col @click="$router.push(`/tabs/item-view/${item.id}`)">
          <!-- <router-link :to="{ name: 'item-view', params: {itemID: item.id } }" > -->
          <ion-label class="small-margin-bottom">{{ item.name }}</ion-label>
          <ion-label color="medium">{{ item.username }}</ion-label>
          <!-- </router-link> -->
        </ion-col>
        <ion-icon :icon="openOutline" class="ion-margin-start"></ion-icon>
        <ion-icon
          @click="copyToClipboard(item.name)"
          :icon="personCircleOutline"
          class="ion-margin-start"
        ></ion-icon>
        <ion-icon
          @click="copyToClipboard(item.password)"
          :icon="keyOutline"
          class="ion-margin-start"
        ></ion-icon>
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
  IonListHeader,
  toastController,
  actionSheetController,
} from "@ionic/vue";
import {
  earthOutline,
  cardOutline,
  idCardOutline,
  documentOutline,
  openOutline,
  personCircleOutline,
  keyOutline,
  skullOutline,
  trash,
  heart,
  create
} from "ionicons/icons";
import { mapGetters } from "vuex";
import { Clipboard } from "@ionic-native/clipboard";

export default {
  name: "CategoriesMyVault",
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
    IonBadge,
    IonCol,
    IonListHeader,
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
      skullOutline,
      longpressed: false,
      trash,
      heart,
      create
    };
  },
  computed: {
    ...mapGetters(["getItems"]),
  },
  methods: {
    async copyToClipboard(itemPassword) {
      try {
        await Clipboard.copy(itemPassword);
        const toast = await toastController.create({
          message: "Copied to clipboard!",
          duration: 2000,
          color: "primary",
        });
        return toast.present();
      } catch (error) {
        console.log(error);
      }
    },
    longpress(val) {
      if (val) {
        this.longpressed = true;
        setTimeout(async () => {
          if (this.longpressed) {
            const actionSheet = await actionSheetController.create({
              header: "Item",
              buttons: [
                {
                  text: "Delete",
                  role: "destructive",
                  // icon: trash,
                  handler: () => {
                    console.log("Delete clicked");
                  },
                },
                {
                  text: "Update",
                  // icon: create,
                  handler: () => {
                    console.log("Edit clicked");
                  },
                },
                {
                  text: "Favorite",
                  // icon: heart,
                  handler: () => {
                    console.log("Favorite clicked");
                  },
                },
                {
                  text: "Cancel",
                  // icon: close,
                  role: "cancel",
                  handler: () => {
                    console.log("Cancel clicked");
                  },
                },
              ],
            });
            await actionSheet.present();

            const { role } = await actionSheet.onDidDismiss();
          }
        }, 500);
      }
    },
  },
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