
## 插件界面嵌入

- 单文件引入
::: tip iframe
这里使用的是传统的方案，iframe嵌入子项目，可以采取以下两种：

1.将子项目打包成dist包，把dist包放入到主项目的public目录文件夹下，在相关页面引入包中的index.html

2.也可以将子项目部署，把部署好的地址在相关页面中使用iframe嵌入进来

这里说一下子项目与主项目通过iframe如何通信

父页面发送消息给子项目：iframe.contentWindow.postMessage

子项目发送消息给父页面：window.parent.postMessage

父子项目接收对方消息：window.addEventListener('message', this.handleMessage)
 :::
 
父页面：
```html
<template>
  <div>
    <el-button @click="sendMessageToIframe">发送消息</el-button>
    <iframe
      src="http://localhost:5173/#/editor"
      frameborder="0"
      class="iframe"
      id="myIframe"
    ></iframe>
  </div>
</template>
<script>
export default {
  name: 'wel',
  mounted() {
    window.addEventListener('message', this.handleMessage);
  },
  beforeDestroy() {
    window.removeEventListener('message', this.handleMessage);// 在组件销毁前移除事件监听器
  },
  methods: {
    handleMessage(event) {
    	//接收到的消息域名 不是 子项目域名 退出代码执行
      if (event.origin !== 'http://localhost:5173') return;
      console.log('父窗口接收到的消息Received message from iframe:', event.data);
    },
    sendMessageToIframe() {
      const iframe = document.getElementById('myIframe');
      iframe.contentWindow.postMessage('父页面发送的消息：hello', 'http://localhost:5173/#/editor');
    },
  },
};
</script>

<style>
.iframe {
  width: 100%;
  height: 100vh;
}
</style>

```
子界面
```js
onMounted(() => {
    // iframe
  window.addEventListener("message", function (event) {
    if (event.origin !== "http://localhost:2888") return;
    // 处理接收到的消息
    console.log("子窗口接收消息Received message:", event.data);
    // 向父窗口发送回应消息
    window.parent.postMessage('子页面回应：hello', event.origin);
  });
})
```

- 发布包导入
  
::: tip 发布包导入

  由它插件库声明 模式后会在加载插件时用他的插件库名，生成本地域名
   
   发布包放置于以下目录下
   
![](/Plun/WechatIMG2663.jpg)
 :::

  ::: tip 文件格式
  文件格式必须是 Cherry.的结构

![](/Plun/WechatIMG2664.jpg)
 :::
```C#
[Plugin(GuiType.Embed)]// Embed 模式表示独立插件模块不被嵌入主程序界面，由路由分配
public class Class1 : PluginService
{
    public override ValueTask DisposeAsync()
    {
        GC.SuppressFinalize(this);
        return ValueTask.CompletedTask;
    }

    public override Task StartAsync(IServiceCollection services, CancellationToken cancellationToken)
    {
	    //载入当前插件提供的API接口
	    services.AddPlugInApi<MinecraftWs>();
        services.AddScoped(typeof(PlugInApi), typeof(MinecraftWs)); 
        return Task.CompletedTask;
    }

    public override async Task Configure(IServiceProvider provider, CancellationToken cancellationToken)
    {
        await base.Configure(provider, cancellationToken); //先完成实现
        Logger?.LogInformation("哈哈哈，我是我的世界插件。");
    }


    public override Task StopAsync(CancellationToken cancellationToken)
    {
        Logger?.LogInformation("这么快又要说再见了，我是我的世界插件。");
        return Task.CompletedTask;
    }
}
```

## 微应用 
  [qiankun](https://qiankun.umijs.org/zh)

> Techniques, strategies and recipes for building a **modern web app** with **multiple teams** that can **ship features independently**. -- [Micro Frontends](https://micro-frontends.org/)
> 
> 微前端是一种多个团队通过独立发布功能的方式来共同构建现代化 web 应用的技术手段及方法策略。

微前端架构具备以下几个核心价值：

- 技术栈无关  
    主框架不限制接入应用的技术栈，微应用具备完全自主权
    
- 独立开发、独立部署  
    微应用仓库独立，前后端可独立开发，部署完成后主框架自动完成同步更新
    
- 增量升级
    
    在面对各种复杂场景时，我们通常很难对一个已经存在的系统做全量的技术栈升级或重构，而微前端是一种非常好的实施渐进式重构的手段和策略
    
- 独立运行时  
    每个微应用之间状态隔离，运行时状态不共享
    

微前端架构旨在解决单体应用在一个相对长的时间跨度下，由于参与的人员、团队的增多、变迁，从一个普通应用演变成一个巨石应用([Frontend Monolith](https://www.youtube.com/watch?v=pU1gXA0rfwc))后，随之而来的应用不可维护的问题。这类问题在企业级 Web 应用中尤其常见。

更多关于微前端的相关介绍，推荐大家可以去看这几篇文章：

- [Micro Frontends](https://micro-frontends.org/)
- [Micro Frontends from martinfowler.com](https://martinfowler.com/articles/micro-frontends.html)
- [可能是你见过最完善的微前端解决方案](https://zhuanlan.zhihu.com/p/78362028)
- [微前端的核心价值](https://zhuanlan.zhihu.com/p/95085796)