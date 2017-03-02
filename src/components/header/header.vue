<template>
	<div class="header">
	    <div class="container">
	    	<div class="h-top">
			    <h1>起点中文网</h1>
			    <div class="t-male-female">
				    <span class="male active">男生</span><span class="female">女生</span>
			    </div>
			    <div class="t-info">
				    <span class="user"></span><span class="bookcase"></span>
			    </div>
		    </div>
		    <div class="h-carousel"></div>
		    <div class="h-search"></div>
	    </div>
		<div class="h-navigation"></div>
	</div>
</template>
<script>
	export default {}
</script>
<style>
    .header .container {
    	margin: 0.28125rem 24px 0;
        width: auto;
    }
    .header .h-top {
    	position: relative;
    }
	.header .h-top h1 {
		float: left;
        width: 3.03125rem;
        height: 0.84375rem;
        color: transparent;
        background: url("header-logo.png") no-repeat;
        background-size: 3.03125rem 0.84375rem;
	}
	.header .h-top .t-male-female {
		position: absolute;
		top: 0;
		left: 50%;
		margin-left: -1.59375rem;
	}
	.header .h-top .t-male-female span {
		display: inline-block;
        width: 1.5625rem;
        line-height: 0.8125rem;
        height: 0.8125rem;
        border: 0.03125rem solid #ed424b;
        text-align: center;
        font: normal;
        color: #ed424b;
	}
	.header .h-top .t-male-female span.male {
		border-right: none;
		border-radius: 0.125rem 0 0 0.125rem;
	}
	.header .h-top .t-male-female span.female {
		border-left: none;
		border-radius: 0 0.125rem 0.125rem 0;
	}
	.header .h-top .t-male-female span.active {
		background-color: #ed424b;
		color: #fff;
		font-weight: bold;
	}
	.header .h-top .t-info {
		float: right;
		display: inline-block;
	}
	.header .h-top .t-info span {
		display: inline-block;
		width: 0.84375rem;
		height: 0.84375rem;
	}
	.header .h-top .t-info .user {
		background: url("header-user.png");
		background-size:  0.84375rem 0.84375rem;
		margin-right: 0.375rem;
	}
	.header .h-top .t-info .bookcase {
		background: url("header-bookcase.png");
		background-size:  0.84375rem 0.84375rem;
	}
</style>
