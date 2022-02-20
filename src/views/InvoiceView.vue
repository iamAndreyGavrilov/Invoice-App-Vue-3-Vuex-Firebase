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
        <button @click="toggleEditInvoice" class="dark-purple">
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
        <div class="left flex flex-column">
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
          <p>{{ currentInvoice.clientEmail }}</p>
        </div>
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
          <p>{{ currentInvoice.invoiceTotal }}$</p>
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
    ...mapMutations([
      "SET_CURRENT_INVOICE",
      "TOGGLE_EDIT_INVOICE",
      "TOGGLE_INVOICE",
    ]),

    getCurrentInvoice() {
      this.SET_CURRENT_INVOICE(this.$route.params.invoiceId);
      this.currentInvoice = this.currentInvoiceArray[0];
    },
    toggleEditInvoice() {
      this.TOGGLE_EDIT_INVOICE();
      this.TOGGLE_INVOICE();
    },
  },
  computed: {
    ...mapState(["currentInvoiceArray"]),
  },
};
</script>

<style lang="scss" scoped>
.invoice-view {
  .nav-link {
    align-items: center;
    margin-bottom: 32px;
    color: white;
    font-size: 12px;
    img {
      margin-right: 16px;
      width: 7px;
      height: 10px;
    }
  }
  .header,
  .invoice-details {
    background-color: #1e2139;
    border-radius: 20px;
  }
  .header {
    align-items: center;
    padding: 24px 32px;
    font-size: 12px;
    .left {
      align-items: center;
      span {
        color: #dfe3fa;
        margin-right: 16px;
      }
    }
    .right {
      flex: 1;
      justify-content: flex-end;
    }
    button {
      color: white;
    }
  }
  .invoice-details {
    padding: 48px;
    margin-top: 24px;
    .top {
      div {
        color: #dfe3fa;
        flex: 1;
      }
      .left {
        font-size: 12px;
        p:first-child {
          font-size: 24px;
          text-transform: uppercase;
          color: white;
          margin-bottom: 8px;
        }
        p:nth-child(2) {
          font-size: 16px;
        }
        span {
          color: #888eb0;
        }
      }
      .right {
        font-size: 12px;
        align-items: flex-end;
      }
    }
    .middle {
      margin-top: 50px;
      color: #dfe3fa;
      gap: 16px;
      h4 {
        font-size: 12px;
        font-weight: 400;
        margin-bottom: 12px;
      }
      p {
        font-size: 12px;
      }
      .bill,
      .payment {
        flex: 1;
      }
      .payment {
        h4:nth-child(3) {
          margin-top: 32px;
        }
        p {
          font-weight: 600;
        }
      }
      .bill {
        p:nth-child(2) {
          font-size: 16px;
        }

        p {
          font-size: 12px;
          margin-top: auto;
        }
      }
      .send-to {
        flex: 2;
      }
    }
    .bottom {
      margin-top: 50px;
      .billing-items {
        padding: 32px;
        border-radius: 20px 20px 0 0;
        background-color: #252945;
        .heading {
          color: #dfe3fa;
          font-size: 12px;
          margin-bottom: 32px;

          p:first-child {
            flex: 3;
            text-align: left;
          }
          p {
            flex: 1;
            text-align: right;
          }
        }
        .item {
          margin-bottom: 32px;
          font-size: 13px;
          color: white;
          &:last-child {
            margin-bottom: 0;
          }
          p:first-child {
            flex: 3;
            text-align: left;
          }
          p {
            flex: 1;
            text-align: right;
          }
        }
      }
      .total {
        color: white;
        padding: 32px;
        background-color: rgba(12, 14, 22, 0.7);
        align-items: center;
        border-radius: 0 0 20px 20px;
        p {
          flex: 1;
          font-size: 12px;
        }
        p:nth-child(2) {
          font-size: 28px;
          text-align: right;
        }
      }
    }
  }
}
</style>
