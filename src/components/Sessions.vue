<script>
import { ref } from "vue";
import { requestSessionsData } from "@/requests/api";

export default {
  name: "Sessions",
  props: {
    ttsId: { type: [String, Number], required: true },
  },

  setup() {
    const bookmarkIsActive = ref(false);
    return { bookmarkIsActive };
  },

  emits: ['updateUserParams'],

  data() {
    return {
      sessionsData: {},
    }
  },

  created() {
    this.getSessionsData();
  },

  methods: {

    getSessionsData() {
      if (this.ttsId) {
        const hydraResponse = requestSessionsData(this.ttsId);

        hydraResponse.then((result) => {

          if(result.statusCode === 500) {
            console.log('ОШИБКА ПОЛУЧЕНИЯ ДАННЫХ');
            console.log(result);
            return;
          }

          this.getUserParams(result[0]);
          this.sessionsData = result;
          //console.log(this.sessionsData);
        });
      }
    },

    getUserParams(dataToGet) {
      this.$emit('updateUserParams', {
        login: dataToGet.username,
        password: dataToGet.password
      });
    }

  }

};
</script>

<template>
  <div v-if="bookmarkIsActive" class="d-block">
    <div class="elz d-table w100p pH16 pB16">

      <table class="elz elzTable w100p mT16 va-M fn-9 lh-12 r3 bsh-default1 uStrip stripLD borNoneIn nowrap   bg bg-primary bgL5">
        <thead class="elz tbody pad p8 pV10 p-sticky p-T z1 bor borB2 br br-primary brL-5 brFD brLF20">
        <tr class="tr">
          <td class="td">
            <div class="elz d-block bold">Внешний идентификатор</div>
          </td>
          <td class="td">
            <div class="elz d-block bold">Тип сессии</div>
          </td>
          <td class="td">
            <div class="elz d-block bold">Начата</div>
          </td>
          <td class="td">
            <div class="elz d-block bold">Завершена</div>
          </td>
          <td class="td">
            <div class="elz d-block bold">Состояние</div>
          </td>
          <td class="td">
            <div class="elz d-block bold">Абонентское оборудование</div>
          </td>
          <td class="td">
            <div class="elz d-block bold">Операторское оборудование</div>
          </td>
          <!--<td class="td">
            <div class="elz d-block bold">Абонентский профиль</div>
          </td>-->
          <td class="td">
            <div class="elz d-block bold">Операторский профиль</div>
          </td>
          <!--<td class="td">
            <div class="elz d-block bold">Сервисный абонентский профиль</div>
          </td>-->
          <td class="td">
            <div class="elz d-block bold">Последнее обновления</div>
          </td>
          <td class="td">
            <div class="elz d-block bold">Последняя загрузка</div>
          </td>
          <td class="td">
            <div class="elz d-block bold">Источник</div>
          </td>
          <td class="td">
            <div class="elz d-block bold">Идентификатор сеанса загрузки</div>
          </td>
          <td class="td">
            <div class="elz d-block bold">Причина завершения</div>
          </td>



          <td class="td">
            <div class="elz d-block bold">User-Name</div>
          </td>
          <td class="td">
            <div class="elz d-block bold">User-Password</div>
          </td>
          <td class="td">
            <div class="elz d-block bold">Speed-Download-Bps</div>
          </td>
          <td class="td">
            <div class="elz d-block bold">Speed-Upload-Bps</div>
          </td>
          <td class="td">
            <div class="elz d-block bold">Service-State</div>
          </td>
          <td class="td">
            <div class="elz d-block bold">Auth-Scheme</div>
          </td>


          <td class="td">
            <div class="elz d-block bold">Acct-Multi-Session-Id</div>
          </td>
          <td class="td">
            <div class="elz d-block bold">Calling-Station-Id</div>
          </td>
          <td class="td">
            <div class="elz d-block bold">Framed-Ip-Address</div>
          </td>
          <td class="td">
            <div class="elz d-block bold">Frames-User</div>
          </td>
          <td class="td">
            <div class="elz d-block bold">NAS-IP-Address</div>
          </td>
          <td class="td">
            <div class="elz d-block bold">NAS-Identifier</div>
          </td>
          <td class="td">
            <div class="elz d-block bold">NAS-Port-Id</div>
          </td>
          <td class="td">
            <div class="elz d-block bold">NAS-Type</div>
          </td>
          <td class="td">
            <div class="elz d-block bold">Packet-Src-IP-Address</div>
          </td>
          <!--<td class="td">
            <div class="elz d-block bold">User-Name</div>
          </td>-->
        </tr>
        </thead>
        <tbody class="elz tbody pad p8 stripOdd stripHover">
        <tr v-for="(sessionItem, index) in sessionsData" class="tr">
          <td class="td">
            <div class="elz d-block">{{ sessionItem.externalIDString }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">{{ sessionItem.sessionTypeString }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">{{ sessionItem.sessionStartDateTime }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">{{ sessionItem.sessionFinishDateTime }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">{{ sessionItem.sessionStatusName }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">{{ sessionItem.customerEquipmentName }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">{{ sessionItem.providerEquipmentName }}</div>
          </td>
          <!--<td class="td">
            <div class="elz d-block">???</div>
          </td>-->
          <td class="td">
            <div class="elz d-block">{{ sessionItem.providerProfileId }}</div>
          </td>
          <!--<td class="td">
            <div class="elz d-block">???</div>
          </td>-->
          <td class="td">
            <div class="elz d-block">{{ sessionItem.sessionLastUpdateDateTime }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">{{ sessionItem.sessionLastLoadDateTime }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">{{ sessionItem.sourceName }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">{{ sessionItem.loadSeanceIdString }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">{{ sessionItem.terminationReasonName }}</div>
          </td>


          <td class="td">
            <div class="elz d-block">{{ sessionItem.username }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">{{ sessionItem.password }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">{{ sessionItem.speedDownload }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">{{ sessionItem.speedUpload }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">{{ sessionItem.serviceState }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">{{ sessionItem.authScheme }}</div>
          </td>


          <td class="td">
            <div class="elz d-block">{{ sessionItem.multiSessionIdString }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">{{ sessionItem.callingStationIdString }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">{{ sessionItem.framedIPAddressString }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">{{ sessionItem.framedUser }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">{{ sessionItem.nasIPAddressString }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">{{ sessionItem.nasIdString }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">{{ sessionItem.nasPortIdString }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">{{ sessionItem.sessionNasTypeString }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">{{ sessionItem.packetSrcIPAddrString }}</div>
          </td>
          <!--<td class="td">
            <div class="elz d-block">{{ sessionItem.userName }}</div>
          </td>-->
        </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>
