<script>
import { ref } from "vue";
import { requestCustomerData } from "@/requests/api";
import Account from "@/components/Account";
import Services from "@/components/Services";
import Sessions from "@/components/Sessions";
import DataLoadingError from "@/components/slots/DataLoadingError";

export default {
  name: "BillingWidget",
  components: {
    Account,
    Services,
    Sessions,
    DataLoadingError
  },

  setup() {
    const dataIsLoaded = ref(false);
    return { dataIsLoaded };
  },

  data() {
    return {
      ttsId: new URL(location.href).searchParams.get("CustomerID"),

      customerData: {},
      userParams: {},

      animationIsShown: false,
      headerIsLoaded: false,
      servicesIsLoaded: false,
      userParamsIsLoaded: false,
    };
  },

  created() {
    this.getCustomerData();
  },

  mounted() {
    this.setAnimationMinTime();
  },

  computed: {

    checkDataIsReady() {
      if (this.headerIsLoaded && this.servicesIsLoaded && this.userParamsIsLoaded && this.animationIsShown) {
        this.dataIsLoaded = true;
        this.$refs.services.bookmarkIsActive = true;
      }
    },

  },

  methods: {

    getCustomerData() {
      if (this.ttsId) {
        const hydraResponse = requestCustomerData(this.ttsId);
        hydraResponse.then((result) => {
          if(result.statusCode === 500) {
            console.log('ОШИБКА ПОЛУЧЕНИЯ ДАННЫХ ПО ЗАПРОСУ getCustomerData');
            console.log(result);
            this.customerData = false;
            return;
          }
          this.customerData = result;
          this.headerIsLoaded = true;
          this.checkDataIsReady;
        });
      }
    },

    setAnimationMinTime() {
      setTimeout(() => {
        this.animationIsShown = true;
        this.checkDataIsReady;
      }, 800);
    },

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

    updateServicesParams() {
      this.servicesIsLoaded = true;
      this.checkDataIsReady;
    },

    updateUserParams(userParams) {
      this.userParams = userParams;
      this.userParamsIsLoaded = true;
      this.checkDataIsReady;
    },

  },

};
</script>

<template>

  <div v-if="!dataIsLoaded" class="ttsWidgetPlaceholderWrap">
    <div class="ttsWidgetPlaceholder">
      <svg class="authLogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 35">
        <defs>
          <mask id="authMaskA" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%">
            <g class="letter authLogoA1" fill="#ffffff">
              <path d="M13.9,19L19,8l5,11h6.8L22.2,0h-6.5L7.2,19H13.9z"/>
              <g>
                <path d="M33.3,24.8h-6.8l4.7,9.3H38L33.3,24.8z"/>
                <path d="M0,34h6.7l4.6-9.2l-6.7,0L0,34z"/>
              </g>
            </g>
          </mask>
          <linearGradient id="authLoadGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="rgba(255, 255, 255, 0)"/>
            <stop offset="50%" stop-color="rgba(255, 255, 255, 0.25)"/>
            <stop offset="100%" stop-color="rgba(255, 255, 255, 0)"/>
          </linearGradient>
        </defs>
        <g class="letters" fill="#000000">
          <g mask="url(#authMaskA)">
            <rect class="loaderBottom" fill="#000000" opacity="0" x="0" y="22" width="100%" height="12.5">
              <animate attributeName="opacity" from="0" to="1" dur="0.25s" begin="0.1s" fill="freeze"/>
            </rect>
            <rect class="loaderHead" fill="#00adee" opacity="0" x="0" y="0" width="100%" height="22">
              <animate attributeName="opacity" from="0" to="1" dur="0.25s" begin="0.25s" fill="freeze"/>
            </rect>
            <rect class="loaderGradient" width="100%" height="100%" fill="url(#authLoadGradient)"/>
          </g>
        </g>
      </svg>
    </div>
  </div>

  <div v-if="dataIsLoaded" class="elz d-block pAT16 lh-12">
    <template v-if="customerData">
      <div class="elz d-block fn-16 pB8">{{ customerData.CustomerName }}</div>
      <div class="elz d-flex f-wrap mL-16 pB16">
        <div class="elz d-block mL16 mT8">SDN:
          <a :href="'http://sdn.naukanet.ru/customers/customer/'+customerData.CustomerID" target="_blank"
             class="elz bold cur-pointer opAct07 underline noDecHov fn fn-link-inline fnHovL-10 fnHovLInvD">{{ customerData.CustomerID }}</a>
        </div>
        <div class="elz d-block mL16 mT8">HYDRA:
          <a :href="'https://hydra.naukanet.ru:8000/subjects/users/edit/'+customerData.UBN" target="_blank"
             class="elz bold cur-pointer opAct07 underline noDecHov fn fn-link-inline fnHovL-10 fnHovLInvD">{{ customerData.UBN }}</a>
        </div>
        <div class="elz d-block mL16 mT8">Телефон:&nbsp;
          <b :class="[!customerData.CustomerPhone ? 'fn fn-error' : '']" class="bold nowrap">{{ customerData.CustomerPhone ? customerData.CustomerPhone : 'нет&nbsp;данных' }}</b>
        </div>
        <div class="elz d-block mL16 mT8">Адрес:&nbsp;
          <b :class="[!customerData.CustomerPhone ? 'fn fn-error' : '']" class="bold">{{ customerData.LegalAdress ? customerData.LegalAdress : '&nbsp;нет&nbsp;данных' }}</b></div>
      </div>
    </template>
    <template v-else>
      <DataLoadingError :requestName="'Имя и данные клиента'"></DataLoadingError>
    </template>
  </div>

  <div v-if="dataIsLoaded" class="elz h48 borB1 br br-primary brL-20 brLInvD brLF-10 brFD">
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
      :userParams="userParams"
      @services-is-loaded="updateServicesParams"   >
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

<style>
  .authLogo .loaderGradient {
    animation-timing-function: ease-in;
    animation-fill-mode: both;
    animation-play-state: running;
    animation-iteration-count: infinite;
    animation-name: loaderAnim;
    animation-duration: 0.75s;
    animation-delay: 0.5s;
    transition-duration: 0.5s;
  }

  @keyframes loaderAnim {
    from { transform: translateY(100%); }
    to   { transform: translateY(-100%); }
  }

  .ttsWidgetPlaceholderWrap {
    position:absolute;
    display: flex;
    flex-grow: 1;
    /*min-height: 100%;*/
    justify-content: center;
    align-items: center;
    top: 60px;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .ttsWidgetPlaceholder {
    width:  160px;
    height: 160px;
  }

  .ttsWidgetPlaceholder .authLogo {
    display: block;
    width:  100%;
    height: 100%;
  }

</style>
