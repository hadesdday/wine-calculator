<template>
  <q-page padding>
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-input outlined v-model="priceData.normalForDrinker" label="Giá bán cho mục đích để uống (rượu thường)"
        lazy-rules :rules="[val => val && val > 0 || 'Vui lòng nhập giá hợp lệ']" />
      <q-input outlined v-model="priceData.normalForSeller" label="Giá bán cho mục đích để bán (rượu thường)" lazy-rules
        :rules="[val => val && val > 0 || 'Vui lòng nhập giá hợp lệ']" />
      <q-input outlined v-model="priceData.strongForDrinker" label="Giá bán cho mục đích để uống (rượu nặng)" lazy-rules
        :rules="[val => val && val > 0 || 'Vui lòng nhập giá hợp lệ']" />
      <q-input outlined v-model="priceData.strongForSeller" label="Giá bán cho mục đích để bán (rượu nặng)" lazy-rules
        :rules="[val => val && val > 0 || 'Vui lòng nhập giá hợp lệ']" />
      <q-input outlined v-model="priceData.glutinousForDrinker" label="Giá bán cho mục đích để uống (rượu nếp)"
        lazy-rules :rules="[val => val && val > 0 || 'Vui lòng nhập giá hợp lệ']" />
      <q-input outlined v-model="priceData.glutinousForSeller" label="Giá bán cho mục đích để bán (rượu nếp)" lazy-rules
        :rules="[val => val && val > 0 || 'Vui lòng nhập giá hợp lệ']" />
      <div>
        <q-btn label="Lưu thay đổi" type="submit" color="primary" />
      </div>
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useQuasar } from 'quasar';
import { useWineStore } from 'src/stores/store';
import { reactive } from 'vue';

const store = useWineStore();
const { normalWinePriceForDrinker,
  normalWinePriceForSeller,
  strongWinePriceForDrinker,
  strongWinePriceForSeller,
  glutinousWinePriceForDrinker,
  glutinousWinePriceForSeller, } = storeToRefs(store);

const $q = useQuasar()

const priceData = reactive({
  normalForDrinker: normalWinePriceForDrinker,
  normalForSeller: normalWinePriceForSeller,
  strongForDrinker: strongWinePriceForDrinker,
  strongForSeller: strongWinePriceForSeller,
  glutinousForDrinker: glutinousWinePriceForDrinker,
  glutinousForSeller: glutinousWinePriceForSeller,
})

function onSubmit() {
  store.patchData({
    normalWinePriceForDrinker: priceData.normalForDrinker,
    normalWinePriceForSeller: priceData.normalForSeller,
    strongWinePriceForDrinker: priceData.strongForDrinker,
    strongWinePriceForSeller: priceData.strongForSeller,
    glutinousWinePriceForDrinker: priceData.glutinousForDrinker,
    glutinousWinePriceForSeller: priceData.glutinousForSeller,
  })
  $q.notify({
    color: 'green-4',
    textColor: 'white',
    icon: 'done',
    message: 'Lưu thành công !'
  })
}

</script>

<style lang="scss"></style>
