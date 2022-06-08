<template>
  <transition name="modal-fade">
    <div class="modal-overlay">
      <div
        class="uap-modal"
        :style="{ width: modelWidth }"
        @click="$emit('close')"
      >
        <div class="modal-content" @click.stop>
          <slot name="header"> </slot>

          <slot name="body"> </slot>

          <slot name="footer"> </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    modelWidth: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: rgb(143 143 143);
  z-index: 3000;
}
@media (min-width: 576px) {
  .uap-modal {
    margin: 1.75rem auto;
  }
}

.uap-modal::-webkit-scrollbar {
  width: 10px;
  height: 100px;
  color: red;
}
.uap-modal::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 60px;
  background-color: #f5f5f5;
}
.uap-modal::-webkit-scrollbar-thumb {
  border-radius: 60px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: $darkblue;
}

.uap-modal {
  position: relative;
  width: auto;
  margin: 0 auto;
  width: auto;
  min-height: calc(100% - 3.5rem);
  overflow-y: scroll;
  /* display: flex; */
  align-items: center;
}

.modal-content {
  padding: 25px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}
p {
  /* font-weight: 500; */
  font-size: 16px;
  margin: 20px 0;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
