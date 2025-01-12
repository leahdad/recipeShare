import React, { CSSProperties } from 'react'

export default function main() {
  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <h1>Lunch Recipe Sharing</h1>
      </header>

      <div style={styles.searchBar}>
        <input style={styles.input} type="text" placeholder="Search for recipes..." />
        <button style={styles.button}>Search</button>
      </div>

      <div style={styles.recipeGrid}>
        <div style={styles.recipeCard}>
          <img
            src="https://via.placeholder.com/250x150"
            alt="Recipe 1"
            style={styles.image}
          />
          <h3>Grilled Chicken Salad</h3>
          <p>A quick and healthy lunch recipe.</p>
        </div>
        <div style={styles.recipeCard}>
          <img
            src="https://via.placeholder.com/250x150"
            alt="Recipe 2"
            style={styles.image}
          />
          <h3>Spaghetti Carbonara</h3>
          <p>Classic Italian pasta dish.</p>
        </div>
        <div style={styles.recipeCard}>
          <img
            src="https://via.placeholder.com/250x150"
            alt="Recipe 3"
            style={styles.image}
          />
          <h3>Vegetarian Buddha Bowl</h3>
          <p>A wholesome vegetarian option.</p>
        </div>
      </div>

      <footer style={styles.footer}>
        <p>&copy; 2025 Lunch Recipe Sharing. All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
    body: {
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      background: 'linear-gradient(180deg, #f9f9f9, #e6f2e6)' as 'background',
      color: '#333' as 'color',
    },
    header: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '1rem',
      textAlign: 'center',
    },
    searchBar: {
      margin: '20px auto',
      maxWidth: '800px',
      display: 'flex',
      justifyContent: 'space-between',
      background: 'white',
      padding: '10px',
      borderRadius: '8px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    input: {
      flex: 1,
      border: '1px solid #ccc',
      padding: '10px',
      borderRadius: '4px',
      marginRight: '10px',
      fontSize: '16px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    recipeGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
      margin: '20px',
      padding: '20px',
    },
    recipeCard: {
      background: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    recipeCardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    },
    image: {
      width: '100%',
      height: '150px',
      objectFit: 'cover' as 'cover', // Add `as` type assertion
    },
    footer: {
      textAlign: 'center',
      padding: '10px',
      backgroundColor: '#333',
      color: 'white',
      marginTop: '20px',
    },
  };