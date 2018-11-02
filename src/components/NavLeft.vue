<template>
	<div class="main">
		<ul>
			<li>
				<i class="iconfont icon-canyin"></i>
				<span class="caozuo">点餐</span>
			</li>
			<li>
				<i class="iconfont icon-canyin"></i>
				<span class="caozuo">店铺</span>
			</li>
			<li>
				<i class="iconfont icon-canyin"></i>
				<span class="caozuo">会员</span>
			</li>
			<li>
				<i class="iconfont icon-canyin"></i>
				<span class="caozuo">我</span>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name:'NavLeft',
		data(){
			return {
				
			}
		}
	}
</script>
<style scoped="">
	*{
		margin: 0;
		padding: 0;
	}
	.main{
		height: 100%;
		width: 60px;
		float: left;
		background: #42B983;
	}
	.main>ul{
		height: 100%;
		width: 100%;
	}
	.main li{
		width: 100%;
		height: 70px;
		list-style: none;
		margin-top:10px ;
		border-bottom: 1px solid darkcyan;
	}
	.main li i{
		font-style: normal;		
	}
	.iconfont{
		display: block;
		width: 100%;
		text-align: center;
		padding-bottom: 5px;
		font-size:30px;
	}
	.caozuo{
		display: inline-block;
		width: 100%;
	    text-align: center;
	}
</style>