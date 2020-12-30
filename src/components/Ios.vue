<style lang="less">
* {
  -webkit-touch-callout:none;
  -webkit-user-select:none;
  -khtml-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75%{
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.main{
  height: 100%;
  width: 100%;
  .start{
    height: 100%;
    width: 100%;
    background: url("../assets/start.png") no-repeat center center;
    background-size: cover;
    .start_btn{
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      width: 45%;
      height: 14%;
      bottom: 30%;
    }
  }
  .video{
    height: 100%;
    width: 100%;
    object-fit: fill;
    outline: none;
  }
  // display: flex;
  // align-items: center;
  // justify-content: center;
  .father{
    opacity: 0.9;
    background-color: #faf1e8;
    height: 100%;
    width: 100%;
    overflow: auto;
    .box{
      input{
        -webkit-user-select:text !important;
      }
      width: 100%;
      display: flex;
      flex-direction: column;
      // justify-content: center;
      padding: 5% 0 5% 7%;
      p{
        font-weight: bold;
        font-size: 15px;
      }
      .icon-yinfu{
        animation: rotate 2s linear infinite;
        position: absolute;
        right: 7%;
        top: 3%;
        font-size: 30px;
        font-weight: bold;
        color: #f0ddca;
        display: block;
        line-height: 32px;
        height: 32px;
        width: 32px;
        border-radius: 50%;
        background-color: #ffffff;
      }
      .box1{
        padding: 5px 0 10px 5px;
        width: 90%;
        border-bottom: 1px dashed rgb(157, 158, 118);
        .radioGroup{
          margin-top: 5px;
          display: flex;
          flex-direction: column;
        }
      }
      .box2{
        p{
          margin: 5px 0;
        }
        padding: 10px 0 15px 10px;
        border-bottom: 1px dashed rgb(157, 158, 118);
        .others{
          margin-top: 5px;
          display: flex;
          align-items: center;
          .input{
            width: 150px;
            margin-left: 10px;
          }
        }
      }
      .box3{
        padding: 10px 0 15px 10px;
        bottom: 425px;
        width: 94%;
        border-bottom: 1px dashed rgb(157, 158, 118);
        p{
          margin: 5px 0;
        }
        .checkboxGroup {
          padding: 0 5px
        }
        .others{
          margin-top: 5px;
          display: flex;
          align-items: center;
          .input{
            width: 150px;
            margin-left: 10px;
          }
        }
      }
      .box4{
        padding: 10px 0 15px 10px;
        border-bottom: 1px dashed rgb(157, 158, 118);
        .checkboxGroup{
          padding: 0 5px
        }
        p{
          margin: 5px 0;
        }
        .others{
          margin-top: 5px;
          display: flex;
          align-items: center;
          .input{
            width: 150px;
            margin-left: 10px;
          }
        }
      }
      .box5{
        padding: 5px 0 20px 5px;
        border-bottom: 1px dashed rgb(157, 158, 118);
        width: 90%;
        display: flex;
        flex-direction: column;
        .input{
          width: 150px;
        }
        .name, .iphone{
          margin-top: 10px;
          display: flex;
          align-items: center;
        }
        .name{
          margin-top: 5px;
          .input{
            margin-left: 67px;
          }
        }
        .iphone{
          .title{
            display: inline-block;
          }
          .input{
            margin-left: 52px;
          }
          .yanz{
            input{
              border-color: red;
            }
          }
        }
        .address{
          margin-top: 10px;
          .Select{
            margin-left: 10px;
            width: 150px;
        
          }
        }
        .but{
          margin-left: 23%;
          margin-top: 25px;
          border: 1px dashed #515a6e;
          width: 30%;
          background-color: rgb(247, 222, 203);
        }
        .ivu-btn:hover{
          color: #515a6e;
        }
      }
    }
  }

  //火箭发射
  .rockBack{
    height: 100%;
    width: 100%;
    background: url("../assets/rockBack.png") no-repeat center center;
    background-size: 100% 100%;
    .rock{
      width: 65%;
      height: 60%;
      position: absolute;
      bottom: 20%;
      left: 50%;
      transform: translate(-50%);
    }
    .rockButton{
      width: 17%;
      height: 10%;
      background: url("../assets/rockButton.png") no-repeat center center;
      background-size: cover;
      border-radius: 50%;
      position: absolute;
      bottom: 6%;
      left: 50%;
      transform: translate(-50%);
      z-index: 10;
    }
    .bloodLeft{
      width: 10%;
      height: 15%;
      position: absolute;
      bottom: 25%;
      left: 25%;
      transform: translate(-50%);
      .blood1{
        height: 40%;
        width: 90%;
        position: absolute;
        bottom: 65%;
        left: 52%;
        transform: translate(-50%);
      }
      .blood2{
        height: 30%;
        width: 67%;
        position: absolute;
        bottom: 53%;
        left: 52%;
        transform: translate(-50%);
      }
      .blood3{
        height: 35%;
        width: 61%;
        position: absolute;
        bottom: 26%;
        left: 52%;
        transform: translate(-50%);
      }
      .blood4{
        height: 30%;
        width: 68%;
        position: absolute;
        bottom: 3%;
        left: 50%;
        transform: translate(-50%);
      }
    }
    .bloodRight{
      width: 10%;
      height: 15%;
      position: absolute;
      bottom: 25%;
      right: 15%;
      transform: translate(-50%);
      .blood1{
        height: 40%;
        width: 90%;
        position: absolute;
        bottom: 65%;
        left: 50%;
        transform: translate(-50%);
      }
      .blood2{
        height: 30%;
        width: 67%;
        position: absolute;
        bottom: 51%;
        left: 50%;
        transform: translate(-50%);
      }
      .blood3{
        height: 35%;
        width: 61%;
        position: absolute;
        bottom: 26%;
        left: 51%;
        transform: translate(-50%);
      }
      .blood4{
        height: 30%;
        width: 68%;
        position: absolute;
        bottom: 2%;
        left: 50%;
        transform: translate(-50%);
      }
    }
    .bloodBox{
      width: 100%;
      height: 14%;
      position: absolute;
      top: 61%;
      .boxLeft{
        border-radius: 15%;
        width: 7%;
        height: 100%;
        position: absolute;
        left: 25%;
        transform: translate(-50%);
        background-color: rgb(151, 169, 191);
      }
      .boxRight{
        border-radius: 15%;
        width: 7%;
        height: 100%;
        position: absolute;
        right: 18%;
        transform: translate(-50%);
        background-color: rgb(151, 169, 191);
      }
    }
  }
  .lastGif{
    height: 100%;
    width: 100%;
    display: none;
    z-index: 100;
  }
}
</style>

<template>
  <div class="main">
    <div :style="{display: isStartShow?'block':'none'}" class="start">
      <img @touchstart="startTouchStart" @touchend="startTouchEnd"  class="start_btn" src="../assets/start_btn.png" alt="" />
    </div>
    <video  ref="video1"
            src="../assets/video.mp4"
            class="video"
            x-webkit-airplay="allow"
            webkit-playsinline="true"
            x5-video-player-type="h5"
            x5-video-orientation='portraint'
            x5-video-player-fullscreen="true" 
            playsinline="true"
            preload="preload"
            :style="{display: 'none'}"
            >
    </video>
    <div :style="{display: isCardShow? 'block': 'none'}" class="father">
      <div class="box">
        <i @click="rotateClick"  class="iconfont icon-yinfu"/>
        <div class="box1">
          <p>您是否下载“海曙”客户端？(单选)</p>
          <RadioGroup v-model="formItem.download" class="radioGroup">
            <Radio label="是">
                <span>是</span>
            </Radio>
            <Radio label="否">
                <span>否</span>
            </Radio>
            <Radio label="下载过又删除了">
                <span>下载过又删除了</span>
            </Radio>
          </RadioGroup>
        </div>
        <div class="box2">
          <p>您更多关注我们的？(多选)</p>
          <CheckboxGroup class="checkboxGroup" v-model="formItem.contents">
            <Checkbox label="文字内容">
                <span>文字内容</span>
            </Checkbox>
            <Checkbox label="图片">
                <span>图片</span>
            </Checkbox>
            <Checkbox label="音频、视频">
                <span>音频、视频</span>
            </Checkbox>
            <Checkbox label="评论">
                <span>评论</span>
            </Checkbox>
            <div class="others">
              <span>其他</span>
              <Input class="input" @on-change="contentsChange" v-model="contents_others" size="small"/>
            </div>
          </CheckboxGroup>
        </div>
        <div class="box3">
          <p>您最希望我们提供的便民服务是？(多选)</p>
          <CheckboxGroup class="checkboxGroup" v-model="formItem.serves">
            <Checkbox label="个人办证">
                <span>个人办证</span>
            </Checkbox>
            <Checkbox label="出行指南">
                <span>出行指南</span>
            </Checkbox>
            <Checkbox label="就业信息">
                <span>就业信息</span>
            </Checkbox>
            <Checkbox label="缴费、充值">
                <span>缴费、充值</span>
            </Checkbox>
            <Checkbox label="问政互动">
                <span>问政互动</span>
            </Checkbox>
            <div class="others">
              <span>其他</span>
              <Input class="input" @on-change="servesChange" v-model="serves_others" size="small"/>
            </div>
          </CheckboxGroup>
        </div>
        <div class="box4">
          <p>您最希望获得我们哪方面的资讯？(多选)</p>
          <CheckboxGroup class="checkboxGroup" v-model="formItem.messages">
            <Checkbox label="时政">
                <span>时政</span>
            </Checkbox>
            <Checkbox label="党建">
                <span>党建</span>
            </Checkbox>
            <Checkbox label="历史">
                <span>历史</span>
            </Checkbox>
            <Checkbox label="文化">
                <span>文化</span>
            </Checkbox>
            <Checkbox label="体育">
                <span>体育</span>
            </Checkbox>
            <Checkbox label="民生">
                <span>民生</span>
            </Checkbox>
            <Checkbox label="健康">
                <span>健康</span>
            </Checkbox>
            <Checkbox label="教育">
                <span>教育</span>
            </Checkbox>
            <Checkbox label="娱乐">
                <span>娱乐</span>
            </Checkbox>
            <Checkbox label="人物">
                <span>人物</span>
            </Checkbox>
            <Checkbox label="公益">
                <span>公益</span>
            </Checkbox>
            <Checkbox label="直播">
                <span>直播</span>
            </Checkbox>
            <div class="others">
              <span>其他</span>
              <Input class="input" @on-change="messagesChange" v-model="messages_others" size="small"/>
            </div>
          </CheckboxGroup>
        </div>
        <div class="box5"> 
          <div class="name">
            <span>姓名</span>
            <Input class="input" v-model="formItem.name" size="small"/>
          </div>
          <div class="iphone"> 
            <span class="title">手机号</span>
            <Input @on-change="iphoneChange" :class="['input', !isIphoneOk? 'yanz':'']" v-model="formItem.iphone" size="small"/>
          </div>
          <div class="address">
            <span>居住或常去地</span>
            <Select v-model="formItem.address" size="small" class="Select">
              <Option v-for="item in addressArray" :value="item.value" :key="item.label">{{ item.label }}</Option>
            </Select>
          </div>
          <Button size="small" @click="submit" class="but">提交</Button>
        </div>
      </div>
    </div>

    <!-- 火箭发射部分 -->
    <div :style="{display: isRockShow? 'block': 'none'}" class="rockBack">
      <img class="rock" src="../assets/rock.png" alt="">
      <div class="rockButton" @touchstart="rockDown" @touchend="rockUp"></div>
      <div class="bloodLeft">
        <img class="blood1" src="../assets/blood1.png" alt="">
        <img class="blood2" src="../assets/blood2.png" alt="">
        <img class="blood3" src="../assets/blood3.png" alt="">
        <img class="blood4" src="../assets/blood4.png" alt="">
      </div>
      <div class="bloodRight">
        <img class="blood1" src="../assets/blood1.png" alt="">
        <img class="blood2" src="../assets/blood2.png" alt="">
        <img class="blood3" src="../assets/blood3.png" alt="">
        <img class="blood4" src="../assets/blood4.png" alt="">
      </div>
      <div class="bloodBox">
        <div class="boxLeft"></div>
        <div class="boxRight"></div>
      </div>
    </div>
  <audio ref="startMusic" autoplay="autoplay" loop="loop" src="../assets/question.mp3"></audio>
  <audio ref="startClick" preload="preload" src="../assets/submit.mp3"></audio>
  <audio ref="audio" preload="preload" src="../assets/submit.mp3"></audio>
  <audio ref="audio2" preload="preload" src="../assets/ready.mp3"></audio>
  <audio ref="audio3" preload="preload" src="../assets/go.mp3"></audio>
  <audio ref="question" preload="preload" loop="loop" src="../assets/question.mp3"></audio>
  <img ref="lastGif" class="lastGif" src="../assets/last.gif" alt="">
</div>
  
</template>
<script>
import { on, off } from '../utils';
import request from '../network/request';
import {  Radio, 
          RadioGroup, 
          CheckboxGroup, 
          Checkbox,
          Input,
          Button,
          Select,
          Option
        } from 'view-design';
export default {
  name: 'Ios',
  components: {
    Radio,
    RadioGroup,
    CheckboxGroup,
    Checkbox,
    Input,
    Button,
    Select,
    Option
  },
  data(){
    return {
      isIphoneOk: true,
      isStartShow: true,
      isCardShow: false,
      isRockShow: false,
      formItem: {
        download: "",
        messages: [],
        serves: [],
        contents: [],
        name: "",
        iphone: "",
        address: ""
      },
      messages_others: "",
      serves_others: "",
      contents_others: "",
      addressArray:[
        {
          label: '白云街道',
          value: '白云街道'
        },
        {
          label: '洞桥镇',
          value: '洞桥镇'
        },
        {
          label: '段塘街道',
          value: '段塘街道'
        },
        {
          label: '高桥镇',
          value: '高桥镇'
        },
        {
          label: '古林镇',
          value: '古林镇'
        },
        {
          label: '鼓楼街道',
          value: '鼓楼街道'
        },
        {
          label: '横街镇',
          value: '横街镇'
        },
        {
          label: '集士港镇',
          value: '集士港镇'
        },
        {
          label: '江厦街道',
          value: '江厦街道'
        },
        {
          label: '龙观乡',
          value: '龙观乡'
        },
        {
          label: '南门街道',
          value: '南门街道'
        },
        {
          label: '石碶街道',
          value: '石碶街道'
        },
        {
          label: '望春街道',
          value: '望春街道'
        },
        {
          label: '西门街道',
          value: '西门街道'
        },
        {
          label: '鄞江镇',
          value: '鄞江镇'
        },
        {
          label: '月湖街道',
          value: '月湖街道'
        },
        {
          label: '章水镇',
          value: '章水镇'
        }
      ],
      rockbButton: "",    //发射按钮对象
      interRock: null,
      interDownRock: null,
      boxHeigth: 14,      //火箭燃料上升的高度
      bloodBox: "",        //火箭燃料对象
      isPause1: false,
      isPause2: false,
      isPause3: false,
      isPause4: false,
      isPause5: false,
      rotateState: true,

      isVideo1: false,
      isVideo2: false,
      isVideo3: false,
      isVideo4: false,
      isVideo5: false
    }
  },
  methods: {
    iphoneChange(){
      if(!(/^1[3456789]\d{9}$/.test(this.formItem.iphone))){
        this.isIphoneOk = false;
      }else{
        this.isIphoneOk = true;
      }
    },
    startTouchStart(){
      this.$refs.startMusic.pause()
      this.$refs.startClick.play()
      let btn = document.querySelector(".start_btn");
      btn.style.height = 12 + '%';
      btn.style.width = 42 + '%';
    },
    startTouchEnd(){
      let btn = document.querySelector(".start_btn");
      btn.style.height = 14 + '%';
      btn.style.width = 45 + '%';
      setTimeout(() => {
        this.$refs.video1.currentTime = 0;
        this.isStartShow = false;
        this.$refs.video1.style.display = 'block';
        this.$refs.video1.play();
      },350)
    },
    timeUpdate1(){
      // console.log(this.$refs.video1.currentTime)
      if(this.$refs.video1.currentTime >=11.5){
        if(!this.isPause1){
          this.isVideo1 = true;
          // this.$refs.video1.pause();
          this.$refs.video1.currentTime = 0.2;
          this.$refs.video1.play();
        }
      }
      if(this.$refs.video1.currentTime >=14.6){
        if(!this.isPause2){
          this.$refs.video1.pause();
          this.$refs.video1.style.display = 'none';
          this.isCardShow = true;                       //表单出现
          this.$refs.question.play(); 
        }
      }
      if(this.$refs.video1.currentTime >=26.1){
        if(!this.isPause3){                           //isPause表示没点击过
          this.isVideo2 = true;
          this.$refs.video1.currentTime = 15.8;
          this.$refs.video1.play()
        }
      }
      if(this.$refs.video1.currentTime >=30.5){
        if(!this.isPause4){                           //isPause表示没点击过
          this.isVideo3 = true;
          this.$refs.video1.currentTime = 27.8;
          this.$refs.video1.play()
        }
      }
       if(this.$refs.video1.currentTime >=44.8){
        if(!this.isPause5){                           //isPause表示没点击过
          this.$refs.video1.pause();
          this.$refs.video1.style.display = 'none';
          this.isRockShow = true;                     //火箭出现
          this.isPause5 = true;
          this.rockbButton = document.querySelector(".rockButton")
        }
      }
      if(this.$refs.video1.currentTime >=71){
        this.$refs.video1.pause();
        this.$refs.video1.style.display = 'none'
        this.$refs.lastGif.style.display = 'block';
      }
    },
    video1Click(){
      if(this.isVideo1){
        this.isPause1 = true;
        this.$refs.video1.currentTime = 11.8;
        this.$refs.video1.play();
        this.isVideo1 = false;
      }
      if(this.isVideo2){
        this.isPause3 = true;
        this.$refs.video1.currentTime = 27.2;
        this.$refs.video1.play();
        this.isVideo2 = false;
      }
      if(this.isVideo3){
        this.isPause4 = true;
        this.$refs.video1.currentTime = 31.1;
        this.$refs.video1.play();
        this.isVideo3 = false;
      }
    },
    submit(){
      this.isPause2 = true;
      if(this.$refs.audio.currentTime != 0){
        this.$refs.audio.currentTime = 0;
      }
      this.$refs.audio.play();
      if(this.formItem.name == "" || this.formItem.iphone == ""
        || this.formItem.address == "" || this.formItem.contents == []
        || this.formItem.serves == [] || this.formItem.messages == []
        || this.formItem.download == ""){
        this.$Message.warning("请填全信息")
        return;
      }else{
        if(!this.isIphoneOk){
          this.$Message.warning("请填写有效手机号")
        }else{
          this.$refs.question.pause();
          request({
            url: '/media/save',
            method: 'post',
            data: this.formItem
          })
          setTimeout(() => {
            this.isCardShow = false;
            this.$refs.video1.style.display = 'block';
            this.$refs.video1.play();
          },600)
        }
      }
    },
    rotateClick(){
      this.rotateState = !this.rotateState;
      if(this.rotateState){
        this.$refs.question.play();
      }else{
        this.$refs.question.pause();
      }
    },
    rockDown(e){
      if(this.interDownRock){
        clearInterval(this.interDownRock)
      }
      /*控制燃料上升状态逻辑 */
      this.$refs.audio2.play()
      this.rockbButton.style.height = 8 + '%';
      this.rockbButton.style.width = 15 + '%';
      this.bloodBox = document.querySelector(".bloodBox");
      this.interRock = setInterval(() => {
        this.boxHeigth = this.boxHeigth - 1;
        if(this.boxHeigth <=0){
          this.bloodBox.style.height = 0 + '%';
          clearInterval(this.interRock);
        }else{
          this.bloodBox.style.height = this.boxHeigth + '%';
        }
      },150)
    },
    rockUp(e){
      /*发射按钮松开火箭上升，并且继续播放video */
      this.$refs.audio2.pause();
      this.rockbButton.style.height = 10 + '%';
      this.rockbButton.style.width = 17 + '%';
      if(this.interRock){
        clearInterval(this.interRock)
      }
      if(this.boxHeigth != 0){
        this.interDownRock = setInterval(() => {
        this.boxHeigth = this.boxHeigth + 1;
        if(this.boxHeigth >= 14){
          this.bloodBox.style.height = 14 + '%';
          clearInterval(this.interDownRock)
        }else{
          this.bloodBox.style.height = this.boxHeigth + '%';
        }
      },150)
      }
      if(this.boxHeigth == 0){
        //发射吧
        this.$refs.audio3.play()
        setTimeout(() => {
          this.$refs.video1.style.display = 'block'
          this.$refs.video1.play()
          this.isRockShow = false;
        },400)
      }
    },
    prevent(e){
      /*阻止浏览器默认事件，防止移动端长按底部出现默认弹窗 */
      e.preventDefault();
    },
    messagesChange(){ 
      this.formItem.messages = [...this.formItem.messages, this.messages_others]
    },
    servesChange(){
      this.formItem.serves = [...this.formItem.serves, this.serves_others]
    },
    contentsChange(){
      this.formItem.contents = [...this.formItem.contents, this.contents_others]
    },
  },
  mounted(){
    on(this.$refs.video1, 'timeupdate', this.timeUpdate1)
    on(this.$refs.video1, 'click', this.video1Click)
  }
}
</script>
