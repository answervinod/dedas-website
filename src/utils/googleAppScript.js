function doPost(e) {
  var sheet = SpreadsheetApp.openById('1OHWiy5zFO2D4_ejCm6EWTTDhfYQkZ5t5zrQfMH-ANkI').getActiveSheet();
  var data = e.parameter;
  
  sheet.appendRow([
    data.email,
    new Date(),
    'Website Newsletter'
  ]);
  
  return ContentService
    .createTextOutput(JSON.stringify({ 'result': 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 'result': 'success', 'method': 'get' }))
    .setMimeType(ContentService.MimeType.JSON);
}
