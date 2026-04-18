# 版数対応表

この文書は，今のリポジトリで確認できる版数の対応だけを整理したものです。

| 位置 | 値 | 用途 |
| --- | --- | --- |
| `package.json` | `1.2.0` | リポジトリの npm 版数 |
| `app.json` | `1.1.2` | Expo アプリ版数 |
| `app.json` | `1.1.2` | Expo runtimeVersion |
| `android/app/build.gradle` | `1.1.2` | Android `versionName` |
| `android/app/build.gradle` | `1` | Android `versionCode` |
| `ios/app/Info.plist` | `1.0.0` | iOS `CFBundleShortVersionString` |
| `ios/app/Info.plist` | `3` | iOS `CFBundleVersion` |

## 補足

- この表は公開用の説明資料であり，ストア公開時の申請値を断定するものではありません。
- 今後，公開用リポジトリへ移す際は，実際に配布したビルド番号に合わせて更新します。
