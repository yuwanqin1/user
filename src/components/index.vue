<template>
  <div class="index">
    <el-button type="info" @click="axiosClick">获取豆瓣网数据</el-button>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Index extends Vue {
  @Prop() private msg!: string;
  async axiosClick() {
    const res = await axios.get("/api/movie/in_theaters", { params: { count: 100, start: 0, total: 1 } });
    console.log(res.data);
  }
}
</script>
