# Android 用 JNI 公開領域

現時点の Android 実装では，YaneuraOu の実行用成果物を arm64-v8a 向けに使っています。
この配下には，Android 公開用に必要な JNI 関連の成果物を置きます。

現在は `Android.mk`，`Application.mk`，JNI の元ソースは存在しません。
そのため，この領域は実行用バイナリの置き場として扱います。

## 現在の置き場

- `vendor/yaneuraou/android/YaneuraOu_NNUE_arm64-v8a`
- `vendor/yaneuraou/android/libc++_shared.so`

## 取り込み方

- `YaneuraOu_NNUE_arm64-v8a` は公開用コピー先で `libYaneuraOu.so` として扱います。
- `libc++_shared.so` は Android 実行に必要な C++ 標準ライブラリ依存としてそのまま置きます。
- 今の段階では Android 側の C++ JNI ソースは存在しないため，ソース公開は発生しません。
