<template>
  <div v-if="currentInvoice" class="invoice-view container">
    <router-link class="nav-link flex" :to="{ name: 'Home' }">
      <img src="@/assets/icon-arrow-left.svg" alt="" /> Вернуться на главную
    </router-link>
    <!-- Header -->
    <div class="header flex">
      <div class="left flex">
        <span>Статус</span>
        <div
          class="status-button flex"
          :class="{
            paid: currentInvoice.invoicePaid,
            draft: currentInvoice.invoiceDraft,
            pending: currentInvoice.invoicePending,
          }"
        >
          <span v-if="currentInvoice.invoicePaid">Оплачен</span>
          <span v-if="currentInvoice.invoiceDraft">Черновик</span>
          <span v-if="currentInvoice.invoicePending">Не оплачен</span>
        </div>
      </div>
      <div class="right flex">
        <button
          @click="toggleEditInvoice(currentInvoice.docId)"
          class="dark-purple"
        >
          Редактировать
        </button>
        <button @click="deleteInvoice(currentInvoice.docId)" class="red">
          Удалить
        </button>
        <button
          v-if="currentInvoice.invoicePending"
          @click="updateStatusToPaid(currentInvoice.docId)"
          class="green"
        >
          Отметить как "оплаченный"
        </button>
        <button
          v-if="currentInvoice.invoicePaid || currentInvoice.invoiceDraft"
          @click="updateStatusToPending"
          class="orange"
        >
          Отметить как "ожидает оплаты"
        </button>
      </div>
    </div>
    <!-- invoice Details -->
    <div class="invoice-details flex flex-column">
      <div class="top flex">
        <div class="left flex">
          <p><span>#</span>{{ currentInvoice.invoiceId }}</p>
          <p>{{ currentInvoice.productDescription }}</p>
        </div>
        <div class="right flex flex-column">
          <p>{{ currentInvoice.billerStreetAddress }}</p>
          <p>{{ currentInvoice.billerCity }}</p>
          <p>{{ currentInvoice.billerZipCode }}</p>
          <p>{{ currentInvoice.billerCountry }}</p>
        </div>
      </div>
      <div class="middle flex">
        <div class="payment flex flex-column">
          <h4>Дата счета</h4>
          <p>{{ currentInvoice.invoiceDate }}</p>
          <h4>Дата оплаты</h4>
          <p>{{ currentInvoice.paymentDueDate }}</p>
        </div>
        <div class="bill flex flex-column">
          <h4>Счет оплатил</h4>
          <p>{{ currentInvoice.clientName }}</p>
          <p>{{ currentInvoice.clientStreetAddress }}</p>
          <p>{{ currentInvoice.clientCity }}</p>
          <p>{{ currentInvoice.clientZipCode }}</p>
          <p>{{ currentInvoice.clientCountry }}</p>
        </div>
        <div class="send-to flex flex-column">
          <h4>Отправить</h4>
          <p>{{ currentInvoice.clientName }}</p>
        </div>
        <div class="bottom flex flex-column">
          <div class="billing-items">
            <div class="heading flex">
              <p>Название товара</p>
              <p>Кол-во</p>
              <p>Цена</p>
              <p>Итого</p>
            </div>
            <div
              v-for="(item, index) in currentInvoice.invoiceItemList"
              :key="index"
              class="item flex"
            >
              <p>{{ item.itemName }}</p>
              <p>{{ item.qty }}</p>
              <p>{{ item.price }}</p>
              <p>{{ item.total }}</p>
            </div>
          </div>
          <div class="total flex">
            <p>Сумма долга</p>
            <p>{{ currentInvoice.invoiceTotal }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "invoiceView",
  data() {
    return {
      currentInvoice: null,
    };
  },
  created() {
    this.getCurrentInvoice();
  },
  methods: {
    ...mapMutations(["SET_CURRENT_INVOICE"]),

    getCurrentInvoice() {
      this.SET_CURRENT_INVOICE(this.$route.params.invoiceId);
      this.currentInvoice = this.currentInvoiceArray[0];
    },
  },
  computed: {
    ...mapState(["currentInvoiceArray"]),
  },
};
</script>

<style lang="scss" scoped></style>
