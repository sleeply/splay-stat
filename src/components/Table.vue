<template>
  <table cellspacing="0">
    <tr>
      <th v-for="(name, index) in header" :key="index"> {{ name }} </th>
      <!-- <th>Страна</th>
          <th>Регион</th>
          <th>Город</th>
          <th>Сессии</th>
          <th>Аккаунты</th>
          <th>Девайсы</th> -->
    </tr>
    <tr>
      <td v-for="(item, index) in list" :key="index"> {{ item.name }} </td>
      <td> {{ item }} </td>
    </tr>
    <tr class="total">
      <td>Суммирование:</td>
      <td>0</td>
      <td>0</td>
      <td>100 000 000</td>
      <td>100 000 000</td>
      <td>Ios</td>
    </tr>
  </table>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  header: {
    type: Array,
    default: () => []
  },
  list: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  border: none;
  border-collapse: separate;
  border-spacing: 0 20px;

  th,
  td {
    // border: 1px solid var(--darkness);
    color: var(--darkness);

  }

  th {
    opacity: 0.7;
    text-align: left;
  }

  td {
    padding: 28px 18px;
    background: var(--basic-light);

    &:first-child {
      border-radius: 0.625rem 0 0 0.625rem;
      padding-left: 18px;
    }

    &:last-child {
      padding-right: 18px;
      border-radius: 0 0.625rem 0.625rem 0;
    }

  }

  tr {
    width: 100%;
  }

  .total {
    text-align: left;
    border-radius: 14px;

    td {
      vertical-align: middle;
      color: var(--basic-light);
      background: var(--highlight);
      font-weight: 600;

      &:first-child {
        border-radius: 14px 0 0 14px;
      }

      &:last-child {
        border-radius: 0 14px 14px 0;
      }

    }
  }

}
</style>
