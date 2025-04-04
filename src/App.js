import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import './App.css';

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [debouncedQuery] = useDebounce(query, 300);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!debouncedQuery || debouncedQuery.length < 2) return;

      setLoading(true);
      try {
        const API_URL = process.env.REACT_APP_API_URL || "https://go-app-ug1p.onrender.com";
        const res = await fetch(`${API_URL}/complete?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        setResults(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Search error:", err);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSuggestions();
  }, [debouncedQuery, query]);

  return (
    <div className="centered-container">
      <div className="search-box">
        <a
          href="https://docs.google.com/document/d/1eH9XeKriKfMLX4zD5c6g22gx0M-7FzmsNn5uWWqLmo8/edit?tab=t.0"
          target="_blank"
          rel="noopener noreferrer"
          className="how-it-works-link"
        >
          How it works?
        </a>
        <h1 className="title">🧠 Semantic Search</h1>
        <div className="input-group">
          <input
            placeholder="Start typing: coffee, ride, electric..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="input"
          />
          <button className="button" disabled>
            Live
          </button>
        </div>

        <div className="results">
          {results.length > 0 ? (
            results.map((item, index) => (
              <div key={index} className="result-card">
                <div className="result-content">
                  <div className="result-title">
                    <strong>{item.name}</strong>
                    <span className="type-badge">{item.type}</span>
                  </div>
                  <span className="score">Score: {item.score.toFixed(4)}</span>
                </div>
              </div>
            ))
          ) : (
            !loading &&
            query && (
              <div className="no-results">
                No suggestions found.
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
