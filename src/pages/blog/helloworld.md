---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  import Cool from '../../components/Author.astro'
title: Hello world!
publishDate: 13 Apr 2022
name: Mike
description: Just a Hello World Post!
---

<Cool name={frontmatter.name} client:load />

My personal website's tech stack has gone though a lot,
from Hexo to Gatsby to Svelte and eventually to [Astro](https://astro.build).

My goal for my blog and personal website is that it should be fast, simple and intuitive. It can be static, and Astro successfully does this.

It even includes built-in support on markdown and scripts.

```javascript
// Example JavaScript

const x = 42;
function returnAnswer() {
  return x;
}
```
