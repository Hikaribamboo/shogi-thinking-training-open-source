# Android ビルド手順

この手順は，現時点のリポジトリ構成を前提に，YaneuraOu 関連の Android 公開要件を再現するためのものです。

## 前提

- `vendor/yaneuraou/android/YaneuraOu_NNUE_arm64-v8a` が存在すること
- `vendor/yaneuraou/android/libc++_shared.so` が存在すること
- Android 実機相当の確認対象は arm64-v8a であること

## 手順

1. 依存関係を入れます。
2. Android プロジェクトを起動します。
3. `android/app/build.gradle` の `copyYaneuraOuJniLibs` と `copyYaneuraOuAssets` が走ることを確認します。
4. アプリ起動後に `YaneuraOuEngine` が `libYaneuraOu.so` を `nativeLibraryDir` から読み込みます。
5. `nn.bin` は assets から `filesDir/yaneuraou/eval/nn.bin` にコピーされます。

## 現在の実装メモ

- `YaneuraOuEngineModule` は `usi`，`setoption`，`isready`，`position`，`go depth 10` の流れで分析します。
- 出力は `bestmove` が見えた時点で回収します。
- 公開対象は arm64-v8a に限定しています。
