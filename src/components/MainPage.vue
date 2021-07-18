<template>
  <main id="main">
    <div class="card">
      <InputText v-for="item in bigBangSlot" :key="item.series" :label="item.series" v-model="slotAmount[item.series]" />
      <InputText :label="'成本'" v-model="cost" />
      <button class="button" @click="calculateMineAmount">Check</button>

      <div class="result">
        <p>總套數: {{ calculateResults.totalSlot }}</p>
        <p>每小時產量: {{ calculateResults.hourMineAmount }}</p>
        <p>日產量: {{ calculateResults.dailyMineAmount }}</p>
        <p>總產量: {{ formatNumber(calculateResults.totalMineAmount) }}</p>
        <p>淨利: {{ formatNumber(calculateResults.netMineAmount) }}</p>
        <p>報酬率: {{ calculateResults.roi }}</p>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import InputText from './InputText.vue';
import { bigBangSlot } from '../bigBangData';

export default defineComponent({
  name: 'MainPage',
  components: {
    InputText
  },
  setup() {
    const state = reactive({
      slotAmount: {
        N: '',
        R: '',
        SR: '',
        SSR: ''
      } as {[key:string]: string},
      cost: '',
      calculateResults: {
        totalSlot: 0,
        hourMineAmount: 0,
        dailyMineAmount: 0,
        totalMineAmount: 0,
        netMineAmount: 0,
        roi: ""
      }
    })

    const calculateMineAmount = () => {
      console.log()
      state.calculateResults.totalSlot = Object.values(state.slotAmount).reduce((total, currentValue) =>  total + parseInt(currentValue), 0);

      state.calculateResults.totalMineAmount = getTotalMineAmount();

      state.calculateResults.dailyMineAmount = getDailyMineAmount();

      state.calculateResults.hourMineAmount = getFiveDecimal(state.calculateResults.dailyMineAmount / 24);

      state.calculateResults.netMineAmount = state.calculateResults.totalMineAmount - parseInt(state.cost);

      state.calculateResults.roi = getFiveDecimal(state.calculateResults.netMineAmount / parseInt(state.cost)) * 100 + '%';
    }

    const getTotalMineAmount = () => bigBangSlot.reduce((total, currentValue) => {
        return total + (currentValue.mineAmount * parseInt(state.slotAmount[currentValue.series]));
      }, 0);

    const getDailyMineAmount = () => getFiveDecimal(bigBangSlot.reduce((total, currentValue) => {
        return total + (currentValue.mineAmount * parseInt(state.slotAmount[currentValue.series]) / currentValue.validity);
      }, 0));

    const getFiveDecimal = (num: number) => Math.round(num * 100000) / 100000;
    const formatNumber = (num: number) => (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');

    return {
      ...toRefs(state),
      bigBangSlot,
      calculateMineAmount,
      formatNumber
    }
  }
});
</script>

<style scoped lang="scss">
#main {
  background: url('~@/assets/images/m-bg.jpeg') top/100% auto repeat #f7f7f7;
  background-attachment: fixed;
  height: 100vh;
  padding: 25px;
}

.card {
  background: #fff;
  border-radius: 10px;
  padding: 20px;
}

.button {
  font-family: 'Gilroy-Regular';
  color: #fff;
  background: linear-gradient(317.7deg,rgba(0,0,0,.4),hsla(0,0%,100%,.4) 105.18%),#0fd9e9;
  background-blend-mode: soft-light,normal;
  font-size: 18px;
  padding: 0px 18px;
  height: 40px;
  border-radius: 40px;
  cursor: pointer;
}

.button:hover {
  opacity: 0.75;
}

.result {
  font-size: 18px;
  color: rgba(0, 0, 0, 0.5);
  text-align: left;
  >p {
    margin-top: 15px;
  }
}

</style>
