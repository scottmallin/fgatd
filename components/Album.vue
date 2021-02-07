<template>
    <div class="single-release lg:col-6 col-12">
        <div class="single-release__wrapper">
            <img :src="artwork" :alt="title" loading="lazy" width="768" />
            <div class="single-release__info">
                <div>
                    <h3 class="single-release__title">{{ title }}</h3>
                    <ul>
                        <li><a :href="spotify" target="_blank" rel="noopener noreferrer">Spotify</a></li>
                        <li><a :href="apple" target="_blank" rel="noopener noreferrer">Apple Music</a></li>
                        <li><a :href="prime" target="_blank" rel="noopener noreferrer">Prime Music</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "~/assets/scss/album";
</style>

<script>
    export default {
        data () {
            return {}
        },
        props: {
            title: String,
            artwork: String,
            spotify: String,
            apple: String,
            prime: String
        }
    }
</script>