var mySheetId='%%作成したGoogleSpreadSheetのID%%';
var mySheetName='シート1';
var myRange='A2';

function doGet() {
  var htmlOutput = HtmlService.createTemplateFromFile('index').evaluate();
  htmlOutput.setTitle('すそのんエール飯：弁当市場')
      .setFaviconUrl('https://drive.google.com/uc?id=%%GoogleDriveに配置したfaviconファイルのID%%&png')
      .addMetaTag('viewport','width=device-width, initial-scale=1')
  return htmlOutput;
}

function getStockOnDB() {
  var value = SpreadsheetApp.openById(mySheetId).getSheetByName(mySheetName).getRange(myRange).getValue();
  Logger.log( value );
  return value;
}

function setStockOnDB(value) {
  var range = SpreadsheetApp.openById(mySheetId).getSheetByName(mySheetName).getRange(myRange);
  range.setValue(value);
  Logger.log( value );
  return value;
}