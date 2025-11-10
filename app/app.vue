<script setup lang="ts">
const { data } = await useFetch('/api/ping?url=https://blog.linqihu.top')
</script>

<template>
<h1>Ping 结果：</h1>  
<pre>{{ data }}</pre>
</template>

<style>

</style>