# 📥 ZIPファイルのダウンロード方法

ダウンロードできない場合、以下の方法を試してください。

---

## 方法1: GitHub Rawリンク（推奨）

### green-care-shopify-theme.zip (34KB) ⭐ 最新版
```
https://github.com/kouyan352/project/raw/genspark_ai_developer/green-care-shopify-theme.zip
```

**手順**:
1. 上記URLをブラウザのアドレスバーにコピー
2. Enterキーを押す
3. 自動的にダウンロードが開始

---

## 方法2: GitHub リポジトリから直接

### ステップ1: リポジトリにアクセス
```
https://github.com/kouyan352/project
```

### ステップ2: ブランチを切り替え
1. ページ上部の「main」をクリック
2. 「genspark_ai_developer」を選択

### ステップ3: ファイルを探す
1. ファイル一覧で `green-care-shopify-theme.zip` を見つける
2. ファイル名をクリック

### ステップ4: ダウンロード
1. 右上の「Download」ボタンをクリック
2. または「View raw」をクリック

---

## 方法3: GitHub CLI（プルリクエストから）

### プルリクエストページにアクセス
```
https://github.com/kouyan352/project/pull/1
```

### 手順:
1. 「Files changed」タブをクリック
2. `green-care-shopify-theme.zip` を探す
3. ファイル名をクリック
4. 「Download」または「View file」をクリック

---

## 方法4: 全体をZIPでダウンロード

### GitHubリポジトリ全体をダウンロード
1. https://github.com/kouyan352/project にアクセス
2. ブランチを「genspark_ai_developer」に切り替え
3. 緑色の「Code」ボタンをクリック
4. 「Download ZIP」をクリック

**注意**: この方法だと全ファイルがダウンロードされます（約200KB）

ダウンロード後:
```
project-genspark_ai_developer.zip を解凍
→ green-care-shopify-theme.zip を見つける
→ これをShopifyにアップロード
```

---

## 方法5: curlコマンド（技術者向け）

### ターミナルで実行
```bash
curl -L -o green-care-shopify-theme.zip https://github.com/kouyan352/project/raw/genspark_ai_developer/green-care-shopify-theme.zip
```

---

## 方法6: wgetコマンド（技術者向け）

### ターミナルで実行
```bash
wget https://github.com/kouyan352/project/raw/genspark_ai_developer/green-care-shopify-theme.zip
```

---

## トラブルシューティング

### 問題1: 「404 Not Found」エラー

**原因**: URLが間違っているか、ファイルがまだpushされていない

**解決方法**:
1. ブランチ名を確認（`genspark_ai_developer`）
2. 以下のURLで直接アクセス:
```
https://github.com/kouyan352/project/tree/genspark_ai_developer
```

### 問題2: ダウンロードが始まらない

**原因**: ブラウザの設定やポップアップブロック

**解決方法**:
1. 右クリック → 「名前を付けてリンク先を保存」
2. または、別のブラウザで試す
3. プライベートモード/シークレットモードで試す

### 問題3: ZIPファイルが壊れている

**原因**: ダウンロード中の中断

**解決方法**:
1. ダウンロードを最後までやり直す
2. ファイルサイズを確認（34KB程度であることを確認）
3. 解凍ツールを変更（7-Zip、WinRAR、macOS標準など）

### 問題4: GitHubにアクセスできない

**原因**: ネットワーク制限やファイアウォール

**解決方法**:
1. VPNを使用
2. 別のネットワークで試す
3. モバイルデータ接続で試す

---

## 代替方法: ファイルを個別に取得

ZIPファイルがどうしてもダウンロードできない場合、個別にファイルを取得して手動で作成できます。

### 必要なファイル一覧

#### レイアウト
- `layout/theme.liquid`

#### テンプレート
- `templates/index.liquid`
- `templates/page.liquid`
- `templates/page.green-care.liquid`
- `templates/product.liquid`
- `templates/collection.liquid`

#### セクション
- `sections/green-care-complete.liquid`
- `sections/announcement-bar.liquid`
- `sections/product-info.liquid`
- `sections/product-recommendations.liquid`
- `sections/collection-header.liquid`
- `sections/collection-products.liquid`

#### スニペット
- `snippets/meta-tags.liquid`
- `snippets/gc-header.liquid`
- `snippets/gc-footer.liquid`

#### アセット
- `assets/green-care-modern.css`
- `assets/green-care-modern.js`
- `assets/theme.css`
- `assets/theme.js`

#### 設定
- `config/settings_schema.json`
- `config/settings_data.json`

#### 翻訳
- `locales/en.default.json`

### 個別ダウンロード手順
1. https://github.com/kouyan352/project/tree/genspark_ai_developer にアクセス
2. `shopify-theme` フォルダをクリック
3. 各ファイルを開いて「Raw」ボタンをクリック
4. 内容をコピーしてローカルに保存
5. 正しいフォルダ構造で保存
6. 全ファイルをZIPに圧縮

---

## 直接ダウンロードリンク集

### メインファイル
- **Shopifyテーマ**: https://github.com/kouyan352/project/raw/genspark_ai_developer/green-care-shopify-theme.zip
- **完全版プロジェクト**: https://github.com/kouyan352/project/raw/genspark_ai_developer/green-care-landing-page.zip
- **ページ用HTML**: https://github.com/kouyan352/project/raw/genspark_ai_developer/green-care-shopify-files.zip

### ドキュメント
- **商品編集ガイド**: https://github.com/kouyan352/project/raw/genspark_ai_developer/PRODUCT_EDITING_GUIDE.md
- **テーマガイド**: https://github.com/kouyan352/project/raw/genspark_ai_developer/SHOPIFY_THEME_GUIDE.md
- **ZIP比較**: https://github.com/kouyan352/project/raw/genspark_ai_developer/ZIP_FILES_COMPARISON.md

---

## 確認方法

### ダウンロードが成功したか確認

#### Windowsの場合
1. ダウンロードフォルダを開く
2. `green-care-shopify-theme.zip` を右クリック
3. 「プロパティ」を確認
4. サイズが約34KB（34,558バイト）であることを確認

#### Macの場合
1. ダウンロードフォルダを開く
2. `green-care-shopify-theme.zip` を選択
3. Cmd+I で情報を表示
4. サイズが約34KBであることを確認

### 解凍テスト
1. ZIPファイルをダブルクリックして解凍
2. `shopify-theme` フォルダが作成される
3. 中に `layout`, `templates`, `sections` などのフォルダがある
4. 合計19ファイルが含まれている

---

## サポート

### それでもダウンロードできない場合

1. **ブラウザ情報を教えてください**
   - Chrome / Firefox / Safari / Edge？
   - バージョンは？

2. **エラーメッセージを教えてください**
   - 何が表示されましたか？
   - スクリーンショットがあれば助かります

3. **試した方法を教えてください**
   - どの方法を試しましたか？
   - どこで止まりましたか？

この情報があれば、さらに詳しくサポートできます！

---

## 📞 緊急時の対処法

### 今すぐ使いたい場合

#### オプション1: ページ用HTMLを使う
```
https://github.com/kouyan352/project/raw/genspark_ai_developer/green-care-shopify-files.zip
```
これをダウンロードして、中の `shopify-modern-complete.html` をコピー＆ペーストで使用できます。

#### オプション2: コードを直接コピー
1. https://github.com/kouyan352/project/blob/genspark_ai_developer/shopify/shopify-modern-complete.html
2. 「Raw」ボタンをクリック
3. 全選択（Ctrl+A / Cmd+A）
4. コピー（Ctrl+C / Cmd+C）
5. Shopifyページに貼り付け

これで最低限動作します！

---

**最終更新**: 2024-11-06
