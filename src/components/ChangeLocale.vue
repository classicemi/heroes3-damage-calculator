<template lang='pug'>
b-dropdown(
  variant='link'
  toggle-class='text-muted'
  size='sm'
  dropup
  :text='$t("language")'
  cypress-tag='change-locale-select'
)
  b-dropdown-item-button(class='text-muted btn-sm' @click='changeLocale("en")') English
  b-dropdown-item-button(class='text-muted btn-sm' @click='changeLocale("ru")') Русский
  b-dropdown-item-button(class='text-muted btn-sm' @click='changeLocale("ch")') 简体中文
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      setLocale: 'user/setLocale'
    }),
    changeLocale (locale) {
      this.$i18n.locale = locale
      this.$root.$i18n.locale = locale

      if (locale === 'en') {
        this.setLocale('en')
      } else if (locale === 'ru') {
        this.setLocale('ru')
      } else if (locale === 'ch') {
        this.setLocale('ch')
      }

      let userLocalStorage = {
        'locale': locale
      }

      userLocalStorage = JSON.stringify(userLocalStorage)

      localStorage.user = userLocalStorage
    }
  }
}
</script>

<style lang='scss' scoped>
.navbar {
  max-height: 30px;
}
</style>

<i18n>
{
  "en": {
    "language": "Language"
  },
  "ru": {
    "language": "Язык"
  },
  "ch": {
    "language": "简体中文"
  }
}
</i18n>
