<template>
  <v-app>
    <v-main>
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
          <v-btn @click="onKeywordEnter">검색</v-btn>
        </v-col>
    </v-row>
  </v-container>
      <AreaChart/>
      <CommentList
      v-bind:commentChildList="commentdataList"/>
    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
import AreaChart from './components/AreaChart';
//import GetComment from './components/GetComment';
import CommentList from './components/CommentList';
//import { PythonShell } from "python-shell";

export default {
  name: 'App',

  components: {
    AreaChart, CommentList,
  },
  data: function ()  {
    return {
      commentdataList: [],
    }
  },
  methods: {
    onKeywordEnter() {
      //const keyword = event.target.value
      // const result = require('child_process')
      // .spawn('python', [ '../../../../GoEmotions/bert_classifier.py', keyword]);
      // //.spawn('python', [ '../../../../GoEmotions/bert_classifier.py', keyword, '매개변수2']);
      // result.stdout.on('data', function(data) {
      // console.log(data.toString());
      // });


// const { spawn } = require('child_process');
// const temperatures = []; // Store readings

// const sensor = spawn('python3', ['test.py']);
// sensor.stdout.on('data', function(data) {

//     // convert Buffer object to Float
//     temperatures.push(parseFloat(data));
//     console.log(temperatures);
// });

const spawn = require('child_process').spawn; 
const result = spawn('python', ['test.py']); 
result.stdout.on('data', function(data) 
{ console.log(data.toString()); }); 
result.stderr.on('data', function(data) { console.log(data.toString()); });

    //   let options = {
    //   scriptPath: "./src/python/",
    //   args: [1, 2]
    // }; //../../../../GoEmotions/bert_classifier.py
    // PythonShell.run("test.py", options, (err, data) => {
    //   if (err) throw err;
    //   console.log(data);
    // });
    },

// 1. child-process모듈의 spawn 취득 const spawn = require('child_process').spawn; // 2. spawn을 통해 "python 파이썬파일.py" 명령어 실행 const result = spawn('python', ['파이썬파일.py']); // 3. stdout의 'data'이벤트리스너로 실행결과를 받는다. result.stdout.on('data', function(data) { console.log(data.toString()); }); // 4. 에러 발생 시, stderr의 'data'이벤트리스너로 실행결과를 받는다. result.stderr.on('data', function(data) { console.log(data.toString()); });


  },
};
</script>