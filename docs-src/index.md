---
layout: page.11ty.cjs
title: <brief-me-gdpr> ⌲ Home
---

# <brief-me-gdpr>

`<brief-me-gdpr>` is an awesome Web Component for a human readable GDPR compliance.

## As easy as HTML

<section class="columns">
  <div>

`<brief-me-gdpr>` is just an HTML element. You can it anywhere you can use HTML!

```html
<brief-me-gdpr></brief-me-gdpr>
```

  </div>
  <div>

<brief-me-gdpr></brief-me-gdpr>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<brief-me-gdpr>` can be configured with attributed in plain HTML.

```html
<brief-me-gdpr name="HTML"></brief-me-gdpr>
```

  </div>
  <div>

<brief-me-gdpr name="HTML"></brief-me-gdpr>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<brief-me-gdpr>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name="lit-html";

render(html`
  <h2>This is a &lt;brief-me-gdpr&gt;</h2>
  <brief-me-gdpr .name=${name}></brief-me-gdpr>
`, document.body);
```

  </div>
  <div>

<h2>This is a &lt;brief-me-gdpr&gt;</h2>
<brief-me-gdpr name="lit-html"></brief-me-gdpr>

  </div>
</section>
