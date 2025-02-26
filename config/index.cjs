/* eslint-disable */
const USER_CONFIG = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_ID: 'wx7a2176cc20535665',

  // 公众号APP_SECRET
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_SECRET: '8405d115677b3f1066d9aa5413e40ae8',

  // 是否给文字设置多彩颜色, 和emoji不兼容
  // 如果您使用了微信测试号的模板中含有emoji表情，请填 false
  IS_SHOW_COLOR: true,

  // 功能开关,打开：true，关闭：false
  SWITCH: {
    /** 每日天气 */
    weather: true,

    /** 节假日 */
    // 下一休息日综合提醒
    holidaytts: false,

    /** 每日N句 */
    // 金山每日一句
    CIBA: false,
    // 每日一言
    oneTalk: false,
    // 土味情话(彩虹屁)
    earthyLoveWords: true,
    // 朋友圈文案
    momentCopyrighting: false,
    // 毒鸡汤
    poisonChickenSoup: false,
    // 古诗古文
    poetry: false,

    /** 星座运势 */
    horoscope: true,

    /** 生日消息和节日消息 */
    birthdayMessage: true,

    // 学生课表
    courseSchedule: false,
  },

  /** 每日一言 */

  // 每日一言的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: '',

  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔
   */
  USERS: [
    {
      name: '沸羊羊',
      id: 'o7v1X60FgEKo2ior1tCzH1kahsWY',
      useTemplateId: 'vanJ-jbwQd5AVkQmxL4-WCXkUM9MIPoMjsYgSoS-fPQ',
      province: '安徽',
      city: '合肥',
      horoscopeDate: '03-20',
      horoscopeDateType: '今日',
      openUrl: 'https://www.xzw.com/fortune/pisces/',
      festivals: [
        {
          type: '*生日', name: '肥羊生日', year: '1997', date: '02-12',
        }, 
                  
        { 
          type: '节日', name: '在一起纪念日', year: '2021', date: '10-29',
        }
      ],
      customizedDateList: [
        {
          keyword: 'love_day', date: '2021-10-29'
        }
      ],
      courseSchedule: null
    },
    {
      name: '小肥羊',
      id: 'o7v1X60crt90Uq6f9rjRw-laPKnQ',
      useTemplateId: 'vanJ-jbwQd5AVkQmxL4-WCXkUM9MIPoMjsYgSoS-fPQ',
      province: '安徽',
      city: '合肥',
      horoscopeDate: '03-20',
      horoscopeDateType: '今日',
      openUrl: 'https://www.xzw.com/fortune/pisces/',
      festivals: [
        {
          type: '*生日', name: '肥羊生日', year: '1997', date: '02-12',
        }, 
                  
        { 
          type: '节日', name: '在一起纪念日', year: '2021', date: '10-29',
        }
      ],
      customizedDateList: [
        {
          keyword: 'love_day', date: '2021-10-29'
        }
      ],
      courseSchedule: null
    },
    // 你可以不断按格式往下增加
    // ...
  ],

  /**
   * 【推送完成提醒】 相关，主要用来展示发送是否成功/失败的数据
   */

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: '自己',
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o7v1X60crt90Uq6f9rjRw-laPKnQ',
    }
    // 你可以不断按格式往下增加
    // ...
  ],

  /**
   * 信息配置
   */

  /** 天气相关 */

  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: '广东',
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: '惠州',

  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, date 仅填月日即可, 请严格按照示例填写
   * type必须填！ 只能 “生日” 和 “节日” 二选一!
   *
   * --- 阴历配置开始 ---
   * 如果日期使用阴历，请在 “生日” 或 "节日“ 前添加 * 符号
   * --- 阴历配置结束 ---
   *
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
   *
   * --- 是否展示周岁信息开始 ---
   * isShowAge: true 展示岁数, 仅type为生日生效
   * isShowAge: false 不展示岁数, 仅type为生日生效
   * 删除isShowAge属性，也会不展示岁数
   * --- 是否展示周岁信息结束 ---
   */
  FESTIVALS: [
    // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符
    // 你可以不断按格式往下增加
    // ...
  ],

  /**
   * 限制重要节日的展示条目, 需要填写数字;
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 4,

  /** 日期相关 */

  /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
   * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
   * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }}
   * */
  CUSTOMIZED_DATE_LIST: [
    // 在一起的日子
    // ...
  ],

  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
   * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
   * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }}
   * */
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    { keyword: 'encourage_oneself', contents: '你主要的问题在于读书太少而想得太多' },
    // 这样配置的话，就会每次随机选一句话发送
    {
      keyword: 'my_love',
      contents: [
        '呦，起来了啊，大懒虫，跳绳还是新的吧-_-',
        '呦，起来了啊，大懒虫，跳绳还是新的吧-_-',
        '肥羊羊就是一只与众不同的羊，会思考会联想的羊，是个被我发现的羊宝',
        '又是小概率的一条哦，遇到你，我感到幸运。咦，好丢撵',
        '喜欢跟肥羊聊天，肥羊偶尔的观点让人眼前一亮，聊天不觉得无聊^o^',
        '喜欢跟肥羊聊天，肥羊偶尔的观点让人眼前一亮，聊天不觉得无聊^o^',
        '真棒，肥羊羊今天又要比昨天多进步一点点了，牛蛙牛蛙',
        '今天也要互相监督一起减肥了哦',
        '什么，做梦梦到我了？又是在黑我吧？给你10秒钟道歉',
        '哼，昨晚做梦又没梦到我吧，都不想我，可恶的沸羊羊',
      ],
    }
    // 你可以不断按格式往下增加
    // ...
  ],
  // 默认的课表配置
  COURSE_SCHEDULE: null
}

module.exports = USER_CONFIG

