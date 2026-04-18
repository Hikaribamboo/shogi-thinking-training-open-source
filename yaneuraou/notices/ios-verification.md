# iOS 検証記録

この文書は，現時点で確認できている iOS 側の事実だけをまとめたものです。

## 確認済み事項

- iOS は実機と TestFlight で検討機能が動作確認済みです。
- `YaneuraOuNativeBootstrap` は C++ 初期化の最小入口として動作します。
- `YaneuraOuNativeEngine` は ready check と検索実行を担当します。
- `runReadyCheck` から `goDepth1` までの経路で `bestmove` 到達を確認しています。
- `vendor/yaneuraou/ios/source/` を compile source の中心に置きます。
- `eval/nn.bin` は bundle 内の `eval/nn.bin` として参照します。

## 公開対象の扱い

- iOS の公開対象は `vendor/yaneuraou/ios/source/` 全体を基準にします。
- `main.cpp` は app のエントリポイントとしては使いませんが，公開ソースの mirror には含めます。
- `nn.bin` はライセンス確認が必要な可能性があるため，自動公開しません。
