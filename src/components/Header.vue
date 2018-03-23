<template>
    <div class="header">
        <h1>Vue.js와 Firebase로 만든 게시판</h1>
    </div>
</template>

<script>
export default {
    name : "Header"
}
</script>

<style scoped>
.header{height:50px;width:100%;background: rgb(197,222,234);
background: -moz-linear-gradient(-45deg, rgba(197,222,234,1) 0%, rgba(138,187,215,1) 31%, rgba(6,109,171,1) 100%);
background: -webkit-linear-gradient(-45deg, rgba(197,222,234,1) 0%,rgba(138,187,215,1) 31%,rgba(6,109,171,1) 100%);
background: linear-gradient(135deg, rgba(197,222,234,1) 0%,rgba(138,187,215,1) 31%,rgba(6,109,171,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#c5deea', endColorstr='#066dab',GradientType=1 );}
.header h1{color:#fff;font-weight:500;font-size:20px;line-height:50px;text-align:center;text-shadow:1px 1px #666;}
</style>

