# Shopifyへの反映方法ガイド

このランディングページをShopifyに反映させる方法を説明します。

## 方法1: Shopifyページとして追加（推奨）

### ステップ1: Shopify管理画面にアクセス
1. Shopify管理画面にログイン
2. 「オンラインストア」→「ページ」に移動

### ステップ2: 新しいページを作成
1. 「ページを追加」をクリック
2. タイトル: 「Green Care - 植物サポート」など
3. コンテンツエリアで右上の「<>」（HTMLを表示）をクリック

### ステップ3: HTMLコードを貼り付け
`index.html`の`<body>`タグ内のコンテンツをコピーして貼り付けます。

注意点:
- `<header>`から`<footer>`までをコピー
- `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`タグは除外

### ステップ4: CSSを追加
**オプションA: テーマのカスタムCSSに追加**
1. 「オンラインストア」→「テーマ」
2. 「カスタマイズ」→「テーマ設定」→「カスタムCSS」
3. `style.css`の内容を貼り付け

**オプションB: ページ内に埋め込む**
HTMLコンテンツの先頭に以下を追加:
```html
<style>
  /* style.cssの内容をここに貼り付け */
</style>
```

### ステップ5: JavaScriptを追加
HTMLコンテンツの最後に以下を追加:
```html
<script>
  // script.jsの内容をここに貼り付け
</script>
```

---

## 方法2: Shopifyテーマのカスタマイズ

### ステップ1: テーマファイルにアクセス
1. 「オンラインストア」→「テーマ」
2. 現在のテーマの「アクション」→「コードを編集」

### ステップ2: 新しいページテンプレートを作成
1. 左サイドバーの「Templates」フォルダ
2. 「新しいテンプレートを追加」
3. タイプ: `page`
4. 名前: `green-care-landing`

### ステップ3: Liquidテンプレートを作成
`templates/page.green-care-landing.liquid`に以下を記述:

```liquid
{% layout 'theme' %}

<style>
  /* style.cssの内容 */
</style>

<!-- index.htmlのbody内容 -->

<script>
  // script.jsの内容
</script>
```

### ステップ4: ページにテンプレートを適用
1. 「オンラインストア」→「ページ」
2. 新しいページを作成
3. 右サイドバーの「テンプレート」で`page.green-care-landing`を選択

---

## 方法3: カスタムセクションとして作成

### ステップ1: セクションファイルを作成
1. テーマエディタで「Sections」フォルダ
2. 「新しいセクションを追加」
3. 名前: `green-care-landing`

### ステップ2: セクションコードを記述
`sections/green-care-landing.liquid`:

```liquid
<style>
  /* style.cssの内容 */
</style>

<div class="green-care-landing">
  <!-- HTMLコンテンツ -->
</div>

<script>
  // script.jsの内容
</script>

{% schema %}
{
  "name": "Green Care Landing",
  "settings": [
    {
      "type": "text",
      "id": "line_url",
      "label": "LINE URL",
      "default": "https://lin.ee/8QakieO"
    }
  ],
  "presets": [
    {
      "name": "Green Care Landing"
    }
  ]
}
{% endschema %}
```

### ステップ3: ページに追加
1. ページを編集
2. セクションを追加
3. 「Green Care Landing」を選択

---

## 方法4: Shopify Liquid形式に完全変換（上級者向け）

テーマに完全に統合する場合、以下の対応が必要です:

### 必要な変更:
1. **画像**: Shopify Filesにアップロード、URLを`{{ 'image.jpg' | asset_url }}`に変更
2. **フォント**: Shopify設定またはGoogle Fonts CDN使用
3. **リンク**: `{{ pages.contact.url }}`などLiquid変数使用
4. **設定**: スキーマでカスタマイズ可能に

---

## Shopify用に最適化したファイルの作成

以下のコマンドでShopify用ファイルを生成できます（別途提供）:
- `shopify-page.html` - ページ用HTML
- `shopify-section.liquid` - セクション用Liquid
- `shopify-template.liquid` - テンプレート用Liquid

---

## 推奨アプローチ

### 初心者の方
→ **方法1: Shopifyページとして追加**
- 最も簡単
- コーディング知識不要
- すぐに反映可能

### 中級者の方
→ **方法2: ページテンプレート作成**
- テーマに統合
- 複数ページで再利用可能
- カスタマイズしやすい

### 上級者の方
→ **方法3 or 4: セクション/完全Liquid化**
- 完全にテーマに統合
- Shopifyの機能を最大活用
- 保守性が高い

---

## 注意事項

### 1. LINE URL の確認
現在のコード内のLINE URL (`https://lin.ee/8QakieO`) を、
実際のLINE公式アカウントURLに変更してください。

### 2. Google Fonts
現在のコードはGoogle Fontsを使用しています。
Shopifyで問題なく動作しますが、テーマ設定のフォントを使用することも可能です。

### 3. レスポンシブ対応
すでにモバイル対応済みですが、Shopifyテーマとの兼ね合いで
追加調整が必要な場合があります。

### 4. 画像の追加
現在、実際の植物画像は使用していません（SVGアイコンのみ）。
必要に応じてShopify Filesに画像をアップロードして追加してください。

---

## サポート

実装でお困りの場合は、以下の情報をお知らせください:
1. 使用しているShopifyテーマ名
2. 希望する実装方法（方法1〜4）
3. エラーメッセージ（あれば）

具体的な実装コードを作成いたします。
