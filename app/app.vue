<script setup lang="ts">
const { data } = await useFetch('/api/ping?url=https://blog.linqihu.top')//在此处应指定URL，否则api使用默认URL
</script>

<template>
  <h1>Ping 结果：</h1>
  <pre>{{ data }}</pre>
</template>

<style></style>