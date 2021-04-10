import './SprayTimeDetail.css';
import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import { Popover } from 'react-bootstrap';
import WeatherIcon from 'react-icons-weather';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

interface SprayTimeDetailsProps {
  temperatureMax: number | undefined;
  temperatureMin: number | undefined;
  weatherDescription: string | null | undefined;
  weatherIconId: number | null | undefined;
  cloudsPercentage: number | undefined;
  windSpeed: number | undefined;
}

function SprayTimeDetails(props: SprayTimeDetailsProps) {
  const [fade, setFade] = useState(true);

  return (
    <div onAnimationEnd={() => setFade(false)} className={fade ? 'fade' : ''}>
      <div className="flex-container">
        <div className="item">
          <OverlayTrigger
            placement="left"
            trigger="click"
            overlay={
              <Popover id="tooltip">
                {' '}
                <Popover.Content>
                  <strong>{props.weatherDescription}</strong>
                </Popover.Content>
              </Popover>
            }
          >
            <WeatherIcon
              name="owm"
              iconId={`${props.weatherIconId}`}
              flip="horizontal"
              rotate="90"
              fixedWidth={false}
              className="wthr-icon"
            />
          </OverlayTrigger>
          ,
        </div>
        <div className="item">
          <div className="flex-container">
            <div className="item">
              <span>Hőmérséklet: </span>
              <span>
                {`${
                  props.temperatureMin !== props.temperatureMax
                    ? `${props.temperatureMin} - ${props.temperatureMax}`
                    : props.temperatureMin
                } C°`}
              </span>
            </div>
          </div>
          <div className="flex-container">
            <span>
              {`Felhő százalékos aránya: ${props.cloudsPercentage}`} %
            </span>
          </div>
          <div className="flex-container">
            <span>{`Szél sebesség: ${props.windSpeed} km/h`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

SprayTimeDetails.prototypes = {
  temperatureMax: PropTypes.number.isRequired,
  temperatureMin: PropTypes.number.isRequired,
  weatherDescription: PropTypes.string.isRequired,
  weatherIconId: PropTypes.string.isRequired,
  cloudsPercentage: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
};

export default SprayTimeDetails;
