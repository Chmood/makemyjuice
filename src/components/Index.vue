<template>
  <q-layout>
    <!-- TOPBAR -->
    <div slot="header" class="toolbar">
      <button class="hide-on-drawer-visible" @click="$refs.leftDrawer.open()">
        <i>menu</i>
      </button>
      <q-toolbar-title :padding="1">
        MakeMyJuice
        <!-- <img src="~assets/quasar-logo.png" alt="Quasar logo" class="topbar-logo"> -->
      </q-toolbar-title>
      <span v-if="isOnline"><i>wifi</i> ONLINE</span>
      <span v-else><i>signal_wifi_off</i> OFFLINE</span>
      <button @click="$refs.rightDrawer.open()">
        <i>assignment</i>
      </button>
    </div>

    <!-- SEARCHBAR -->
    <!-- <div slot="header" class="toolbar primary">
      <q-search class="primary"
        :debounce="600"
        placeholder="Search"
        icon="search"
      ></q-search>
    </div> -->

    <!-- DRAWER (LEFT MENU) -->
    <q-drawer ref="leftDrawer">
      <div class="toolbar light" style="padding-left: 0;">
        <q-toolbar-title>
          <i class="user-icon">perm_identity</i>
        </q-toolbar-title>
      </div>

      <div class="list no-border platform-delimiter">
        <div class="list-label">{{ $t("menu") }}</div>
        <q-drawer-link icon="home" to="/">
          {{ $t("calculator") }}
        </q-drawer-link>
        <!-- <q-drawer-link icon="mail" to="/messages">
          Messages
          <span class="floating label bg-primary">{{ nMessagesUnread }}</span>
        </q-drawer-link> -->
        <q-drawer-link icon="shopping_cart" to="/ingredients">
          {{ $tc("ingredient", 2) }}
          <!-- <span class="floating label bg-primary">{{ nMessagesUnread }}</span> -->
        </q-drawer-link>
        <q-drawer-link icon="build" to="/settings">
          {{ $tc("setting", 2) }}
        </q-drawer-link>
        <!-- <hr>
        <q-drawer-link icon="account_box" to="/profile" exact>
          Profile
        </q-drawer-link>
        <div class="item item-link" @click="confirmLogout">
          <i class="item-primary">lock</i>
          <div class="item-content">Log out</div>
        </div> -->
      </div>
    </q-drawer>

    <!-- MAIN AREA -->
    <div class="layout-view">
      <!-- <OfflineIndicator message="Oh no, you're offline :("></OfflineIndicator> -->

      <div class="layout-padding">

        <!-- <ul class="breadcrumb">
          <li> <a> <i>home</i> </a> </li>
          <li> <a> <i>mail</i> Quasar </a> </li>
          <li> <a> <i>cloud</i> Breadcrumb </a> </li>
        </ul> -->

        <!-- ROUTER VIEW (SECONDARY) -->
        <transition name="slide">
          <router-view>
          </router-view>
        </transition>
      </div>

    </div>

    <!-- DRAWER (RIGHT) -->
    <q-drawer right-side swipe-only ref="rightDrawer">
      <div class="toolbar light">
        <q-toolbar-title :padding="1">
          Right-side Drawer
        </q-toolbar-title>
      </div>

      <p style="padding: 25px;" class="text-grey-7">
        This is yet another Drawer that does not gets displayed alongside content on bigger screens.
      </p>

      <p style="padding: 25px;" class="text-grey-7">
        You are currently at <code>`{{ $route.path }}`</code> on the <code>`{{ $route.name }}`</code> view.
      </p>

      <p style="padding: 25px;" class="text-grey-7">
        Quasar Framework v{{$q.version}}
      </p>

      <p style="padding: 25px;">
        <button @click="notify" class="primary">NOTIFY!</button>
      </p>
    </q-drawer>

    <!-- FOOTER -->
    <!-- <div slot="footer" class="toolbar">
      <div class="auto flex justify-center within-iframe-hide">
        MakeMyJuice - Made with ❤ by&nbsp;<a href="https://twitter.com/nicolasgiethlen">Nicolas Giethlen</a>
      </div>
      <q-toolbar-title :padding="0" class="within-iframe-only">
        Footer in iframe
      </q-toolbar-title>
    </div> -->

  </q-layout>
</template>

<script>
import { mapGetters } from 'vuex'
// import { OfflineIndicator } from 'vue-online'
import { Dialog, Toast } from 'quasar'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'isOnline',
      'language'
    ])
  },
  methods: {
    updateIsOnline () {
      // Dumped from: https://github.com/Sopamo/vue-online/blob/master/src/VueOnline.js
      if (typeof window.navigator.onLine === 'undefined') {
        // If the browser doesn't support connection status reports
        // assume that we are online because most apps' only react
        // when they now that the connection has been interrupted
        this.$store.commit('SET_IS_ONLINE', { online: true })
      }
      else {
        this.$store.commit('SET_IS_ONLINE', { online: window.navigator.onLine })
      }
    },
    notify () {
      console.log('permission', Notification.permission)
      // Let's check if the browser supports notifications
      if (!('Notification' in window)) {
        alert('This browser does not support desktop notification')
      }
      // Let's check whether notification permissions have already been granted
      else if (Notification.permission === 'granted') {
        // If it's okay let's create a notification
        /* eslint-disable no-new */
        new Notification(
          'New Quasu notification !',
          {
            body: 'I am the body text!'
            // icon: 'img/quasar-logo.png' // optional
          }
        )
      }
      // Otherwise, we need to ask the user for permission
      else if (Notification.permission !== 'denied') {
        console.log('uhuh')
        Notification.requestPermission(function (permission) {
          // If the user accepts, let's create a notification
          if (permission === 'granted') {
            new Notification('Hi there!')
          }
          else {
            console.warn('Notification permission not granted!')
          }
        })
      }
      // At last, if the user has denied notifications, and you
      // want to be respectful there is no need to bother them any more.
    },
    routeTo (path) {
      // Programmatic routing
      const router = this.$root.$options.router
      router.replace({ path })
    },
    confirmLogout () {
      Dialog.create({
        title: 'Oh no, don\'t leave!',
        message: 'Are you really sure?',
        buttons: [
          {
            label: 'Cancel',
            handler () {
              console.log('Logout cancelled')
            }
          },
          {
            label: 'Log me out!',
            handler: () => {
              // Close the drawer
              this.$refs.leftDrawer.close()
              // Route to login page
              // this.routeTo('/login')
              Toast.create.positive(`You have logged out`)
            }
          }
        ]
      })
    }
  },
  mounted () {
    // Get the locale from the store and apply it
    this.$i18n.locale = this.language
  },
  beforeDestroy () {
  }
}
</script>

<style lang="scss">
  // not scoped for cascading into children

  @import "styles/main";

  .label {
    &.bg-primary {
      color: white !important; // OMFG TODO
      font-weight: bold;
    }
  }

  h2 {
    margin-top: 0;
    font-size: 2rem;
    text-transform: capitalize;
    font-weight: 300;
  }
  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    color: #666;

    &::after {
      content: ' //'
    }
  }
  h4 {
    font-size: 1.2rem;
    font-weight: 500;
    text-transform: capitalize;
  }

  // Input items

  .input-item {
    display: flex;
    margin-bottom: $gutter * 1.5;

    > * {
      flex-shrink: 1;
      padding-top: $gutter-half;
      padding-bottom: $gutter-half;
    }
  }

  .input-item__label {//background-color: gold;
    flex-basis: 40%;

    > * {
      width: 100%;
    }
  }

  .input-item__input {
    // flex-grow: 1;
    flex-basis: 30%;
    padding-top: 0;
    padding-bottom: 0;

    > * {
      display: block;
      width: 100%;
      text-align: right;
      color: #333;
    }

    > input {//background-color: tomato;
      font-size: 1.25rem;
      font-weight: 900;
    }
  }

  .input-item__unit {//background-color: gray;
    padding-top: $gutter-half * 1.5;
    flex-basis: 15%;
    // font-size: $fontsize-base;
    font-size: 0.9rem;
  }

  .input-item__extra {//background-color: tomato;
    flex-basis: 15%;
    // flex-basis: 50px;
  }

  .item > .item-secondary {
    font-size: 0.9rem;
  }

  // Menu items
  .drawer.left-side {
    .item-content {
      &:first-letter {
        text-transform: uppercase;
      }
    }
  }

  // LAYOUT COLORS OVERRIDE

  .layout-padding {
    min-height: calc(100vh - 50px);
    background-color: #222;
    background-image:
      repeating-linear-gradient(97deg, rgba(0,0,0,0), rgba(0,0,0,0) 1rem, rgba(0,0,0,0.25) 1rem, rgba(0,0,0,0.25) 2rem),
      radial-gradient(#444 0%, #111 100%)
      ;
    color: #ddd;
  }

  .drawer-content,
  .drawer-content .list {
    background-color: #111;
    color: #ddd;
  }

  .input-items,
  .list {
    background-color: white;
    color: #333;
  }

  .input-items {
    padding: $gutter;
    margin-bottom: $gutter;
  }


</style>
