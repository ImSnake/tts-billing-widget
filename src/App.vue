<script>
import { sendUser } from "./api";
import Account from "@/components/Account";
import Services from "@/components/Servicies";
import Sessions from "@/components/Sessions";

export default {
  name: "BillingWidget",
  components: {
    Account,
    Services,
    Sessions,
  },

  data() {
    return {
      hydraData: [],
      billingData: {
        servicesData: { services: "services" },
        accountData: { account: "account" },
        sessionsData: { sessions: "sessions" },
      },
    };
  },

  created() {
    console.log("App root component is created");
    this.getWidgetHydraData();
  },

  mounted() {},

  methods: {
    switchBookmark(elem, refName) {
      document.querySelectorAll(".billingBookmarkTitle").forEach((el) => {
        el.classList.remove("sel");
      });

      elem.classList.add("sel");

      Object.keys(this.$refs).forEach((el) => {
        el === refName
          ? (this.$refs[el].bookmarkIsActive = true)
          : (this.$refs[el].bookmarkIsActive = false);
      });
    },

    getWidgetHydraData() {
      //const ttsId = '97118' '98339';

      const ttsId = new URL(location.href).searchParams.get("CustomerID");

      if (ttsId) {
        const hydraResponse = sendUser(ttsId);

        hydraResponse.then((res) => {
          //this.hydraData = res;

          let sortedData = {};
          let contractsCount = 0;
          res.forEach(item => {
            console.log(item);
            console.log(sortedData.find(item.CONTRACT));

            if (!sortedData.find(item.CONTRACT)) {
              sortedData.push(item);
              contractsCount++;
            }
          });
          this.hydraData = sortedData;
          console.log(contractsCount);
          console.log(this.hydraData);
        });
      }
    },
  },
};
</script>

<template>
  <div class="elz d-block pAT16 lh-12">
    <div class="elz d-block fn-16 pB8">ФГБУ РЭА Минэнерго России</div>
    <div class="elz d-flex f-wrap mL-16 pB16">
      <div class="elz d-block mL16 mT8">ID: <b class="bold">50935</b></div>
      <div class="elz d-block mL16 mT8">Code: <b class="bold">1750935</b></div>
      <div class="elz d-block mL16 mT8">
        Телефон: <b class="bold nowrap">+7 925 772 69 19</b>
      </div>
      <div class="elz d-block mL16 mT8">
        Адрес: <b class="bold">г Москва ул Щепкина д. 40 Строение 1</b>
      </div>
    </div>
  </div>

  <div class="elz h48 borB1 br br-primary brL-20 brLInvD brLF-10 brFD">
    <div class="elz d-flex h100p">
      <div
        @click="switchBookmark($event.currentTarget, 'services')"
        class="
          billingBookmarkTitle
          elz
          d-flex
          pH16
          opAct07
          sHovOut
          sSelOut
          opSelOut
          fn fn-primary-t
          fnHovL-10
          fnSelL-10
          fnHovLInvD
          fnSelLInvD
          sel
        "
      >
        <div class="elz p-rel d-flex a-X">
          <div class="elz d-block nowrap">Договоры и услуги</div>
          <div
            class="
              elz
              p-abs p-B
              borB3
              mB-1
              br-CC
              wZero
              wSelInFull
              wHovInFull
              trns
              op05
              opSelIn10
            "
          ></div>
        </div>
      </div>
      <div
        @click="switchBookmark($event.currentTarget, 'account')"
        class="
          billingBookmarkTitle
          elz
          d-flex
          pH16
          opAct07
          sHovOut
          sSelOut
          opSelOut
          fn fn-primary-t
          fnHovL-10
          fnSelL-10
          fnHovLInvD
          fnSelLInvD
        "
      >
        <div class="elz p-rel d-flex a-X">
          <div class="elz d-block nowrap">Лицевой счет</div>
          <div
            class="
              elz
              p-abs p-B
              borB3
              mB-1
              br-CC
              wZero
              wSelInFull
              wHovInFull
              trns
              op05
              opSelIn10
            "
          ></div>
        </div>
      </div>
      <div
        @click="switchBookmark($event.currentTarget, 'sessions')"
        class="
          billingBookmarkTitle
          elz
          d-flex
          pH16
          opAct07
          sHovOut
          sSelOut
          opSelOut
          fn fn-primary-t
          fnHovL-10
          fnSelL-10
          fnHovLInvD
          fnSelLInvD
        "
      >
        <div class="elz p-rel d-flex a-X">
          <div class="elz d-block nowrap">VPN Сессии</div>
          <div
            class="
              elz
              p-abs p-B
              borB3
              mB-1
              br-CC
              wZero
              wSelInFull
              wHovInFull
              trns
              op05
              opSelIn10
            "
          ></div>
        </div>
      </div>
    </div>
  </div>

  <Services ref="services" :servicesData="billingData.servicesData"></Services>

  <Account ref="account" :accountData="billingData.accountData"></Account>

  <Sessions ref="sessions" :sessionsData="billingData.sessionsData"></Sessions>
</template>

<style src="./assets/styles/_style.css"></style>
