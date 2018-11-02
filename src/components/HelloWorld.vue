<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>恩恩</h2>
    <ul>
      你好
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '你好主人'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
<!--
	<template>
    <div class="pos">
        <div>
            <el-row>
                <el-col :span='7' id="list">
                    <el-tabs>
                        <el-tab-pane label='点餐'>
                            <el-table :data='tableData' border show-summary style="width:100%">
                                <el-table-column label='商品' prop='names'></el-table-column>
                                <el-table-column label='量' prop='count'></el-table-column>
                                <el-table-column label='金额' prop='pri'></el-table-column>
                                <el-table-column label='操作'>
                                    <template scope>
                                        <el-button type='text' size='small'>删除</el-button>
                                        <el-button type='text' size='small'>增加</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </el-tab-pane>
                        <el-tab-pane label='外卖'>
                            外卖
                        </el-tab-pane>
                    </el-tabs>
                </el-col>
                <el-col :span='15'>
                    产品
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
  name: "Pos",
  data(){
      return {
          tableData:[
              {
                  names:'可乐',
                  pri:8,
                  count:1
              },
              {
                  names:'鸡腿',
                  pri:10,
                  count:1
              },
              {
                  names:'薯条',
                  pri:5,
                  count:1
              }
          ]
      }
  },
  mounted(){
        let h = document.body.clientHeight;
        let list = document.querySelector('#list');
        list.style.height = h + 'px';
    }
}
</script>
<style scoped>
/* 因为虚拟dom的关系，这些元素无法继承到父亲的高度
    所以，我们需要用到js去给予一点帮助
*/
    #list{
        height: 100%;
    }
</style>


import ElementUi from 'element-ui'
/* 不加文件后缀名，就相当于引入模块，就会去src下面找，加了后缀名就是引入文件了 */
import 'element-ui/lib/theme-chalk/index.css'

	
	
	<el-col :span='15'>
                    <div class="pro">
                        <div class="title">常用商品</div>
                        <div class="pro-list">
                            <ul>
                               <li v-for='lly in pros'>
                                   <span>{{lly.name}}</span>
                                   <span class="pro-pri">￥{{lly.pri}}</span>
                               </li>
                            </ul>
                        </div>
                    </div>
                    <div class="pro-type">
                        <el-tabs>
                            <el-tab-pane label='肥宅区'>
                                <ul class="ckList">
                                    <li v-for='val in goodType1'>
                                        <span class="foodImg"><img :src="val.img" alt=""></span>
                                        <span class="foodName">{{val.name}}</span>
                                        <span class="foodPri">￥{{val.pri}}</span>
                                    </li>
                                </ul>
                            </el-tab-pane>
                            <el-tab-pane label='儿童区'>
                                <ul class="ckList">
                                    <li v-for='val in goodType2'>
                                        <span class="foodImg"><img :src="val.img" alt=""></span>
                                        <span class="foodName">{{val.name}}</span>
                                        <span class="foodPri">￥{{val.pri}}</span>
                                    </li>
                                </ul>
                            </el-tab-pane>
                            <el-tab-pane label='LLY区'>
                                <ul class="ckList">
                                    <li v-for='val in goodType3'>
                                        <span class="foodImg"><img :src="val.img" alt=""></span>
                                        <span class="foodName">{{val.name}}</span>
                                        <span class="foodPri">￥{{val.pri}}</span>
                                    </li>
                                </ul>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                </el-col>

	created(){
      axios.get('http://localhost:8080/static/data.json')
        .then(res => {
            this.tableData = res.data.tableData;
            this.pros = res.data.pros;
            this.goodType1 = res.data.goodType1;
            this.goodType2 = res.data.goodType2;
            this.goodType3 = res.data.goodType3;
        })
        .catch(err => {
            console.log('网络出错，无法访问')
        })
  }

-->