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
  mounted() {
    console.log('Bookmark services is mounted');
  },
};
</script>

<template>
  <div v-if="bookmarkIsActive" class="d-block">
    <div class="elz d-table w100p pH16 pB16">
      <table
          class="elz elzTable w100p mT16 va-M fn-9 lh-12 r3 bsh-default1 uStripInner stripLD borNoneInner   bg bg-primary bgL5    stripSelInnerCol4">
        <thead class="elz pad p8 pV10 p-sticky p-T z1 bor borB2 br br-primary brL-5 brFD brLF20">
        <tr>
          <td class="w1 h56">
            <div class="elz d-flex a-X s16 bor2 br br-green rCircle">
              <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-green bgBef-CC cur-help" title="Активный"
                   style="--elzMsk: url('/images/icons/play.svg');"></div>
<!--              url('http://tts.naukanet.ru/uploads/icons/play.svg')-->
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
            <div class="elz">Абон. плата: <b class="bold">64875.00</b></div>
          </td>
          <td class="w64 wmn64">
            <div class="elz d-block">Рубль</div>
          </td>
          <td class="w100 wmn100">
            <div class="elz d-block bold">Период С</div>
          </td>
          <td class="w100 wmn100">
            <div class="elz d-block bold">Период По</div>
          </td>
          <td class="w120 wmn120">
            <div class="elz d-block bold">Доп. соглашение</div>
          </td>
          <td class="w160 wmn160">
            <div class="elz d-block bold">Блокировка</div>
          </td>
          <td class="w100 wmn100">
            <div class="elz d-block bold">Лицевой счет</div>
          </td>
          <td class="w100 wmn100">
            <div class="elz d-block bold">Баланс</div>
          </td>
        </tr>
        </thead>
        <tbody class="elz pad p8 stripOdd stripHover">
        <tr>
          <td>
            <div class="elz d-flex a-X s16 bor2 br br-green rCircle">
              <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-green bgBef-CC cur-help" title="Активный"
                   style="--elzMsk: url('/images/icons/cross.svg');"></div>
<!--              url('http://tts.naukanet.ru/uploads/icons/cross.svg')-->
            </div>
          </td>
          <td>Абонентская плата</td>
          <td class="bold">66963.4300</td>
          <td>Рубль</td>
          <td>2021.01.13</td>
          <td>Неопределенно</td>
          <td>Д/С № Н#999</td>
          <td>Блокировка отсутствует</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <div class="elz d-flex a-X s16 bor2 br br-primary-t rCircle">
              <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-primary-t bgBef-CC cur-help" title="Завершенный"
                   style="--elzMsk: url('/images/icons/checkmark.svg');"></div>
<!--              url('http://tts.naukanet.ru/uploads/icons/checkmark.svg')-->
            </div>
          </td>
          <td>Абонентская плата</td>
          <td class="bold">66963.4300</td>
          <td>Рубль</td>
          <td>2021.01.13</td>
          <td>Неопределенно</td>
          <td>Д/С № Н#999</td>
          <td>Блокировка отсутствует</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <div class="elz d-flex a-X s16 bor2 br br-primary-t rCircle">
              <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-primary-t bgBef-CC cur-help" title="Завершенный"
                   style="--elzMsk: url('/images/icons/checkmark.svg');"></div>
<!--              url('http://tts.naukanet.ru/uploads/icons/checkmark.svg')-->
            </div>
          </td>
          <td>Абонентская плата</td>
          <td class="bold">66963.4300</td>
          <td>Рубль</td>
          <td>2021.01.13</td>
          <td>Неопределенно</td>
          <td>Д/С № Н#999</td>
          <td>Блокировка отсутствует</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <div class="elz d-flex a-X s16 bor2 br br-primary-t rCircle">
              <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-primary-t bgBef-CC cur-help" title="Завершенный"
                   style="--elzMsk: url('/images/icons/checkmark.svg');"></div>
<!--              url('http://tts.naukanet.ru/uploads/icons/checkmark.svg')-->
            </div>
          </td>
          <td>Абонентская плата</td>
          <td class="bold">66963.4300</td>
          <td>Рубль</td>
          <td>2021.01.13</td>
          <td>Неопределенно</td>
          <td>Д/С № Н#999</td>
          <td>Блокировка отсутствует</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <div class="elz d-flex a-X s16 bor2 br br-red rCircle">
              <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-red bgBef-CC cur-help" title="Завершенный"
                   style="--elzMsk: url('/images/icons/cross.svg');"></div>
<!--              url('http://tts.naukanet.ru/uploads/icons/cross.svg')-->
            </div>
          </td>
          <td>Абонентская плата</td>
          <td class="bold">66963.4300</td>
          <td>Рубль</td>
          <td>2021.01.13</td>
          <td>Неопределенно</td>
          <td>Д/С № Н#999</td>
          <td>Блокировка отсутствует</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <div class="elz d-flex a-X s16 bor2 br br-green rCircle">
              <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-green bgBef-CC cur-help" title="Завершенный"
                   style="--elzMsk: url('/images/icons/play.svg');"></div>
<!--              url('http://tts.naukanet.ru/uploads/icons/play.svg')-->
            </div>
          </td>
          <td>Абонентская плата</td>
          <td class="bold">66963.4300</td>
          <td>Рубль</td>
          <td>2021.01.13</td>
          <td>Неопределенно</td>
          <td>Д/С № Н#999</td>
          <td>Блокировка отсутствует</td>
          <td></td>
          <td></td>
        </tr>
        </tbody>
      </table>

      <table
          class="elz elzTable w100p mT16 va-M fn-9 lh-12 r3 bsh-default1 uStripInner stripLD borNoneInner   bg bg-primary bgL5    stripSelInnerCol4">
        <thead class="elz pad p8 pV10 p-sticky p-T z1 bor borB2 br br-primary brL-5 brFD brLF20">
        <tr>
          <td class="w1 h56">
            <div class="elz d-flex a-X s16 bor2 br br-green rCircle">
              <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-green bgBef-CC cur-help" title="Активный"
                   style="--elzMsk: url('/images/icons/play.svg');"></div>
<!--              url('http://tts.naukanet.ru/uploads/icons/play.svg')-->
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
            <div class="elz">Абон. плата: <b class="bold">64875.00</b></div>
          </td>
          <td class="w64 wmn64">
            <div class="elz d-block">Рубль</div>
          </td>
          <td class="w100 wmn100">
            <div class="elz d-block bold">Период С</div>
          </td>
          <td class="w100 wmn100">
            <div class="elz d-block bold">Период По</div>
          </td>
          <td class="w120 wmn120">
            <div class="elz d-block bold">Доп. соглашение</div>
          </td>
          <td class="w160 wmn160">
            <div class="elz d-block bold">Блокировка</div>
          </td>
          <td class="w100 wmn100">
            <div class="elz d-block bold">Лицевой счет</div>
          </td>
          <td class="w100 wmn100">
            <div class="elz d-block bold">Баланс</div>
          </td>
        </tr>
        </thead>
        <tbody class="elz pad p8 stripOdd stripHover">
        <tr>
          <td>
            <div class="elz d-flex a-X s16 bor2 br br-green rCircle">
              <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-green bgBef-CC cur-help" title="Активный"
                   style="--elzMsk: url('/images/icons/cross.svg');"></div>
<!--              url('http://tts.naukanet.ru/uploads/icons/cross.svg')-->
            </div>
          </td>
          <td>Абонентская плата</td>
          <td class="bold">66963.4300</td>
          <td>Рубль</td>
          <td>2021.01.13</td>
          <td>Неопределенно</td>
          <td>Д/С № Н#999</td>
          <td>Блокировка отсутствует</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <div class="elz d-flex a-X s16 bor2 br br-primary-t rCircle">
              <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-primary-t bgBef-CC cur-help" title="Завершенный"
                   style="--elzMsk: url('/images/icons/checkmark.svg');"></div>
<!--              url('http://tts.naukanet.ru/uploads/icons/checkmark.svg')-->
            </div>
          </td>
          <td>Абонентская плата</td>
          <td class="bold">66963.4300</td>
          <td>Рубль</td>
          <td>2021.01.13</td>
          <td>Неопределенно</td>
          <td>Д/С № Н#999</td>
          <td>Блокировка отсутствует</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <div class="elz d-flex a-X s16 bor2 br br-primary-t rCircle">
              <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-primary-t bgBef-CC cur-help" title="Завершенный"
                   style="--elzMsk: url('http://tts.naukanet.ru/uploads/icons/checkmark.svg');"></div>
            </div>
          </td>
          <td>Абонентская плата</td>
          <td class="bold">66963.4300</td>
          <td>Рубль</td>
          <td>2021.01.13</td>
          <td>Неопределенно</td>
          <td>Д/С № Н#999</td>
          <td>Блокировка отсутствует</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <div class="elz d-flex a-X s16 bor2 br br-primary-t rCircle">
              <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-primary-t bgBef-CC cur-help" title="Завершенный"
                   style="--elzMsk: url('http://tts.naukanet.ru/uploads/icons/checkmark.svg');"></div>
            </div>
          </td>
          <td>Абонентская плата</td>
          <td class="bold">66963.4300</td>
          <td>Рубль</td>
          <td>2021.01.13</td>
          <td>Неопределенно</td>
          <td>Д/С № Н#999</td>
          <td>Блокировка отсутствует</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <div class="elz d-flex a-X s16 bor2 br br-red rCircle">
              <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-red bgBef-CC cur-help" title="Завершенный"
                   style="--elzMsk: url('http://tts.naukanet.ru/uploads/icons/cross.svg');"></div>
            </div>
          </td>
          <td>Абонентская плата</td>
          <td class="bold">66963.4300</td>
          <td>Рубль</td>
          <td>2021.01.13</td>
          <td>Неопределенно</td>
          <td>Д/С № Н#999</td>
          <td>Блокировка отсутствует</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <div class="elz d-flex a-X s16 bor2 br br-green rCircle">
              <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-green bgBef-CC cur-help" title="Завершенный"
                   style="--elzMsk: url('http://tts.naukanet.ru/uploads/icons/play.svg');"></div>
            </div>
          </td>
          <td>Абонентская плата</td>
          <td class="bold">66963.4300</td>
          <td>Рубль</td>
          <td>2021.01.13</td>
          <td>Неопределенно</td>
          <td>Д/С № Н#999</td>
          <td>Блокировка отсутствует</td>
          <td></td>
          <td></td>
        </tr>
        </tbody>
      </table>

      <table
          class="elz elzTable w100p mT16 va-M fn-9 lh-12 r3 bsh-default1 uStripInner stripLD borNoneInner   bg bg-primary bgL5    stripSelInnerCol4">
        <thead class="elz pad pH8 pV10 p-sticky p-T z1 bor borB2 br br-primary brL-5 brFD brLF20">
        <tr>
          <td class="w1 h56">
            <div class="elz d-flex a-X s16 bor2 br br-green rCircle">
              <div class="elz d-block p-rel mskBef s8 cFillBef fn fn-green bgBef-CC cur-help" title="Активный"
                   style="--elzMsk: url('/images/icons/play.svg');"></div>
<!--              url('http://tts.naukanet.ru/uploads/icons/play.svg')-->
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
            <div class="elz">Абон. плата: <b class="bold">64875.00</b></div>
          </td>
          <td class="w64 wmn64">
            <div class="elz d-block">Рубль</div>
          </td>
          <td class="w100 wmn100">
            <div class="elz d-block bold">Период С</div>
          </td>
          <td class="w100 wmn100">
            <div class="elz d-block bold">Период По</div>
          </td>
          <td class="w120 wmn120">
            <div class="elz d-block bold">Доп. соглашение</div>
          </td>
          <td class="w160 wmn160">
            <div class="elz d-block bold">Блокировка</div>
          </td>
          <td class="w100 wmn100">
            <div class="elz d-block bold">Лицевой счет</div>
          </td>
          <td class="w100 wmn100">
            <div class="elz d-block bold">Баланс</div>
          </td>
        </tr>
        </thead>
      </table>

    </div>
  </div>
</template>
