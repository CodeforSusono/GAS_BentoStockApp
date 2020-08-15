const mySheetId='%%作成したGoogleSpreadSheetのID%%';
const mySheetName='ドライブスルー弁当';
const myDBRange='R1:AB2';
const myStockRange='R2:AB2';
const col_offset=18;
const row_stock=2;

function doGet() {
  var htmlOutput = HtmlService.createTemplateFromFile('index').evaluate();
  htmlOutput.setTitle('ドライブスルー弁当市場')
      .setFaviconUrl('https://drive.google.com/uc?id=%%GoogleDriveに配置したfaviconファイルのID%%&png')
      .addMetaTag('viewport','width=device-width, initial-scale=1')
  return htmlOutput;
}

function getInitialData() {
  // アプリ起動時の初期データを作成し、渡す
  var values = SpreadsheetApp.openById(mySheetId).getSheetByName(mySheetName).getRange(myDBRange).getValues();
  Logger.log( values );
  var sold = [];
  var idx = [];
  var msg = [];
  var isErr = [];
  for( var i=0; i<values[0].length; i++ ) {
    sold.push(0);
    idx.push(i);
    msg.push(null);
    isErr.push(false);
  }
  Logger.log(msg);
  Logger.log(isErr);
  values.push(sold);
  values.push(idx);
  //転置してから渡す
  var _ = Underscore.load();
  var valuesT = _.zip.apply(_, values);
  Logger.log( valuesT );
  return [valuesT, msg, isErr];
}

function getStockAt(idx) {
  var value = SpreadsheetApp.openById(mySheetId).getSheetByName(mySheetName).getRange(row_stock,idx+col_offset).getValue();
  Logger.log( [value, row_stock, idx+col_offset] );
  return value;
}

function setStockAt(value, idx) {
  var range = SpreadsheetApp.openById(mySheetId).getSheetByName(mySheetName).getRange(row_stock,idx+col_offset);
  range.setValue( value );
  Logger.log( [value, row_stock, idx+col_offset] );
  return value;
}

function setStockOnDB(sold, idx) {
  //ドキュメントロックを使用する
  var lock = LockService.getPublicLock();
  var stock = -1;
  var ret = [];
  Logger.log( [sold, idx] );
  //1秒間のロックを実施
  if (lock.tryLock(2000)) {
    var range = SpreadsheetApp.openById(mySheetId).getSheetByName(mySheetName).getRange(row_stock,idx+col_offset);
    stock = range.getValue();
    range.setValue( stock-sold );
    lock.releaseLock();
    ret = [true, stock-sold, idx, stock, sold];
  } else {
    Logger.log('ロックできません');
    ret = [false, sold, idx];
  }
  Logger.log( ret );
  return ret;
}
