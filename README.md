# GAS_BentoStockApp

このプロジェクトは、[#すそのんエール飯APP (https://susononyell.glideapp.io/)](https://susononyell.glideapp.io/)の在庫状況を入力する専用Webアプリを作成するものである。

## 背景

[glide (https://www.glideapps.com/)](https://www.glideapps.com/) というサービスを使って構築された [#すそのんエール飯APP](https://susononyell.glideapp.io/)に"ドライブスルー弁当市場"というメニューがある。

### 現状

このメニュー内に表示される弁当の在庫状況は、Google Spread Sheetに各お弁当の在庫数を直接手入力後し更新することで、[#すそのんエール飯APP](https://susononyell.glideapp.io/)に表示させている。

### 課題

このGoogle Spread Sheetは[#すそのんエール飯APP](https://susononyell.glideapp.io/)のデータベースであるため、不用意に情報を変更してしまうと、アプリ全体の動作に悪影響を与えてしまう。

特にドライブスルー弁当市場では、多くの方が〇分待ちで購入されているため、お弁当の在庫状況を適切に提供し、スムースにお弁当を購入できるようにすることが重要となっている。

## 目的

#すそのんエール飯ドライブスルー弁当市場をターゲットに、在庫入力作業をミスなく効率的に行うための専用Webアプリを構築することが、本プロジェクトの目的である。

## 開発環境

Google Spread Sheet内のデータをWebアプリから更新するため、Google Apps Scriptを用いてWebアプリを構築する。

### 開発環境の構築手順

ここで公開しているappフォルダ以下のファイルを使い、GASによるWebAppを動作させる手順について記述する。

**前提条件**
- Google アカウントを取得済み

**手順**
1. デスクトップPCを立ち上げChromeを起動する
1. Google アカウントにログインし、[Google Drive]
(https://drive.google.com/drive/my-drive)にアクセスする
1. [+新規]ボタンを押し、[その他]>[Google Apps Script]を選択する
1. ”無題のプロジェクト”が開くので、プロジェクト名を適切な名前に変更する
1. ライブラリunderscore[参照先](https://github.com/simula-innovation/gas-underscore)を導入する
    1. [リソース]>[ライブラリ]を選択する
    1. ”Add a library”欄に"M3i7wmUA_5n0NSEaa6NnNqOBao7QLBR4j"を張り付け、最新版を有効にする
1. "main.gs"ファイルの作成
    1. ”コード.gs”に”app/main.gs”の中身をコピーし置き換える
    1. ”コード.gs”を"main.gs"にrenameする
1. "index.html"ファイルの作成
    1. [ファイル]>[New]>[HTMLファイル]を選択する
    1. ”Create File”のウィンドウが表示されるので、"Enter new file name"欄にindexと入力し、[OK]ボタンを押す
    1. "index.html"が表示されるので、"app/index.html"の中身をコピーし置き換える
1. 同様に、"css.html"、"js.html"を作成する
1. [ファイル]>[すべてを保存]を選択する
1. [公開]>[ウェブアプリケーションとして導入]を選択し、必要事項を入力し公開する

## 開発状況

### 初回バージョン

どのようなWebアプリを作成したらよいか関係者のイメージ合わせをすること、どのような技術を使えば実現できるのかを確認することを目的として作成。

- 基本動作フロー

<img src="https://github.com/CodeforSusono/GAS_BentoStockApp/raw/master/doc/out/sequence_overview.png" width="800" title="動作フロー"/>

- 初回バージョンWebApp

<img src="https://github.com/CodeforSusono/GAS_BentoStockApp/raw/master/doc/image/WebAppImage_1.png" width="300" title="初回バージョン(Android Chrome)"/>

- プルダウン版WebApp

*起動直後*

<img src="https://github.com/CodeforSusono/GAS_BentoStockApp/raw/master/doc/image/WebAppImage_2_1.png" width="300" title="プルダウン版起動直後"/>

*お弁当の選択*

<img src="https://github.com/CodeforSusono/GAS_BentoStockApp/raw/master/doc/image/WebAppImage_2_2.png" width="300" title="お弁当選択"/>

*お弁当選択後*

<img src="https://github.com/CodeforSusono/GAS_BentoStockApp/raw/master/doc/image/WebAppImage_2_3.png" width="300" title="お弁当選択後"/>

*販売数量入力*

<img src="https://github.com/CodeforSusono/GAS_BentoStockApp/raw/master/doc/image/WebAppImage_2_4.png" width="300" title="販売数量入力"/>

*在庫更新後*

<img src="https://github.com/CodeforSusono/GAS_BentoStockApp/raw/master/doc/image/WebAppImage_2_5.png" width="300" title="在庫更新後"/> 

- 一覧表示版WebApp

*起動直後（最新の在庫状況を表示）*

<img src="https://github.com/CodeforSusono/GAS_BentoStockApp/raw/master/doc/image/WebAppImage_3_1.png" width="300" title="一覧表示版起動直後"/>

*お弁当の販売数量入力*

<img src="https://github.com/CodeforSusono/GAS_BentoStockApp/raw/master/doc/image/WebAppImage_3_2.png" width="300" title="販売数量入力"/>

*お弁当の在庫更新後*

<img src="https://github.com/CodeforSusono/GAS_BentoStockApp/raw/master/doc/image/WebAppImage_3_3.png" width="300" title="お弁当在庫更新"/>

*お弁当の在庫分販売*

<img src="https://github.com/CodeforSusono/GAS_BentoStockApp/raw/master/doc/image/WebAppImage_3_4.png" width="300" title="在庫分販売"/>

*お弁当の在庫終了*

<img src="https://github.com/CodeforSusono/GAS_BentoStockApp/raw/master/doc/image/WebAppImage_3_5.png" width="300" title="在庫終了"/> 