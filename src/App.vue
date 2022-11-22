<template>
  <div class="stats-root">
    <Menu v-if="$route.meta.isMenu" />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Menu from '@/components/Menu.vue';
</script>

<style lang="scss">
.stats-root {
  display: flex;
  width: 100%;
  flex-grow: 1;
}

main {
  // max-width: 57.44rem;
  // margin: 0 auto;
}



img[alt] {
  color: transparent;
}

img:after {
  font-weight: 900;
  font-family: "Font Awesome 5 Pro";
  content: "\f071" " Broken Image of " attr(alt);
  display: block;
  font-size: 16px;
  font-style: normal;
  color: rgb(100, 100, 100);

  position: absolute;
  top: 40%;
  width: 100%;
  text-align: center;
}

b,
strong {
  font-weight: bold;
}

blockquote {
  border-left: 0.3em solid grey;
  margin-top: 1em;
  margin-bottom: 1em;
  font-style: italic;

  p {
    padding: 0.6em 2em;
  }
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sup {
  top: -0.5em;
}

sub {
  bottom: -0.25em;
}

i,
em {
  font-style: italic;
}

input,
textarea,
button,
select,
div,
a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

a {
  text-decoration: none;
  color: inherit;
}

* {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
}

img {
  background-color: lightgray;
  object-fit: cover;
}

.limited-text {
  --snup: 3;
  display: -webkit-box;
  -webkit-line-clamp: var(--snup);
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease !important;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
