const pool = require("./pool");

const populatedb = async () => {
  try {
    const insertItems = `
      INSERT INTO Items (name, description, price, stock_quantity, category_id, manufacturer_id, type_id, image_url)
      VALUES
        ('SkyTech Alpha', 'Advanced quadcopter with GPS and HD camera', 599.99, 30, 11, 8, 8, 'https://images.unsplash.com/photo-1488263590619-bc1fff43b6c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fERyb25lfGVufDB8fDB8fHww'),
        ('FlyHigh Pro', 'High-performance hexacopter for professional use', 899.99, 15, 12, 9, 9, 'https://images.unsplash.com/photo-1506947411487-a56738267384?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fERyb25lfGVufDB8fDB8fHww'),
        ('Wild Hornet Vision', 'Camera drone with 4K video capability', 749.99, 25, 12, 10, 10, 'https://images.unsplash.com/photo-1456615913800-c33540eac399?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
        ('High Capacity Battery', 'Long-lasting battery for drone', 49.99, 100, 13, 8, NULL, 'https://plus.unsplash.com/premium_photo-1723507297320-2366db25341e?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
        ('Quick Charger', 'Fast charger for drone batteries', 29.99, 100, 13, 9, NULL, 'https://m.media-amazon.com/images/I/41vCDPStkVL._AC_UF894,1000_QL80_.jpg')
    `;

    await pool.query(insertItems);

    console.log("Dummy data inserted successfully!");
  } catch (error) {
    console.error("Error inserting dummy data:", error);
  } finally {
    pool.end();
  }
};

populatedb();
