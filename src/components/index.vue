<template>
  <div class="index">
    <el-button type="info" @click="axiosClick('1')">获取豆瓣网数据</el-button>
    <el-button type="info" @click="axiosClick('2')">获取音乐</el-button>
    <el-button type="info" @click="axiosClick('3')">获取音乐排行榜</el-button>
    <el-button type="info" @click="axiosClick('4')">获取音乐排行榜  </el-button>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Index extends Vue {
  @Prop() private msg!: string;
  async axiosClick(type: any) {
    let res: any
    if (type === '1') res = await axios.get("/api/movie/in_theaters", { params: { count: 100, start: 0, total: 1 } });
    else if (type === '2') res = await axios.get("/music/musicRankings");
    else if (type === '3') res = await axios.get("/music/todayVideo");
    else if (type === '4') res = await axios.get("/music/musicRankingsDetails", { params: { type: 1 } });
    console.log(res.data);
  }
}
</script>
