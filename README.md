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

<kbd><img src="https://github.com/CodeforSusono/GAS_BentoStockApp/raw/master/doc/out/sequence_overview.png" width="800" title="動作フロー"/></kdb>

- 初回バージョンWebApp

<kbd><img src="https://github.com/CodeforSusono/GAS_BentoStockApp/raw/master/doc/image/WebAppImage_1.png" width="200" title="初回バージョン(Android Chrome)"/></kbd>

- プルダウン版WebApp

<kbd><img src="https://github.com/CodeforSusono/GAS_BentoStockApp/raw/master/doc/image/WebAppImage_2_1.png" width="200" title="プルダウン版起動直後"/></kbd>
<kbd><img src="https://github.com/CodeforSusono/GAS_BentoStockApp/raw/master/doc/image/WebAppImage_2_2.png" width="200" title="お弁当選択"/></kbd>
<kbd><img src="https://github.com/CodeforSusono/GAS_BentoStockApp/raw/master/doc/image/WebAppImage_2_3.png" width="200" title="お弁当選択後"/></kbd>
<kbd><img src="https://github.com/CodeforSusono/GAS_BentoStockApp/raw/master/doc/image/WebAppImage_2_4.png" width="200" title="販売数量入力"/></kbd>
<kbd><img src="https://github.com/CodeforSusono/GAS_BentoStockApp/raw/master/doc/image/WebAppImage_2_5.png" width="200" title="在庫更新後"/></kbd> 

- 一覧表示版WebApp

<kbd><img src="https://github.com/CodeforSusono/GAS_BentoStockApp/raw/master/doc/image/WebAppImage_3_1.png" width="200" title="一覧表示版起動直後"/></kbd>
<kbd><img src="https://github.com/CodeforSusono/GAS_BentoStockApp/raw/master/doc/image/WebAppImage_3_2.png" width="200" title="販売数量入力"/></kbd>
<kbd><img src="https://github.com/CodeforSusono/GAS_BentoStockApp/raw/master/doc/image/WebAppImage_3_3.png" width="200" title="お弁当在庫更新"/></kbd>
<kbd><img src="https://github.com/CodeforSusono/GAS_BentoStockApp/raw/master/doc/image/WebAppImage_3_4.png" width="200" title="在庫分販売"/></kbd>
<kbd><img src="https://github.com/CodeforSusono/GAS_BentoStockApp/raw/master/doc/image/WebAppImage_3_5.png" width="200" title="在庫終了"/></kbd> 

### バージョン第2版

2020/8/22(土) に初回バージョンで本番を迎えた。
会場である裾野市民文化センターには100台以上車両が来場し、お弁当を購入された。
その際、どのお弁当を購入するか1台づつ回って確認し、スマホをスクロールし
入力していったため、入力者の指が悲鳴をあげることになってしまった・・・。
この改善策として、タブレットを使い横2列表示に変更を行い第2版を作成。
この第2版で本番は10/17(土)を予定している。

<kbd><img src="https://github.com/CodeforSusono/GAS_BentoStockApp/raw/master/doc/image/WebAppImage_4_Tablet.png" width="500" title="第2版タブレット横2列表示"/></kbd> 