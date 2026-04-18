# iOS 用 YaneuraOu ソース

ここには `vendor/yaneuraou/ios/source/` をそのままコピーします。
公開対象の中心は YaneuraOu の C++ ソース，設定ファイル，付随するビルド資材です。

## コピー元

- `vendor/yaneuraou/ios/source/bitboard.cpp`
- `vendor/yaneuraou/ios/source/position.cpp`
- `vendor/yaneuraou/ios/source/types.cpp`
- `vendor/yaneuraou/ios/source/extra/`
- `vendor/yaneuraou/ios/source/eval/`
- `vendor/yaneuraou/ios/source/engine/`
- `vendor/yaneuraou/ios/source/book/`
- `vendor/yaneuraou/ios/source/mate/`
- `vendor/yaneuraou/ios/source/learn/`
- `vendor/yaneuraou/ios/source/testcmd/`
- `vendor/yaneuraou/ios/source/props/`
- `vendor/yaneuraou/ios/source/incbin/`

## 注意点

- `vendor/yaneuraou/ios/source/nn.bin` はライセンス確認が必要な可能性があるため，自動公開しません。
- Xcode の build output，Pods，DerivedData，ユーザー設定は含めません。
- この mirror はアプリ本体の React Native ソースではなく，YaneuraOu 側の公開対象だけを置きます。
