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
                                    <template slot-scope='scope'>
                                        <el-button type='text' size='small'>删除</el-button>
                                        <el-button type='text' size='small'>增加</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </el-tab-pane>
                        <el-tab-pane label='外卖'>
                            外卖
                        </el-tab-pane>
                        <el-row class='sure-btns'>
						  <el-button type="primary">取消</el-button>
						  <el-button type="success">结算</el-button>						 
						</el-row>
                    </el-tabs>
                </el-col>
                
                <el-col :span='15'>
                	<div class="pro">
                        <div class="title">常用商品</div>
                        <div class="pro-list">
                            <ul class="used-pro">
                               <li v-for='lly in pros'>
                                   <span>{{lly.name}}</span>
                                   <span class="pro-pri">￥{{lly.pri}}</span>
                               </li>
                            </ul>
                        </div>
                    </div>
                    <div class="pro-type">
                        <el-tabs>
                            <el-tab-pane label='组合区'>
                                <ul class="ckList">
                                    <li v-for='val in groupData1' class="food-list">
                                        <span class="foodImg"><img :src="val.img" alt=""></span>
                                        <div>
                                        	<span class="foodName">{{val.name}}</span>
                                            <span class="foodPri">￥{{val.pri}}</span>
                                        </div>
                                        <el-row>  
										  <el-button type="success" plain>加入清单</el-button>				  
										</el-row>
                                    </li>
                                </ul>
                            </el-tab-pane>
                            <el-tab-pane label='套餐区'>
                                <ul class="ckList">
                                    <li v-for='val in groupData2' class="food-list">
                                        <span class="foodImg"><img :src="val.img" alt=""></span>
                                        <span class="foodName">{{val.name}}</span>
                                        <span class="foodPri">￥{{val.pri}}</span>
                                    </li>
                                </ul>
                            </el-tab-pane>
                            <el-tab-pane label='全家桶'>
                                <ul class="ckList">
                                    <li v-for='val in groupData3' class="food-list">
                                        <span class="foodImg"><img :src="val.img" alt=""></span>
                                        <span class="foodName">{{val.name}}</span>
                                        <span class="foodPri">￥{{val.pri}}</span>
                                    </li>
                                </ul>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
	import axios from 'axios'
	export default {
		name: "Home",
	  data(){
	      return {
	        "tableData":[],
	        "pros":[],
	        "groupData1":[],
	        "groupData2":[],
	        "groupData3":[]
	       }
	  },
	  mounted(){
	        let h = document.body.clientHeight;
	        let list = document.querySelector('#list');
	        list.style.height = h + 'px';
	    },
	   created(){
	         axios.get('../static/datas.json')
	        .then(res => {
	            this.tableData = res.data.tableData;
	            this.pros = res.data.pros;
	            this.groupData1 = res.data.groupData1;
	            this.groupData2 = res.data.groupData2;
	            this.groupData3 = res.data.groupData3;
	        })
	        .catch(err => {
	            console.log('网络出错，无法访问')
	        })
       } 
	}
</script>
<style scoped="">
	.sure-btns{
		text-align: center;
		margin-top: 5px;
	}
	.title{
		width: 100%;
		height: 50px;
		background: #42B983;
		line-height: 50px;
		text-align: center;
	}
	.used-pro{
		width: 100%;
		overflow: hidden;
	}
	.used-pro>li{
		width: 100px;
		height: 50px;
		border: 1px solid #42B983;
		float: left;
		margin-left: 10px;
		list-style: none;
		line-height: 50px;
		text-align: center;
		margin-top: 20px;
	}
	.food-list{
		width: 200px;
		float: left;
		margin: 10px;
		border: 1px solid darkkhaki;
		list-style: none;
		text-align: center;
	}
	.foodImg>img{
		width: 100%;
	}
	.foodName{
		width: 100%;		
	}
	.foodPri{
		width: 100%;
	}
</style>
	
