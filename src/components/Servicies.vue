<script>
import { ref } from "vue";

export default {
  name: "Services",
  props: {
    servicesData: { type: Object, required: true },
  },
  setup() {
    const bookmarkIsActive = ref(true);
    return { bookmarkIsActive };
  },

  mounted() {},

};
</script>

<template>
  <div v-if="bookmarkIsActive" class="d-block">

    <div class="elz d-table w100p pH16 pB16">

      <table v-for="contractItem in servicesData" class="elz elzTable w100p mT16 va-M fn-9 lh-12 r3 bsh-default1
       uStripInner stripLD borNoneInner bg bg-primary bgL5 stripSelInnerCol4">
        <thead class="elz pad p8 pV10 p-sticky p-T z1 bor borB2 br br-primary brL-5 brFD brLF20">
        <tr>
          <td class="w1 h56">
            <div class="elz d-flex a-X s16 bor2 br br-green rCircle">
              <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-green bgBef-CC cur-help" title="Активный"
                   style="--elzMsk: url('https://lelouch.ru/uploads/icons/play.svg');"></div>
            </div>
          </td>
          <td class="wmn200">
            <div class="elz d-block mL-8 mT-4">
              <div class="elz d-flex f-wrap">
                <div class="elz d-block bold mL8 mT4">{{ contractItem.CONTRACT }}</div>
              </div>
              <div class="elz d-flex f-wrap">
                <div class="elz d-block mL8 mT4">Тип: <b class="bold">???</b></div>
                <div class="elz d-block mL8 mT4">Новая тарифная зона: <b class="bold">???</b></div>
              </div>
            </div>
          </td>
          <td class="w240 wmn240">
            <div class="elz d-block mL-8 mT-4">
              <div class="elz d-flex f-wrap">
                <div class="elz d-block mL8 mT4 nowrap">Баланс: <b class="bold">{{ contractItem.BALANCE }}</b></div>
              </div>
              <div class="elz d-flex f-wrap">
                <div class="elz d-block mL8 mT4 nowrap">Лицевой счет: <b class="bold">{{ contractItem.ACCOUNT }}</b></div>
              </div>
            </div>
          </td>
          <td class="w240 wmn240 al-right">
            <div class="elz">Абон. плата: <b class="bold">{{ contractItem.totalCost }}</b></div>
          </td>
          <td class="w64 wmn64">
            <div class="elz d-block">Рубль</div>
          </td>
          <td class="w120 wmn120">
            <div class="elz d-block bold">Период С</div>
          </td>
          <td class="w120 wmn120">
            <div class="elz d-block bold">Период По</div>
          </td>
          <td class="w150 wmn150">
            <div class="elz d-block bold">Доп. соглашение</div>
          </td>
        </tr>
        </thead>
        <tbody class="elz pad p8 stripOdd stripHover">
        <tr v-for="servicesItem in contractItem.services">
          <td>
            <div class="elz d-flex a-X s16 bor2 br br-green rCircle">
              <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-green bgBef-CC cur-help" title="Активный" style="--elzMsk: url('https://lelouch.ru/uploads/icons/cross.svg');"></div>
            </div>
          </td>
          <td>{{ servicesItem.SERVICE }}</td>
          <td>{{ servicesItem.SERVICE_LOCK }}</td>
          <td class="bold al-right nowrap">{{ servicesItem.PRICE }}</td>
          <td>Рубль</td>
          <td>{{ servicesItem.D_BEGIN }}</td>
          <td>{{ servicesItem.D_END }}</td>
          <td>???</td>
        </tr>
        </tbody>
      </table>

<!--      <table class="elz elzTable w100p mT16 va-M fn-9 lh-12 r3 bsh-default1 uStripInner stripLD borNoneInner   bg bg-primary bgL5    stripSelInnerCol4">
        <thead class="elz pad p8 pV10 p-sticky p-T z1 bor borB2 br br-primary brL-5 brFD brLF20">
        <tr>
          <td class="w1 h56">
            <div class="elz d-flex a-X s16 bor2 br br-green rCircle">
              <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-green bgBef-CC cur-help" title="Активный" style="&#45;&#45;elzMsk: url('https://lelouch.ru/uploads/icons/play.svg');"></div>
            </div>
          </td>
          <td class="wmn200">
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
          <td class="w240 wmn240">
            <div class="elz d-block mL-8 mT-4">
              <div class="elz d-flex f-wrap">
                <div class="elz d-block mL8 mT4 nowrap">Баланс: <b class="bold">2782 руб.</b></div>
              </div>
              <div class="elz d-flex f-wrap">
                <div class="elz d-block mL8 mT4 nowrap">Лицевой счет: <b class="bold">27623653657626</b></div>
              </div>
            </div>
          </td>
          <td class="w240 wmn240 al-right">
            <div class="elz">Абон. плата: <b class="bold">64875.00</b></div>
          </td>
          <td class="w64 wmn64">
            <div class="elz d-block">Рубль</div>
          </td>
          <td class="w120 wmn120">
            <div class="elz d-block bold">Период С</div>
          </td>
          <td class="w120 wmn120">
            <div class="elz d-block bold">Период По</div>
          </td>
          <td class="w150 wmn150">
            <div class="elz d-block bold">Доп. соглашение</div>
          </td>
        </tr>
        </thead>
        <tbody class="elz pad p8 stripOdd stripHover">
        <tr>
          <td>
            <div class="elz d-flex a-X s16 bor2 br br-green rCircle">
              <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-green bgBef-CC cur-help" title="Активный" style="&#45;&#45;elzMsk: url('https://lelouch.ru/uploads/icons/cross.svg');"></div>
            </div>
          </td>
          <td>Абонентская плата</td>
          <td>Блокировка отсутствует</td>
          <td class="bold al-right nowrap">66963.4300</td>
          <td>Рубль</td>
          <td>2021.01.13</td>
          <td>Неопределенно</td>
          <td>Д/С № Н#999</td>
        </tr>
        <tr>
          <td>
            <div class="elz d-flex a-X s16 bor2 br br-primary-t rCircle">
              <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-primary-t bgBef-CC cur-help" title="Завершенный" style="&#45;&#45;elzMsk: url('https://lelouch.ru/uploads/icons/checkmark.svg');"></div>
            </div>
          </td>
          <td>Абонентская плата</td>
          <td>Блокировка отсутствует</td>
          <td class="bold al-right nowrap">66963.4300</td>
          <td>Рубль</td>
          <td>2021.01.13</td>
          <td>Неопределенно</td>
          <td>Д/С № Н#999</td>
        </tr>
        <tr>
          <td>
            <div class="elz d-flex a-X s16 bor2 br br-primary-t rCircle">
              <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-primary-t bgBef-CC cur-help" title="Завершенный" style="&#45;&#45;elzMsk: url('https://lelouch.ru/uploads/icons/checkmark.svg');"></div>
            </div>
          </td>
          <td>Абонентская плата</td>
          <td>Блокировка отсутствует</td>
          <td class="bold al-right nowrap">66963.4300</td>
          <td>Рубль</td>
          <td>2021.01.13</td>
          <td>Неопределенно</td>
          <td>Д/С № Н#999</td>
        </tr>
        <tr>
          <td>
            <div class="elz d-flex a-X s16 bor2 br br-primary-t rCircle">
              <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-primary-t bgBef-CC cur-help" title="Завершенный" style="&#45;&#45;elzMsk: url('https://lelouch.ru/uploads/icons/checkmark.svg');"></div>
            </div>
          </td>
          <td>Абонентская плата</td>
          <td>Блокировка отсутствует</td>
          <td class="bold al-right nowrap">66963.4300</td>
          <td>Рубль</td>
          <td>2021.01.13</td>
          <td>Неопределенно</td>
          <td>Д/С № Н#999</td>
        </tr>
        <tr>
          <td>
            <div class="elz d-flex a-X s16 bor2 br br-red rCircle">
              <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-red bgBef-CC cur-help" title="Завершенный" style="&#45;&#45;elzMsk: url('https://lelouch.ru/uploads/icons/cross.svg');"></div>
            </div>
          </td>
          <td>Абонентская плата</td>
          <td>Блокировка отсутствует</td>
          <td class="bold al-right nowrap">66963.4300</td>
          <td>Рубль</td>
          <td>2021.01.13</td>
          <td>Неопределенно</td>
          <td>Д/С № Н#999</td>
        </tr>
        <tr>
          <td>
            <div class="elz d-flex a-X s16 bor2 br br-green rCircle">
              <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-green bgBef-CC cur-help" title="Завершенный" style="&#45;&#45;elzMsk: url('https://lelouch.ru/uploads/icons/play.svg');"></div>
            </div>
          </td>
          <td>Абонентская плата</td>
          <td>Блокировка отсутствует</td>
          <td class="bold al-right nowrap">66963.4300</td>
          <td>Рубль</td>
          <td>2021.01.13</td>
          <td>Неопределенно</td>
          <td>Д/С № Н#999</td>
        </tr>




        </tbody>
      </table>-->

<!--      <table class="elz elzTable w100p mT16 va-M fn-9 lh-12 r3 bsh-default1 uStripInner stripLD borNoneInner   bg bg-primary bgL5    stripSelInnerCol4">
        <thead class="elz pad p8 pV10 p-sticky p-T z1 bor borB2 br br-primary brL-5 brFD brLF20">
        <tr>
          <td class="w1 h56">
            <div class="elz d-flex a-X s16 bor2 br br-green rCircle">
              <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-green bgBef-CC cur-help" title="Активный" style="&#45;&#45;elzMsk: url('https://lelouch.ru/uploads/icons/play.svg');"></div>
            </div>
          </td>
          <td class="wmn200">
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
          <td class="w240 wmn240">
            <div class="elz d-block mL-8 mT-4">
              <div class="elz d-flex f-wrap">
                <div class="elz d-block mL8 mT4 nowrap">Баланс: <b class="bold">2782 руб.</b></div>
              </div>
              <div class="elz d-flex f-wrap">
                <div class="elz d-block mL8 mT4 nowrap">Лицевой счет: <b class="bold">27623653657626</b></div>
              </div>
            </div>
          </td>
          <td class="w240 wmn240 al-right">
            <div class="elz">Абон. плата: <b class="bold">64875.00</b></div>
          </td>
          <td class="w64 wmn64">
            <div class="elz d-block">Рубль</div>
          </td>
          <td class="w120 wmn120">
            <div class="elz d-block bold">Период С</div>
          </td>
          <td class="w120 wmn120">
            <div class="elz d-block bold">Период По</div>
          </td>
          <td class="w150 wmn150">
            <div class="elz d-block bold">Доп. соглашение</div>
          </td>
        </tr>
        </thead>
      </table>-->

    </div>

  </div>
</template>
