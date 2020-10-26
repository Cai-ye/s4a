<template>
  <div class="team">
    <div class="title">{{ $t('about.title') }}</div>
    <div class="content">
      <div class="title1">{{ $t('about.team_title') }}</div>
    </div>
    <div class="member">
      <div class="m-title">{{ $t('about.member') }}</div>
      <el-row type="flex" class="m-content">
        <el-col v-for="(item, index) in staffs" :key="item.id" class="single" style="margin-bottom:20px" :xs="24" :md="12" :lg="6">
          <img
            ref="image"
            :src="item.outside_path_url"
            style="width:200px;height:250px;"
            @mouseover="onMouseOver(item, index)"
            @mouseout="onMouseOut(item, index)"
          >
          <div>{{ item.name }}</div>
          <div>{{ item.position }}</div>
        </el-col>
      </el-row>
    </div>
    <div class="act">
      <div class="a-title">{{ $t('about.act') }}</div>
      <el-row type="flex" class="a-content">
        <el-col v-for="item in actors" :key="item.id" class="single" :xs="24" :md="12" :lg="12">
          <div>{{ item.name }}</div>
          <div v-for="show in item.shows_view" :key="show.id">{{ show.title }}</div>
        </el-col>
      </el-row>
    </div>
    <div class="member">
      <div class="m-title">{{ $t('about.teacher') }}</div>
      <el-row type="flex" class="t-content">
        <el-col v-for="item in tutors" :key="item.id" :xs="24" :md="12" :lg="6">
          <div style="line-height:30px;">{{ item.name }}</div>
          <!-- <div>{{ $t('about.teacher'+index+'_1') }}</div> -->
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { S4aApi } from '../../api/S4a'
export default {
  data() {
    return {
      staffs: [],
      actors: [],
      tutors: [],
      listLoading: true,
      staffLoading: true,
      actorLoading: true,
      tutorLoading: true
    }
  },
  created() {
    this.getStaffs()
    this.getActors()
    this.getTutors()
  },
  methods: {
    getStaffs() {
      S4aApi.getStaffs().then(result => {
        this.staffs = result.data
        this.staffLoading = false
        if (!this.staffLoading && !this.actorLoading && !this.tutorLoading) {
          this.listLoading = false
        }
      })
    },

    getActors() {
      S4aApi.getActors().then(result => {
        this.actors = result.data
        this.actorLoading = false
        if (!this.staffLoading && !this.actorLoading && !this.tutorLoading) {
          this.listLoading = false
        }
      })
    },

    getTutors() {
      S4aApi.getTutors().then(result => {
        this.tutors = result.data
        this.tutorLoading = false
        if (!this.staffLoading && !this.actorLoading && !this.tutorLoading) {
          this.listLoading = false
        }
      })
    },

    onMouseOver(item, index) {
      var images = this.$refs.image
      images[index].src = item.inside_path_url
    },

    onMouseOut(item, index) {
      var images = this.$refs.image
      images[index].src = item.outside_path_url
    }
  }
}
</script>
<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
.team {
  width: 100%;
  padding: 0 13%;
  box-sizing: border-box;
  @media screen and (max-width: 780px) {
    padding: 0 17px;
  }
  .content {
    margin: 0 auto;
    .title1 {
      color: $red;
      font-size: 20px;
      font-weight: 450;
      margin-bottom: 10px;
    }
  }
  .member {
    .m-title {
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 10px;
      @media screen and(max-width: 780px) {
        font-size: 18px;
      }
    }
    .m-content {
      display: flex;
      flex-wrap: wrap;
      .single {
        min-width: 100px;
        min-height: 100px;
        line-height: 30px;
      }
    }
    .t-content {
      display: flex;
      flex-wrap: wrap;
      .single {
        min-width: 100px;
        height: 100px;
        line-height: 30px;
      }
    }
  }
  .act {
    margin: 0 auto;
    margin-top: 30px;
    .a-title {
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 10px;
      @media screen and(max-width: 780px) {
        font-size: 18px;
      }
    }
    .a-content {
      display: flex;
      flex-wrap: wrap;
      .single {
        min-width: 100px;
        padding-bottom: 40px;
        line-height: 30px;
      }
    }
  }
  @media screen and(max-width: 780px) {
    .title {
      font-size: 20px;
    }
    .content {
      .title1 {
        font-size: 18px;
      }
    }
  }
}
</style>
