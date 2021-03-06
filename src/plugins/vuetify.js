import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#2196F3',
        accent: '#9C27B0',
        secondary: '#30B1DC',
        success: '#4CAF50',
        info: '#2196F3',
        warning: '#FB8C00',
        error: '#FF5252',
        controls: '#FFFFFF',
        neutral: '#666666',
        text: '#616161',
        panel: '#f2f2f2',
        controls_border: '#D5D5D5'
      },
      dark: {
        primary: '#21CFF3',
        accent: '#FFE18D',
        secondary: '#21CFF3',
        success: '#4CAF50',
        info: '#2196F3',
        warning: '#FB8C00',
        error: '#FF5252',
        controls: '#424242',
        neutral: '#CCCCCC',
        text: '#FFFFFF',
        panel: '#303030',
        controls_border: '#494949'
      }
    }
  }
})
