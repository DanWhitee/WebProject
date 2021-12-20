<template>
  <div class="wrapper">
    <p class="title-input">{{description}}</p>
    <div class="wrapper-input">
      <input
        class="input"
        type="text"
        :placeholder="description"
      >
    </div>
  </div>

</template>

<script>
export default {
  name: 'Input',
  props: {
    /*
    * Описание input
    */
    description: {
      type: String,
      default: 'Lorem'
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
}

.title-input {
  margin-bottom: 10px;
  @extend %h5;
}
.wrapper-input {
  width: 100%;
  padding: 20px 10px 20px 30px;
  background: #FFFFFF;
  border: 1px solid #F2F2F2;
  border-radius: 5px;
}

.input {
  width: 100%;
  border: none;

  &::placeholder {
    @extend %h5;
  }
}

</style>
