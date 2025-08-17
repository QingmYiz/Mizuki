---
title: Hello  World
published: 2025-08-04
description: ''
image: ''
tags: ["guide"]
category: 'Guides'
draft: false
---

## Index

Welcome to my blog. As you can see this blog is my first blog.

I decided to record my study and life from now on.

And then I will write some guides to help me check.

This blog template is built with [Astro](https://astro.build/).

For the things that are not mentioned in this guide, you may find the answers in the [Astro Docs](https://docs.astro.build/).

## Quick start

- 创建Blog：

```cmd
pnpm run new-post <filename>
```

​       路径：./src/content/posts

- 编辑Blog

  使用Markdown语法编辑md文件



  ## Front-matter of Posts

  ```yaml
  ---
  title: My First Blog Post
  published: 2023-09-09
  description: This is the first post of my new Astro blog.
  image: ./cover.jpg
  tags: [Foo, Bar]
  category: Front-end
  draft: false
  ---
  ```

  | Attribute     | Description                                                  |
  | ------------- | ------------------------------------------------------------ |
  | `title`       | 文章标题.                                       |
  | `published`   | 帖子发布信息.                             |
  | `description` | 一个简短的简介，显示在索引页上.    |
  | `image`       | 封面图片的路径.<br/>1. Start with `http://` or `https://`: Use web image<br/>2. Start with `/`: For image in `public` dir<br/>3. With none of the prefixes: Relative to the markdown file |
  | `tags`        | 文章的标签.                                        |
  | `category`    | 文章的分类.                                    |
  | `draft`       | 是否是草稿.     |


## Where to Place the Post Files



帖子应该放在 `src/content/posts/`路径下， 当然也可以创建副目录来更好地分类Blog。

```
src/content/posts/
├── post-1.md
└── post-2/
    ├── cover.png
    └── index.md
```
