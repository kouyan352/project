# 📥 直接ダウンロードリンク

## ✅ 確実にダウンロードできる方法

### 方法1: GitHub Raw URL（最も確実）

以下のリンクを**右クリック → 「名前を付けてリンク先を保存」**でダウンロード：

#### 1. Shopifyテーマ (39KB) - 推奨
```
https://raw.githubusercontent.com/kouyan352/project/genspark_ai_developer/green-care-shopify-theme.zip
```

**または、ブラウザで開いてダウンロード**:
1. 上記URLをコピー
2. 新しいタブに貼り付けて開く
3. 自動的にダウンロードが始まります

#### 2. 開発プロジェクト (102KB)
```
https://raw.githubusercontent.com/kouyan352/project/genspark_ai_developer/green-care-landing-page.zip
```

#### 3. ページファイル (24KB)
```
https://raw.githubusercontent.com/kouyan352/project/genspark_ai_developer/green-care-shopify-files.zip
```

---

### 方法2: GitHub UI経由

1. **リポジトリページに移動**:
   https://github.com/kouyan352/project

2. **ブランチを「genspark_ai_developer」に切り替え**:
   - ページ左上の「main」をクリック
   - 「genspark_ai_developer」を選択

3. **ZIPファイルをクリック**:
   - `green-care-shopify-theme.zip` をクリック
   - 「Download」ボタンをクリック

---

### 方法3: Git Clone

ターミナル/コマンドプロンプトで実行：

```bash
# リポジトリをクローン
git clone https://github.com/kouyan352/project.git

# ブランチに切り替え
cd project
git checkout genspark_ai_developer

# ZIPファイルを確認
ls -la *.zip
```

---

### 方法4: curl コマンド（Mac/Linux）

```bash
# Shopifyテーマをダウンロード
curl -L -o green-care-shopify-theme.zip \
  "https://raw.githubusercontent.com/kouyan352/project/genspark_ai_developer/green-care-shopify-theme.zip"

# 開発プロジェクトをダウンロード
curl -L -o green-care-landing-page.zip \
  "https://raw.githubusercontent.com/kouyan352/project/genspark_ai_developer/green-care-landing-page.zip"

# ページファイルをダウンロード
curl -L -o green-care-shopify-files.zip \
  "https://raw.githubusercontent.com/kouyan352/project/genspark_ai_developer/green-care-shopify-files.zip"
```

---

### 方法5: wget コマンド（Linux）

```bash
# Shopifyテーマをダウンロード
wget "https://raw.githubusercontent.com/kouyan352/project/genspark_ai_developer/green-care-shopify-theme.zip"

# 開発プロジェクトをダウンロード
wget "https://raw.githubusercontent.com/kouyan352/project/genspark_ai_developer/green-care-landing-page.zip"

# ページファイルをダウンロード
wget "https://raw.githubusercontent.com/kouyan352/project/genspark_ai_developer/green-care-shopify-files.zip"
```

---

### 方法6: PowerShell（Windows）

```powershell
# Shopifyテーマをダウンロード
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/kouyan352/project/genspark_ai_developer/green-care-shopify-theme.zip" -OutFile "green-care-shopify-theme.zip"

# 開発プロジェクトをダウンロード
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/kouyan352/project/genspark_ai_developer/green-care-landing-page.zip" -OutFile "green-care-landing-page.zip"

# ページファイルをダウンロード
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/kouyan352/project/genspark_ai_developer/green-care-shopify-files.zip" -OutFile "green-care-shopify-files.zip"
```

---

## 🔍 トラブルシューティング

### 問題1: 「このサイトにアクセスできません」

**原因**: ローカルファイルパスにアクセスしようとしている

**解決策**: 
- GitHubのRaw URLを使用（上記の方法1）
- ブラウザで直接開く

### 問題2: ダウンロードが開始されない

**原因**: ブラウザの設定やポップアップブロック

**解決策**:
- 右クリック → 「名前を付けてリンク先を保存」
- curlやwgetコマンドを使用
- 別のブラウザを試す

### 問題3: ZIPファイルが壊れている

**原因**: 不完全なダウンロード

**解決策**:
- ファイルサイズを確認:
  - green-care-shopify-theme.zip: 39KB
  - green-care-landing-page.zip: 102KB
  - green-care-shopify-files.zip: 24KB
- 再ダウンロード

---

## 📧 サポート

どの方法でもダウンロードできない場合は、お知らせください。
別の方法をご提案します。

---

**推奨**: 方法1のGitHub Raw URLを使用するのが最も確実です！
