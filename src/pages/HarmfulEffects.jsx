import React from 'react';

const HarmfulEffects = () => {
  return (
    <div className="harmful-effects">
      <h1 className='bg-dark p-2 text-white'>Harmful Effects of Improper Waste Disposal</h1>
      <div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-lg btn-warning" data-bs-toggle="popover" title="The toxins released from these e-waste affects humans brain, heart, liver, kidney and skeletal system damage" data-bs-content="The negative health effects of these toxins on humans include brain, heart, liver, kidney and skeletal system damage">E-Waste</button>

  <button type="button" class="btn btn-lg btn-success" data-bs-toggle="popover" title="This prevent pollution by reducing the need to collect new raw materials" data-bs-content="preventing pollution by reducing the need to collect new raw materials">ReCycle Waste</button>

  <button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" title="release toxic fumes into the air which can have a major impact on local wildlife habitats" data-bs-content="release toxic fumes into the air which can have a major impact on local wildlife habitats">Non ReCycle waste</button>



</div>
      <h3 className='bg-light p-2 mt-3 text-dark bg-opacity-25' >If these waste not disposed in correct way it leads to :</h3>
      
      
      <ul className='bg-success p-2 mt-3 text-dark bg-opacity-25 fs-5'>
        <li>Soil Contamination</li>
        <li>Water Pollution</li>
        <li>Air Pollution</li>
        <li>Resource Depletion</li>
        <li>Human Health Issues</li>
        
      </ul>
      


      


      <div className="d-flex justify-content-between">
        <div className="card bg-light p-2 text-dark bg-opacity-50" style={{ width: '18rem' }}>
          <img src="https://miro.medium.com/v2/resize:fit:1200/0*zLV9gyYTx61brJBa.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Air Pollution</h5>
            <p className="card-text">On improper disposal of all type of waste <strong>E-WASTE RE-CYCLE</strong> waste <strong>NON RE-CYCLE</strong> waste cause soil contamination. Becasue of this the land gets poluted and will not be used for any purpose.  </p>
          </div>
        </div>
        <div className="card bg-light p-2 text-dark bg-opacity-50" style={{ width: '18rem' }}>
        <img src="https://www.indiacelebrating.com/wp-content/uploads/Effects-of-Soil-pollution-1280x720.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
          <h5 className="card-title">Soil Contamination</h5>
              <p className="card-text">Due to <strong>E-WASTE </strong>Soil contamination is caused by the presence of xenobiotic (human-made) chemicals or other alteration in the natural soil environment  </p>
          </div>
        </div>

        <div className="card bg-light p-2 text-dark bg-opacity-50" style={{ width: '18rem' }}>
        <img src="https://www.freshwatersystems.com/cdn/shop/articles/trash-in-water.jpg?v=1681480887&width=500" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Water Polution</h5>
              <p className="card-text">Throughing waste on water makes water to get poluted. Both humans and animals can not consume water on throwing <strong>NON RE-CYCLE</strong> waste it will not degrade and makes water poison</p>            
          </div>
        </div>

        
      </div>



      {/* carousel */}

      





      
    </div>
  );
};

export default HarmfulEffects;
