const pool = require("./pool");

const populateDB = async () => {
  try {
    const insertCategories = `
      INSERT INTO Categories (name, image_url, description)
      VALUES
        ('Consumer Drones', 'https://example.com/category1.jpg', 'Drones for personal use'),
        ('Professional Drones', 'https://example.com/category2.jpg', 'High-end drones for professionals'),
        ('Accessories', 'https://example.com/category3.jpg', 'Accessories for drones')
    `;
    await pool.query(insertCategories);
    await pool.query("ALTER SEQUENCE categories_id_seq RESTART WITH 1");

    const insertManufacturers = `
      INSERT INTO Manufacturers (name, image_url, country)
      VALUES
        ('SkyTech', 'https://example.com/manufacturer1.jpg', 'USA'),
        ('FlyHigh', 'https://example.com/manufacturer2.jpg', 'Germany'),
        ('Wild Hornet', 'https://example.com/manufacturer3.jpg', 'China')
    `;
    await pool.query(insertManufacturers);
    await pool.query("ALTER SEQUENCE manufacturers_id_seq RESTART WITH 1");

    const insertTypes = `
      INSERT INTO Types (name, description, image_url)
      VALUES
        ('Quadcopter', 'Four-rotor drone', 'https://example.com/type1.jpg'),
        ('Hexacopter', 'Six-rotor drone', 'https://example.com/type2.jpg'),
        ('Accessory', 'Various drone accessories', 'https://example.com/type3.jpg')
    `;
    await pool.query(insertTypes);
    await pool.query("ALTER SEQUENCE types_id_seq RESTART WITH 1");

    const insertItems = `
      INSERT INTO Items (name, description, price, stock_quantity, category_id, manufacturer_id, type_id, image_url)
      VALUES
        ('SkyTech Alpha', 'Advanced quadcopter with GPS and HD camera', 599.99, 30, 1, 1, 1, 'https://images.unsplash.com/photo-1488263590619-bc1fff43b6c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fERyb25lfGVufDB8fDB8fHww'),
        ('FlyHigh Pro', 'High-performance hexacopter for professional use', 899.99, 15, 2, 2, 2, 'https://images.unsplash.com/photo-1506947411487-a56738267384?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fERyb25lfGVufDB8fDB8fHww'),
        ('Wild Hornet Vision', 'Camera drone with 4K video capability', 749.99, 25, 2, 3, 3, 'https://images.unsplash.com/photo-1456615913800-c33540eac399?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
        ('High Capacity Battery', 'Long-lasting battery for drone', 49.99, 100, 3, 1, 3, 'https://plus.unsplash.com/premium_photo-1723507297320-2366db25341e?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
        ('Quick Charger', 'Fast charger for drone batteries', 29.99, 100, 3, 2, 3, 'https://m.media-amazon.com/images/I/41vCDPStkVL._AC_UF894,1000_QL80_.jpg')
    `;
    await pool.query(insertItems);

    console.log("Dummy data inserted successfully!");
  } catch (error) {
    console.error("Error inserting dummy data:", error);
  } finally {
    pool.end();
  }
};

populateDB();
