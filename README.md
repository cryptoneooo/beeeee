# 2026 昆蟲同樂會 互動攤位地圖

2026 昆蟲同樂會（Insect Party）的互動攤位地圖。

- 滑鼠移到攤位上，就會顯示攤位名稱、分類和參展品項。
- 點一下攤位，右側會出現詳細資料、粉專和 IG 連結。
- 可以依「甲蟲／爬蟲／其他」篩選攤位，也可以只看有抽抽樂的攤位。
- 下方有攤位清單，支援搜尋名稱與品項。

純靜態網站，沒有建置步驟，用 HTML、CSS 和原生 JS 寫成。

## 檔案

| 檔案 | 用途 |
|---|---|
| `index.html` | 頁面結構 |
| `style.css` | 樣式 |
| `app.js` | 地圖繪製、提示框、篩選（攤位座標在檔案最上方 `GEOMETRY`） |
| `data.js` | **攤位資料，平常只需要改這個檔案** |

## 更新攤位資料

打開 `data.js`，找到該攤位修改即可：

```js
{ no: 15, name: "喜蟲天降", cat: "beetle",
  items: ["赫克力士大兜蟲", "飼育用品"],
  lottery: true,                       // 有抽抽樂就改成 true
  lotteryNote: "一抽 150，大獎為成蟲成對",   // 選填
  links: [{ label: "Instagram", url: "https://..." }],
  verified: true }
```

- `cat` 的值可以是 `"beetle"`、`"reptile"` 或 `"other"`。如果一個攤位兩種都賣，寫成 `["beetle", "reptile"]`，地圖上會用斜紋表示。
- `lottery` 的值是 `true`（有）、`false`（沒有）或 `null`（未確認）。設為 `true` 的攤位，地圖編號旁會出現 ★，也會出現在「🎰 抽抽樂」篩選裡。
- `verified: false` 代表品項只是依攤位名稱推測，面板上會標示「依名稱推測」。

## 部署到 Vercel

1. 到 [vercel.com/new](https://vercel.com/new) 匯入這個 GitHub repo。
2. Framework Preset 選 **Other**，Build Command 和 Output Directory 都留空。
3. 按 Deploy。之後每次 push 都會自動重新部署。

本機預覽可以直接打開 `index.html`，或執行：

```bash
npx serve .
```

## 資料來源

攤位編號與名稱取自官方「地圖及廠商對照表」。品項來自各攤位公開的粉專、IG、Threads 頁面與賣場，以及[黑貓老師 2026 台灣蟲店列表](https://blackcatteacher.com/blog/post/43368166)。
