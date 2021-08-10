<script>
import { requestCustomerData } from "@/requests/api";
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
      customerData: {},
      ttsId: new URL(location.href).searchParams.get("CustomerID"),
      userParams: {},
    };
  },

  created() {
    this.getCustomerData();
  },

  mounted() {
    //97118
    //98339
    //99206
  },

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

    getCustomerData() {
      if (this.ttsId) {
        const hydraResponse = requestCustomerData(this.ttsId);
        hydraResponse.then((result) => {
          this.customerData = result;
        });
      }
    },

    updateUserParams(userParams) {
      this.userParams = userParams;
    }

  },
};
</script>

<template>
  <div class="elz d-block pAT16 lh-12">
    <div class="elz d-block fn-16 pB8">{{ customerData.CustomerName }}</div>
    <div class="elz d-flex f-wrap mL-16 pB16">
      <div class="elz d-block mL16 mT8">SDN:
        <a :href="'http://sdn.naukanet.ru/customers/customer/'+customerData.CustomerID" target="_blank"
           class="elz bold cur-pointer opAct07 underline noDecHov fn fn-link-inline fnHovL-10 fnHovLInvD">{{ customerData.CustomerID }}</a>
      </div>
      <div class="elz d-block mL16 mT8">HYDRA:
        <a href="#" target="_blank"
           class="elz bold cur-pointer opAct07 underline noDecHov fn fn-link-inline fnHovL-10 fnHovLInvD">{{ customerData.UBN }}</a>
      </div>
      <div class="elz d-block mL16 mT8">Телефон: <b class="bold nowrap">{{ customerData.CustomerPhone ? customerData.CustomerPhone : '&nbsp;-' }}</b></div>
      <div class="elz d-block mL16 mT8">Адрес: <b class="bold">{{ customerData.LegalAdress ? customerData.LegalAdress : '&nbsp;-' }}</b></div>
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

  <Services
      ref="services"
      :ttsId="ttsId"
      :userParams="userParams"   >
  </Services>

  <Account
      ref="account"
      :ttsId="ttsId"   >
  </Account>

  <Sessions
      ref="sessions"
      :ttsId="ttsId"
      @update-user-params="updateUserParams"   >
  </Sessions>

</template>

<style src="./assets/styles/_style.css"></style>
