<template>
  <nav>
      <div class="container">
          <div class="row">
              <div class="col-12 nav-logo">
                  <img class="nav-logo__image" src="~/assets/images/logo.png" alt="Frank Grimes & The Disasters">
                  <button class="nav-logo__toggle" :class="this.navOpen ? 'nav-logo__toggle--active' : '' " @click="toggleNav()">
                      <span class="nav-logo__toggle-line"></span>
                      <span class="nav-logo__toggle-line"></span>
                      <span class="nav-logo__toggle-line"></span>
                  </button>
              </div>
              <div id="menu" class="col-12 nav-links" :class="this.navOpen ? 'nav-links--open' : '' ">
                  <ul>
                      <li><NuxtLink class="nav-link" to="/"><home-icon/> Home</NuxtLink></li>
                      <li><NuxtLink class="nav-link" to="/releases"><music-icon/> Releases</NuxtLink></li>
                      <li><a class="nav-link" href="https://frankgrimesandthedisasters.bigcartel.com/" target="_blank"><shopping-bag-icon/> Store</a></li>
                      <li><a class="nav-link" href="https://www.twitch.tv/frankgamesandthedisasters" target="_blank"><twitch-icon/> Frank Games</a></li>
                      <li><NuxtLink class="nav-link" to="/contact"><mail-icon/> Contact</NuxtLink></li>
                  </ul>
              </div>
          </div>
      </div>
  </nav>
</template>

<style lang="scss" scoped>
    @import "~/assets/scss/navigation";
</style>

<script>
    export default {
        data () {
            return {
                navOpen: false
            }
        },
        props: {
        },
        methods: {
            toggleNav() {
                this.navOpen = !this.navOpen;
                this.slideToggle(document.getElementById('menu'), 200)
            },
            slideUp(target) {
                var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
                target.style.transitionProperty = 'height, margin, padding';
                target.style.transitionDuration = duration + 'ms';
                target.style.boxSizing = 'border-box';
                target.style.height = target.offsetHeight + 'px';
                target.offsetHeight;
                target.style.overflow = 'hidden';
                target.style.height = 0;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout(function () {
                    target.style.display = 'none';
                    target.style.removeProperty('height');
                    target.style.removeProperty('padding-top');
                    target.style.removeProperty('padding-bottom');
                    target.style.removeProperty('margin-top');
                    target.style.removeProperty('margin-bottom');
                    target.style.removeProperty('overflow');
                    target.style.removeProperty('transition-duration');
                    target.style.removeProperty('transition-property'); //alert("!");
                }, duration);
            },
            slideDown(target) {
                var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
                target.style.removeProperty('display');
                var display = window.getComputedStyle(target).display;
                if (display === 'none') display = 'block';
                target.style.display = display;
                var height = target.offsetHeight;
                target.style.overflow = 'hidden';
                target.style.height = 0;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.boxSizing = 'border-box';
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + 'ms';
                target.style.height = height + 'px';
                target.style.removeProperty('padding-top');
                target.style.removeProperty('padding-bottom');
                target.style.removeProperty('margin-top');
                target.style.removeProperty('margin-bottom');
                window.setTimeout(function () {
                    target.style.removeProperty('height');
                    target.style.removeProperty('overflow');
                    target.style.removeProperty('transition-duration');
                    target.style.removeProperty('transition-property');
                }, duration);
            },
            slideToggle(target) {
                var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

                if (window.getComputedStyle(target).display === 'none') {
                    return this.slideDown(target, duration);
                } else {
                    return this.slideUp(target, duration);
                }
            }
        },
        watch: {
            '$route.path': function() {
                this.toggleNav()
            }
        }
    }
</script>