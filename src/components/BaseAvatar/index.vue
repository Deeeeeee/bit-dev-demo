<template>
  <el-image
    class="base-avatar"
    :src="src"
    v-bind="$attrs"
    v-on="$listeners"
    :style="{
      width: width,
      height: height,
      'background-color': backgroundColor,
      'border-radius': borderRadius
    }"
  >
    <div slot="error">
      <div class="avatar-slot">
        <i class="el-icon-user" :style="{ 'font-size': iconSize }"></i>
      </div>
    </div>
  </el-image>
</template>

<script>
export default {
  name: "base-avatar",
  props: {
    src: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: "50px"
    },
    height: {
      type: String,
      default: "50px"
    },
    backgroundColor: {
      type: String,
      default: "#d7d7d7"
    },
    borderRadius: {
      type: String,
      default: "50%"
    },
    iconSize: {
      type: String,
      default: "14px"
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.base-avatar {
  position: relative;
}
.base-avatar .avatar-slot {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
