// 还未处理
import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'

const getFluentMdl2 = () => {
  let iconsList: string[] = [];
  import("@iconify-json/fluent-mdl2/icons.json").then((res) => {
    Object.keys(res.icons).map((item) => {
      iconsList.push(`i-fluent-mdl2:${item}`)
    })
  })
  return iconsList;
}

export default defineConfig({
  theme: {
    fontFamily: {
      mono: 'dm,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    },
  },
  shortcuts: [
    ['pr', 'relative'],
    ['pa', 'absolute'],
    ['pf', 'fixed'],
    ['f-c', 'flex justify-center items-center'],
    ['f-c-c', 'f-c flex-col'],
    ['fc', 'flex justify-center'],
    ['fcc', 'flex justify-center items-center'],
    ['fs', 'flex justify-start'],
    ['fsc', 'flex justify-start items-center'],
    ['fe', 'flex justify-end'],
    ['fec', 'flex justify-end items-center'],
    ['fb', 'flex justify-between'],
    ['un-fbc', 'flex justify-between items-center'],
    ['fw', 'flex justify-wrap'],
    ['fwr', 'flex justify-wrap-reverse'],
    ['fa', 'flex justify-around'],
    ['fac', 'flex justify-around items-center'],

    ['un-fic', 'flex items-center'],
    ['fccc', 'flex justify-center items-center flex-col'],

    ['p-c', 'pa top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'],

    ['trans-ease', 'transition-all-350 ease-linear'],
    ['text', 'text-text-default dark:text-text-dark'],
    ['bg', 'trans-ease bg-bg-default dark:bg-bg-dark'],
    ['base', 'trans-ease text'],

    ['text-main-linear', 'text-gradient-to-tr from-purple-400 to-red-500'],

    ['icon', 'w-5.5 h-5.5 cursor-pointer select-none transition-opacity-300 ease-in-out text'],
    ['icon-btn', 'icon color-inherit op64 hover-op100 hover-color-teal-500 dark-hover-color-inherit'],
    ['icon-link', 'icon color-inherit op64 hover:op100 hover-text-red-300 dark-hover-color-inherit'],
    ['icon-text', 'color-inherit op64 hover:op100 hover-text-purple dark-hover-color-inherit'],
    ['link-hoverImportant', '!no-underline !hover-underline !hover-underline-offset-4 trans-ease'],
    ['link', '!text-red-400 link-hoverImportant'],
    ['linkOutside', '!text-teal-500 link-hoverImportant'],
    ['linkOrg', '!text-blue-400 link-hoverImportant'],
    ['linkBtn', '!text-purple-400 link-hoverImportant'],

    ['header-anchor', 'float-left mt-[0.125em] ml-[-0.8em] pr-[0.2em] text-[0.85em] op-0 group-hover-op-60 fw-600'],

    [/^badge-(.*)$/, ([, c]) => `bg-${c}4:10 text-${c}5 rounded`],
    [/^badge-xs-(.*)$/, ([, c]) => `badge-${c} text-xs px2 py0.5`],
    [/^badge-sm-(.*)$/, ([, c]) => `badge-${c} text-sm px3 py0.6`],
    [/^badge-lg-(.*)$/, ([, c]) => `badge-${c} px3 py0.8`],
    [/^badge-square-(.*)$/, ([, c]) => `badge-${c} w-7 h-7 text-lg font-200 flex flex-none items-center justify-center`],
  ],
  presets: [
    presetUno(),
    presetAttributify({
      prefix: 'uno-',
    }),
    presetIcons({
      cdn: 'https://esm.sh/',
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
        'width': '1.5em',
        'height': '1.5em',
      },
    }),
  ],
  safelist: getFluentMdl2(),
  transformers: [
    transformerAttributifyJsx(),
  ],
})