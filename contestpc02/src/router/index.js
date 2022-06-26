import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  // 去掉url中的#
  routes: [
    // 根页面
    {
      path: '/',
      name: 'PCLogin',
      component: () => import('@/views/LoginPage/PageMain'),
      children: [],
    },
    // 意见反馈页
    {
      path: '/suggestion',
      name: 'suggestion',
      component: () => import('@/views/Footer/FooterLink/suggestion'),
    },
    // 帮助中心页
    {
      path: '/help',
      name: 'help',
      component: () => import('@/views/Footer/FooterLink/help'),
    },
    // 联系我们页
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/Footer/FooterLink/contact'),
    },
    // 关于我们页
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/Footer/FooterLink/about'),
    },
    // 分类页
    {
      path: '/classify',
      name: 'ActivityClassify',
      component: () => import('@/views/ActivityClassifyPage/PageMain'),
    },
    // 活动分类 -体检课详情
    {
      path: '/classify/taste',
      name: 'Taste',
      component: () => import('@/components/TasteDetailed'),
    },
    // 活动分类 -比赛详情
    {
      path: '/classify/contest',
      name: 'contest',
      // component: () => import('@/components/ContestDetailed'),
    },

    // 活动分类 -答题详情
    {
      path: '/classify/answer',
      name: 'answer',
      // component: () => import('@/components/TasteDetailed'),
    },

    // 活动分类 -活动详情
    {
      path: '/classify/activity',
      name: 'activity',
      // component: () => import('@/components/TasteDetailed'),
    },

    // 子页 - 精彩瞬间/科普 -视频
    {
      path: '/classify/video',
      name: 'video',
      component: () => import('@/components/DetailedVideo'),
    },

    // 搜索页
    {
      path: '/search',
      name: 'search',
      // component: () => import('@/components/TasteDetailed'),
    },

    // 详情页
    {
      path: '/detailed',
      name: 'ActivityDetailed',
      component: () => import('@/views/ActivityDetailedPage/PageMain'),
    },
    // 个人信息页
    {
      path: '/user',
      name: 'UserInfoMain',
      component: () => import('@/views/UserInfo/PageMain'),
      children: [
        // 个人信息页 - 账号绑定
        {
          path: 'band',
          name: 'UserBand',
          component: () => import('@/views/UserInfo/childrenPages/UserBand'),
        },
        // 个人信息页 - 个人信息修改
        {
          path: 'info',
          name: 'UserInfo',
          component: () => import('@/views/UserInfo/childrenPages/UserInfo'),
        },
        // 个人信息页 - 账号实名
        {
          path: 'certification',
          name: 'UserCertification',
          component: () =>
            import('@/views/UserInfo/childrenPages/UserCertification'),
        },
        // 个人信息页 - 消息通知
        {
          path: 'message',
          name: 'UserMessage',
          component: () => import('@/views/UserInfo/childrenPages/UserMessage'),
        },
        // 个人信息页 - 参与记录
        {
          path: 'record',
          name: 'UserRecord',
          component: () => import('@/views/UserInfo/childrenPages/UserRecord'),
        },
      ],
    },
  ],
});
