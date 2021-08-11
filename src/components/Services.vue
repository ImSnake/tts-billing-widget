<script>
import { ref } from "vue";
import { requestServicesData } from "@/requests/api";
//import { getWordEnding } from "@/helpers/helpers";

export default {
  name: "Services",
  props: {
    ttsId: {
      type: [String, Number],
      required: true
    },
    userParams: {
      type: Object,
      required: true
    }
  },

  setup() {
    const bookmarkIsActive = ref(true);
    return { bookmarkIsActive };
  },

  data() {
    return {
      servicesData: {},
    }
  },

  created() {
    this.getServicesData();
  },

  methods: {

    toggleTableWrapper(refName) {
      this.$refs[refName].classList.toggle('sel');
    },

    getServicesData() {
      if (this.ttsId) {

        const hydraResponse = requestServicesData(this.ttsId);

        hydraResponse.then((result) => {

          let sortedData = result;

          const currentDate = new Date().toISOString().split('T')[0];

          sortedData.forEach(contract => {

            let summary = 0;

            contract.services.forEach(service => {
              //console.log(service.dEnd >= currentDate || !service.dEnd);
              if (service.dEnd >= currentDate || !service.dEnd) {
                summary += service.price;
                service.status = 1;
              } else {
                service.status = 0;
              }

              service.dBegin = new Date(service.dBegin).toISOString().split('T')[0];
              service.dEnd = (service.dEnd) ? new Date(service.dEnd).toISOString().split('T')[0] : '-';
            });

            contract.totalCost = summary;
            //contract.totalCurrency = getWordEnding(contract.totalCost, 'Рубль', 'Рубля', 'Рублей');
            //contract.balanceCurrency = getWordEnding(contract.balance, 'Рубль', 'Рубля', 'Рублей');
            contract.services.sort((a, b) => a.status < b.status && 1 || -1);
          });

          this.servicesData = sortedData;

          //console.log(result);
          console.log(this.servicesData);
        });
      }
    },

  },

};
</script>

<template>
  <div v-if="bookmarkIsActive" class="d-block">

    <div class="elz d-table w100p pH16 pB16">

      <table v-for="contractItem in servicesData" class="elz elzTable w100p mT16 va-M fn-9 lh-12 r3 bsh-default1 uStrip stripLD borNoneIn bg bg-primary bgL5">
        <thead class="elz tbody pad p8 pV10 p-sticky p-T z1 bor borB2 br br-primary brL-5 brFD brLF20">
        <tr class="tr">
          <td class="td w1 h56">
            <div class="elz d-flex a-X s16 bor2 br br-green rCircle">
              <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-green bgBef-CC cur-help" title="Активный"
                   style="--elzMsk: url('https://lelouch.ru/uploads/icons/play.svg');"></div>
            </div>
          </td>
          <td class="td wmn200">
            <div class="elz d-block mL-8 mT-4">
              <div class="elz d-flex f-wrap">
                <div class="elz d-block mL8 mT4">Договор: <b class="bold">{{ contractItem.contract }}</b></div>
              </div>
              <div class="elz d-flex f-wrap">
                <div class="elz d-block mL8 mT4">Тип: <b class="bold">{{ contractItem.typeName }}</b></div>
                </div>
              <div class="elz d-flex f-wrap">
                <div class="elz d-block mL8 mT4">Тарифная зона: <b class="bold">{{ contractItem.zone }}</b></div>
              </div>
            </div>
          </td>
          <td class="td w180 wmn180">
            <div class="elz d-block mL-8 mT-4">
              <div class="elz d-flex f-wrap">
                <div class="elz d-block mL8 mT4 nowrap">Баланс:&nbsp;<b class="bold">{{ contractItem.balance + '&nbsp;₽' }}</b></div>
              </div>
              <div class="elz d-flex f-wrap">
                <div class="elz d-block mL8 mT4 nowrap">Лицевой счет:&nbsp;<b class="bold">{{ contractItem.account }}</b></div>
              </div>
            </div>
          </td>
          <td class="td w120 wmn120 al-right">
            <div class="elz">Абон.&nbsp;плата:&nbsp;<b class="bold">{{ contractItem.totalCost + '&nbsp;₽' }}</b></div>
          </td>
          <td class="td w120 wmn120">
            <div class="elz d-block bold">Период С</div>
          </td>
          <td class="td w120 wmn120">
            <div class="elz d-block bold">Период По</div>
          </td>
          <!--<td class="td w150 wmn150">
            <div class="elz d-block bold">Доп. соглашение</div>
          </td>-->
        </tr>
        </thead>
        <tbody class="elz tbody pad p8 stripOdd stripHover">
        <tr v-for="servicesItem in contractItem.services" class="tr">
          <td class="td">
            <div v-if="servicesItem.status === 1" class="elz d-flex a-X s16 bor2 br br-green rCircle">
              <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-green bgBef-CC cur-help" title="Услуга активна" style="--elzMsk: url('https://lelouch.ru/uploads/icons/checkmark.svg');"></div>
            </div>
            <div v-else class="elz d-flex a-X s16 bor2 br br-grey rCircle">
              <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-grey bgBef-CC cur-help" title="Услуга заблокирована" style="--elzMsk: url('https://lelouch.ru/uploads/icons/cross.svg');"></div>
            </div>
          </td>
          <td class="td">{{ servicesItem.service }}</td>
          <td class="td">{{ servicesItem.service_lock }}</td>
          <td class="td bold al-right nowrap">{{ servicesItem.price }}</td>
          <td class="td">{{ servicesItem.dBegin }}</td>
          <td class="td">{{ servicesItem.dEnd }}</td>
          <!--<td class="td">???</td>-->
        </tr>
        </tbody>
      </table>

      <table class="elz elzTable w100p mT16 va-M fn-9 lh-12 r3 bsh-default1 uStrip stripLD borNoneIn   bg bg-primary bgL5">
        <thead class="elz tbody pad p8 pV10 p-sticky p-T z1 bor borB2 br br-primary brL-5 brFD brLF20">
        <tr class="tr">
          <td class="td td w1 h56">
            <div class="elz d-flex a-X s16 bor2 br br-green rCircle">
              <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-green bgBef-CC cur-help" title="Активный" style="--elzMsk: url('https://lelouch.ru/uploads/icons/play.svg');"></div>
            </div>
          </td>
          <td class="td td wmn200">
            <div class="elz d-block mL-8 mT-4">
              <div class="elz d-flex f-wrap">
                <div class="elz d-block mL8 mT4">Login: <b class="bold">{{ userParams.login }}</b></div>
                <div class="elz d-block mL8 mT4">Password: <b class="bold">{{ userParams.password }}</b></div>
              </div>
              <div class="elz d-flex f-wrap">
                <div class="elz d-block mL8 mT4">Тип: <b class="bold">Доступ в личный кабинет</b></div>
              </div>
            </div>
          </td>
          <td class="td td w240 wmn240"></td>
          <td class="td td w240 wmn240 al-right"></td>
          <td class="td td w64 wmn64"></td>
          <!--<td class="td td w120 wmn120">
            <div class="elz d-block bold">Период С</div>
          </td>-->
          <!--<td class="td td w120 wmn120">
            <div class="elz d-block bold">Период По</div>
          </td>-->
          <td class="td td w150 wmn150"></td>
        </tr>
        </thead>
      </table>

    </div>

    <!--    <div ref="tableClosedContracts" class="d-block hideSelOut5 showSelOut5 pB16">

          <div class="elz pH16">
            <div @click="toggleTableWrapper('tableClosedContracts')" class="elz d-flex a-H p16 r3 cur-pointer fn-9 bg bg-secondary bgHovL5 fn fn-secondary-t opAct07" title="Показать завершенные контракты">
              <div class="elz d-flex a-X noShrink mR16">
                <div class="elz d-block p-rel mskBef s12 cFillBef bgBef-CC deg90 hideSelIn5" title="Активный" style="--elzMsk: url('https://lelouch.ru/uploads/icons/arrow1.svg');"></div>
                <div class="elz d-block p-rel mskBef s12 cFillBef bgBef-CC deg180 showSelIn5" title="Активный" style="--elzMsk: url('https://lelouch.ru/uploads/icons/arrow1.svg');"></div>
              </div>
              <div class="elz d-flex f-wrap grow mEA-8">
                <div class="elz d-block mEA8 bold">Показать завершенные контракты</div>
                <div class="elz d-block growZ"></div>
                <div class="elz d-block mEA8">Всего: <b class="bold">45</b></div>
              </div>
            </div>
          </div>

          <div class="elz d-table w100p pH16 showSelIn5">
            <table class="elz elzTable w100p mT16 va-M fn-9 lh-12 r3 bsh-default1 uStrip stripLD borNoneIn bg bg-primary bgL5">
              <thead class="elz tbody pad p8 pV10 p-sticky p-T z1 bor borB2 br br-primary brL-5 brFD brLF20">
              <tr class="tr">
                <td class="td td w1 h56">
                  <div class="elz d-flex a-X s16 bor2 br br-grey rCircle">
                    <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-grey bgBef-CC cur-help" title="Контракт завершен" style="&#45;&#45;elzMsk: url('https://lelouch.ru/uploads/icons/cross.svg');"></div>
                  </div>
                </td>
                <td class="td td wmn200">
                  <div class="elz d-block mL-8 mT-4">
                    <div class="elz d-flex f-wrap">
                      <div class="elz d-block bold mL8 mT4">289.КС.44/2020</div>
                    </div>
                    <div class="elz d-flex f-wrap">
                      &lt;!&ndash; <div class="elz d-block mL8 mT4">Тип: <b class="bold">Интетнет</b></div>&ndash;&gt;
                      <div class="elz d-block mL8 mT4">Тарифная зона: <b class="bold">Москва</b></div>
                    </div>
                  </div>
                </td>
                <td class="td td w240 wmn240">
                  <div class="elz d-block mL-8 mT-4">
                    <div class="elz d-flex f-wrap">
                      <div class="elz d-block mL8 mT4 nowrap">Баланс: <b class="bold">278234234234234234 руб.</b></div>
                    </div>
                    <div class="elz d-flex f-wrap">
                      <div class="elz d-block mL8 mT4 nowrap">Лицевой счет: <b class="bold">27623653657626</b></div>
                    </div>
                  </div>
                </td>
                <td class="td td w240 wmn240 al-right">
                  <div class="elz">Абон. плата: <b class="bold">64875.00</b></div>
                </td>
                <td class="td td w64 wmn64">
                  <div class="elz d-block">Рубль</div>
                </td>
                <td class="td td w120 wmn120">
                  <div class="elz d-block bold">Период С</div>
                </td>
                <td class="td td w120 wmn120">
                  <div class="elz d-block bold">Период По</div>
                </td>
                <td class="td td w150 wmn150">
                  <div class="elz d-block bold">Доп. соглашение</div>
                </td>
              </tr>
              </thead>
              <tbody class="elz tbody pad p8 stripOdd stripHover">
              <tr class="tr">
                <td class="td">
                  <div class="elz d-flex a-X s16 bor2 br br-green rCircle">
                    <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-green bgBef-CC cur-help" title="Активный" style="&#45;&#45;elzMsk: url('https://lelouch.ru/uploads/icons/cross.svg');"></div>
                  </div>
                </td>
                <td class="td">Абонентская плата</td>
                <td class="td">Блокировка отсутствует</td>
                <td class="td bold al-right nowrap">66963.4300</td>
                <td class="td">Рубль</td>
                <td class="td">2021.01.13</td>
                <td class="td">Неопределенно</td>
                <td class="td">Д/С № Н#999</td>
              </tr>
              <tr class="tr">
                <td class="td">
                  <div class="elz d-flex a-X s16 bor2 br br-primary-t rCircle">
                    <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-primary-t bgBef-CC cur-help" title="Завершенный" style="&#45;&#45;elzMsk: url('https://lelouch.ru/uploads/icons/checkmark.svg');"></div>
                  </div>
                </td>
                <td class="td">Абонентская плата</td>
                <td class="td">Блокировка отсутствует</td>
                <td class="td bold al-right nowrap">66963.4300</td>
                <td class="td">Рубль</td>
                <td class="td">2021.01.13</td>
                <td class="td">Неопределенно</td>
                <td class="td">Д/С № Н#999</td>
              </tr>
              <tr class="tr">
                <td class="td">
                  <div class="elz d-flex a-X s16 bor2 br br-primary-t rCircle">
                    <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-primary-t bgBef-CC cur-help" title="Завершенный" style="&#45;&#45;elzMsk: url('https://lelouch.ru/uploads/icons/checkmark.svg');"></div>
                  </div>
                </td>
                <td class="td">Абонентская плата</td>
                <td class="td">Блокировка отсутствует</td>
                <td class="td bold al-right nowrap">66963.4300</td>
                <td class="td">Рубль</td>
                <td class="td">2021.01.13</td>
                <td class="td">Неопределенно</td>
                <td class="td">Д/С № Н#999</td>
              </tr>
              <tr class="tr">
                <td class="td">
                  <div class="elz d-flex a-X s16 bor2 br br-primary-t rCircle">
                    <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-primary-t bgBef-CC cur-help" title="Завершенный" style="&#45;&#45;elzMsk: url('https://lelouch.ru/uploads/icons/checkmark.svg');"></div>
                  </div>
                </td>
                <td class="td">Абонентская плата</td>
                <td class="td">Блокировка отсутствует</td>
                <td class="td bold al-right nowrap">66963.4300</td>
                <td class="td">Рубль</td>
                <td class="td">2021.01.13</td>
                <td class="td">Неопределенно</td>
                <td class="td">Д/С № Н#999</td>
              </tr>
              <tr class="tr">
                <td class="td">
                  <div class="elz d-flex a-X s16 bor2 br br-red rCircle">
                    <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-red bgBef-CC cur-help" title="Завершенный" style="&#45;&#45;elzMsk: url('https://lelouch.ru/uploads/icons/cross.svg');"></div>
                  </div>
                </td>
                <td class="td">Абонентская плата</td>
                <td class="td">Блокировка отсутствует</td>
                <td class="td bold al-right nowrap">66963.4300</td>
                <td class="td">Рубль</td>
                <td class="td">2021.01.13</td>
                <td class="td">Неопределенно</td>
                <td class="td">Д/С № Н#999</td>
              </tr>
              <tr class="tr">
                <td class="td">
                  <div class="elz d-flex a-X s16 bor2 br br-green rCircle">
                    <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-green bgBef-CC cur-help" title="Завершенный" style="&#45;&#45;elzMsk: url('https://lelouch.ru/uploads/icons/play.svg');"></div>
                  </div>
                </td>
                <td class="td">Абонентская плата</td>
                <td class="td">Блокировка отсутствует</td>
                <td class="td bold al-right nowrap">66963.4300</td>
                <td class="td">Рубль</td>
                <td class="td">2021.01.13</td>
                <td class="td">Неопределенно</td>
                <td class="td">Д/С № Н#999</td>
              </tr>
              </tbody>
            </table>
            <table class="elz elzTable w100p mT16 va-M fn-9 lh-12 r3 bsh-default1 uStrip stripLD borNoneIn   bg bg-primary bgL5">
              <thead class="elz tbody pad p8 pV10 p-sticky p-T z1 bor borB2 br br-primary brL-5 brFD brLF20">
              <tr class="tr">
                <td class="td td w1 h56">
                  <div class="elz d-flex a-X s16 bor2 br br-grey rCircle">
                    <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-grey bgBef-CC cur-help" title="Контракт завершен" style="&#45;&#45;elzMsk: url('https://lelouch.ru/uploads/icons/cross.svg');"></div>
                  </div>
                </td>
                <td class="td td wmn200">
                  <div class="elz d-block mL-8 mT-4">
                    <div class="elz d-flex f-wrap">
                      <div class="elz d-block bold mL8 mT4">289.КС.44/2020</div>
                    </div>
                    <div class="elz d-flex f-wrap">
                      <div class="elz d-block mL8 mT4">Тип: <b class="bold">Интетнет</b></div>
                      <div class="elz d-block mL8 mT4">Новая тарифная зона: <b class="bold">Москва</b></div>
                    </div>
                  </div>
                </td>
                <td class="td td w240 wmn240">
                  <div class="elz d-block mL-8 mT-4">
                    <div class="elz d-flex f-wrap">
                      <div class="elz d-block mL8 mT4 nowrap">Баланс: <b class="bold">278234234234234234 руб.</b></div>
                    </div>
                    <div class="elz d-flex f-wrap">
                      <div class="elz d-block mL8 mT4 nowrap">Лицевой счет: <b class="bold">27623653657626</b></div>
                    </div>
                  </div>
                </td>
                <td class="td td w240 wmn240 al-right">
                  <div class="elz">Абон. плата: <b class="bold">64875.00</b></div>
                </td>
                <td class="td td w64 wmn64">
                  <div class="elz d-block">Рубль</div>
                </td>
                <td class="td td w120 wmn120">
                  <div class="elz d-block bold">Период С</div>
                </td>
                <td class="td td w120 wmn120">
                  <div class="elz d-block bold">Период По</div>
                </td>
                <td class="td td w150 wmn150">
                  <div class="elz d-block bold">Доп. соглашение</div>
                </td>
              </tr>
              </thead>
              <tbody class="elz tbody pad p8 stripOdd stripHover">
              <tr class="tr">
                <td class="td">
                  <div class="elz d-flex a-X s16 bor2 br br-green rCircle">
                    <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-green bgBef-CC cur-help" title="Активный" style="&#45;&#45;elzMsk: url('https://lelouch.ru/uploads/icons/cross.svg');"></div>
                  </div>
                </td>
                <td class="td">Абонентская плата</td>
                <td class="td">Блокировка отсутствует</td>
                <td class="td bold al-right nowrap">66963.4300</td>
                <td class="td">Рубль</td>
                <td class="td">2021.01.13</td>
                <td class="td">Неопределенно</td>
                <td class="td">Д/С № Н#999</td>
              </tr>
              <tr class="tr">
                <td class="td">
                  <div class="elz d-flex a-X s16 bor2 br br-primary-t rCircle">
                    <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-primary-t bgBef-CC cur-help" title="Завершенный" style="&#45;&#45;elzMsk: url('https://lelouch.ru/uploads/icons/checkmark.svg');"></div>
                  </div>
                </td>
                <td class="td">Абонентская плата</td>
                <td class="td">Блокировка отсутствует</td>
                <td class="td bold al-right nowrap">66963.4300</td>
                <td class="td">Рубль</td>
                <td class="td">2021.01.13</td>
                <td class="td">Неопределенно</td>
                <td class="td">Д/С № Н#999</td>
              </tr>
              <tr class="tr">
                <td class="td">
                  <div class="elz d-flex a-X s16 bor2 br br-primary-t rCircle">
                    <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-primary-t bgBef-CC cur-help" title="Завершенный" style="&#45;&#45;elzMsk: url('https://lelouch.ru/uploads/icons/checkmark.svg');"></div>
                  </div>
                </td>
                <td class="td">Абонентская плата</td>
                <td class="td">Блокировка отсутствует</td>
                <td class="td bold al-right nowrap">66963.4300</td>
                <td class="td">Рубль</td>
                <td class="td">2021.01.13</td>
                <td class="td">Неопределенно</td>
                <td class="td">Д/С № Н#999</td>
              </tr>
              <tr class="tr">
                <td class="td">
                  <div class="elz d-flex a-X s16 bor2 br br-primary-t rCircle">
                    <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-primary-t bgBef-CC cur-help" title="Завершенный" style="&#45;&#45;elzMsk: url('https://lelouch.ru/uploads/icons/checkmark.svg');"></div>
                  </div>
                </td>
                <td class="td">Абонентская плата</td>
                <td class="td">Блокировка отсутствует</td>
                <td class="td bold al-right nowrap">66963.4300</td>
                <td class="td">Рубль</td>
                <td class="td">2021.01.13</td>
                <td class="td">Неопределенно</td>
                <td class="td">Д/С № Н#999</td>
              </tr>
              <tr class="tr">
                <td class="td">
                  <div class="elz d-flex a-X s16 bor2 br br-red rCircle">
                    <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-red bgBef-CC cur-help" title="Завершенный" style="&#45;&#45;elzMsk: url('https://lelouch.ru/uploads/icons/cross.svg');"></div>
                  </div>
                </td>
                <td class="td">Абонентская плата</td>
                <td class="td">Блокировка отсутствует</td>
                <td class="td bold al-right nowrap">66963.4300</td>
                <td class="td">Рубль</td>
                <td class="td">2021.01.13</td>
                <td class="td">Неопределенно</td>
                <td class="td">Д/С № Н#999</td>
              </tr>
              <tr class="tr">
                <td class="td">
                  <div class="elz d-flex a-X s16 bor2 br br-green rCircle">
                    <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-green bgBef-CC cur-help" title="Завершенный" style="&#45;&#45;elzMsk: url('https://lelouch.ru/uploads/icons/play.svg');"></div>
                  </div>
                </td>
                <td class="td">Абонентская плата</td>
                <td class="td">Блокировка отсутствует</td>
                <td class="td bold al-right nowrap">66963.4300</td>
                <td class="td">Рубль</td>
                <td class="td">2021.01.13</td>
                <td class="td">Неопределенно</td>
                <td class="td">Д/С № Н#999</td>
              </tr>
              </tbody>
            </table>
          </div>

    </div>-->
  </div>
</template>
