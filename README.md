# デモホームページ

## 概要

このプロジェクトは、静的なデモホームページです。レスポンシブデザインに対応し、モダンな UI/UX を意識した構成となっています。複数のページ（トップ、メニュー、コンセプト、ショップリスト、アーカイブ、シングルページ、404ページ）を含み、写真やイメージを多用したビジュアル重視のサイトです。

## 特徴

- **レスポンシブデザイン**: PC・タブレット・スマートフォンに対応
- **アニメーション**: JavaScript によるフェードインやキービジュアルアニメーション
- **セマンティック HTML**: アクセシビリティに配慮したマークアップ
- **SASS/SCSS**: 効率的な CSS 管理
- **画像最適化**: WebP 形式や複数解像度の画像を用意

## 技術スタック

### フロントエンド

- **HTML5**: セマンティックなマークアップ
- **CSS3/SASS**: モダンなスタイリング
- **JavaScript (ES6+)**: インタラクティブ機能

### フォント

- **Lora**: 英語テキスト用
- **Noto Serif JP**: 日本語テキスト用

## プロジェクト構造

```
demo_homePage/
├── index.html                # トップページ
├── menu.html                 # メニューページ
├── concept.html              # コンセプトページ
├── shoplist.html             # ショップリストページ
├── archive.html              # アーカイブページ
├── single.html               # シングル（詳細）ページ
├── 404.html                  # 404エラーページ
├── css/                      # コンパイル済みCSS
│   ├── styles.css            # メインCSS
│   ├── styles.css.map        # ソースマップ
│   ├── styles.min.css        # 圧縮版CSS
│   └── styles.min.css.map    # 圧縮版ソースマップ
│   ├── menu.css              # メニュー用CSS
│   └── reset.css             # リセットCSS
├── sass/                     # SASS/SCSSファイル
│   ├── _common.scss          # 共通スタイル
│   ├── _concept.scss         # コンセプトページ用
│   ├── _menu.scss            # メニューページ用
│   ├── _shoplist.scss        # ショップリスト用
│   ├── _archive.scss         # アーカイブ用
│   ├── _single.scss          # シングル用
│   ├── _404.scss             # 404用
│   ├── _variable.scss        # 変数定義
│   ├── _mixin.scss           # ミックスイン
│   └── reset.css             # リセットCSS
├── js/                       # JavaScriptファイル
│   ├── fadeIn.js             # フェードインアニメーション
│   ├── hamburger.js          # ハンバーガーメニュー
│   └── kv_an.js              # キービジュアルアニメーション
├── img/                      # 画像ファイル（最適化済み）
│   └── ...                   # 各種PC/SP/ロゴ・イメージ等
```

## セクション構成

1. **ヘッダー**: ナビゲーションメニュー（ハンバーガーメニュー対応）
2. **キービジュアル**: メインビジュアルとキャッチコピー
3. **コンセプト**: サイトやブランドの紹介
4. **メニュー**: 商品やサービスの紹介
5. **ショップリスト**: 店舗情報
6. **アーカイブ**: 過去の投稿やお知らせ
7. **シングルページ**: 詳細ページ
8. **お問い合わせ**: 別途フォーム設置可能
9. **フッター**: サイト情報

## セットアップ

### 前提条件

- Web サーバー（Apache/Nginx など）
- Node.js（SASS コンパイル用、必要に応じて）

### インストール手順

1. リポジトリをクローン

```bash
git clone [repository-url]
cd demo_homePage
```

2. 依存関係のインストール（SASS コンパイル用）

```bash
npm install -g sass
```

3. SASS ファイルのコンパイル

```bash
sass sass/_common.scss css/styles.css --style compressed
```

4. Web サーバーでプロジェクトを公開

### 開発用コマンド

SASS ファイルの監視（自動コンパイル）:

```bash
sass --watch sass:css
```

## カスタマイズ

### 画像の変更

- `img/` フォルダ内の画像ファイルを置き換え
- ファイル名は既存の命名規則に従ってください

### 色やフォントの変更

- `sass/_variable.scss` で変数を編集
- `sass/_mixin.scss` で共通スタイルを編集

### コンテンツの変更

- 各HTMLファイルの各セクション内のテキストを編集
- 画像の alt 属性も適切に更新してください

## ブラウザ対応

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)
- Internet Explorer 11 以上

## ライセンス

このプロジェクトはデモ用です。商用利用の際は適切なライセンスを確認してください。

## 作者

まなと

## 更新履歴

詳細な更新履歴は[CHANGELOG.md](./CHANGELOG.md)をご確認ください。
