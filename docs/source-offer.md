# YaneuraOu 公開対象の整理

この文書は，YaneuraOu 関連の公開義務対応として提供する内容を定義したものです。
このリポジトリを公開パッケージとして扱い，公開対象と対象外を明確にします。

## 公開リポジトリ

- https://github.com/Hikaribamboo/shogi-thinking-training-open-source.git

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
公開対象は `yaneuraou/upstream/jni/` に配置します。
実行時には `libYaneuraOu.so` として扱います。

## iOS の公開対象

iOS は `yaneuraou/upstream/source/` を公開対象にします。
`main.cpp` もソース鏡として残しますが，アプリ側のエントリポイントとしては使いません。

## `nn.bin` の扱い

`nn.bin` はライセンス確認が必要な可能性があるため，自動で公開対象に含めません。
公開前に，配布可否と再配布条件を確認してください。

## 公開パッケージの考え方

- このリポジトリ内で公開対象を完結させます。
- アプリ本体とは分離して保ちます。
- source offer の中心は，ソース，差分，ビルド情報，検証情報です。
