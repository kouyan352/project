# 🎬 オープニングアニメーションガイド

## 概要

枯れた観葉植物がLINEで専門家に相談し、元気に復活するストーリーをアニメーションで表現します。

---

## 🎥 アニメーションの流れ

### ステージ1: 枯れた植物（3秒）
```
🥀 枯れかけた観葉植物
- 茶色い葉
- 垂れ下がった茎
- 元気がない様子
テキスト: 「元気がない...」
```

### ステージ2: LINE相談（3秒）
```
📱 スマホでLINE相談
- LINE画面のアニメーション
- ユーザー: 「葉が枯れてきました...」
- 専門家: 「水やりを調整しましょう！」
テキスト: 「LINEで専門家に相談」
```

### ステージ3: ケア実行（3秒）
```
💧 アドバイス通りにケア
- 水滴のアニメーション
- 植物が少しずつ回復
- 葉が緑色に変化
テキスト: 「アドバイス通りにケア」
```

### ステージ4: 元気な植物（3秒）
```
🌿 完全に復活！
- 鮮やかな緑色の葉
- 新しい葉が成長
- キラキラエフェクト
テキスト: 「元気に復活！」
```

---

## ⚙️ 機能

### 自動進行
- 各ステージ3秒ずつ自動的に進行
- 合計12秒のアニメーション

### スキップ機能
```
1. 右上の「スキップ →」ボタンをクリック
2. Escキーを押す
3. いずれかの方法でアニメーションを飛ばせます
```

### 進捗ドット
```
● ○ ○ ○  ← 現在のステージを表示
クリックで該当ステージにジャンプ可能
```

### レスポンシブ対応
- デスクトップ: 大きな表示
- タブレット: 適切なサイズに調整
- モバイル: 小さめで見やすく表示

---

## 🎨 デザイン要素

### カラースキーム
```
背景: 緑のグラデーション
- #1a3a2a（濃い緑）
- #2d5f3f（中間緑）
- #4a7c59（明るい緑）

枯れた状態: #8b7355（茶色）
元気な状態: #2ecc71（鮮やかな緑）
```

### アニメーション効果
1. **フェードイン/アウト**: ステージ切り替え
2. **成長アニメーション**: 茎が伸びる
3. **葉の復活**: 茶色→緑に変化
4. **水滴の落下**: 💧が上から下に
5. **キラキラ**: ✨が回転しながら点滅
6. **スマホ浮遊**: 上下に揺れる動き

---

## 📝 カスタマイズ方法

### タイミングの調整

#### ファイル: `sections/opening-animation.liquid`

**各ステージの表示時間を変更**:
```javascript
const stageDuration = 3000; // ミリ秒（現在3秒）

// 変更例:
const stageDuration = 2000; // 2秒に短縮
const stageDuration = 5000; // 5秒に延長
```

### テキストの変更

**ステージ1のテキスト**:
```html
<p class="stage-text">元気がない...</p>

<!-- 変更例 -->
<p class="stage-text">葉が枯れてきた...</p>
```

**ステージ2のメッセージ**:
```html
<div class="message user">葉が枯れてきました...</div>
<div class="message expert">水やりを調整しましょう！</div>

<!-- 変更例 -->
<div class="message user">助けてください！</div>
<div class="message expert">お任せください！</div>
```

### 色の変更

**背景グラデーション**:
```css
background: linear-gradient(135deg, #1a3a2a 0%, #2d5f3f 50%, #4a7c59 100%);

/* 変更例: 青系にする */
background: linear-gradient(135deg, #1a3a5f 0%, #2d4f7c 50%, #4a6b9c 100%);
```

**植物の色**:
```css
.plant.healthy .leaf {
  background: #2ecc71; /* 現在の色 */
}

/* 変更例: より濃い緑 */
.plant.healthy .leaf {
  background: #27ae60;
}
```

---

## 🔧 有効化/無効化

### 方法1: Shopify管理画面から

```
1. テーマ → カスタマイズ
2. 左サイドバーで「Opening Animation」を選択
3. 「オープニングアニメーションを有効化」のチェックを外す
4. 保存
```

### 方法2: コードで無効化

#### ファイル: `layout/theme.liquid`

**アニメーションセクションをコメントアウト**:
```liquid
{# {% section 'opening-animation' %} #}
```

または削除:
```liquid
<!-- この行を削除 -->
{% section 'opening-animation' %}
```

---

## 🎬 高度なカスタマイズ

### ステージを追加する

#### 例: 5つ目のステージを追加

**HTML追加**:
```html
<!-- Stage 5: 追加のステージ -->
<div class="stage stage-5">
  <div class="your-content">
    <!-- あなたのコンテンツ -->
  </div>
  <p class="stage-text">新しいステージ</p>
</div>
```

**進捗ドット追加**:
```html
<div class="progress-dots">
  <span class="dot active" data-stage="1"></span>
  <span class="dot" data-stage="2"></span>
  <span class="dot" data-stage="3"></span>
  <span class="dot" data-stage="4"></span>
  <span class="dot" data-stage="5"></span> <!-- 追加 -->
</div>
```

**JavaScript変更**:
```javascript
const totalStages = 5; // 4から5に変更
```

### アニメーション速度を変更

**水滴の落下速度**:
```css
@keyframes fall {
  /* 現在: 1.5秒 */
  animation: fall 1.5s ease infinite;
}

/* 変更例: 2秒（ゆっくり） */
animation: fall 2s ease infinite;
```

**葉の成長速度**:
```css
@keyframes leafGrow {
  /* デュレーションを変更 */
  animation: leafGrow 1s ease 0.2s backwards; /* 1秒に延長 */
}
```

### 絵文字を変更

**水滴**:
```html
<div class="drop drop-1">💧</div>

<!-- 変更例: 別の絵文字 -->
<div class="drop drop-1">💦</div>
<div class="drop drop-1">🌊</div>
```

**キラキラ**:
```html
<div class="sparkle sparkle-1">✨</div>

<!-- 変更例 -->
<div class="sparkle sparkle-1">⭐</div>
<div class="sparkle sparkle-1">🌟</div>
```

---

## 📱 モバイル対応

### 自動調整される要素

```
デスクトップ:
- 植物サイズ: 200x300px
- スマホサイズ: 280x500px
- テキストサイズ: 1.5rem

モバイル:
- 植物サイズ: 150x250px
- スマホサイズ: 220x400px
- テキストサイズ: 1.2rem
```

### カスタムブレイクポイント

```css
/* 現在: 768px */
@media (max-width: 768px) {
  /* モバイルスタイル */
}

/* 変更例: タブレット用に追加 */
@media (max-width: 1024px) and (min-width: 769px) {
  /* タブレットスタイル */
}
```

---

## 🐛 トラブルシューティング

### Q: アニメーションが表示されない

**A**: 
1. `theme.liquid` に `{% section 'opening-animation' %}` があるか確認
2. ファイルが正しくアップロードされているか確認
3. ブラウザのキャッシュをクリア（Ctrl+Shift+R / Cmd+Shift+R）

### Q: アニメーションが途中で止まる

**A**:
1. JavaScriptのエラーを確認（F12でコンソール開く）
2. `totalStages` と実際のステージ数が一致しているか確認
3. すべての`.stage-X`クラスが存在するか確認

### Q: スキップボタンが効かない

**A**:
1. `window.skipAnimation` 関数が定義されているか確認
2. JavaScriptがロードされているか確認
3. ブラウザのエラーログを確認

### Q: モバイルでレイアウトが崩れる

**A**:
1. メディアクエリが適用されているか確認
2. ビューポートメタタグがあるか確認
3. 要素のサイズがvwを超えていないか確認

---

## 💡 パフォーマンス最適化

### アニメーションの最適化

```css
/* GPU加速を有効化 */
.plant,
.phone,
.leaf {
  will-change: transform;
  transform: translateZ(0);
}

/* 不要な要素は非表示 */
.stage:not(.active) {
  display: none; /* visibility: hidden より軽量 */
}
```

### 画像を使用する場合

現在は絵文字とCSSを使用していますが、画像に変更することも可能：

```html
<!-- 画像版 -->
<img src="plant-dead.png" alt="枯れた植物" class="plant-image">
<img src="plant-healthy.png" alt="元気な植物" class="plant-image">
```

**注意**: 画像を使う場合はファイルサイズに注意（各50KB以下推奨）

---

## 🎨 デザインのヒント

### より魅力的にするアイデア

1. **効果音の追加**
   - 水が落ちる音
   - 植物が成長する音
   - LINEの通知音

2. **パーティクル効果**
   - 回復時のキラキラをもっと増やす
   - 背景に葉っぱが舞う

3. **カウントアップ**
   - 「10,000人が利用中」などの数字が増える演出

4. **キャラクター追加**
   - 植物のキャラクター化
   - 専門家のアバター表示

---

## 📊 ユーザビリティ

### ベストプラクティス

✅ **やるべきこと**:
- スキップボタンを目立たせる
- 各ステージ2-4秒程度に抑える
- モバイルでも快適に動作させる
- 最初の訪問時のみ表示（オプション）

❌ **避けるべきこと**:
- 長すぎるアニメーション（15秒以上）
- スキップできないアニメーション
- 音声の自動再生（ユーザー体験を損なう）
- 複雑すぎる演出（読み込みが遅くなる）

---

## 🔄 初回訪問のみ表示する方法

### LocalStorageを使用

```javascript
(function() {
  // 初回訪問チェック
  if (localStorage.getItem('opening-animation-seen')) {
    skipAnimation();
    return;
  }
  
  // アニメーション終了後にフラグを保存
  function endAnimation() {
    localStorage.setItem('opening-animation-seen', 'true');
    // ... 既存のコード
  }
})();
```

---

## まとめ

### アニメーションの特徴
- ✅ ストーリー性のある4ステージ構成
- ✅ 自動進行（各3秒）
- ✅ スキップ機能完備
- ✅ レスポンシブ対応
- ✅ 軽量（画像不使用）
- ✅ カスタマイズ容易

### 編集のポイント
- タイミング: `stageDuration`
- テキスト: `.stage-text`内
- 色: CSSのカラーコード
- 有効/無効: Shopify管理画面またはコード

---

**最終更新**: 2024-11-06
**バージョン**: 1.0
