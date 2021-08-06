<script>
import { sendUser } from "./api";
import Account from "@/components/Account";
import Services from "@/components/Services";
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
      billingData: {
        servicesData: {},
        accountData: { account: "account" },
        sessionsData: { sessions: "sessions" },
      },
    };
  },

  created() {
    this.getWidgetHydraData();
  },

  methods: {
    switchBookmark(elem, refName) {
      document.querySelectorAll(".billingBookmarkTitle").forEach((el) => {
        el.classList.remove("sel");
      });

      elem.classList.add("sel");

      Object.keys(this.$refs).forEach((el) => {
        (el === refName) ? (this.$refs[el].bookmarkIsActive = true) : (this.$refs[el].bookmarkIsActive = false);
      });
    },

    getWidgetHydraData() {
      const ttsId = new URL(location.href).searchParams.get("CustomerID");

      console.log(`user TTS ID = ${ttsId}`);

      if (ttsId) {
        const hydraResponse = sendUser(ttsId);

        hydraResponse.then((result) => {
          console.log(result);

          this.getServicesData(result);
        });
      }
    },

    getServicesData(res) {
      let sortedData = [];

      res.forEach((item) => {

        const contractItem = {
          ACCOUNT: item.ACCOUNT,
          CONTRACT: item.CONTRACT,
          BALANCE: item.BALANCE,
          services: [],
          totalCost: 0,
        };

        const serviceItem = {
          SERVICE: item.SERVICE,
          SERVICE_LOCK: item.SERVICE_LOCK,
          PRICE: item.PRICE,
          D_BEGIN: new Date(item.D_BEGIN).toISOString().split('T')[0],
          D_END: (item.D_END) ? new Date(item.D_END).toISOString().split('T')[0] : '-',
        };

        if (sortedData.length < 1 || !sortedData.find(el => el.CONTRACT === item.CONTRACT)) {
          contractItem.services.push(serviceItem);
          sortedData.push(contractItem);
        } else {
          for (let value of sortedData) {
            if (value.CONTRACT === item.CONTRACT) {
              value.services.push(serviceItem);
            }
          }
        }
      });

      sortedData.forEach(contract => {
        let summary = 0;
        contract.services.forEach(service => {
          summary += service.PRICE;
        });
        contract.totalCost = summary;
      });

      this.billingData.servicesData = sortedData;

      console.log(this.billingData.servicesData);
    },
  },
};
</script>

<template>

  <div class="elz d-block pAT16 lh-12">
    <div class="elz d-block fn-16 pB8">ФГБУ РЭА Минэнерго России</div>
    <div class="elz d-flex f-wrap mL-16 pB16">
      <div class="elz d-block mL16 mT8">ID: <a href="#" class="elz bold cur-pointer opAct07 underline noDecHov fn fn-link-inline fnHovL-10 fnHovLInvD">50935</a></div>
      <div class="elz d-block mL16 mT8">Code: <a href="#" class="elz bold cur-pointer opAct07 underline noDecHov fn fn-link-inline fnHovL-10 fnHovLInvD">1750935</a></div>
      <div class="elz d-block mL16 mT8">Телефон: <b class="bold nowrap">+7 925 772 69 19</b>
      </div>
      <div class="elz d-block mL16 mT8">Адрес: <b class="bold">г Москва ул Щепкина д. 40 Строение 1</b>
      </div>
    </div>
  </div>

  <div class="elz h48 borB1 br br-primary brL-20 brLInvD brLF-10 brFD">
    <div class="elz d-flex h100p">
      <div @click="switchBookmark($event.currentTarget, 'services')"
        class="billingBookmarkTitle elz d-flex pH16 opAct07 cur-pointer sHovOut sSelOut opSelOut fn fn-primary-t fnHovL-10 fnSelL-10
         fnHovLInvD fnSelLInvD sel">
        <div class="elz p-rel d-flex a-X">
          <div class="elz d-block nowrap">Договоры и услуги</div>
          <div class="elz p-abs p-B borB3 mB-1 br-CC wZero wSelInFull wHovInFull trns op05 opSelIn10"></div>
        </div>
      </div>
      <div @click="switchBookmark($event.currentTarget, 'account')"
        class="billingBookmarkTitle elz d-flex pH16 opAct07 cur-pointer sHovOut sSelOut opSelOut fn fn-primary-t fnHovL-10 fnSelL-10
         fnHovLInvD fnSelLInvD">
        <div class="elz p-rel d-flex a-X">
          <div class="elz d-block nowrap">Лицевой счет</div>
          <div class="elz p-abs p-B borB3 mB-1 br-CC wZero wSelInFull wHovInFull trns op05 opSelIn10"></div>
        </div>
      </div>
      <div @click="switchBookmark($event.currentTarget, 'sessions')"
        class="billingBookmarkTitle elz d-flex pH16 opAct07 cur-pointer sHovOut sSelOut opSelOut fn fn-primary-t fnHovL-10 fnSelL-10
         fnHovLInvD fnSelLInvD">
        <div class="elz p-rel d-flex a-X">
          <div class="elz d-block nowrap">VPN Сессии</div>
          <div class="elz p-abs p-B borB3 mB-1 br-CC wZero wSelInFull wHovInFull trns op05 opSelIn10"></div>
        </div>
      </div>
    </div>
  </div>

  <Services ref="services" :servicesData="billingData.servicesData"></Services>

  <Account ref="account" :accountData="billingData.accountData"></Account>

  <Sessions ref="sessions" :sessionsData="billingData.sessionsData"></Sessions>

</template>

<style src="./assets/styles/_style.css"></style>
