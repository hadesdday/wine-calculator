<template>
  <q-page padding>
    <div class="column">
      <q-select outlined v-model="formData.options" :options="options" label="Loại rượu" lazy-rules
        :rules="[val => val && val != '' || 'Vui lòng chọn loại rượu']" />
      <q-input outlined v-model="formData.customPrice" label="Tùy chọn giá" lazy-rules
        :rules="[val => val && val > 0 || 'Vui lòng nhập số tiền hợp lệ']" v-if="formData.options === options[3]" />
      <q-input outlined v-model="formData.money" label="Số tiền" lazy-rules
        :rules="[val => val && val > 0 || 'Vui lòng nhập số tiền hợp lệ']" />
      <!-- <q-btn color="primary" label="Tính" @click="handleCalculateQuantity" /> -->
    </div>
    <div class="column">
      <h3>Số lít rượu tính được từ lựa chọn</h3>
      <h4>Rượu thường: {{ computedNormalWinePriceForDrinker }}L cho người uống - {{ computedNormalWinePriceForSeller }}L
        cho người bán - {{
        computedAmountOfMugForDrinker }} ca cho người uống - {{ computedAmountOfMugSeller }} ca cho người bán</h4>
      <h4>Rượu nặng:</h4>
      <h4>Rượu nếp:</h4>
      <h4>Mix:</h4>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useWineStore } from 'src/stores/store';
import { computed, reactive } from 'vue';

const store = useWineStore();
const { normalWinePriceForDrinker, normalWinePriceForSeller } = storeToRefs(store);

const options = [
  'Rượu thường',
  'Rượu nặng',
  'Rượu nếp',
  'Tùy chọn'
]

const formData = reactive({
  customerType: 'Người mua uống',
  options: 'Rượu thường',
  customPrice: 0,
  money: 0
})

const computedNormalWinePriceForDrinker = computed(() => {
  return formData.money / normalWinePriceForDrinker.value;
})

const computedNormalWinePriceForSeller = computed(() => {
  return formData.money / normalWinePriceForSeller.value;
})

const computedAmountOfMugForDrinker = computed(() => {
  return formData.money / (normalWinePriceForDrinker.value / 2)
})
const computedAmountOfMugSeller = computed(() => {
  return formData.money / (normalWinePriceForSeller.value / 2)
})

</script>
