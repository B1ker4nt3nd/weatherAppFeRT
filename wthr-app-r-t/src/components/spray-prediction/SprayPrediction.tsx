import './SprayPrediction.css';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import * as apis from '../../services/typescript-react-weather-client/index';
import { CityDto } from '../../services/typescript-react-weather-client/index';

function SprayPrediction() {
  // const [choices, setChoices] = useState(['első', 'második', '3', '4']);

  // function handleClick(i) {
  //   const choices = this.state.choices.slice();
  //   choices[i] = "selected";
  //   this.setState({
  //     choices: choices,
  //   });
  // }

  // componentDidMount(
  //   var test = new apis.SprayApi();
  // );
  let cities: CityDto[] = [];

  useEffect(() => {
    // if (!cities) {
    const test = new apis.SprayApi();
    var result = test.apiSprayGetcitiesGet();
    console.log(JSON.stringify(result));
    // }
    console.log('mount it!');
  }, []); // passing an empty array as second argument triggers the callback in useEffect only after the initial render thus replicating `componentDidMount` lifecycle behaviour

  return (
    <div className="SprayPrediction">
      {/* <Game onClick={(i) => {setChoices([' ' +  i + ' ', ' ' +  i + ' ', ' ' +  i + ' ', ' ' +  i + ' '])}} choices = choices /> */}
      <div className="row header-row">
        <div className="col-md-6 page-description flex-container">
          <div className="item">
            Időjárás előrejelző alkalmazás ami nem azt írja, hogy milyen idő
            lesz, hanem, hogy milyen tevékenységekre alkalmas.
          </div>
        </div>
        <div className="col-md-6 fill"></div>
      </div>
      <div className="flex-container">
        <div className="item">Városok</div>
        <Form className="item">
          <Form.Group controlId="exampleForm.SelectCustom">
            {/* <Form.Label>Custom select</Form.Label> */}
            <Form.Control as="select" custom>
              <option>Budapest</option>
              <option>Gárdony</option>
              <option>Érd</option>
              <option>Martonvásár</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default SprayPrediction;
function componentDidMount() {
  throw new Error('Function not implemented.');
}
