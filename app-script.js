/**
 * Google Apps Script for handling form data
 * Copy this code to your Google Sheets Apps Script
 *
 * Instructions:
 * 1. Open your Google Sheet
 * 2. Extensions > Apps Script
 * 3. Copy this code to the editor
 * 4. Save the project
 * 5. Deploy > New deployment > Web app
 * 6. Execute as: Me
 * 7. Who has access: Anyone
 * 8. Copy the web app URL to .env as VITE_GOOGLE_SCRIPT_URL
 */

function doPost(e) {
  try {
    // Get active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse data from request
    let data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (parseError) {
      Logger.log('JSON parse error: ' + parseError.toString());
      // If JSON parsing fails, try to get data from parameters
      data = e.parameter;
    }

    // Log received data for debugging
    Logger.log('Received data: ' + JSON.stringify(data));

    // Get column headers from first row
    const lastColumn = sheet.getLastColumn();
    const headers = lastColumn > 0
      ? sheet.getRange(1, 1, 1, lastColumn).getValues()[0]
      : ['Name', 'Phone', 'Service', 'Message', 'Date'];

    Logger.log('Headers: ' + JSON.stringify(headers));

    // Create row data array
    const rowData = [];

    // Fill data according to headers
    headers.forEach(header => {
      const headerLower = String(header).toLowerCase().trim();

      switch(headerLower) {
        case 'name':
          rowData.push(data.name || '');
          break;
        case 'phone':
          rowData.push(data.phone || '');
          break;
        case 'service':
          rowData.push(data.service || '');
          break;
        case 'message':
          rowData.push(data.message || '');
          break;
        case 'date':
          rowData.push(new Date());
          break;
        default:
          rowData.push('');
      }
    });

    Logger.log('Row data: ' + JSON.stringify(rowData));

    // Append new row with data
    sheet.appendRow(rowData);

    // Return success response with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Data saved successfully',
        data: data
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Log error for debugging
    Logger.log('Error: ' + error.toString());
    Logger.log('Stack: ' + error.stack);

    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: error.toString(),
        stack: error.stack
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle GET requests (JSONP support)
function doGet(e) {
  try {
    // Get callback name from parameters (for JSONP)
    const callback = e.parameter.callback;

    // Check if this is a data submission request
    if (e.parameter.name && e.parameter.phone) {
      // Get active spreadsheet
      const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

      // Get data from URL parameters
      const data = {
        name: e.parameter.name || '',
        phone: e.parameter.phone ? "'" + e.parameter.phone : '',
        service: e.parameter.service || '',
        message: e.parameter.message || ''
      };

      // Log received data for debugging
      Logger.log('Received data via GET: ' + JSON.stringify(data));

      // Validate required fields
      if (!data.name || !data.phone) {
        const errorResponse = {
          success: false,
          message: 'Name and phone are required'
        };

        if (callback) {
          return ContentService
            .createTextOutput(callback + '(' + JSON.stringify(errorResponse) + ')')
            .setMimeType(ContentService.MimeType.JAVASCRIPT);
        }
        return ContentService
          .createTextOutput(JSON.stringify(errorResponse))
          .setMimeType(ContentService.MimeType.JSON);
      }

      // Get column headers from first row
      const lastColumn = sheet.getLastColumn();
      const headers = lastColumn > 0
        ? sheet.getRange(1, 1, 1, lastColumn).getValues()[0]
        : ['Name', 'Phone', 'Service', 'Message', 'Date'];

      Logger.log('Headers: ' + JSON.stringify(headers));

      // Create row data array
      const rowData = [];

      // Fill data according to headers
      headers.forEach(header => {
        const headerLower = String(header).toLowerCase().trim();

        switch(headerLower) {
          case 'name':
            rowData.push(data.name);
            break;
          case 'phone':
            rowData.push(data.phone);
            break;
          case 'service':
            rowData.push(data.service);
            break;
          case 'message':
            rowData.push(data.message);
            break;
          case 'date':
            rowData.push(new Date());
            break;
          default:
            rowData.push('');
        }
      });

      Logger.log('Row data: ' + JSON.stringify(rowData));

      // Append new row with data
      sheet.appendRow(rowData);

      // Prepare success response
      const successResponse = {
        success: true,
        message: 'Data saved successfully',
        data: data
      };

      // Return JSONP response if callback is provided
      if (callback) {
        return ContentService
          .createTextOutput(callback + '(' + JSON.stringify(successResponse) + ')')
          .setMimeType(ContentService.MimeType.JAVASCRIPT);
      }

      // Return regular JSON response
      return ContentService
        .createTextOutput(JSON.stringify(successResponse))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Test endpoint
    const testResponse = {
      success: true,
      message: 'Google Apps Script is working',
      timestamp: new Date()
    };

    if (callback) {
      return ContentService
        .createTextOutput(callback + '(' + JSON.stringify(testResponse) + ')')
        .setMimeType(ContentService.MimeType.JAVASCRIPT);
    }

    return ContentService
      .createTextOutput(JSON.stringify(testResponse))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Log error for debugging
    Logger.log('GET Error: ' + error.toString());
    Logger.log('Stack: ' + error.stack);

    // Prepare error response
    const errorResponse = {
      success: false,
      message: error.toString(),
      stack: error.stack
    };

    // Return JSONP error response if callback is provided
    const callback = e.parameter.callback;
    if (callback) {
      return ContentService
        .createTextOutput(callback + '(' + JSON.stringify(errorResponse) + ')')
        .setMimeType(ContentService.MimeType.JAVASCRIPT);
    }

    // Return regular JSON error response
    return ContentService
      .createTextOutput(JSON.stringify(errorResponse))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// For testing in Apps Script editor
function testDoPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        name: 'Test User',
        phone: '+49 179 5251871',
        service: 'ceramic',
        message: 'Test message'
      })
    }
  };

  const result = doPost(testData);
  Logger.log(result.getContent());
}
