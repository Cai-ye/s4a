<template>
  <div class="contact">
    <div class="title">
      {{ $t('contact.title1' ) }}
    </div>
    <div class="content">
      <el-row :gutter="20">
        <el-col :xs="24" :md="24" :lg="12" class="left">
          <div class="first">{{ $t('contact.title2' ) }}</div>
          <div class="third"><span class="tit">{{ $t('contact.address_t' ) }}</span>{{ $t('contact.address1' ) }} </div>
          <div class="third" style="margin-top:14px;"><span class="tit">{{ $t('contact.phone' ) }}</span>852 - 2520 6232</div>
          <div class="third"><span class="tit">{{ $t('contact.fax' ) }}</span> 852 - 2520 5996</div>
          <div class="four" style="margin-top:14px;"><span class="tit">{{ $t('contact.email' ) }}</span>
            <a href="mailto:info@s4a.org.hk">info@s4a.org.hk</a>
          </div>
          <div class="four"><span class="tit">{{ $t('contact.facebook' ) }}</span> <a href="http://www.facebook.com/Shakespeare4All" target="_blank"> www.facebook.com/Shakespeare4All</a></div>
          <div class="four"><span class="tit">{{ $t('contact.ins' ) }}</span> <a href="http://www.instagram.com/Shakespeare4All" target="_blank">@shakespeare4all</a></div>
          <div class="third" style="margin-top:14px;">{{ $t('contact.tip1' ) }}</div>
          <div class="third" style="margin-bottom:10px">{{ $t('contact.tip2' ) }}</div>
        </el-col>
        <el-col :xs="24" :md="24" :lg="12">
          <div class="map">
            <div class="loading">Loading...</div>
            <iframe width="100%" height="100%" frameborder="0" style="position:absolute;top:0;left:0;border:0;z-index:99;" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyADEck_AFfdv5JjT4LP60iOKAPsMXYkubA&q=place_id:ChIJ2fks7PQBBDQRGrCXIg8Nz74" allowfullscreen />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      map: null
    }
  },
  mounted() {
    window.scrollTo(0, 0)
    // this.initMap()
    // if (iframe.attachEvent) {
    //   iframe.attachEvent('onreadystatechange', function() {
    //     if (iframe.readyState === 'complete' || iframe.readyState == 'loaded') {
    //       iframe.detachEvent('onreadystatechange', arguments.callee)
    //     }
    //   })
    // } else {
    //   iframe.addEventListener('load', function() {
    //     this.removeEventListener('load', arguments.call, false)
    //   }, false)
    // }
  },
  methods: {
    // initMap() {
    //   // eslint-disable-next-line no-undef
    //   var map = new google.maps.Map(document.getElementById('map'), {
    //     center: { lat: 22.285689, lng: 114.214812 },
    //     zoom: 17,
    //     disableDefaultUI: true,
    //     gestureHandling: 'greedy',
    //     mapTypeControl: false
    //   })
    //   // eslint-disable-next-line no-undef
    //   var markerStart = new google.maps.Marker({
    //     position: { lat: 22.285689, lng: 114.214812 },
    //     title: 'Shakespeare4All HongKong'
    //   })
    //   // eslint-disable-next-line no-undef
    //   var infowindow = new google.maps.InfoWindow({
    //     content: 'Shakespeare4All HongKong'
    //   })
    //   infowindow.open(map, markerStart)
    //   markerStart.setMap(map)
    // }
  }
}
</script>
<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
.contact {
  width: 100%;
  box-sizing: border-box;
  padding: 0 12%;
  @media screen and(max-width: 780px) {
    padding: 0 17px;
  }
  .content {
    position: relative;
    padding: 4% 8%;
    box-sizing: border-box;
    .left {
      padding-top: 20px;
    }
    .first {
      color: $red;
      font-weight: 450;
      margin-bottom: 10px;
      font-size: 20px;
      @media screen and(max-width: 780px) {
        font-size: 18px;
      }
    }
    .third {
      .tit {
        margin-right: 10px;
      }
    }
    .four {
      display: flex;
      flex-wrap: wrap;
      color: $red;
      .tit {
        margin-right: 10px;
        color: #383838;
      }
      a {
        display: block;
        // word-wrap: break-word;
        word-break: break-all;
      }
    }
    .map {
      position: relative;
      max-width: 350px;
      width: 100%;
      height: 350px;
      // background: #ddd;
      .loading {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 0;
        transform: translate(-50%, -50%);
      }
      @media screen and(max-width: 780px) {
        height: 300px;
      }
    }
  }
}
.content::before {
  content: "";
  position: absolute;
  left: 4%;
  top: 0;
  width: 100px;
  height: 120px;
  border-top: 3px solid $red;
  border-left: 3px solid $red;
  @media screen and(max-width:780px) {
    left: -6%;
  }
}
.content::after {
  content: "";
  position: absolute;
  right: 4%;
  bottom: -10px;
  width: 100px;
  height: 120px;
  border-right: 3px solid $red;
  border-bottom: 3px solid $red;
  @media screen and(max-width:780px) {
    right: -6%;
  }
}
</style>
