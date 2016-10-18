function doGet(e){
  return HtmlService.createHtmlOutputFromFile('index')
}

function import(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}


