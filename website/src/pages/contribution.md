# 贡献者指南

如果您想为本项目贡献，请阅读本指南。

## 项目文件目录
```text
.
├─.github  // GitHub 配置
│  └─workflows  // GitHub Action 文件夹
└─website  // 网站文件夹
    ├─blog
    │  └─cost  // 存放公告地文件按夹
    ├─docs
    │  ├─album  // 存放集合的文件夹
    │  └─podcast  // 存放节目的文件夹
    ├─src
    │  ├─css
    │  └─pages
    │     ├─about.md  // 关于页面
    │     ├─common-questions.md  // 公共问题页面
    │     ├─contribution.md  // 贡献者指南页面
    │     ├─index.js  // 首页
    │     └─index.module.css  // 首页样式
    └─static
        └─img
```

## 代码贡献/直接修改本站内容

克隆代码
```bash
git clone git@github.com:tech-podcasts/it-technology-podcast.git
```

切换新分支
```bash
git checkout -b <new-branch-name>
```

安装依赖
```bash
pnpm install
```

启动开发服务器
```bash
pnpm start
```

修改并提交代码

### 增加节目

> 如果您无法通过代码贡献方式增加节目，欢迎通过 [issue][issue] 来参与本部分贡献。

1. 请确认是否已经存在该内容，如果已经存在请勿重复添加；

2. 复制 `/website/docs/podcast/_模板.mdx` 文件到当前文件夹，并将新文件重命名为播客节目名；

3. 修改文件内容；

4. 提交代码。

## 其他

如有其他问题或讨论，可以通过 [issue][issue] 参与讨论。

[issue]: https://github.com/tech-podcasts/it-technology-podcast/issues
