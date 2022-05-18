<!--
 * @Author: caopx
 * @Date: 2022-04-10 22:37:23
 * @LastEditTime: 2022-04-11 08:45:44
-->

# w-image

## Properties

| Property      | Attribute     | Description               | Type                                                       | Default       |
| ------------- | ------------- | ------------------------- | ---------------------------------------------------------- | ------------- |
| `errorText`   | `error-text`  | Prop 错误文案             | `string`                                                   | `'加载失败'`  |
| `fit`         | `fit`         | Prop fit 图片填充格式     | `"contain" \| "cover" \| "fill" \| "none" \| "scale-down"` | `'none'`      |
| `lazy`        | `lazy`        | Prop lazy 是否懒加载      | `boolean`                                                  | `false`       |
| `placeholder` | `placeholder` | Prop placeholder 加载文案 | `string`                                                   | `'加载中...'` |
| `src`         | `src`         | Prop src 图片链接         | `string`                                                   | `undefined`   |

---

<style>
  .image-container {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }

      .w-image {
        width: 100px;
        height: 100px;
      }
</style>

<div class="image-container">
  none
  <w-image fit="none" src="https://img.iplaysoft.com/wp-content/uploads/2021/free-image-hosting/image_hosting_2x.jpg"></w-image>
  contain
  <w-image fit="contain" src="https://img.iplaysoft.com/wp-content/uploads/2021/free-image-hosting/image_hosting_2x.jpg"></w-image>
  cover
  <w-image fit="cover" src="https://img.iplaysoft.com/wp-content/uploads/2021/free-image-hosting/image_hosting_2x.jpg"></w-image>
  fill
  <w-image fit="fill" src="https://img.iplaysoft.com/wp-content/uploads/2021/free-image-hosting/image_hosting_2x.jpg.webp"></w-image>
  scale-down
  <w-image fit="scale-down" src="https://img.iplaysoft.com/wp-content/uploads/2021/free-image-hosting/image_hosting_2x.jpg.webp"></w-image>
</div>

```javascript
<w-image fit="none" src="https://github.com/ionic-team/stencil/raw/main/stencil-logo.png"></w-image>
```

<code src="./w-image.tsx"></code>

_Built with [StencilJS](https://stenciljs.com/)_
