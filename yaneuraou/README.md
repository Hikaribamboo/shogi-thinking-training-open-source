# YaneuraOu 公開パッケージ

この配下は，YaneuraOu の公開対象をまとめた公開パッケージです。
公開義務対応に必要なソース，差分，ビルド情報，検証情報をこの構造で提供します。

## 収録内容

- `build/` の再現手順
- `notices/` の版数対応と検証記録
- `docs/source-offer.md`
- `patches/`
- `upstream/source/`
- `upstream/jni/`

## 提供方針

- iOS の公開対象は `upstream/source/` に収録します。
- Android の公開対象は `upstream/jni/` に収録します。
- アプリ本体の React Native 層，画面実装，課金や認証のソースはここに含めません。
- `nn.bin` は公開可否を別途確認する前提で扱います。
