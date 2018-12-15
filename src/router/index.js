import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FirstPage from '@/components/FirstPage'
import Home from '@/components/Home'
import SecondPage from '@/components/SecondPage'
import FirstPart from '@/components/FirstPart'
import SecondPart from '@/components/SecondPart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 直接/代表：App.vue
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/Home/FirstPart',
          name: 'FirstPart',
          component: FirstPart
        },
        {
          path: '/Home/SecondPart',
          name: 'SecondPart',
          component: SecondPart
        }
      ]
    },
    {
      path: '/FirstPage',
      name: 'FirstPage',
      component: FirstPage
    },
    {
      path: '/SecondPage',
      name: 'SecondPage',
      component: SecondPage
    }

  ]
})
// router文件是针对App.vue的路由，对应的内容，全部都会显示在刚才看到的那一行
// <router-view>
// </router-view>中，
// 在这里，App.vue会自动寻找这一些组件，比如，在目前的index.js中，path显示的是”/”对吧？
// 这就意味着，当页面打开到App.vue,
// 你修改path的值为“/Hello”，那么你只有在（http://localhost:8080/#/Hello）才会重新看到刚才那个页面。
// 而在（http://localhost:8080/#/）

// 1. 上述的小实验已经充分证明了，index.html, App.vue, Hello.vue之间的关系。
// 一般来说，index.html是不用动的（顶多增加一些css头文件）。所以我们开始修改的其实文件就是App.vue，
// 然后鉴于我们想要添加文件，所以需要修改router里边的index.js文件，最后鉴于我们要添加新页面和组件，
// 我们还需要增加一些components文件夹里边的东西。

// 2. 如果按照目前的index.js的结构，如果你怎么修改那个Hello.vue文件，或者增加其他组件
// ，它们只有一个归宿：就是躺在App.vue里的那个Logo图像的下面。因为App.vue是父组件，
// 而Hello.vue只不过是它的子组件。但是这并不意味着谁重要谁难写，
// 因为如果你把App.vue里边那个logo那一行注释掉，App.vue就什么都无法呈现，
// 仅仅是为Hello.vue以及未来的一些页面提供了一个承载框架而已。

// 3. 未来开发完的网站里，用户感觉上可能是一个页面和一个url的单独对应，
// 就像是曾经的每一个PHP文件对应每一个url一样，但实际上，可能很多页面，
// 都像Hello.vue一样，仅仅是App.vue的子组件而已。

// 4. 目前在App.vue里，有Hello组件；以后我们在Hello组件里，还可以插入其他的组件
// ，当然不一定是这种使用router的办法，因为用这个模式，每一个组件都会有一个对应的url，
// 如果你的页面上有三个tab，可能没有必要每一个tab对应一个url吧？
// 但目前要理解的就是：我个人觉得Vue最核心的设计理念，就是把一个看起来很完整的页面，
// 分散到了每一个组件，这个组件可能大道一个页面，Hello.vue，也可能小到一个按钮，
// 最终我们看到的页面，是这一群组件的堆砌的结果，这样做的一大好处就是，
// 每一个组件都可以单独进行与数据库和用户的交互，开发更为清晰。
