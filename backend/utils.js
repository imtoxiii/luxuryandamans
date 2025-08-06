const fs = require('fs').promises;
const path = require('path');

/**
 * Logs data to a text file as backup
 * @param {string} filename - Name of the file to log to
 * @param {Object} data - Data to log
 */
async function logToFile(filename, data) {
  try {
    const logDir = path.join(__dirname, 'logs');
    
    // Create logs directory if it doesn't exist
    try {
      await fs.access(logDir);
    } catch {
      await fs.mkdir(logDir, { recursive: true });
    }
    
    const filePath = path.join(logDir, filename);
    const timestamp = new Date().toISOString();
    const logEntry = `\n--- ${timestamp} ---\n${JSON.stringify(data, null, 2)}\n${'='.repeat(50)}\n`;
    
    await fs.appendFile(filePath, logEntry);
    console.log(`Data logged to ${filename}`);
  } catch (error) {
    console.error(`Error logging to file ${filename}:`, error);
  }
}

module.exports = {
  logToFile
};
