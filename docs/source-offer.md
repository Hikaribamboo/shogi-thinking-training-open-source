# YaneuraOu 公開対象の整理

この文書は，YaneuraOu 関連の公開義務対応をこのリポジトリ内で進めるための整理メモです。
公開用リポジトリへ移す前提で，今の実装から書ける内容だけを残しています。

## 対象

- Android の native 連携
- iOS の native 連携
- YaneuraOu の C++ ソース
- ビルド手順
- 版数対応
- 動作確認記録

## 対象外

- アプリ本体の画面実装
- 課金，認証，分析，サーバー連携の全ソース
- 利用規約
- プライバシーポリシー
- 秘密情報，署名鍵，ローカル設定
- ビルド成果物，Pods，DerivedData，Gradle の生成物

## Android の公開対象

Android は現時点で arm64-v8a の実行用成果物を使っています。
公開用には `vendor/yaneuraou/android/` の成果物を `open-source/yaneuraou/upstream/jni/` に置きます。
実行時には `libYaneuraOu.so` として扱います。

## iOS の公開対象

iOS は `vendor/yaneuraou/ios/source/` をそのまま公開対象にします。
公開用には `open-source/yaneuraou/upstream/source/` に丸ごとコピーします。
`main.cpp` もソース鏡として残しますが，アプリ側のエントリポイントとしては使いません。

## `nn.bin` の扱い

`nn.bin` はライセンス確認が必要な可能性があるため，自動で公開対象に含めません。
公開前に，配布可否と再配布条件を確認してください。

## 移設先での考え方

- `open-source/` は，後で `shogi-thinking-training-open-source` にそのまま移せる構成にします。
- このリポジトリのアプリ本体とは分離して保ちます。
- source offer の中心は，ソース，差分，ビルド情報，検証情報です。
