<template lang='pug'>
b-container.footer.mt-5
  b-row.mt-2

    b-col(class='pl-0' cols='12' sm='12' md='12' lg='6' xl='6')

      //- About
      b-button(class='text-muted' variant='link' size='sm' @click='aboutModalShow()' cypress-tag='about-button')
        | {{ $t('about') }}

      //- How to use
      b-button(class='text-muted' variant='link' size='sm' @click='howToUseModalShow()' cypress-tag='how-to-use-button')
        | {{ $t('how-to-use') }}

      //- Change locale
      ChangeLocale

    b-col(class='pr-0 pl-0 pl-sm-0 pl-md-0 pl-lg-2 pl-xl-2 text-lg-right text-xl-right' cols='12' sm='12' md='12' lg='6' xl='6')

      //- Find error?
      b-button(class='text-muted' variant='link' size='sm' @click='sendErrorModalShow()' cypress-tag='send-error-button')
        | {{ $t('find-error-?') }}

      //- License information
      b-button(class='text-muted' variant='link' size='sm' @click='licenseInformationModalShow()' cypress-tag='license-information-button')
        | {{ $t('license-information') }}

      //- Source code
      b-button(
        class='text-muted'
        variant='link'
        size='sm'
        @click='openURL("https://github.com/rudnovd/heroes3-damage-calculator")'
        cypress-tag='source-code-button'
      )
        | {{ $t('source-code') }}

  //- About modal
  b-modal(
    v-model='aboutModal'
    :title='$t("about")'
    ref='aboutModal'
    size='lg'
    ok-disabled=true
    cancel-disabled=true
    hide-footer=true
  )
    //- Modal content
    b-row
      b-col(cols='12')
        i18n(path='aboutText' tag='p')
          h3(place='calculator-title') Heroes III damage calculator
          u(
            class='c-pointer'
            place='desktop-version'
            @click='openURL("http://forum.heroesworld.ru/showpost.php?p=1064503&postcount=65")'
          )
            template(v-if='$store.state.user.locale === "en"')
              | desktop version
            template(v-if='$store.state.user.locale === "ru"')
              | десктопной версии
          br(place='br')
          u(class='c-pointer'
            place='error-form'
            @click='openURL("https://docs.google.com/forms/d/e/1FAIpQLScB1GE0fEa-jIxkDmcMj-JFG5voOLuzLU-duU3_NW_AC4YMkQ/viewform?usp=sf_link")'
          )
            template(v-if='$store.state.user.locale === "en"')
              | this
            template(v-if='$store.state.user.locale === "ru"')
              | эту
          a(place='mail' href='mailto:18a221c6db0b96d8@gmail.com')
            | 18a221c6db0b96d8@gmail.com

  //- License information modal
  b-modal(
    v-model='licenseInformationModal'
    :title='$t("license-information")'
    ref='licenseInformationModal'
    size='lg'
    ok-disabled=true
    cancel-disabled=true
    hide-footer=true
  )
    //- Modal content
    b-row(v-if='licenseInformationModal')
      b-col(cols='12')
        p MIT License
        p Copyright (c) 2019
          b-link(href='https://github.com/rudnovd')  https://github.com/rudnovd
        p {{ $t('license[0]') }} {{ $t('license[1]') }} {{ $t('license[3]') }} {{ $t('license[4]') }} {{ $t('license[5]') }}
        p {{ $t('license[6]') }} {{ $t('license[7]') }}
        p {{ $t('license[8]') }} {{ $t('license[9]') }} {{ $t('license[10]') }} {{ $t('license[11]') }} {{ $t('license[12]') }} {{ $t('license[13]') }}

  //- Send error modal
  b-modal(
    v-model='sendErrorModal'
    :title='$t("send-error")'
    ref='sendErrorModal'
    size='lg'
    ok-disabled=true
    cancel-disabled=true
    hide-footer=true
  )
    //- Modal content
    b-row(align-v='center' v-if='sendErrorModal')
      b-col(cols='12' sm='12' md='12' lg='10' xl='10' offset='0' offset-sm='0' offset-md='0' offset-lg='1' offset-xl='1')
        iframe(src='https://docs.google.com/forms/d/e/1FAIpQLScB1GE0fEa-jIxkDmcMj-JFG5voOLuzLU-duU3_NW_AC4YMkQ/viewform?embedded=true' width='100%' height='471' frameborder='0' marginheight='0' marginwidth='0') Загрузка...

  //- How to use modal
  b-modal(
    v-model='howToUseModal'
    :title='$t("how-to-use")'
    ref='howToUseModal'
    size='lg'
    ok-disabled=true
    cancel-disabled=true
    hide-footer=true
  )
    //- Modal content
    b-row(v-if='howToUseModal')

      b-col(v-if='howToUsePage < 11' class='text-center' cols='12')
        p(class='h4 mb-5') {{ $t('how-to-use-text')[howToUsePage - 1] }}
      b-col(v-if='howToUsePage < 11' class='text-center' cols='12' sm='12' md='12' lg='10' xl='10' offset='0' offset-sm='0' offset-md='0' offset-lg='1' offset-xl='1')
        img(:src='"images/how-to-use/" + howToUsePage + ".png"' width='100%' height='auto')

      b-col(v-if='howToUsePage === 11 && $store.state.user.locale === "en"' class='text-center' cols='12')
        p(class='h4 mb-5') You can use shortcuts for fast input:
      b-col(v-if='howToUsePage === 11 && $store.state.user.locale === "en"' class='text-center' cols='12' sm='12' md='12' lg='10' xl='10' offset='0' offset-sm='0' offset-md='0' offset-lg='1' offset-xl='1')
        p 1. When you select a unit, enter it's name in the search field, then press the 'Enter' key on the keyboard. The first found unit will be selected;
        img(class='mb-5' src='images/how-to-use/shortcut-1.png')

        p 2. When you select a hero, enter it's name, then press the 'Enter' key on the keyboard. The first found hero will be selected.
        img(src='images/how-to-use/shortcut-2.png')

      b-col(v-if='howToUsePage === 11 && $store.state.user.locale === "ru"' class='text-center' cols='12')
        p(class='h4 mb-5') Для быстрого ввода вы можете использовать сокращения:
      b-col(v-if='howToUsePage === 11 && $store.state.user.locale === "ru"' class='text-center' cols='12' sm='12' md='12' lg='10' xl='10' offset='0' offset-sm='0' offset-md='0' offset-lg='1' offset-xl='1')
        p 1. При выборе юнита введите его имя в поле поиска и нажмите 'Enter'. Будет выбран первый найденный юнит;
        img(class='mb-5' src='images/how-to-use/shortcut-1.png' width='100%' height='auto')

        p 2. При выборе героя введите его имя и нажмите 'Enter'. Будет выбран первый найденный герой.
        img(src='images/how-to-use/shortcut-2.png' width='100%' height='auto')

    b-row(class='border-top')
      b-col(class='align-middle mt-3' cols='3')
        b-button(
          v-if='howToUsePage !== 1'
          variant='dark'
          size='sm'
          @click='howToUsePrevPage()'
        )
          template(v-if='$store.state.user.locale === "en"')
            | Previous
          template(v-if='$store.state.user.locale === "ru"')
            | Назад

      b-col(class='mt-3' cols='4' offset='1')
        b-progress(class='mt-2' variant='success' :value='howToUseProgress')

      b-col(class='text-right mt-3' cols='3' offset='1')
        b-button(
          v-if='howToUsePage < 11'
          variant='dark'
          size='sm'
          @click='howToUseNextPage()'
        )
          template(v-if='$store.state.user.locale === "en"')
            | Next
          template(v-if='$store.state.user.locale === "ru"')
            | Дальше

</template>

<script>
import ChangeLocale from '@/components/ChangeLocale.vue'

export default {
  components: {
    ChangeLocale
  },
  data () {
    return {
      aboutModal: false,
      sendErrorModal: false,
      licenseInformationModal: false,
      howToUseModal: false,

      howToUsePage: 1,
      howToUseProgress: 0,

      userScreenWidth: 0,
      userScreenHeight: 0
    }
  },
  methods: {
    openURL (url) {
      window.open(url)
    },
    aboutModalShow () {
      this.aboutModal = true
    },
    sendErrorModalShow () {
      this.getUserSreen()
      this.sendErrorModal = true
    },
    licenseInformationModalShow () {
      this.licenseInformationModal = true
    },
    howToUseModalShow () {
      this.getUserSreen()
      this.howToUseModal = true
    },

    getUserSreen () {
      this.userScreenWidth = window.innerWidth
      this.userScreenHeight = window.innerHeight
    },

    howToUsePrevPage () {
      if (this.howToUsePage !== 1) {
        this.howToUsePage--
        this.howToUseProgress -= 10
      }
    },
    howToUseNextPage () {
      if (this.howToUsePage < 11) {
        this.howToUsePage++
        this.howToUseProgress += 10
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.footer {
  border-top: 1px solid rgba(0,0,0,.1);
}
</style>

<i18n>
{
  "en": {
    "about": "About",
    "how-to-use": "How to use",
    "license-information": "License information",
    "find-error-?": "Found an error?",
    "source-code": "Source code",
    "send-error": "Report an error",
    "soon": "Soon...",
    "license": [
      "Permission is hereby granted, free of charge, to any person obtaining a copy",
      "of this software and associated documentation files (the 'Software'), to deal",
      "in the Software without restriction, including without limitation the rights",
      "to use, copy, modify, merge, publish, distribute, sublicense, and/or sell",
      "copies of the Software, and to permit persons to whom the Software is",
      "furnished to do so, subject to the following conditions:",
      "The above copyright notice and this permission notice shall be included in all",
      "copies or substantial portions of the Software.",
      "THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR",
      "IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,",
      "FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE",
      "AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER",
      "LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,",
      "OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."
    ],
    "aboutText": "{calculator-title} {br} This software is used to calculate damage to creatures (with stats, skills, spells and specialties modifiers) in the game Heroes of Might and Magic III: Horn of The Abyss.{br} {br} This calculator is not absolutely accurate, but you can help make it better. If you want to help: report any errors to {error-form} form.{br} {br} Calculator is based on the {desktop-version}. {br} {br} Send ideas or improvements to {mail}.",
    "how-to-use-text": [
      "Choose unit by clicking on the 'Pick' button or image with the question mark",
      "Select a unit",
      "Enter units count",
      "Choose a hero from the list",
      "Enter hero level, attack and defense",
      "Select hero skills",
      "Select spells affecting the unit",
      "Enter the same values for the enemy side",
      "Select battlefield terrain",
      "Then you will see the damage values"
    ]
  },
  "ru": {
    "about": "О калькуляторе",
    "how-to-use": "Как пользоваться",
    "license-information": "Информация о лицензии",
    "find-error-?": "Нашли ошибку?",
    "source-code": "Исходный код",
    "send-error": "Сообщить об ошибке",
    "soon": "Скоро...",
    "license": [
      "Данная лицензия разрешает, безвозмездно, лицам, получившим копию данного программного обеспечения",
      "и сопутствующей документации (в дальнейшем именуемыми 'Программное Обеспечение'), использовать",
      "Программное Обеспечение без ограничений, включая неограниченное право на использование, копирование,",
      "изменение, объединение, публикацию, распространение, сублицензирование и/или продажу копий",
      "Программного Обеспечения, также как и лицам, которым предоставляется данное Программное Обеспечение,",
      "при соблюдении следующих условий:",
      "Вышеупомянутый копирайт и данные условия должны быть включены",
      "во все копии или значимые части данного Программного Обеспечения.",
      "ДАННОЕ ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ ПРЕДОСТАВЛЯЕТСЯ «КАК ЕСТЬ», БЕЗ ЛЮБОГО ВИДА ГАРАНТИЙ, ЯВНО ВЫРАЖЕННЫХ",
      "ИЛИ ПОДРАЗУМЕВАЕМЫХ, ВКЛЮЧАЯ, НО НЕ ОГРАНИЧИВАЯСЬ ГАРАНТИЯМИ ТОВАРНОЙ ПРИГОДНОСТИ, СООТВЕТСТВИЯ ПО ЕГО",
      "КОНКРЕТНОМУ НАЗНАЧЕНИЮ И НЕНАРУШЕНИЯ ПРАВ. НИ В КАКОМ СЛУЧАЕ АВТОРЫ ИЛИ ПРАВООБЛАДАТЕЛИ НЕ НЕСУТ",
      "ОТВЕТСТВЕННОСТИ ПО ИСКАМ О ВОЗМЕЩЕНИИ УЩЕРБА, УБЫТКОВ ИЛИ ДРУГИХ ТРЕБОВАНИЙ ПО ДЕЙСТВУЮЩИМ КОНТРАКТАМ,",
      "ДЕЛИКТАМ ИЛИ ИНОМУ, ВОЗНИКШИМ ИЗ, ИМЕЮЩИМ ПРИЧИНОЙ ИЛИ СВЯЗАННЫМ С ПРОГРАММНЫМ ОБЕСПЕЧЕНИЕМ ИЛИ",
      "ИСПОЛЬЗОВАНИЕМ ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ ИЛИ ИНЫМИ ДЕЙСТВИЯМИ С ПРОГРАММНЫМ ОБЕСПЕЧЕНИЕМ."
    ],
    "aboutText": "{calculator-title} {br} Данное программное обеспечение используется для расчёта урона юнитов (с модификаторами характеристик, навыков, заклинаний и специализаций) в игре Heroes of Might and Magic III: Horn of The Abyss.{br} {br} Этот калькулятор не является абсолютно точным, но его можно сделать лучше. Если вы хотите помочь: при нахождении ошибки используйте {error-form} форму.{br} {br} Калькулятор основан на {desktop-version}. {br} {br} Об идеях и улучшениях пишите на {mail}.",
    "how-to-use-text": [
      "Откройте выбор юнита кликнув на кнопку 'Выбрать' или на изображение с вопросительным знаком",
      "Выберите юнита",
      "Введите количество юнитов",
      "Выберите героя из списка",
      "Введите уровень, атаку и защиту героя",
      "Выберите навыки героя",
      "Отметьте действующие на юнита заклинания",
      "Введите такие же значения для вражеской стороны",
      "Выберите территорию поля боя",
      "Затем вы увидите значения урона"
    ]
  }
}
</i18n>
