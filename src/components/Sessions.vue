<script>
import { ref } from "vue";
import { requestSessionsData } from "@/requests/api";
import { dayTimeFullFormat } from "@/helpers/helpers";

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

          let sortedData = result;

          this.getUserParams(sortedData.slice(-1).pop());

          sortedData.forEach(session => {
              session.D_START     = dayTimeFullFormat(new Date(session.D_START));
              session.D_FINISH    = dayTimeFullFormat(new Date(session.D_FINISH));
              session.D_LAST_UPD  = dayTimeFullFormat(new Date(session.D_LAST_UPD));
              session.D_LAST_LOAD = dayTimeFullFormat(new Date(session.D_LAST_LOAD));

              session.username =      session.PROFILE_ATTR.find(el => el.N_ATTRIBUTE_ID === 80601).VC_VALUE;
              session.password =      session.PROFILE_ATTR.find(el => el.N_ATTRIBUTE_ID === 80701).VC_VALUE;
              session.speedDownload = session.PROFILE_ATTR.find(el => el.N_ATTRIBUTE_ID === 180101).VC_VALUE;
              session.speedUpload =   session.PROFILE_ATTR.find(el => el.N_ATTRIBUTE_ID === 180201).VC_VALUE;
              session.serviceState =  session.PROFILE_ATTR.find(el => el.N_ATTRIBUTE_ID === 80801).VC_VALUE;
              session.authScheme =    session.PROFILE_ATTR.find(el => el.N_ATTRIBUTE_ID === 180301).VC_VALUE;

              session.multiSessionId   = session.T_ATTRIBUTES.find(el => el.VC_KEY === 'Acct-Multi-Session-Id').VC_VALUE;
              session.callingStationId = session.T_ATTRIBUTES.find(el => el.VC_KEY === 'Calling-Station-Id').VC_VALUE;
              session.framedIPAddress  = session.T_ATTRIBUTES.find(el => el.VC_KEY === 'Framed-IP-Address').VC_VALUE;
              session.framedUser       = session.T_ATTRIBUTES.find(el => el.VC_KEY === 'Framed-User').VC_VALUE;
              session.nasIPAddress     = session.T_ATTRIBUTES.find(el => el.VC_KEY === 'NAS-IP-Address').VC_VALUE;
              session.nasIdentifier    = session.T_ATTRIBUTES.find(el => el.VC_KEY === 'NAS-Identifier').VC_VALUE;
              session.nasPortId        = session.T_ATTRIBUTES.find(el => el.VC_KEY === 'NAS-Port-Id').VC_VALUE;
              session.packetSrcIPAddr  = session.T_ATTRIBUTES.find(el => el.VC_KEY === 'Packet-Src-IP-Address').VC_VALUE;
              session.userName         = session.T_ATTRIBUTES.find(el => el.VC_KEY === 'User-Name').VC_VALUE;
          });

          this.sessionsData = sortedData;
          console.log(this.sessionsData);
        });
      }
    },

    getUserParams(dataToGet) {
      this.$emit('updateUserParams', {
        login: dataToGet.PROFILE_ATTR.find(el => el.N_ATTRIBUTE_ID == 80601).VC_VALUE,
        password: dataToGet.PROFILE_ATTR.find(el => el.N_ATTRIBUTE_ID == 80701).VC_VALUE,
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
          <!--<td class="td">
            <div class="elz d-block bold">Состояние</div>
          </td>-->
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
          <td class="td">
            <div class="elz d-block bold">User-Name</div>
          </td>
        </tr>
        </thead>
        <tbody class="elz tbody pad p8 stripOdd stripHover">
        <tr v-for="(sessionItem, index) in sessionsData" class="tr">
          <td class="td">
            <div class="elz d-block">{{ sessionItem.VC_EXT_ID }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">{{ sessionItem.VC_TYPE_NAME }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">{{ sessionItem.D_START }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">{{ sessionItem.D_FINISH }}</div>
          </td>
          <!--<td class="td">
            <div class="elz d-block">???</div>
          </td>-->
          <td class="td">
            <div class="elz d-block">{{ sessionItem.VC_CUSTOMER_EQUIPMENT }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">???</div>
          </td>
          <!--<td class="td">
            <div class="elz d-block">???</div>
          </td>-->
          <td class="td">
            <div class="elz d-block">???</div>
          </td>
          <!--<td class="td">
            <div class="elz d-block">???</div>
          </td>-->
          <td class="td">
            <div class="elz d-block">{{ sessionItem.D_LAST_UPD }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">{{ sessionItem.D_LAST_LOAD }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">{{ sessionItem.VC_SRC_APP }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">{{ sessionItem.VC_LOAD_SEANCE_ID }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">{{ sessionItem.VC_TERMINATION_CODE }}</div>
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
            <div class="elz d-block">{{ sessionItem.multiSessionId }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">{{ sessionItem.callingStationId }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">{{ sessionItem.framedIPAddress }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">{{ sessionItem.framedUser }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">{{ sessionItem.nasIPAddress }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">{{ sessionItem.nasIdentifier }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">{{ sessionItem.nasPortId }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">???</div>
          </td>
          <td class="td">
            <div class="elz d-block">{{ sessionItem.packetSrcIPAddr }}</div>
          </td>
          <td class="td">
            <div class="elz d-block">{{ sessionItem.userName }}</div>
          </td>
        </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>
