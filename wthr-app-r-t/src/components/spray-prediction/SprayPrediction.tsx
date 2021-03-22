import './SprayPrediction.css';
import React, {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useState,
} from 'react';
import { Form, Jumbotron, Spinner } from 'react-bootstrap';
import * as apis from '../../services/typescript-react-weather-client/index';
import {
  ApiCitiesGetRequest,
  ApiCitiesIdGetRequest,
  CanSprayDto,
  CanSprayTimeDto,
  CityDto,
} from '../../services/typescript-react-weather-client/index';
import SprayTimes from '../spray-times/SprayTimes';

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

  // const [cities, setCities] = useState([] as CityDto[]);
  const [cities, setCities] = useState([] as CityDto[]);
  const [cityId, setselectedCityId] = useState(0);
  const [sprayTimesLoading, setsprayTimesLoading] = useState(false);
  const [sprayTimes, setSprayTimes] = useState([] as CanSprayTimeDto[]);

  // let cities: CityDto[] = [];

  useEffect(() => {
    // if (!cities) {
    new apis.CitiesApi()
      .apiCitiesGet({ addCanSprayTime: false } as ApiCitiesGetRequest)
      .then((cities: CityDto[]) => setCities(cities));
    // console.log(JSON.stringify(result));
    // }
    console.log('mount it!');
  }, []); // passing an empty array as second argument triggers the callback in useEffect only after the initial render thus replicating `componentDidMount` lifecycle behaviour

  function handleCityChange(event: ChangeEvent<any>) {
    const selectedIndex = event.target.options.selectedIndex;
    const _cityId = event.target.options[selectedIndex].getAttribute(
      'data-key'
    );
    // console.log(_cityId);
    // setselectedCityId(-1);
    setsprayTimesLoading(true);
    console.log(cityId);

    new apis.CitiesApi()
      .apiCitiesIdGet({ id: _cityId } as ApiCitiesIdGetRequest)
      .then((_city: CityDto) => {
        setSprayTimes(_city.canSprayTimes || []);
        // setselectedCityId(_cityId);
        // console.log(cityId);
        setsprayTimesLoading(false);
      });
    // console.log(JSON.stringify(event));
  }

  return (
    <div className="spray-prediction">
      {/* <Game onClick={(i) => {setChoices([' ' +  i + ' ', ' ' +  i + ' ', ' ' +  i + ' ', ' ' +  i + ' '])}} choices = choices /> */}
      <div className="flex-container">
        <Jumbotron className="title-box">
          <h1>Tevékenységekre fel!</h1>
          <p>
            Időjárás előrejelző alkalmazás ami nem azt írja, hogy milyen idő
            lesz, hanem, hogy milyen tevékenységekre alkalmas.
          </p>
        </Jumbotron>
        {/* <div className="col-md-6 page-description flex-container">
          <div className="item">
            Időjárás előrejelző alkalmazás ami nem azt írja, hogy milyen idő
            lesz, hanem, hogy milyen tevékenységekre alkalmas.
          </div>
        </div>
        <div className="col-md-6 fill"></div> */}
      </div>
      {isCitiesLoading(cities) ? (
        <Spinner animation="border" role="status" variant="secondary">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <div className="flex-container">
          <div className="item">Városok</div>
          <Form className="item">
            <Form.Group controlId="exampleForm.SelectCustom">
              {/* <Form.Label>Custom select</Form.Label> */}
              <Form.Control as="select" custom onChange={handleCityChange}>
                <option key={0}></option>
                {cities.map((city: CityDto) => {
                  return (
                    <option key={city.id} data-key={city.id}>
                      {city.name}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>
          </Form>
        </div>
      )}
      <div className="flex-container">
        <div className="item">
          Permetezésre alkalmas időpontok a következő napokban, amikor 10C° és
          25C° között van a hőmérséklet. <br />
          Nincs szél, nem esik sem a korábbi napokban nem esett és nem is
          várható eső.
        </div>
      </div>
      <div>
        <SprayTimes sprayTimes={sprayTimes} showSpinner={sprayTimesLoading} />
      </div>
    </div>
  );
}

function isCitiesLoading(cities: CityDto[]): boolean {
  return !cities.some((_) => _);
}

// function isSprayTimesLoading(cityId: number): boolean {
//   console.log(`is spray time ${cityId}`);
//   return cityId < 0;
// }

export default SprayPrediction;
