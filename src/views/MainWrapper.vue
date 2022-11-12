<template>
  <div>
    <table cellspacing="0">
      <tbody>
        <tr>
          <th>Страна</th>
          <th>Регион</th>
          <th>Город</th>
          <th>Сессии</th>
          <th>Аккаунты</th>
          <th>Девайсы</th>
        </tr>
        <tr v-for="(item, index) in fakeList" :key="index">
          <td> {{ item.country }} </td>
          <td> {{ item.region }} </td>
          <td> {{ item.city }} </td>
          <td> {{ item.sessions }} </td>
          <td> {{ item.Accounts }} </td>
          <td> {{ item.devices }} </td>
        </tr>
        <tr class="total">
          <td>Суммирование:</td>
          <td>0</td>
          <td>0</td>
          <td>100 000 000</td>
          <td>100 000 000</td>
          <td>Ios</td>
        </tr>
      </tbody>
    </table>
    <table>

    </table>
  </div>
</template>

<script setup>
const fakeList = [
  {
    country: 'Узбекистан',
    region: 'Ташкентская обл.',
    city: 'Ташкент',
    sessions: '100 000 000 ',
    Accounts: '100 000 000',
    devices: 'Ios',
  },
  {
    country: 'Узбекистан',
    region: 'Ташкентская обл.',
    city: 'Ташкент',
    sessions: '100 000 000 ',
    Accounts: '100 000 000',
    devices: 'Ios',
  },
  {
    country: 'Узбекистан',
    region: 'Ташкентская обл.',
    city: 'Ташкент',
    sessions: '100 000 000 ',
    Accounts: '100 000 000',
    devices: 'Ios',
  },
  {
    country: 'Узбекистан',
    region: 'Ташкентская обл.',
    city: 'Ташкент',
    sessions: '100 000 000 ',
    Accounts: '100 000 000',
    devices: 'Ios',
  },
  {
    country: 'Узбекистан',
    region: 'Ташкентская обл.',
    city: 'Ташкент',
    sessions: '100 000 000 ',
    Accounts: '100 000 000',
    devices: 'Ios',
  },
  {
    country: 'Узбекистан',
    region: 'Ташкентская обл.',
    city: 'Ташкент',
    sessions: '100 000 000 ',
    Accounts: '100 000 000',
    devices: 'Ios',
  },
  {
    country: 'Узбекистан',
    region: 'Ташкентская обл.',
    city: 'Ташкент',
    sessions: '100 000 000 ',
    Accounts: '100 000 000',
    devices: 'Ios',
  },
]
</script>

<style lang="scss" scoped>
table {
  width: 55.8125rem;
  margin: 0 auto;

}

th,
td {
  // border: 1px solid var(--darkness);
  color: var(--darkness);
  padding: 1.25rem 0.8125rem;
}

th {
  opacity: 0.7;
  text-align: left;
  font-size: 0.75rem;
  line-height: 1rem;
}

td{
  font-size: 0.875rem;
  line-height:  1.1875rem;
}

tr {
  width: 100%;
}

.total {
  background: var(--highlight);
  text-align: left;
  border-radius: 0.625rem;

  td {
    vertical-align: middle;
    color: var(--basic-light);
    font-weight: 600;

    &:first-child{
      border-radius: 0.625rem 0 0 0.625rem;
    }
    &:last-child{
      border-radius: 0 0.625rem 0.625rem 0;
    }

  }
}
</style>
