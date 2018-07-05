<template>
    <div class="body_content">
        <nav-header></nav-header>
        <bread-crumbs>
            <span slot="first">一级</span>
            <span slot="second">二级</span>
        </bread-crumbs>
        <div>
            <dl class="price_filter">
                <dt>Price:</dt>
                <dd><a href="javascript:void(0)" v-bind:class="{'cur':priceChecked=='all'}" @click="priceChecked='all'">All</a></dd>
                <dd v-for="(price,index) in priceFilter" :key="price.id" @click="priceChecked=index">
                    <a href="javascript:void(0)" v-bind:class="{'cur':priceChecked==index}">{{price.startPrice}} - {{price.endPrice}}</a>
                </dd>
            </dl>
            <ul class="product_list clearfix">
                <li v-for="list in dataList" :key="list.id">
                    <div><img v-lazy="list.productImg" alt=""/></div>
                    <div>{{list.productName}}</div>
                    <div>{{list.productPrice}}</div>
                </li>
            </ul>
        </div>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import NavHeader from "@/components/Header";
import BreadCrumbs from "@/components/Crumbs";
import NavFooter from "@/components/Footer";
import axios from "axios";

export default {
  name: "GoodsList",
  data() {
    return {
      dataList: [],
      priceFilter: [
          {
              startPrice: "0.00",
              endPrice: "500.00"
          },
          {
              startPrice: "500.00",
              endPrice: "100.00"
          },
          {
              startPrice: "1000.00",
              endPrice: "5000.00"
          }
      ],
      priceChecked: "all"
    };
  },
  components: {
    NavHeader,
    BreadCrumbs,
    NavFooter
  },
  mounted() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      axios.get("/goods").then(request => {
        var res = request.data;
        this.dataList = res.result;
      });
    }
  }
};
</script>

<style>
.body_content {
    width: 1080px;
    margin: 0 auto;
}
.price_filter {
    margin-bottom: 20px;
}
.price_filter dt {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
}
.price_filter dd {
    margin-bottom: 10px;
}
.price_filter a.cur {
    color: #ff9a47;
}
.product_list {
    margin-bottom: 30px;
}
.product_list li {
  float: left;
  padding: 20px;
  margin-right: 20px;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  transition: all .4s ease 0s;
  -webkit-box-shadow: 0px 2px 4px #f0f0f0;
  -moz-box-shadow: 0px 2px 4px #f0f0f0;
  -ms-box-shadow: 0px 2px 4px #f0f0f0;
  box-shadow: 0px 2px 4px #f0f0f0;
}
.product_list li:hover {
  -webkit-box-shadow: 0px 20px 20px #d2d2d2;
  -moz-box-shadow: 0px 20px 20px #d2d2d2;
  -ms-box-shadow: 0px 20px 20px #d2d2d2;
  box-shadow: 0px 20px 20px #d2d2d2;
}
.product_list li img,
.product_list li .img {
  display: inline-block;
  width: 220px;
  height: 220px;
}
</style>


