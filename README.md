# 公開義務対応パッケージ

このディレクトリは，YaneuraOu 関連の公開義務対応をこのリポジトリ内で先に整えるための作業置き場です。
後で `shogi-thinking-training-open-source` にそのまま移しやすいように，公開対象と対象外を分けています。

## 完成版

- `docs/source-offer.md`
- `yaneuraou/build/android.md`
- `yaneuraou/build/ios.md`
- `yaneuraou/notices/app-version-map.md`
- `yaneuraou/notices/android-verification.md`
- `yaneuraou/notices/ios-verification.md`

## 暫定版

- `LICENSES/GPL-3.0.txt`
- `yaneuraou/patches/*.patch`
- `yaneuraou/upstream/source/`
- `yaneuraou/upstream/jni/`

## 移設時の方針

- iOS の公開対象ソースは `vendor/yaneuraou/ios/source/` を `yaneuraou/upstream/source/` に丸ごとコピーします。
- Android は現時点で C++ ソースの公開物がなく，`vendor/yaneuraou/android/` にある arm64-v8a の実行用成果物を `yaneuraou/upstream/jni/` に置きます。
- `nn.bin` はライセンス確認が必要な可能性があるため，自動的には公開対象に含めません。
- 利用規約とプライバシーポリシーはこの配下の対象外です。
