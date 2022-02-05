<template>
  <router-link
    class="invoice flex"
    :to="{ name: 'Invoice', params: { invoiceId: invoice.invoiceId } }"
  >
    <div class="left flex">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "invoice",
  props: ["invoice"],
};
</script>

<style lang="scss" scoped></style>
