# iOS ビルド手順

この手順は，現時点の iOS 実装で `bestmove` まで通る構成を再現するためのものです。

## 前提

- `vendor/yaneuraou/ios/source/` を Xcode の Compile Sources に入れること
- `vendor/yaneuraou/ios/eval/` を bundle resource として入れること
- `ios/YaneuraOu.xcconfig` の設定を target に反映すること

## 手順

1. `ios/app.xcworkspace` を開きます。
2. CocoaPods と Expo の設定が入った状態で build します。
3. `SHOGI_YANEURAOU_IOS_ENABLED=1` を有効にします。
4. `NO_SSE=1` と `dead_strip` 前提でリンクします。
5. `YaneuraOuNativeEngine` で `runReadyCheck` を通したあと，`goDepth1` か `analyzePositionSfen` を呼びます。

## 現在の実装メモ

- `YaneuraOuNativeBootstrap` は初期化確認用の軽量入口です。
- `YaneuraOuNativeEngine` は ready check と bestmove 取得を担当します。
- `eval/nn.bin` は bundle 内の `eval/nn.bin` として参照します。
