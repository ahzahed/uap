<template>
  <div id="app">
    <button
      data-toggle="modal"
      data-target="#myModal"
      type="button"
      class="btn"
      @click="showModal"
    >
      Open Modal!
    </button>

    <Modal
      v-show="isModalVisible"
      model-class="modal-dialog modal-dialog-centered"
      model-width="800px"
      @close="closeModal"
    >
    <template #header>
    <div class="header">
       <button class="btn btn-close"  @click="closeModal()"><i class="fas fa-times"></i></button>
    </div>
    </template>
      <template #footer>
        <div class="modal-footer">
          <button
            class="btn btn-primary"
            data-bs-target="#exampleModalToggle"
            data-bs-toggle="modal"
          >
            Back to first
          </button>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from '@/components/helpers/ModalScroll.vue'

export default {
  name: 'App',
  components: {
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    },
  },
}
</script>
