import './SprayPrediction.css';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Form, Jumbotron, Spinner } from 'react-bootstrap';
import * as apis from '../../services/typescript-react-weather-client/index';
import {
  ApiCitiesGetRequest,
  ApiCitiesIdGetRequest,
  CanSprayTimeDto,
  CityDto,
} from '../../services/typescript-react-weather-client/index';
import SprayTimes from '../spray-times/SprayTimes';
import { Link } from 'react-router-dom';

function SprayPrediction() {
  const [cities, setCities] = useState([] as CityDto[]);
  const [sprayTimesLoading, setsprayTimesLoading] = useState(false);
  const [sprayTimes, setSprayTimes] = useState([] as CanSprayTimeDto[]);

  useEffect(() => {
    new apis.CitiesApi()
      .apiCitiesGet({ addCanSprayTime: false } as ApiCitiesGetRequest)
      .then((cities: CityDto[]) => setCities(cities));
  }, []);

  function upperCaseStartChar(cityName: string | null | undefined) {
    if (cityName) {
      return cityName.charAt(0).toUpperCase() + cityName.slice(1);
    }
    return '';
  }

  function handleCityChange(event: ChangeEvent<any>) {
    const selectedIndex = event.target.options.selectedIndex;
    const _cityId = event.target.options[selectedIndex].getAttribute(
      'data-key'
    );
    setsprayTimesLoading(true);

    new apis.CitiesApi()
      .apiCitiesIdGet({ id: _cityId } as ApiCitiesIdGetRequest)
      .then((_city: CityDto) => {
        setSprayTimes(_city.canSprayTimes || []);
        setsprayTimesLoading(false);
      });
  }

  return (
    <div className="spray-prediction">
      <div className="flex-container">
        <Jumbotron className="title-box">
          <h1>Permetezésre fel!</h1>
          <p>
            permetezés előrejelző alkalmazás ami nem azt írja, hogy milyen idő
            lesz, hanem, hogy mikor lesz permetezésre alkalmas.
          </p>
          {/* <Link to="about" className="btn btn-secondary">
            Oldal részletek
          </Link> */}
        </Jumbotron>
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
              <Form.Control as="select" custom onChange={handleCityChange}>
                <option key={0}></option>
                {cities.map((city: CityDto) => {
                  return (
                    <option key={city.id} data-key={city.id}>
                      {upperCaseStartChar(city.name)}
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

export default SprayPrediction;
