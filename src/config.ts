import type {
	AnnouncementConfig,
	CommentConfig,
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";
import { getTranslateLanguageFromConfig } from "./utils/language-utils";

// 定义网站语言
const SITE_LANG = "zh_CN"; // 语言代码，例如 'en', 'zh_CN', 'ja' 等

// 网站基础配置
export const siteConfig: SiteConfig = {
	title: "QingmYiz's Blog", // 网站标题
	subtitle: "Just for love.", // 网站副标题

	lang: SITE_LANG, // 网站语言

	themeColor: {
		hue: 210, // 主题色调，范围 0-360，例如红色:0，青色:200，蓝绿色:250，粉色:345
		fixed: false, // 是否隐藏主题色选择器
	},
	translate: {
		enable: true, // 是否启用翻译功能
		service: "client.edge", // 使用 Edge 浏览器翻译服务
		defaultLanguage: getTranslateLanguageFromConfig(SITE_LANG), // 根据网站语言自动设置默认翻译语言
		showSelectTag: false, // 不显示默认语言选择下拉框，使用自定义按钮
		autoDiscriminate: true, // 自动检测用户语言
		ignoreClasses: ["ignore", "banner-title", "banner-subtitle"], // 翻译时忽略的 CSS 类名
		ignoreTags: ["script", "style", "code", "pre"], // 翻译时忽略的 HTML 标签
	},
	banner: {
		enable: true, // 是否启用首页横幅，临时关闭可提升加载速度

		// 支持单张图片或图片数组，数组长度大于 1 时自动启用轮播
		src: {
			desktop: [
				"assets/desktop-banner/1.webp",
				"assets/desktop-banner/2.webp",
				"assets/desktop-banner/3.webp",
			], // 桌面端横幅图片
			mobile: [
				"assets/mobile-banner/1.webp",
				"assets/mobile-banner/2.webp",
				"assets/mobile-banner/3.webp",
			], // 移动端横幅图片
		}, // 使用本地横幅图片

		position: "center", // 图片位置，仅支持 'top', 'center', 'bottom'，默认 'center'

		carousel: {
			enable: true, // 是否启用轮播，多图时有效；关闭时随机显示一张图片
			interval: 1, // 轮播间隔时间（秒）
		},

		homeText: {
			enable: true, // 是否在首页横幅显示自定义文本
			title: "QingmYiz's Blog", // 首页横幅主标题

			subtitle: ["Just for love.", "Please relove me", "blog.relove.top"], // 首页横幅副标题，支持多条轮播
			typewriter: {
				enable: true, // 是否启用副标题打字机效果
				speed: 100, // 打字速度（毫秒）
				deleteSpeed: 50, // 删除速度（毫秒）
				pauseTime: 2000, // 完整显示后暂停时间（毫秒）
			},
		},

		credit: {
			enable: false, // 是否显示横幅图片来源文字
			text: "Describe", // 显示的来源文字
			url: "", // （可选）原画或作者页面链接
		},
	},
	toc: {
		enable: true, // 是否启用文章目录功能
		depth: 3, // 目录层级，1-6，1 只显示 h1，2 显示 h1 和 h2，以此类推
	},
	favicon: [
		// 留空则使用默认 favicon
		// {
		//   src: '/favicon/icon.png',    // 图标文件路径
		//   theme: 'light',              // 可选，指定主题 'light' | 'dark'
		//   sizes: '32x32',              // 可选，图标尺寸
		// }
	],
};

// 导航栏配置
export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home, // 首页
		LinkPreset.Archive, // 归档
		LinkPreset.About, // 关于
		LinkPreset.Friends, // 友链
		LinkPreset.Anime, // 动漫
		LinkPreset.Diary, // 日记
		{
			name: "GitHub", // 链接名称
			url: "https://github.com/matsuzaka-yuki", // 外部链接无需添加基础路径
			external: true, // 显示外链图标并新标签页打开
		},
	],
};

// 个人资料配置
export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.jpg", // 头像路径，相对 /src 目录，若以 '/' 开头则相对 /public 目录
	name: "QingmYiz", // 昵称
	bio: "Just for love", // 简介
	links: [
		{
			name: "Bilibli", // 链接名称
			icon: "fa6-brands:bilibili", // 图标
			url: "https://www.bilibili.com/", // 链接地址
		},
		{
			name: "Gitee",
			icon: "mdi:git",
			url: "https://gitee.com/matsuzakayuki",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/QingmYiz",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true, // 是否启用版权信息
	name: "CC BY-NC-SA 4.0", // 版权协议名称
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/", // 版权协议链接
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 注意：部分样式（如背景色）已被覆盖，详见 astro.config.mjs 文件。
	// 请选用深色主题，当前博客主题仅支持深色背景
	theme: "github-dark", // 代码高亮主题
};

export const commentConfig: CommentConfig = {
	enable: true, // 是否启用评论功能，关闭时文章区不显示评论组件
	twikoo: {
		envId: "https://twikoo.vercel.app", // Twikoo 评论系统环境 ID
	},
};

export const announcementConfig: AnnouncementConfig = {
	enable: true, // 是否启用公告栏
	title: "Announcement", // 公告标题
	content: "Welcome to my blog! This is a sample announcement.", // 公告内容
	closable: true, // 用户是否可关闭公告
	link: {
		enable: true, // 是否显示链接按钮
		text: "Learn More", // 链接文本
		url: "/about/", // 链接地址
		external: true, // 是否为外部链接
	},
};
