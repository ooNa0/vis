<template>
<v-container>
    <v-row 
    class="text-center">
      <v-col cols="12">
                <h1 class="display-2 font-weight-bold mb-3">
Hello KCC World
        </h1>
<p class="subheading font-weight-regular">
          유튜브 동영상 코드를 입력 후, 엔터
          <br>
        </p>
      </v-col>
      <v-col
          cols="12"
    max-width="50"
        >
          <v-text-field
    max-width="5"
          @keyup.enter="onKeywordEnter"
            label="Filled"
            placeholder="Placeholder"
            filled
          ></v-text-field>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import axios from 'axios'

  const YOUTUBE_API_KEY = 'AIzaSyB8cdHFXsh7ZFeorcupDDfBecFUsGJL75o'
  const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/commentThreads'

  export default {
    name: 'SearchBar',
    data:function() {
return {
  count: 1,
      comment: [],
      comments: [],
    };
},
    methods: {
      async onKeywordEnter(event) {
        const keyword = event.target.value
        const config = {
          params: {
            part: 'snippet',
            order: 'relevance',
            videoId: keyword, // 영상 id 입력, 구축할때 안내 메시지 보내주기 예제 RnThoz_bjr0
            key: YOUTUBE_API_KEY,
            maxResults: 100 // 댓글은 한번에 최대 100개씩만 요청
          },
        }
        // 댓글 65개 ub5fsWIMnSo
        // 댓글 152개 fHoxpZRKvNk

        //axios.get(YOUTUBE_API_URL, config)

        const response = await axios.get(YOUTUBE_API_URL, config)

       //while(response){
        for(var item of response.data.items){
          this.comment = item.snippet.topLevelComment.snippet
          this.comments.push([this.comment['textDisplay'], this.comment['authorDisplayName'], this.comment['publishedAt'], this.comment['likeCount']])
        }
        
        //     if item['snippet']['totalReplyCount'] > 0: // 댓글에 대한 댓글(reply)이 있는 경우 수집합니다
        // for reply_item in item['replies']['comments']:
        //     reply = reply_item['snippet']
        //     comments.append([reply['textDisplay'], reply['authorDisplayName'], reply['publishedAt'], reply['likeCount']])
  /*
        console.log("resopnese =", response)
        console.log("'nextPageToken' in response.data=", 'nextPageToken' in response.data)
        console.log("'nextPageToken =", response.data.nextPageToken)
    if('nextPageToken' in response.data){ // 아직 동영상에서 가져올 댓글이 남은 경우 nextPageToken을 기반으로 API를 다시 호출합니다
         const config = {
          params: {
            part: 'snippet',
            videoId: keyword, // 영상 id 입력, 구축할때 안내 메시지 보내주기 예제 RnThoz_bjr0
            key: YOUTUBE_API_KEY,
            maxResults: 100, // 댓글은 한번에 최대 100개씩만 요청
            pageToken: response.data.nextPageToken,
          },
        }
        const response = await axios.get(YOUTUBE_API_URL, config)
    }
    else{
      break
    }*/
       //}

        console.log("comments =", this.comments)
        console.log("comments1 =", this.comments[1])
        console.log("comments2 =", this.comments[2])
        console.log(response)
        //const commentList = response.data.items
        //console.log(response.data)
        // 부모한테 올리기 케밥케이스 비디오리스트를 app.vue methods 에넘긴다.
        this.$emit('on-keyword-enter', this.comments)
      },
    },
    loadClient(){
    }
  }
</script>

<style>

</style>