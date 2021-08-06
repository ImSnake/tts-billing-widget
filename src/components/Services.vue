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

  methods: {
    toggleTableWrapper(refName) {
      this.$refs[refName].classList.toggle('sel');
    }

  },

};
</script>

<template>
  <div v-if="bookmarkIsActive" class="d-block">

    <div class="elz d-table w100p pH16 pB16">

      <table v-for="contractItem in servicesData" class="elz elzTable w100p mT16 va-M fn-9 lh-12 r3 bsh-default1
       uStrip stripLD borNoneIn bg bg-primary bgL5 stripSelCol4">
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
                <div class="elz d-block bold mL8 mT4">{{ contractItem.CONTRACT }}</div>
              </div>
              <div class="elz d-flex f-wrap">
                <div class="elz d-block mL8 mT4">Тип: <b class="bold">???</b></div>
                <div class="elz d-block mL8 mT4">Новая тарифная зона: <b class="bold">???</b></div>
              </div>
            </div>
          </td>
          <td class="td w240 wmn240">
            <div class="elz d-block mL-8 mT-4">
              <div class="elz d-flex f-wrap">
                <div class="elz d-block mL8 mT4 nowrap">Баланс: <b class="bold">{{ contractItem.BALANCE }}</b></div>
              </div>
              <div class="elz d-flex f-wrap">
                <div class="elz d-block mL8 mT4 nowrap">Лицевой счет: <b class="bold">{{ contractItem.ACCOUNT }}</b></div>
              </div>
            </div>
          </td>
          <td class="td w240 wmn240 al-right">
            <div class="elz">Абон. плата: <b class="bold">{{ contractItem.totalCost }}</b></div>
          </td>
          <td class="td w64 wmn64">
            <div class="elz d-block">Рубль</div>
          </td>
          <td class="td w120 wmn120">
            <div class="elz d-block bold">Период С</div>
          </td>
          <td class="td w120 wmn120">
            <div class="elz d-block bold">Период По</div>
          </td>
          <td class="td w150 wmn150">
            <div class="elz d-block bold">Доп. соглашение</div>
          </td>
        </tr>
        </thead>
        <tbody class="elz tbody pad p8 stripOdd stripHover">
        <tr v-for="servicesItem in contractItem.services" class="tr">
          <td class="td">
            <div class="elz d-flex a-X s16 bor2 br br-green rCircle">
              <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-green bgBef-CC cur-help" title="Активный" style="--elzMsk: url('https://lelouch.ru/uploads/icons/cross.svg');"></div>
            </div>
          </td>
          <td class="td">{{ servicesItem.SERVICE }}</td>
          <td class="td">{{ servicesItem.SERVICE_LOCK }}</td>
          <td class="td bold al-right nowrap">{{ servicesItem.PRICE }}</td>
          <td class="td">Рубль</td>
          <td class="td">{{ servicesItem.D_BEGIN }}</td>
          <td class="td">{{ servicesItem.D_END }}</td>
          <td class="td">???</td>
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
                <div class="elz d-block mL8 mT4">Login: <b class="bold">lk0047162</b></div>
                <div class="elz d-block mL8 mT4">Password: <b class="bold">2D152E4E</b></div>
              </div>
              <div class="elz d-flex f-wrap">
                <div class="elz d-block mL8 mT4">Тип: <b class="bold">Доступ в личный кабинет</b></div>
              </div>
            </div>
          </td>
          <td class="td td w240 wmn240"></td>
          <td class="td td w240 wmn240 al-right"></td>
          <td class="td td w64 wmn64"></td>
          <td class="td td w120 wmn120">
            <div class="elz d-block bold">Период С</div>
          </td>
          <td class="td td w120 wmn120">
            <div class="elz d-block bold">Период По</div>
          </td>
          <td class="td td w150 wmn150"></td>
        </tr>
        </thead>
      </table>

    </div>

    <div ref="tableClosedContracts" class="d-block hideSelOut5 showSelOut5 pB16"><!--СЮДА ДОБАВИТЬ КЛАСС sel ЧТОБЫ ОНО ОТКРЫВАЛОСЬ, И УБРАТЬ, ЧТОБЫ ЗАКРЫВАЛОСЬ -->

      <div class="elz pH16">
        <div @click="toggleTableWrapper('tableClosedContracts')" class="elz d-flex a-H p16 r3 cur-pointer fn-9 bg bg-secondary bgHovL5 fn fn-secondary-t opAct07" title="Показать завершенные контракты">
          <div class="elz d-flex a-X noShrink mR16">
            <div class="elz d-block p-rel mskBef s12 cFillBef bgBef-CC deg90 hideSelIn5" title="Активный" style="--elzMsk: url('https://lelouch.ru/uploads/icons/arrow1.svg');"></div>
            <div class="elz d-block p-rel mskBef s12 cFillBef bgBef-CC deg180 showSelIn5" title="Активный" style="--elzMsk: url('https://lelouch.ru/uploads/icons/arrow1.svg');"></div>
          </div>
          <div class="elz d-flex f-wrap grow mEA-8">
            <div class="elz d-block mEA8 bold">Показать незавершенные контракты</div>
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
              <div class="elz d-flex a-X s16 bor2 br br-green rCircle">
                <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-green bgBef-CC cur-help" title="Активный" style="--elzMsk: url('https://lelouch.ru/uploads/icons/play.svg');"></div>
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
                <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-green bgBef-CC cur-help" title="Активный" style="--elzMsk: url('https://lelouch.ru/uploads/icons/cross.svg');"></div>
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
                <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-primary-t bgBef-CC cur-help" title="Завершенный" style="--elzMsk: url('https://lelouch.ru/uploads/icons/checkmark.svg');"></div>
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
                <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-primary-t bgBef-CC cur-help" title="Завершенный" style="--elzMsk: url('https://lelouch.ru/uploads/icons/checkmark.svg');"></div>
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
                <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-primary-t bgBef-CC cur-help" title="Завершенный" style="--elzMsk: url('https://lelouch.ru/uploads/icons/checkmark.svg');"></div>
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
                <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-red bgBef-CC cur-help" title="Завершенный" style="--elzMsk: url('https://lelouch.ru/uploads/icons/cross.svg');"></div>
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
                <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-green bgBef-CC cur-help" title="Завершенный" style="--elzMsk: url('https://lelouch.ru/uploads/icons/play.svg');"></div>
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
              <div class="elz d-flex a-X s16 bor2 br br-green rCircle">
                <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-green bgBef-CC cur-help" title="Активный" style="--elzMsk: url('https://lelouch.ru/uploads/icons/play.svg');"></div>
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
                <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-green bgBef-CC cur-help" title="Активный" style="--elzMsk: url('https://lelouch.ru/uploads/icons/cross.svg');"></div>
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
                <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-primary-t bgBef-CC cur-help" title="Завершенный" style="--elzMsk: url('https://lelouch.ru/uploads/icons/checkmark.svg');"></div>
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
                <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-primary-t bgBef-CC cur-help" title="Завершенный" style="--elzMsk: url('https://lelouch.ru/uploads/icons/checkmark.svg');"></div>
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
                <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-primary-t bgBef-CC cur-help" title="Завершенный" style="--elzMsk: url('https://lelouch.ru/uploads/icons/checkmark.svg');"></div>
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
                <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-red bgBef-CC cur-help" title="Завершенный" style="--elzMsk: url('https://lelouch.ru/uploads/icons/cross.svg');"></div>
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
                <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-green bgBef-CC cur-help" title="Завершенный" style="--elzMsk: url('https://lelouch.ru/uploads/icons/play.svg');"></div>
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

    </div>
  </div>
</template>
