import initSqlJs from 'sql.js';

let db: any = null;
let initialized = false;

export const initDB = async () => {
  if (initialized) return;

  const SQL = await initSqlJs({
    locateFile: file => `https://sql.js.org/dist/${file}`
  });

  db = new SQL.Database();
  
  // Create tables if they don't exist
  db.run(`
    CREATE TABLE IF NOT EXISTS enquiries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      destination TEXT NOT NULL,
      guests INTEGER NOT NULL,
      travel_date TEXT NOT NULL,
      duration INTEGER NOT NULL,
      message TEXT,
      preferred_contact TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      status TEXT DEFAULT 'pending'
    );
  `);

  initialized = true;
};

export const insertEnquiry = async (data: {
  name: string;
  email: string;
  phone: string;
  destination: string;
  guests: number;
  travel_date: string;
  duration: number;
  message: string;
  preferred_contact: string;
}) => {
  if (!initialized) await initDB();

  const stmt = db.prepare(`
    INSERT INTO enquiries (
      name, email, phone, destination, guests, travel_date,
      duration, message, preferred_contact
    ) VALUES (
      $name, $email, $phone, $destination, $guests, $travel_date,
      $duration, $message, $preferred_contact
    )
  `);

  stmt.run({
    $name: data.name,
    $email: data.email,
    $phone: data.phone,
    $destination: data.destination,
    $guests: data.guests,
    $travel_date: data.travel_date,
    $duration: data.duration,
    $message: data.message,
    $preferred_contact: data.preferred_contact
  });

  stmt.free();
  
  // Save to localStorage for persistence
  const dbData = db.export();
  const buffer = new Uint8Array(dbData);
  localStorage.setItem('enquiriesDB', JSON.stringify(Array.from(buffer)));
};

export const getEnquiries = async () => {
  if (!initialized) await initDB();

  const result = db.exec('SELECT * FROM enquiries ORDER BY created_at DESC');
  return result[0]?.values || [];
};

// Load database from localStorage if it exists
const loadDB = async () => {
  const savedDB = localStorage.getItem('enquiriesDB');
  if (savedDB) {
    const SQL = await initSqlJs({
      locateFile: file => `https://sql.js.org/dist/${file}`
    });
    const buffer = new Uint8Array(JSON.parse(savedDB));
    db = new SQL.Database(buffer);
    initialized = true;
  } else {
    await initDB();
  }
};

// Initialize the database when the module loads
loadDB();