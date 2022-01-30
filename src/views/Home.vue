<template>
  <div class="home container">
    <!-- Header -->
    <div class="header flex">
      <div class="left flex flex-column">
        <h1>Счета</h1>
        <span>Всего счетов 4</span>
      </div>
      <div class="right flex">
        <div @click="toggleFilterMenu" class="filter flex">
          <span>Фильтр по статусу</span>
          <img src="@/assets/icon-arrow-down.svg" alt="" />
          <ul v-show="filterMenu" class="filter-menu">
            <li>Черновик</li>
            <li>Ожидает оплаты</li>
            <li>Оплачен</li>
            <li>Очистить фильтр</li>
          </ul>
        </div>
        <div @click="newInvoice" class="button flex">
          <div class="inner-button flex">
            <img src="@/assets/icon-plus.svg" alt="" />
          </div>
          <span>Новый счет</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      filterMenu: null,
    };
  },
  components: {},
  methods: {
    ...mapMutations(["TOGGLE_INVOICE"]),
    newInvoice() {
      this.TOGGLE_INVOICE();
    },
    toggleFilterMenu() {
      this.filterMenu = !this.filterMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  color: #fff;
  .header {
    margin-bottom: 65px;

    .left,
    .right {
      flex: 1;
    }
    .right {
      justify-content: flex-end;
      align-items: center;
      .button,
      .filter {
        align-items: center;
        span {
          font-size: 12px;
        }
      }
      .filter {
        cursor: pointer;
        position: relative;
        margin-right: 40px;

        img {
          margin-left: 12px;
          width: 9px;
          height: 5px;
        }
        .filter-menu {
          position: absolute;
          width: 120px;
          top: 25px;
          list-style: none;
          background-color: #1e2139;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.6);
        }
        li {
          cursor: pointer;
          font-size: 12px;
          padding: 10px 20px;

          &:hover {
            color: #1e2139;
            background-color: #fff;
          }
        }
      }
      .button {
        padding: 8px 10px;
        background-color: #7c5dfa;
        border-radius: 40px;
        .inner-button {
          margin-right: 8px;
          border-radius: 50%;
          padding: 8px;
          align-items: center;
          justify-content: center;
          background-color: #fff;
          img {
            width: 10px;
            height: 10px;
          }
        }
      }
    }
  }
}
</style>
