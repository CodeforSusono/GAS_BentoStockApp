const mySheetId='%%作成したGoogleSpreadSheetのID%%';
const mySheetName='ドライブスルー弁当';
const myRange='R1:AC2';
const offset=18;

function doGet() {
  var htmlOutput = HtmlService.createTemplateFromFile('index').evaluate();
  htmlOutput.setTitle('ドライブスルー弁当市場')
      .setFaviconUrl('https://drive.google.com/uc?id=%%GoogleDriveに配置したfaviconファイルのID%%&png')
      .addMetaTag('viewport','width=device-width, initial-scale=1')
  return htmlOutput;
}

function getStockOnDB() {
  var values = SpreadsheetApp.openById(mySheetId).getSheetByName(mySheetName).getRange(myRange).getValues();
  Logger.log( values );
  Logger.log( values[0].length );
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
  Logger.log( values );
  var _ = Underscore.load();
  var valuesT = _.zip.apply(_, values);
  Logger.log( valuesT );
  return [valuesT, msg, isErr];
}

function setStockOnDB(value,no,pos) {
  var range = SpreadsheetApp.openById(mySheetId).getSheetByName(mySheetName).getRange(pos+1,no+offset);
  range.setValue(value);
  Logger.log( [value, no, pos] );
  return value;
}
