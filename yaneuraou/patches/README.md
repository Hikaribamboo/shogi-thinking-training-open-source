# patch の扱い

この配下には，今のリポジトリで確認できる YaneuraOu 連携差分を，公開用に持ち出しやすい形で置きます。

## 収録方針

- `0001-android-arm64-build-fix.patch` は Android 側の arm64 用公開差分です。
- `0002-ios-native-integration.patch` は iOS 側の native bridge と bestmove 到達までの差分です。
- どちらも，最終的には公開用リポジトリの基準コミットに合わせて再生成する前提です。

## 注意点

- patch は補助資料であり，公開義務の本体は source と build 手順です。
- アプリ全体の差分ではなく，YaneuraOu 関連の最小差分だけを残します。
