<template>
  <q-page padding>
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-input outlined v-model="price.normalForDrinker" label="Giá bán cho mục đích để uống (rượu thường)" lazy-rules
        :rules="[val => val && val > 0 || 'Vui lòng nhập giá hợp lệ']" />
      <q-input outlined v-model="price.normalForSeller" label="Giá bán cho mục đích để bán (rượu thường)" lazy-rules
        :rules="[val => val && val > 0 || 'Vui lòng nhập giá hợp lệ']" />
      <q-input outlined v-model="price.strongForDrinker" label="Giá bán cho mục đích để uống (rượu nặng)" lazy-rules
        :rules="[val => val && val > 0 || 'Vui lòng nhập giá hợp lệ']" />
      <q-input outlined v-model="price.strongForSeller" label="Giá bán cho mục đích để bán (rượu nặng)" lazy-rules
        :rules="[val => val && val > 0 || 'Vui lòng nhập giá hợp lệ']" />
      <q-input outlined v-model="price.glutinousForDrinker" label="Giá bán cho mục đích để uống (rượu nếp)" lazy-rules
        :rules="[val => val && val > 0 || 'Vui lòng nhập giá hợp lệ']" />
      <q-input outlined v-model="price.glutinousForSeller" label="Giá bán cho mục đích để bán (rượu nếp)" lazy-rules
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
const { NORMAL_WINE_PRICE_FOR_DRINKER, NORMAL_WINE_PRICE_FOR_SELLER, STRONG_WINE_PRICE_FOR_DRINKER,
  GLUTINOUS_WINE_PRICE_FOR_DRINKER, STRONG_WINE_PRICE_FOR_SELLER, GLUTINOUS_WINE_PRICE_FOR_SELLER } = storeToRefs(store);

const $q = useQuasar()

const price = reactive({
  normalForDrinker: NORMAL_WINE_PRICE_FOR_DRINKER,
  normalForSeller: NORMAL_WINE_PRICE_FOR_SELLER,
  strongForDrinker: STRONG_WINE_PRICE_FOR_DRINKER,
  strongForSeller: STRONG_WINE_PRICE_FOR_SELLER,
  glutinousForDrinker: GLUTINOUS_WINE_PRICE_FOR_DRINKER,
  glutinousForSeller: GLUTINOUS_WINE_PRICE_FOR_SELLER,
})

function onSubmit() {
  $q.notify({
    color: 'green-4',
    textColor: 'white',
    icon: 'done',
    message: 'Lưu thành công !'
  })
}

</script>

<style lang="scss"></style>