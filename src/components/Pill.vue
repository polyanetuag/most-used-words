<template>
  <div class="pill">
    <span class="name">{{ name }}</span>
    <span class="amount">{{ amount }}</span>
  </div>
</template>

<script>
export default {
  props: ['name', 'amount']
}
</script>

<style>
  .pill {
    margin: 10px;
    height: 55px;
    border-radius: 30px;
    background: #EC003E;
    color: #fff;
    font-size: 1.3rem;
    font-weight: bold;
    display: flex;
    align-items: center;
  }

  .pill .name {
    margin-left: 15px;
  }

  .pill .amount {
    margin: 10px;
    padding: 5px;
    height: 35px;
    width: 35px;
    border-radius: 18px;
    background: white;
    color: #EC003E;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>