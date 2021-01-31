<template>
    <footer class="site-footer">
        <div class="container">
            <div class="row">
                <div class="md:col-3 md:offset-2">
                    &copy; {{ new Date().getFullYear() }} Frank Grimes & The Disasters
                </div>
                <div class="md:col-3 md:offset-2 md:text-right">
                    <NuxtLink to="/privacy">Privacy</NuxtLink>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        data () {
            return {}
        }
    }
</script>