# nuhoay.github.io

个人随笔网站 - 记录生活点滴与内心感悟

## 📁 项目结构

```
nuhoay.github.io/
├── index.html              # 首页入口文件（必须在顶级目录）
├── _layouts/               # 页面布局模板
│   ├── base.html          # 基础布局模板
│   ├── page.html          # 页面布局
│   └── post.html          # 文章布局
├── _includes/              # 可重用组件
│   ├── header.html        # 导航栏
│   └── footer.html        # 页脚
├── _templates/             # 文章模板
│   └── article-template.html # 新文章模板
├── _config/                # 配置文件
│   └── site.yml           # 网站配置
├── posts/                  # 文章页面
│   ├── index.html         # 文章列表页面
│   └── post1.html         # 示例文章
├── pages/                  # 静态页面
│   ├── about.html         # 关于页面
│   ├── autobiography.html # 自传页面
│   └── contact.html       # 联系页面
├── assets/                 # 静态资源
│   ├── css/
│   │   ├── style.css      # 主要样式文件
│   │   └── components/    # 组件样式（预留）
│   ├── js/
│   │   ├── main.js        # 主要脚本
│   │   └── components/    # 组件脚本（预留）
│   └── images/            # 图片资源
└── README.md
```

## 🎨 设计特色

- **简约现代风格**：极简主义设计，专注内容
- **移动优先响应式**：完美适配各种设备
- **性能优化**：静态站点，快速加载
- **SEO友好**：完整的元数据和语义化HTML

## 🚀 部署

网站已配置为GitHub Pages，直接推送到主分支即可自动部署。

## 📧 联系方式设置

### 联系页面结构
联系页面包含三个主要部分：

1. **📧 邮箱联系** - 显示邮箱地址 `chaozhi.yin@kiwiar.com`
2. **💬 微信扫码** - 显示微信二维码图片（160x160px）
3. **📝 留言表单** - 使用Formspree发送邮件留言

### Formspree留言配置
留言功能已配置Formspree服务：

- ✅ 表单ID：`mqeeldye`（已设置）
- ✅ 接收邮箱：`chaozhi.yin@kiwiar.com`
- ✅ 自动回复：表单提交后显示成功提示

### 微信二维码设置
1. 将微信二维码保存为 `wechat-qr.jpg`
2. 上传到 `assets/images/wechat-qr.jpg`
3. 确保图片清晰可扫描（建议200x200px以上）

### 打赏功能设置
打赏边栏会自动显示在所有页面右侧：

#### 收款码设置
1. **微信收款码**：保存为 `wechat-pay.jpg`，放入 `assets/images/`
2. **支付宝收款码**：保存为 `alipay.jpg`，放入 `assets/images/`
3. 图片尺寸建议：200x200px以上，格式：JPG/PNG

#### 功能特点
- 点击右下角"💰打赏"按钮打开边栏
- 支持微信和支付宝两种支付方式
- 响应式设计，移动端优化
- 可通过ESC键或点击外部区域关闭

### 测试功能
访问任意页面测试：
- 邮箱链接是否正确
- 微信二维码是否显示
- 留言表单是否能提交
- 打赏边栏是否能正常打开关闭

## 📝 写作指南

### 添加新文章

#### 步骤1：复制模板
```bash
# 从模板文件夹复制到posts文件夹
cp _templates/article-template.html posts/post2.html
```

#### 步骤2：编辑文章内容
打开新创建的文件，修改以下部分：

**📋 基本信息（head部分）：**
- `<title>`：文章标题
- `description`：文章简介
- `keywords`：关键词标签

**📅 文章头部信息：**
- `.article-title`：完整文章标题
- `.article-meta`：发布日期和标签

**📖 文章正文：**
- `.article-content`：文章主要内容
- 支持二级、三级标题
- 支持引用、列表等格式

#### 步骤3：更新文章列表
在 `posts/index.html` 的文章网格中添加新文章卡片：

```html
<article class="post-card">
    <img src="https://images.unsplash.com/photo-xxx?w=400&h=200&fit=crop" alt="配图描述">
    <div class="post-content">
        <h3><a href="post2.html">文章标题</a></h3>
        <p class="post-excerpt">文章摘要（100字以内）...</p>
        <div class="post-meta">
            <span>2024年X月X日</span>
            <div class="post-tags">
                <a href="#" class="tag">标签</a>
            </div>
        </div>
    </div>
</article>
```

### 文件组织说明

- **_templates/**：存放文章模板文件
  - `article-template.html`：新文章的标准模板
- **posts/**：存放实际文章文件
  - `index.html`：文章列表页面
  - `post1.html`, `post2.html` 等：具体文章
- **pages/**：存放静态页面
  - `about.html`：关于页面
  - `contact.html`：联系页面
  - `autobiography.html`：自传页面

### 文章命名规范

- 文件名：`post1.html`, `post2.html` 等（按数字顺序）
- 标题：简洁明了，包含核心关键词
- 摘要：100字以内，吸引读者点击

### 标签系统

现有标签：
- 生活、思考、技术、旅行、读书

可以根据需要添加新标签。

### 添加新页面

在 `pages/` 目录下创建新的HTML文件，路径引用需要相应调整。

## 🔧 自定义

- **样式定制**：修改 `assets/css/style.css`
- **功能扩展**：修改 `assets/js/main.js`
- **布局调整**：修改 `_layouts/` 中的模板
- **配置更新**：修改 `_config/site.yml`

## 📄 许可证

本项目仅用于个人博客展示。
