# Android 検証記録

この文書は，現時点で確認できている Android 側の事実だけをまとめたものです。

## 確認済み事項

- Android は実機相当まで動作確認済みです。
- `MainApplication` から `YaneuraOuEnginePackage` を登録しています。
- `YaneuraOuEngineModule` は `YaneuraOuEngine` という名前で公開されています。
- エンジン本体は `libYaneuraOu.so` として `nativeLibraryDir` から読み込みます。
- `nn.bin` は assets からアプリ内部の `filesDir/yaneuraou/eval/nn.bin` にコピーします。
- 分析経路は `usi`，`setoption`，`isready`，`position`，`go depth 10` です。

## 公開対象の扱い

- Android の公開対象は arm64-v8a を前提にします。
- ここでは JIT や JavaScript 側の挙動は対象外です。
- 署名鍵，秘密情報，リリース用の個人設定は含めません。
