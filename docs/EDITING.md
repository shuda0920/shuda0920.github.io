# 網站微調指南

## 先分清楚原始碼與產物

修改 `src/` 後執行 `npm run build`。網站實際載入 `css/portfolio.css`、`js/portfolio.js`，不要直接改這兩份產物，下次建置會覆蓋它們。

## 資料夾

```text
src/
  main.jsx                       三頁內容、作品卡片、證照及預覽視窗
  components/
    Header.jsx                   三頁主導覽、手機漢堡選單
    ProfileIsland.jsx            個人頁底部浮島、段落名稱與順序
  editorial-data.js              整合後作品、分類、經歷
  data.js                        原有作品資料來源
  style.css                      CSS 入口（依序匯入樣式）
  styles/
    base.css                     全站色彩、字體、共用排版及桌面頁首
    about.css                    大頭照、自介、學歷、技能與時間軸
    footer.css                   聯絡頁尾
    works.css                    作品頁、分類、作品卡片
    preview.css                  圖片／影片預覽視窗、無障礙工具
    responsive.css               原有平板／手機調整、減少動態
    credentials.css              證照圖片與按鈕
    navigation.css               浮島、手機漢堡選單（優先套用）
  profile.css                    舊路徑相容入口，主建置不使用
assets/
  certificates/                  已遮蔽個資的公開證照副本
  portfolio/                     履歷／作品集抽出的既有素材
  img/、平面設計/…               既有作品素材，保留 URL
docs/                            維護說明
.preview/                        本機處理／檢查暫存，不提交
```

舊素材目錄不重新命名，避免破壞既有圖片、作品與影片 URL。原 PDF 不在網站裡發布；新增證照請先確認個資已遮蔽。

## 最常調整的位置

| 要改什麼 | 修改位置 |
| --- | --- |
| 奶油白、酒紅、文字色 | `styles/base.css` 的 `:root` |
| 浮島底部距離 | `styles/navigation.css` 的 `--island-bottom` |
| 浮島寬度／收合圓鈕大小 | `--island-width`、`--island-button`；按鈕內部尺寸同步調整 `.island-toggle` |
| 浮島酒紅色選取標籤 | `--island-accent` |
| 收合速度／彈性曲線 | `--island-duration`、`--island-ease` |
| 段落文字、順序、錨點 | `components/ProfileIsland.jsx` 的 `profileSections`；ID 須對應 `main.jsx` |
| 三頁主選單 | `components/Header.jsx` 的 `pages` |
| 手機斷點 | 導覽與通用響應式目前均為 `700px`；Header 的 desktop media query 為 `701px` |
| 證照圖片、文案 | `components/Certificates.jsx` 的 `certificates` |

## 導覽互動

- 個人頁初次進入：浮島預設展開。其他兩頁沒有浮島。
- 點段落：跳轉後維持展開，只有點叉叉收為 List 圓鈕；原生 hash 保留，可複製該段落網址。
- 桌面：只用點擊切換展開／收合，滑鼠移入與移出不改變狀態。
- 觸控：點圓鈕展開，只有關閉按鈕會收起。
- 鍵盤：Tab 移動、Enter 選取；將焦點移至叉叉並按 Enter 可收起。收起的連結不進入 Tab 順序。
- 手機主導覽：漢堡開關、Escape、點外部、焦點離開或選頁後關閉。
- 捲動時標示目前段落；系統設定減少動態時不執行收合動畫。

## 本機預覽與檢查

`npm run build` → `npm run preview`。保留三個 HTML 和編譯資產，沿用現有 GitHub Pages 結構。

`verify-editorial.mjs` 為先前三頁版的瀏覽器檢查；它沒有新增浮島／漢堡互動測試，不能當成這兩個功能已通過操作測試的證據。`verify.mjs`、`verify-navigation.mjs` 則是更早的兩頁版檢查，保留作為歷史參考。

## 證照與技能（2026-09-16）

證照列表不載入圖片，點擊後才掛載圓角相框預覽。`src/components/Certificates.jsx` 管理證照；`src/components/Skills.jsx` 管理技能與相關作品。作品預覽深連結為 `tech.html?preview=right-way#right-way`；關閉視窗會移除 preview 參數，保留段落錨點。

專案 GitHub 連結使用 `editorial-data.js` 的 `github` 欄位，同時顯示於卡片與預覽視窗。

## 工作經歷浮水印

`components/Experience.jsx` 對應單位與 Logo，`styles/experience.css` 控制 RWD、透明度與酒紅遮罩。調整 `--experience-logo-opacity` 控制濃淡；`experience-tint` 控制前景漸層。素材位於 `assets/logos/`，來源與使用限制見該目錄的 `SOURCES.md`。手機 700px 以下改單欄，避免長單位名稱與日期擠壓。

## 中英文與三大專長

`src/components/Skills.jsx`：AI 與系統開發、專案企劃、影音製作三大專長。工作經驗資料在 `editorial-data.js`，只保留神通、LINE、華影。

英文版使用 `?lang=en`，共用三份 HTML。`src/i18n/translations.js` 是英文文案字典，`runtime.jsx` 透過 React JSX factory 翻譯顯示文字及輔助標籤，保留分類與專案 ID 不變；內部跨頁連結自動帶入語言。右上角 EN／中 保留所在頁面、段落及預覽參數。影片、圖片、證照及外部文件維持原始語言。變更中文文案後，須同步補上字典。
