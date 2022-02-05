<template>
  <div class="modal flex">
    <div class="modal-content">
      <p>Вы уверены, что хотите выйти? Все изменения не будут сохранены.</p>
      <div class="actions flex">
        <button @click="closeInvoice" class="red">Закрыть</button>
        <button @click="closeModal" class="purple">Вернуться</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "modal",
  methods: {
    ...mapMutations(["TOGGLE_INVOICE", "TOGGLE_MODAL"]),

    closeModal() {
      this.TOGGLE_MODAL();
    },
    closeInvoice() {
      this.TOGGLE_INVOICE();
      this.TOGGLE_MODAL();
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  z-index: 100;
  position: fixed;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  .modal-content {
    border-radius: 20px;
    padding: 48px 32px;
    max-width: 450px;
    background-color: #252945;
    color: #fff;
    p {
      text-align: center;
    }
    .actions {
      margin-top: 24px;
      button {
        flex: 1;
      }
    }
  }
}
</style>
