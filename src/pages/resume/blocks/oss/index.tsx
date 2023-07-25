const Oss = () => {
  return <div>
    <div gap-2 mt-5 un-fic>
      <div className="text-5" i-fluent-mdl2:open-source></div>
      <h3 m-0>开源经历</h3>
    </div>
    <hr/>
    <h4 m-0 un-fic>tdesign-vue-next（开源贡献者）<img src="https://img.shields.io/github/stars/Tencent/tdesign-vue-next" /></h4>
    <h5 m-0>
      PRs:
      <a href="https://github.com/Tencent/tdesign-vue-next/pull/282" target="_blank">PR#282</a>
      <a href="https://github.com/Tencent/tdesign-vue-next/pull/588" target="_blank">PR#588</a>
      <a href="https://github.com/Tencent/tdesign-vue-next/pull/719" target="_blank">PR#719</a>
      <a href="https://github.com/Tencent/tdesign-vue-next/pull/897" target="_blank">PR#897</a>
    </h5>
    <ul m-0>
      <li>参与TDesgin中Pagination、Input、InputNumber组件进行composition API重构开发；</li>
      <li>修复组件bug，完成一些issues；</li>
    </ul>

    <h4 m-0 un-fic>水墨UI（核心开发者之一）<img src="https://img.shields.io/github/stars/shuimo-design/shuimo-ui" /></h4>
    <ul m-0>
      <li>负责shuimoUI中多个Vue版本组件的开发以及维护；</li>
      <li>推动shuimoUI覆盖Web Component/Vue/React三大场景；</li>
    </ul>

    <h4 m-0>极客江湖（核心开发者之一）（进行中）</h4>
    <ul m-0>
      <li>一款致力于以游戏化形式解决团队管理问题及优化研发流程的系统；</li>
      <li>主要负责前端模块开发以及一些服务端逻辑的开发实现；</li>
      <li>前端使用 Vite + Vue3 全家桶，并将开源shuimoUI应用其中；</li>
      <li>后端技术栈使用 NestJs + Docker；</li>
      <li>推行DDD + 用户故事 + 低代码的研发模式；</li>
    </ul>
  </div>
}

export default Oss