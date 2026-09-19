# Ryan Chen — 三頁式作品集

奶油白與酒紅的編輯式設計，使用既有照片及 PDF 作品素材。React + Lucide，Tailwind 編譯 CSS，輸出不依賴 CDN 的靜態資產。

## 頁面

- `index.html`：關於 Ryan。照片、自介、學歷、四類技能、證照、工作與其他經歷。
- `proo.html`：影音與媒體創作，保留原作品集 URL。全部／影音剪輯／實地探訪／國際合作企劃四類篩選；平面與宣傳設計在「全部」中呈現。
- `tech.html`：科技與 Web/App。全部／Web 開發／App 開發／AI 與自動化專案篩選。
- `src/editorial-data.js`：新增與整合的分類、資料、照片、報告和展示連結。基礎作品內容沿用 `src/data.js`。
- `src/main.jsx`、`src/style.css`：共用頁首、頁尾、卡片與預覽對話框。

## 內容依據與範圍

核對 `D:/面試/中文履歷.pdf`、`English resume.pdf`、`經歷與作品集.pdf`，並保留原網站的 LINE VOOM、YouTube、Figma、設計選集與提案連結。新增北一區性平中心、世新口傳系、集應廟、文化開解所、《96 分鐘》作品。原始照片與作品圖均保持不變。

- 大頭照：`assets/portfolio/ryan.jpg`，與 `D:/面試/1.jpg` 為相同人物照片。
- 四張證照使用正式證照照片副本，可點擊放大；身分證字號與出生日期已遮蔽。原始 PDF 未更動。
- 世新就讀日期與 TOEIC 分數在履歷版本間不一致，因此不列這些不一致數字。
- 僅使用有來源的獎項、約 3,000 筆資料、7 位受訪者等成果，沒有推估流量或轉換率。
- 研究提案／未公開專案明確標記狀態。沒有專案 GitHub 或 Live Demo 的項目不捏造網址；保留個人 GitHub 入口。
- 預覽對話框點擊後才載入 YouTube／Google Slides／Drive，提供原始連結供平台限制時開啟；各平台分享權限未更動。

## 建置與預覽

`npm ci --ignore-scripts` → `npm run build` → `npm run preview`。

建置產物 `js/portfolio.js`、`css/portfolio.css` 與三份 HTML 必須一併提交，GitHub Pages 可沿用根目錄靜態發布，不需要伺服器端 runtime。

本機驗證使用 Node bundled runtime（系統 Node 在此前建置曾非預期退出）：
`C:/Users/RyanPro/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe build.mjs`

`verify-editorial.mjs` 為三頁版檢查，會啟動臨時本機 HTTP 伺服器與 headless Edge，驗證三頁、篩選、預覽關閉、圖檔、連結及不同寬度，並產生 `.preview/` 截圖。旧版 `verify.mjs`、`verify-navigation.mjs` 針對先前兩頁版，已不適用。

公開版本包含原始碼與靜態建置產物；未遮蔽個資的原始證照截圖及本機暫存資料不納入版本控制。

## 後續微調

請先閱讀 [微調指南](docs/EDITING.md)。浮島／漢堡元件位於 `src/components/`，分區且已格式化的 CSS 位於 `src/styles/`。
