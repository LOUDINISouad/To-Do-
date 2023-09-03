import React from 'react';
import './style.css';

export default function App() {
  return (
    <>
      
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">My list</label>
          <input type="text" id="item" />
        </div>
        <button className="btn">Add</button>
      </form>

      {/* To-Do List Header */}
      <h1 className="header">Organize your thoughts</h1>

      {/* To-Do List */}
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Task 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Task 2
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item 3
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  );
}
