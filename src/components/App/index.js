import React from 'react';
import Unicorn from '../Picker';

const App = () => (
  <main className="app">
    <header className="header">
      <h1>Palette Picker</h1>
    </header>
    <Unicorn />
    <section className="palettes-big">PALETTES</section>
    <section className="new-palette-section">COLOR GENERATOR</section>
    <section className="new-project-form">
      <input type="text" placeholder="name" />
      <button type="submit" className="save-project-btn">
        Save
      </button>
    </section>
    <section className="gallery-section">GALLERY</section>
  </main>
);

export default App;
