import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

export const setupElPlus = (app) => {
  app.use(ElementPlus, {
    locale: zhCn,
  })
}
