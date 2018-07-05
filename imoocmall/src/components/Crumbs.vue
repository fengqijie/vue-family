<template>
    <div class="breadcrumb">
        <a href="javascript:;">Home / </a>
        <slot name="first"></slot>
        <slot name="second"></slot>
    </div>
</template>

<style>
.breadcrumb {
    background-color: #fafafa;
    text-align: left;
    padding: 10px 30px;
    margin-bottom: 30px;
}
.breadcrumb a {
    color: #333;
    text-decoration: none;
}
.breadcrumb span {
    color: #999;
}
</style>
