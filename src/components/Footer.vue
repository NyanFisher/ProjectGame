<template>
    <footer class="footer">
      <CopyRight/>
    </footer>
</template>

<script>
import CopyRight from '@/components/CopyRight'
export default {
    name: "Footer",
    components: {
        CopyRight
    }
}
</script>

<style>
.footer {
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 80px;
    background-color: #443d3a;
    color: #ffffff;
}
</style>