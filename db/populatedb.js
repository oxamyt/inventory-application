const pool = require("./pool");

const populateDB = async () => {
  try {
    const insertCategories = `
      INSERT INTO Categories (name, image_url, description)
      VALUES
        ('Consumer Drones', 'https://images.unsplash.com/photo-1554248889-15c8ca7dbba4?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Drones for personal use'),
        ('Professional Drones', 'https://images.unsplash.com/photo-1720071702672-d18c69cb475c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'High-end drones for professionals'),
        ('Accessories', 'https://images.unsplash.com/photo-1486611367184-17759508999c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RHJvbmUlMjBhY2Nlc29jcmllc3xlbnwwfHwwfHx8MA%3D%3D', 'Accessories for drones')
    `;
    await pool.query(insertCategories);
    await pool.query("ALTER SEQUENCE categories_id_seq RESTART WITH 1");

    const insertManufacturers = `
      INSERT INTO Manufacturers (name, image_url, country)
      VALUES
        ('SkyTech', 'https://plus.unsplash.com/premium_vector-1711987808402-66a0a6633a43?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'USA'),
        ('FlyHigh', 'https://plus.unsplash.com/premium_vector-1711987310538-a6d1a7b8669b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fERyb25lJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D', 'Germany'),
        ('Wild Hornets', 'https://plus.unsplash.com/premium_vector-1719014029714-69df2d40ba82?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Ukraine')
    `;
    await pool.query(insertManufacturers);
    await pool.query("ALTER SEQUENCE manufacturers_id_seq RESTART WITH 1");

    const insertTypes = `
      INSERT INTO Types (name, description, image_url)
      VALUES
        ('Quadcopter', 'Four-rotor drone', 'https://images.unsplash.com/photo-1633762065780-ed82b09c6947?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
        ('Hexacopter', 'Six-rotor drone', 'https://i.pinimg.com/736x/b1/5c/93/b15c93a24ed88f226b02b42b5eb936ca.jpg'),
        ('FPV Drones', 'FPV fast drones', 'https://images.unsplash.com/photo-1654283627729-8185942506b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
    `;
    await pool.query(insertTypes);
    await pool.query("ALTER SEQUENCE types_id_seq RESTART WITH 1");

    const insertItems = `
      INSERT INTO Items (name, description, price, stock_quantity, category_id, manufacturer_id, type_id, image_url)
      VALUES
        ('SkyTech Alpha', 'Advanced quadcopter with GPS and HD camera', 599.99, 30, 1, 1, 1, 'https://images.unsplash.com/photo-1488263590619-bc1fff43b6c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fERyb25lfGVufDB8fDB8fHww'),
        ('FlyHigh Pro', 'High-performance hexacopter for professional use', 899.99, 15, 2, 2, 2, 'https://images.unsplash.com/photo-1506947411487-a56738267384?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fERyb25lfGVufDB8fDB8fHww'),
        ('Wild Hornet Vision', 'FPV drone with 4K video capability', 749.99, 25, 1, 3, 3, 'https://dronavista.pl/41648-large_default/geprc-racer-fpv-racing-drone-analog-6s.jpg'),
        ('High Capacity Battery', 'Long-lasting battery for drone', 49.99, 100, 3, 1, 1, 'https://plus.unsplash.com/premium_photo-1723507297320-2366db25341e?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
        ('Quick Charger', 'Fast charger for drone batteries', 29.99, 100, 3, 2, 1, 'https://m.media-amazon.com/images/I/41vCDPStkVL._AC_UF894,1000_QL80_.jpg')
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
