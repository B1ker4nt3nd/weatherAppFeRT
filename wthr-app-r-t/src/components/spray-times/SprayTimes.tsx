import './SprayTimes.css';
import React, {
  ChangeEvent,
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from 'react';
import * as PropTypes from 'prop-types';
import {
  CanSprayDto,
  CanSprayTimeDto,
  CityDto,
} from '../../services/typescript-react-weather-client/index';
import { ListGroup, Spinner } from 'react-bootstrap';
import Moment from 'react-moment';
import SprayTimeDetails from '../spray-time-details/SprayTimeDetails';
import { Transition } from 'react-transition-group';

interface Props {
  sprayTimes: CanSprayTimeDto[];
  showSpinner: boolean;
}

function SprayTimes(props: Props) {
  function handleClick(index: number) {
    // e.preventDefault();
    console.log(`Line Index: ${index}`);
    setSelectedLineIndex(index);
  }

  const [selectedLineIndex, setSelectedLineIndex] = useState(0);

  if (props.showSpinner) {
    return (
      // <div></div>
      <div className="flex-container-spinner">
        <Spinner animation="grow" role="status" variant="secondary">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  } else {
    let canSprayInTimes: CanSprayTimeDto[] = [];
    if (props.sprayTimes && props.sprayTimes.some((_) => _)) {
      canSprayInTimes = props.sprayTimes;
    }
    if (canSprayInTimes.some((_) => _)) {
      return (
        <div className="flex-container list-group-container">
          <ListGroup>
            {canSprayInTimes.map((canSprayTime: CanSprayTimeDto, index) => {
              return (
                <ListGroup.Item key={index} onClick={() => handleClick(index)}>
                  <div>
                    <div
                      className={`flex-container pointer-cursor ${
                        selectedLineIndex === index ? 'no-pointer-cursor' : ''
                      }`}
                    >
                      <div className="item">
                        <span className="row-item">
                          <Moment format="YYYY.MM.DD HH:mm">
                            {canSprayTime.date}
                          </Moment>
                        </span>
                        <span className="row-item">
                          {(+(canSprayTime.temperature || 0)).toFixed(0)} C°
                        </span>
                      </div>
                    </div>
                    {selectedLineIndex === index && (
                      <SprayTimeDetails
                        temperatureMax={canSprayTime.temperatureMax}
                        temperatureMin={canSprayTime.temperatureMin}
                        weatherDescription={canSprayTime.weatherDescription}
                        weatherIconId={canSprayTime.weatherIconId}
                        cloudsPercentage={canSprayTime.cloudsPercentage}
                        windSpeed={canSprayTime.windSpeed}
                      />
                    )}
                  </div>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </div>
      );
    }
    return <div>Nincs permetezésre alkalmas időpont belátható időn belül.</div>;
  }
}

SprayTimes.prototypes = {
  sprayTime: PropTypes.object.isRequired,
  showSpinner: PropTypes.bool.isRequired,
};

export default SprayTimes;
