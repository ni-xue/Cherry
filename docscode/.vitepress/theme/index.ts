import DefaultTheme from 'vitepress/theme'
import './custom.css'
import confetti from "./components/confetti.vue" // 五彩纸屑

export default {
    extends: DefaultTheme,
  
    enhanceApp({app , router }) {
      app.component('confetti' , confetti) // 五彩纸屑
    },
}

if (typeof window !== 'undefined') {
  if (window.__POWERED_BY_QIANKUN__) {
    // @ts-ignore
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
  }
}

export async function bootstrap() {
  console.log('VitePress 子项目 bootstrap');
}

export async function mount(props: any) {
  console.log('VitePress 子项目 mount', props);
}

export async function unmount() {
  console.log('VitePress 子项目 unmount');
}
