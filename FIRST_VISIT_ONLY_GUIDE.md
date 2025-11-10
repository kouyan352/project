# 🎬 初回訪問時のみアニメーション表示機能

## ✅ 実装完了！

オープニングアニメーションが**初回訪問時のみ表示**されるようになりました！

---

## 🎯 動作仕様

### デフォルト設定（推奨）

```yaml
初回訪問時のみ表示: ON (デフォルト)
動作:
  1回目の訪問 → アニメーション表示
  2回目以降   → アニメーションスキップ
```

### 仕組み

- **localStorage** を使用してブラウザに訪問履歴を保存
- 保存キー: `greencare_opening_animation_viewed`
- ユーザーが初めてサイトを訪問した時だけアニメーションを再生
- 2回目以降の訪問では自動的にスキップ

---

## 🎨 設定方法

### Shopify テーマエディターで設定

1. **Shopify管理画面にログイン**
2. **オンラインストア → テーマ**
3. **カスタマイズ** をクリック
4. 左サイドバーで **「Opening Animation」** セクションを選択
5. 以下の設定を調整:

#### 設定項目:

**✅ オープニングアニメーションを有効化**
- オン: アニメーションを表示
- オフ: アニメーションを完全に無効化

**✅ 初回訪問時のみ表示** ⭐ 新機能
- **オン（推奨）**: 初回訪問時のみアニメーション表示
- **オフ**: 毎回アニメーションを表示

**⏱️ 各ステージの表示時間**
- 2〜5秒の間で調整可能
- デフォルト: 3秒

---

## 🔧 動作確認方法

### テスト手順:

1. **初回アクセス**: ホームページを開く
   - ✅ アニメーションが表示される

2. **ページをリロード** (F5 または Cmd+R)
   - ✅ アニメーションが表示されない（スキップ）

3. **別のページに移動して戻る**
   - ✅ アニメーションが表示されない

4. **再度アニメーションを見る方法**:
   - ブラウザのキャッシュをクリア
   - または、シークレットモード/プライベートブラウジングで開く
   - または、開発者ツールで localStorage をクリア（下記参照）

---

## 🗑️ アニメーションをリセットする方法

### 方法1: ブラウザキャッシュをクリア

**Chrome / Edge:**
```
1. Ctrl + Shift + Delete (Windows)
   または Cmd + Shift + Delete (Mac)
2. 「キャッシュされた画像とファイル」と「Cookieとその他のサイトデータ」を選択
3. 「データを削除」をクリック
```

**Safari:**
```
1. メニュー → 環境設定 → プライバシー
2. 「Webサイトデータを管理」
3. 対象サイトを選択して「削除」
```

### 方法2: 開発者ツールで削除（テスト用）

**Chrome / Firefox / Edge:**

1. **F12** キーを押して開発者ツールを開く
2. **Application** (Chrome/Edge) または **Storage** (Firefox) タブを選択
3. 左サイドバーで **Local Storage** → あなたのサイトURL を選択
4. `greencare_opening_animation_viewed` を探す
5. 右クリック → **Delete** または **削除**
6. ページをリロード

### 方法3: JavaScriptコンソールで削除

1. **F12** キーを押して開発者ツールを開く
2. **Console** タブを選択
3. 以下のコマンドを入力して Enter:
   ```javascript
   localStorage.removeItem('greencare_opening_animation_viewed');
   location.reload();
   ```

### 方法4: シークレットモード

**常に初回訪問として表示**:
```
Chrome: Ctrl + Shift + N (Windows) / Cmd + Shift + N (Mac)
Firefox: Ctrl + Shift + P (Windows) / Cmd + Shift + P (Mac)
Safari: Cmd + Shift + N (Mac)
Edge: Ctrl + Shift + N (Windows)
```

シークレットモードでは localStorage が保存されないため、常にアニメーションが表示されます。

---

## 📊 3つの表示モード比較

| モード | 設定 | 動作 | 用途 |
|--------|------|------|------|
| **初回のみ** | 初回訪問時のみ表示: ON | 初回のみ表示 | **推奨**: ユーザー体験向上 |
| **毎回表示** | 初回訪問時のみ表示: OFF | 毎回表示 | テスト・プレゼン用 |
| **完全無効** | アニメーション有効化: OFF | 表示しない | アニメーション不要な場合 |

---

## 💡 推奨設定

### 本番環境（公開後）

```yaml
オープニングアニメーションを有効化: ON
初回訪問時のみ表示: ON  ← これが重要！
各ステージの表示時間: 3秒
```

**理由**:
- 初回訪問者に強い印象を与える
- リピーターはすぐにコンテンツにアクセスできる
- ユーザーストレスを軽減

### テスト環境

```yaml
オープニングアニメーションを有効化: ON
初回訪問時のみ表示: OFF  ← テスト用
各ステージの表示時間: 2秒  ← 短くして確認しやすく
```

**理由**:
- アニメーションの動作確認がしやすい
- 修正後すぐに確認できる

---

## 🔍 トラブルシューティング

### Q1: アニメーションが毎回表示される

**原因**: 「初回訪問時のみ表示」がオフになっている

**解決策**:
1. テーマエディターで設定を確認
2. 「初回訪問時のみ表示」を**オン**にする
3. 保存して確認

### Q2: アニメーションが一度も表示されない

**原因**: アニメーション自体が無効化されている

**解決策**:
1. 「オープニングアニメーションを有効化」が**オン**か確認
2. ブラウザのキャッシュをクリア
3. シークレットモードで確認

### Q3: 初回でもアニメーションが表示されない

**原因**: 以前にアクセスしたことがある

**解決策**:
1. ブラウザキャッシュをクリア
2. または localStorage を手動で削除（方法2参照）
3. または シークレットモードで開く

### Q4: テスト時に毎回見たい

**解決策**:
- 一時的に「初回訪問時のみ表示」を**オフ**にする
- または シークレットモードを使用
- または 毎回 localStorage を削除するスクリプトを使用:
  ```javascript
  // コンソールで実行
  localStorage.removeItem('greencare_opening_animation_viewed');
  ```

---

## 🎨 カスタマイズ例

### 例1: 24時間後に再表示

localStorage に有効期限を追加:

```javascript
// 有効期限付きで保存（24時間）
function markAnimationAsViewed() {
  const expiryTime = Date.now() + (24 * 60 * 60 * 1000); // 24時間後
  localStorage.setItem(ANIMATION_VIEWED_KEY, JSON.stringify({
    viewed: true,
    expiry: expiryTime
  }));
}

function hasViewedAnimation() {
  const data = localStorage.getItem(ANIMATION_VIEWED_KEY);
  if (!data) return false;
  
  const parsed = JSON.parse(data);
  if (Date.now() > parsed.expiry) {
    localStorage.removeItem(ANIMATION_VIEWED_KEY);
    return false;
  }
  return parsed.viewed;
}
```

### 例2: セッション単位（ブラウザを閉じるまで）

localStorage の代わりに sessionStorage を使用:

```javascript
// localStorage → sessionStorage に変更
function markAnimationAsViewed() {
  sessionStorage.setItem(ANIMATION_VIEWED_KEY, 'true');
}

function hasViewedAnimation() {
  return sessionStorage.getItem(ANIMATION_VIEWED_KEY) === 'true';
}
```

ブラウザを閉じると自動的にクリアされます。

### 例3: クッキーで管理

```javascript
function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
}

function getCookie(name) {
  return document.cookie.split('; ').reduce((r, v) => {
    const parts = v.split('=');
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, '');
}

function markAnimationAsViewed() {
  setCookie('animation_viewed', 'true', 365); // 365日間有効
}

function hasViewedAnimation() {
  return getCookie('animation_viewed') === 'true';
}
```

---

## 📱 モバイル対応

モバイルでも同じ仕組みで動作します：

- **iOS Safari**: localStorage 対応
- **Android Chrome**: localStorage 対応
- **プライベートブラウジング**: セッションのみ有効（ブラウザを閉じるとクリア）

---

## 🚀 デプロイ手順

### 1. テーマをアップロード

```bash
1. green-care-shopify-theme.zip をダウンロード
2. Shopify管理画面 → オンラインストア → テーマ
3. テーマをアップロード
```

### 2. 設定を確認

```bash
1. カスタマイズをクリック
2. Opening Animation セクションを選択
3. 「初回訪問時のみ表示」が ON になっていることを確認
4. 保存
```

### 3. テスト

```bash
1. シークレットモードでサイトを開く → アニメーション表示
2. ページをリロード → アニメーション非表示
3. 確認完了！
```

---

## 📊 ユーザー体験への影響

### メリット:

- ✅ 初回訪問者に強い印象を与える
- ✅ ブランドストーリーを効果的に伝える
- ✅ リピーターのストレスを軽減
- ✅ ページ読み込み時間の短縮（2回目以降）

### デメリット:

- ⚠️ 初回訪問者は12秒待つ必要がある
- ⚠️ スキップボタンを押す必要がある場合も

### 推奨:

**「初回訪問時のみ表示 = ON」** が最もバランスが良い設定です。

---

## 🔗 関連ドキュメント

- **OPENING_ANIMATION_GUIDE.md** - アニメーション全般のカスタマイズ
- **OPENING_ANIMATION_COMPLETE.md** - 実装完了サマリー
- **ANIMATION_PREVIEW.md** - アニメーションの視覚的プレビュー

---

## 📞 サポート

質問がある場合は、以下を確認してください：

1. ブラウザの開発者ツールでエラーがないか確認
2. localStorage が有効になっているか確認
3. 設定が正しく保存されているか確認

---

**🌿 Green Care - 初回訪問者に最高の第一印象を**

これで、ユーザーは初めてサイトを訪れた時だけアニメーションを楽しめ、2回目以降はすぐにコンテンツにアクセスできます！ 🎉
