<template>
    <div class="copyright">
        <div class="container">
            <p class="footer-copyright">
                <small class="footer-copyright-small">
                    {{copyright}} 
                </small>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name: "CopyRight",
    data() {
        return {
            copyright: `@ ${new Date().getFullYear() || '2020'} NFCompany`,
        }
    }
}
</script>
<style scoped>
.copyright {
    padding: 20px 0;
}

.footer-copyright {
    text-align: center;
    margin: 0;
}
.container{
    justify-content: center;
}
</style>
