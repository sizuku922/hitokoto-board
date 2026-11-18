# ひとこと掲示板

Node.js、Express、Pugで作成したシンプルなサーバーサイドWebアプリです。

## 機能
- 名前（任意）とメッセージを投稿
- 投稿一覧を新しい順に表示
- 入力文字数の制限
- Pugのエスケープ表示による基本的なXSS対策

## 起動方法
```bash
npm install
npm start
```
`http://localhost:3000` を開いてください。

## 公開する場合
RenderなどのNode.js対応サービスにGitHubリポジトリを接続し、Build Commandを `npm install`、Start Commandを `npm start` に設定してください。

**注意:** 投稿データはメモリ上に保存されるため、再起動やスリープで消えます。学習用の簡易アプリです。公開する場合はスパム対策や保存方法の改善も検討してください。
