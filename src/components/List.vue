<template>
    <div class="list">
        <p class="sub-title">게시글 목록</p>
        <p class="message-num">총 게시물 수 : {{board.length}}개</p>
        <table ref="board">
            <caption style="display:none;">게시글 목록</caption>
            <colgroup>
                <col width="10%" />
                <col width="60%" />
                <col width="15%" />
                <col width="15%" />
            </colgroup>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="text in board.slice().reverse()" v-bind:key="text['.key']" >
                    <td>{{text.order}}</td>
                    <td><router-link :to="'/view/'+text['.key']">{{text.title}}</router-link></td>
                    <td>{{text.writer}}</td>
                    <td>{{text.date}}</td>
                </tr>
            </tbody>
        </table>
        <div class="btn-right">
            <router-link to="write">글쓰기</router-link>
        </div>
    </div>
</template>

<script>
import {boardRefs} from "../config/firebase"

export default {
    name : "List",
    firebase : {
        board : boardRefs
    }

}
</script>

<style>
a{text-decoration:none;}
.list{width:1000px;margin:0 auto;padding:100px 0;min-height:500px;}
.sub-title{margin-bottom:10px;font-size:16px;color:#06f;font-weight:600;}
.list .message-num{font-size:12px;color:#333;}
table{margin-top:20px;border-top:2px solid #666;text-align:center;}
.list table th,.list table td{padding:15px 0;}
.list table thead th{font-weight:600;font-size:14px;text-align:center;border-bottom:1px solid #999;color:#000;background:#f6f6f6;}
.list table tbody td{font-size:14px;text-align:center;border-bottom:1px solid #999;}
.list table tbody tr:hover td{background:#f6f6f6;}
.list table tbody td:nth-child(2){text-align:left !important;}
.list table tbody td:nth-child(2) a:hover{color:#f26532;text-decoration:underline;}
.list table tbody td a{display:block;color:#007bff;font-weight:600;}
.btn-right{margin-top:30px;text-align:right;}
.btn-right a{vertical-align:middle;font-weight:600;display:inline-block;box-sizing:border-box;border:none;cursor:pointer;height:32px;width:86px;border:1px solid #c1c1c1;color:#333;text-align:center;box-shadow:0 2px #f3f3f3;
border-radius:4px;background:#fff;line-height:32px;}
.btn-right button{vertical-align:middle;font-weight:600;display:inline-block;box-sizing:border-box;border:none;cursor:pointer;height:32px;width:86px;border:1px solid #c1c1c1;color:#333;text-align:center;box-shadow:0 2px #f3f3f3;
border-radius:4px;background:#fff;line-height:32px;}

@media screen and (min-width:320px) and (max-width:1024px){
.list{width:100%;padding-top:20px;padding-bottom:50px;min-height:400px;}  
.sub-title{padding-left:10px;}
.message-num{padding-left:10px;}
.btn-right{padding-right:10px;}
}

</style>

