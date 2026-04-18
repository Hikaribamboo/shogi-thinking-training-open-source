# YaneuraOu 公開パッケージ

この配下は，YaneuraOu の公開対象をアプリ本体から切り出して移すための整理領域です。
公開用リポジトリへ移すときは，この構造をそのまま持っていけるようにしています。

## 完成版に入るもの

- `build/` の再現手順
- `notices/` の版数対応と検証記録
- `docs/source-offer.md`

## 暫定版に入るもの

- `patches/`
- `upstream/source/`
- `upstream/jni/`

## 置き方の方針

- iOS の公開対象は `vendor/yaneuraou/ios/source/` を基準にします。
- Android の公開対象は，現時点では `vendor/yaneuraou/android/` にある arm64-v8a のバイナリを基準にします。
- アプリ本体の React Native 層，画面実装，課金や認証のソースはここに含めません。
- `nn.bin` は公開可否を別途確認する前提で扱います。
