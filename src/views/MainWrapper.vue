<template>
  <div class="s-container">
    <table cellspacing="0">
      <tbody>
        <tr>
          <th class="text18">Страна</th>
          <th class="text18">Регион</th>
          <th class="text18">Город</th>
          <th class="text18">Сессии</th>
          <th class="text18">Аккаунты</th>
          <th class="text18">Девайсы</th>
        </tr>
        <tr v-for="(item, index) in fakeList" :key="index">
          <td class="text20"> {{ item.country }} </td>
          <td class="text20"> {{ item.region }} </td>
          <td class="text20"> {{ item.city }} </td>
          <td class="text20"> {{ item.sessions }} </td>
          <td class="text20"> {{ item.Accounts }} </td>
          <td class="text20"> {{ item.devices }} </td>
        </tr>
        <tr class="total">
          <td class="text20">Суммирование:</td>
          <td class="text20">0</td>
          <td class="text20">0</td>
          <td class="text20">100 000 000</td>
          <td class="text20">100 000 000</td>
          <td class="text20">Ios</td>
        </tr>
      </tbody>
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
  width: 100%;
  // width: 55.8125rem;
  // margin: 0 auto;

}

th,
td {
  color: var(--darkness);
}

th {
  opacity: 0.7;
  text-align: left;
  // font-size: 0.75rem;
  // line-height: 1rem;
}

td {
  // font-size: 0.875rem;
  padding: 28px 0;
  // line-height:  1.1875rem;
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

    &:first-child {
      border-radius: 0.625rem 0 0 0.625rem;
      padding-left: 18px;
    }

    &:last-child {
      padding-right: 18px;
      border-radius: 0 0.625rem 0.625rem 0;
    }

  }
}
</style>
