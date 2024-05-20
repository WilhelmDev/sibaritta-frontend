import { parse } from 'json2csv';
import { saveAs } from 'file-saver';

export function convertToCSV (jsonData: object) {
  const fields = Object.keys(jsonData[0]); // Get header fields from first object
  const csvData = parse(jsonData, { fields }); // Convert JSON to CSV with headers
  return csvData;
}

export function downloadCSV (csvData:any, name:string ) {
  const fileName = `${name}.csv`; // Set desired filename
  const blob = new Blob([csvData], { type: 'text/csv' }); // Create a Blob object
  saveAs(blob, fileName); // Trigger download using FileSaver
}