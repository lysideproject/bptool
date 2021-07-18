<template>
  <div class="input">
    <p>{{ label }}</p>
    <input type="text" :value="modelValue" 
    @input='$emit("update:modelValue", $event.target.value)'>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InputText',
  props: {
    label: String,
    modelValue: String
  },
});
</script>

<style scoped lang="scss">
.input {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  >p {
    width: 60px;
    font-size: 18px;
    color: rgba(0,0,0,.5);
    text-align: left;
  }
  >input {
    font-family: 'Gilroy-Regular';
    width: 100%;
    font-size: 18px;
    padding: 2px 5px;
    border: 0;
    border-bottom: 2px solid #f1f1f1;
    outline: 0;
    transition: border-color 0.2s;
  }
  >input:focus {
    border-image: linear-gradient(to right, #DFDBFE, #0fd9e9); 
    border-image-slice: 1;
  }
}
</style>
