<template>
  
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    get() {
      axios
        .get("package.json", {
          params: {
            userId: "999"
          },
          headers: {
            token: "jack"
          }
        })
        .then(res => {
          this.msg = res.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted() {
    // 请求拦截（配置发送请求的信息）
    axios.interceptors.request.use(
      function(config) {
        //数组
        const color = ["red", "yellow"];
        const colorful = [...color, "green", "pink"];
        console.log(colorful); //[red, yellow, green, pink]

        //对象
        const alp = { fist: "a", second: "b" };
        const alphabets = { ...alp, third: "c" };
        console.log(alphabets); //{ "fist": "a", "second": "b", "third": "c"
      },
      function(error) {
        // 请求失败的处理
        return Promise.reject(error);
      }
    );

    // 响应拦截（配置请求回来的信息）
    axios.interceptors.response.use(
      function(response) {
        // 处理响应数据
        return response;
      },
      function(error) {
        // 处理响应失败
        return Promise.reject(error);
      }
    );
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
