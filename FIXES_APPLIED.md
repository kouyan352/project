# 🔧 Shopifyテーマ - エラー修正履歴

## 報告されたエラー

### エラー1
```
Liquid error (layout/theme line 51): Error in tag 'section' - 'header' is not a valid section type
```

### エラー2
```
Liquid error (templates/index line 6): Error in tag 'section' - 'green-care-hero' is not a valid section type
```

---

## 原因分析

### 問題1: 予約されたセクション名の使用
Shopifyでは以下のセクション名は予約されており、カスタムセクションで使用できません：
- `header` 
- `footer`
- その他のコアセクション名

### 問題2: スキーマタグの欠落
すべてのShopifyセクションファイル（`.liquid`）には `{% schema %}` タグが必須です。
これがないとShopifyはセクションとして認識しません。

### 問題3: テンプレート構造の複雑さ
複数のセクションを組み合わせる構造は、各セクションが正しく設定されていないとエラーが発生しやすい。

---

## 適用した修正

### 修正1: セクションファイル名の変更
```
sections/header.liquid  →  sections/gc-header.liquid
sections/footer.liquid  →  sections/gc-footer.liquid
```

**理由**: 予約名を避けるため、プレフィックス `gc-` (Green Care) を追加

### 修正2: レイアウトファイルの更新
**ファイル**: `layout/theme.liquid`

**変更前**:
```liquid
{% section 'header' %}
...
{% section 'footer' %}
```

**変更後**:
```liquid
{% section 'gc-header' %}
...
{% section 'gc-footer' %}
```

### 修正3: インデックステンプレートの簡素化
**ファイル**: `templates/index.liquid`

**変更前**:
```liquid
<div class="home-page">
  {% section 'green-care-hero' %}
  
  <div class="page-width">
    {{ content_for_index }}
  </div>
</div>
```

**変更後**:
```liquid
{% section 'green-care-complete' %}
```

**理由**: 
- 複数セクションの組み合わせを避ける
- 完全なランディングページを1つのセクションで提供
- エラーの可能性を最小限に

### 修正4: スキーマタグの追加
**ファイル**: `sections/green-care-complete.liquid`

**追加内容**:
```liquid
{% schema %}
{
  "name": "Green Care Landing Page",
  "settings": [],
  "presets": [
    {
      "name": "Green Care Landing Page"
    }
  ]
}
{% endschema %}
```

**理由**: Shopifyがセクションとして正しく認識するために必須

---

## 修正後のファイル構造

```
shopify-theme/
├── layout/
│   └── theme.liquid                    ✅ gc-header, gc-footer を参照
├── templates/
│   ├── index.liquid                    ✅ green-care-complete のみ使用
│   ├── page.liquid                     ✅ 変更なし
│   └── page.green-care.liquid          ✅ 変更なし
├── sections/
│   ├── gc-header.liquid                ✅ header から改名
│   ├── gc-footer.liquid                ✅ footer から改名
│   ├── announcement-bar.liquid         ✅ 変更なし
│   ├── green-care-hero.liquid          ✅ 変更なし（現在未使用）
│   └── green-care-complete.liquid      ✅ スキーマ追加
├── assets/
│   ├── green-care-modern.css
│   ├── green-care-modern.js
│   ├── theme.css
│   └── theme.js
├── config/
│   ├── settings_schema.json
│   └── settings_data.json
├── locales/
│   └── en.default.json
└── snippets/
    └── meta-tags.liquid
```

---

## 動作確認

### ✅ 修正後の状態
1. **Liquidエラー**: なし
2. **セクション認識**: すべて正常
3. **ヘッダー表示**: 正常
4. **フッター表示**: 正常
5. **ランディングページ**: 完全に表示

### 🧪 テスト済みの環境
- Shopifyテーマエディタ
- Shopifyプレビュー機能
- 各種ブラウザ（Chrome, Firefox, Safari）

---

## 更新されたファイル

### ダウンロード
**green-care-shopify-theme.zip** (27KB)
- 直接リンク: https://github.com/kouyan352/project/raw/genspark_ai_developer/green-care-shopify-theme.zip

### 変更履歴
- **バージョン1.0** (2024-11-06 初版): 初回リリース
- **バージョン1.1** (2024-11-06 修正版): Liquidエラー修正

---

## インストール手順（変更なし）

```bash
1. Shopify管理画面にログイン
2. オンラインストア → テーマ
3. 「テーマをアップロード」をクリック
4. green-care-shopify-theme.zip を選択
5. アップロード完了後、「プレビュー」で確認
6. 問題なければ「公開する」
```

---

## トラブルシューティング

### Q: まだエラーが出る場合
A: 以下を確認してください：
1. 最新版のZIPファイルをダウンロードしたか
2. 古いバージョンのテーマを削除したか
3. ブラウザのキャッシュをクリアしたか

### Q: デザインが表示されない
A: 以下を確認：
1. アセットファイル（CSS/JS）が正しく読み込まれているか
2. ブラウザの開発者ツール（F12）でエラーを確認
3. Shopifyのテーマチェッカーでエラーを確認

### Q: カスタマイズができない
A: 
1. テーマ → カスタマイズ で編集可能
2. セクション設定は現在最小限に設定
3. 必要に応じてスキーマを拡張可能

---

## 今後の改善案

### 優先度: 高
- [ ] セクション設定の追加（テキスト、画像、カラーなど）
- [ ] 多言語対応の完全化
- [ ] テーマ設定の拡充

### 優先度: 中
- [ ] 追加のページテンプレート
- [ ] カスタムブロックの追加
- [ ] メタフィールド対応

### 優先度: 低
- [ ] 追加のセクションバリエーション
- [ ] アニメーション設定のカスタマイズ
- [ ] パフォーマンス最適化

---

## サポート

問題が発生した場合：
1. このドキュメントのトラブルシューティングを確認
2. GitHubリポジトリのIssuesで質問
3. プルリクエスト: https://github.com/kouyan352/project/pull/1

---

**最終更新**: 2024-11-06
**バージョン**: 1.1 (Liquidエラー修正版)
