const pool = require("./pool");

const createTables = async () => {
  try {
    const createCategoryTable = `
      CREATE TABLE IF NOT EXISTS Categories (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT
      );
    `;

    const createManufacturerTable = `
      CREATE TABLE IF NOT EXISTS Manufacturers (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        country VARCHAR(255)
      );
    `;

    const createTypeTable = `
      CREATE TABLE IF NOT EXISTS Types (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT
      );
    `;

    const createItemTable = `
      CREATE TABLE IF NOT EXISTS Items (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        price DECIMAL(10, 2) NOT NULL,
        stock_quantity INT NOT NULL,
        category_id INT REFERENCES Categories(id),
        manufacturer_id INT REFERENCES Manufacturers(id),
        type_id INT REFERENCES Types(id)
      );
    `;

    await pool.query(createCategoryTable);
    await pool.query(createManufacturerTable);
    await pool.query(createTypeTable);
    await pool.query(createItemTable);

    console.log("Tables created successfully!");
  } catch (error) {
    console.error("Error creating tables:", error);
  } finally {
    pool.end();
  }
};

createTables();
