<script>
export default {
  name: "DataLoadingError",
  props: {
    requestName: { type: String, required: true },
  }
};
</script>

<template>
  <table class="elz elzTable w100p mT16 va-M fn-9 r3 bsh-default1 uStrip stripLD borNoneIn bg bg-error bgL-20 fn fn-error-t">
    <thead class="elz tbody pad p8 pV10 p-sticky p-T z1 bor borB2 br br-primary brL-5 brFD brLF20">
    <tr class="tr">
      <td class="td td wmn200">
        <div class="elz d-block mL-8 mT-4">
          <div class="elz d-flex f-wrap lh-16">
            <div class="elz d-block mL8 mT4">
              <span class="bold">{{ requestName }}</span><br>Ошибка получения данных из Гидры.
              Пожалуйста, создайте заявку в TTS и укажите в ней ссылку на страницу, где возникла ошибка и приложите скриншот ошибки.
            </div>
          </div>
        </div>
      </td>
    </tr>
    </thead>
  </table>
</template>
