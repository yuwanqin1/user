<template>
  <div class="index">
    <el-button type="info" @click="axiosClick">获取数据</el-button>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Index extends Vue {
  @Prop() private msg!: string;
  async axiosClick() {
    const res = await axios.get("/api/movie/in_theaters");
    console.log(res.data);
  }
}
</script>
