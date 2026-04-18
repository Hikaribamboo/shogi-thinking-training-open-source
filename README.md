# 公開義務対応パッケージ

このリポジトリは，YaneuraOu 関連の公開義務に対応するための公開パッケージです。
本 README に記載するファイルを，公開対象として提供します。

## 公開ドキュメント

- `docs/source-offer.md`
- `yaneuraou/build/android.md`
- `yaneuraou/build/ios.md`
- `yaneuraou/notices/app-version-map.md`
- `yaneuraou/notices/android-verification.md`
- `yaneuraou/notices/ios-verification.md`

## 公開ソース・ライセンス

- `LICENSES/GPL-3.0.txt`
- `yaneuraou/patches/*.patch`
- `yaneuraou/upstream/source/`
- `yaneuraou/upstream/jni/`

## 提供方針

- iOS 向けの公開対象ソースは `yaneuraou/upstream/source/` に収録します。
- Android 向けは公開対象の成果物を `yaneuraou/upstream/jni/` に収録します。
- `nn.bin` はライセンス確認が必要な可能性があるため，自動的には公開対象に含めません。
- 利用規約とプライバシーポリシーはこのリポジトリの公開対象外です。
