import React, { useState, useEffect } from 'react';
import wasteServices from '../services/wasteServices';

const Waste = () => {
  const [waste, setWaste] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    wasteServices.getAllServices().then(response => {
      setWaste(response.data.data);
    }).catch(error => {
      console.error('Error fetching services:', error);
    });
  }, []);

  const filteredServices = waste.filter(waste => {
    return (
      waste.name.toLowerCase().includes(search.toLowerCase()) &&
      waste.category.toLowerCase().includes(filter.toLowerCase())
    );
  });

  return (
    <div className="container">
      <h1>Waste disposal </h1>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Search waste by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Filter by category..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="list-group">
        {filteredServices.map(waste => (
          <div key={waste._id} className="list-group-item">
            <h5>{waste.name}</h5>
            <p>{waste.description}</p>
            <p><strong>Category:</strong> {waste.category}</p>
            <p><strong>credit points:</strong> {waste.credit}</p>
          </div>
        ))}
      </div>
      <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">description of above waste</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>


    </div>
  );
};

export default Waste;
