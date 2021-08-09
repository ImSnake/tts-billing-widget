<script>
import { ref } from "vue";

export default {
  name: "Sessions",
  props: {
    ttsId: { type: [String, Number], required: true },
  },

  setup() {
    const bookmarkIsActive = ref(false);
    return { bookmarkIsActive };
  },

  mounted() {
    //console.log('Bookmark sessions is mounted');
  },

};
</script>

<template>
  <div v-if="bookmarkIsActive" class="d-block">
    <div class="elz d-table w100p pH16 pB16 mT16">
      Вкладка "VPN СЕССИИ"
      <br>
      {{ ttsId }}
    </div>
  </div>
</template>
