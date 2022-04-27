<template>
  <v-card
    class="mx-auto"
    max-width="1200"
  >
    <v-list>
      <v-btn @click="aaa">dd</v-btn>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="child in item.items"
          :key="child.title"
        >
          <v-list-item-content>
            <v-list-item-title v-text="child.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    props: ["commentChildList"],
    methods: {
      aaa: function() {
        console.log('childData', this.$parent.commentdataList);
        console.log('commentChildList', this.commentChildList);
        console.log('??!!!');
        this.inputdata = this.commentChildList;
        //console.log(this.inputdata);

      var pluginArrayArg = new Array();
        for(var i = 0; i < 10; i++){
          var jsonArg1 = new Object();
          //jsonArg1.name = 'title';
          jsonArg1["title"] = this.commentChildList[i][0];
          pluginArrayArg.push(jsonArg1);  
        }


        var jsonArray = JSON.parse(JSON.stringify(pluginArrayArg))
        console.log(jsonArray);
        //this.items[0]['items'][0]['title'] = this.commentChildList[0];
        this.items[0]['items'][0] = jsonArray;
        //console.log(this.commentChildList);
        //console.log(this.commentChildList[0]);
        console.log(this.items[0]['items'][0]);
        console.log(this.items[1]['items']);
        //console.log(this.items);
//         for (var step = 0; step < 15; step++) {
//         this.items[0]['items'][step]['title'] = this.commentChildList[0][step];
// }
      }
    },
    data: () => ({
      inputdata: [],
      items: [
        {
          action: 'mdi-ticket',
          items: [{ title: 'dd' }],
          title: '즐거움',
        },
        {
          action: 'mdi-silverware-fork-knife',
          active: true,
          items: [
            { title: '와 이거 너무 웃기다.' },
            { title: '하하하' },
            { title: '즐거워' },
          ],
          title: '행복',
        },
        {
          action: 'mdi-school',
          items: [{ title: '파고네' }],
          title: '화남',
        },
        {
          action: 'mdi-human-male-female-child',
          items: [{ title: '졸려' }],
          title: '슬픔',
        },
        {
          action: 'mdi-bottle-tonic-plus',
          items: [{ title: '으앙' }],
          title: '낙천',
        },
        {
          action: 'mdi-briefcase',
          items: [{ title: '긱사 ?' }],
          title: '의문',
        },
        {
          action: 'mdi-tag',
          items: [{ title: '오예~' }],
          title: '자신감',
        },
      ],
    }),
  }
</script>