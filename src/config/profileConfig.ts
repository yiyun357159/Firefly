import type { ProfileConfig } from "../types/profileConfig";

export const profileConfig: ProfileConfig = {
	// 头像
	// 图片路径支持三种格式：
	// 1. public 目录（以 "/" 开头，不优化）："/assets/images/avatar.webp"
	// 2. src 目录（不以 "/" 开头，自动优化但会增加构建时间，推荐）："assets/images/avatar.webp"
	// 3. 远程 URL："https://example.com/avatar.jpg"
	avatar: "https://i1.hdslb.com/bfs/face/fde7ee75fb731e1431e80d99618172770443075b.jpg@240w_240h_1c_1s_!web-avatar-nav.avif",

	// 名字
	name: "一云OneCloud",

	// 个人签名
	bio: "Hello, I'm OneCloud.",

	// 链接配置
	// 已经预装的图标集：fa7-brands，fa7-regular，fa7-solid，material-symbols，simple-icons
	// 访问https://icones.js.org/ 获取图标代码，
	// 如果想使用尚未包含相应的图标集，则需要安装它
	// `pnpm add @iconify-json/<icon-set-name>`
	// showName: true 时显示图标和名称，false 时只显示图标
	links: [
		{
			name: "qq",
			icon: "fa7-brands:qq",
			url: "https://ti.qq.com/open_qq/index2.html?url=mqqapi%3a%2f%2fuserprofile%2ffriend_profile_card%3fsrc_type%3dweb%26version%3d1.0%26source%3d2%26uin%3d2714675229",
			showName: false,
		},
		{
			name: "bilibili",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/1243489179",
			showName: false,
		},
		{
			name: "Email",
			icon: "fa7-solid:envelope",
			url: "mailto:yiyun357159@gmail.com",
			showName: false,
		},
		{

                       name: "Weibo",
			icon: "fa7-brands:weibo",
			url: "https://weibo.com/u/7844471038",
			showName: false,

		},
		{
			name: "X",
			icon: "fa7-brands:x-twitter",
			url: "https://x.com/yiyun357159",
			showName: false,
		},
	],
};
