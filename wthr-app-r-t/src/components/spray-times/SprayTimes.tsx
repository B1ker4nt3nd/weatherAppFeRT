import React, {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useState,
} from 'react';
import * as PropTypes from 'prop-types';
import {
  CanSprayDto,
  CanSprayTimeDto,
  CityDto,
} from '../../services/typescript-react-weather-client/index';
import { Spinner } from 'react-bootstrap';

interface Props {
  sprayTimes: CanSprayTimeDto[];
  showSpinner: boolean;
}

function SprayTimes(props: Props) {
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
        <div className="flex-container">
          <table>
            <tbody>
              {canSprayInTimes.map((canSprayTime: CanSprayTimeDto, index) => {
                return (
                  <tr key={index}>
                    <td>{canSprayTime.temperature}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }
    return <div>Nincs permetezésre alkalmas időpont belátható időn belül.</div>;
  }
}

SprayTimes.prototypes = {
  sprayTime: PropTypes.object.isRequired,
};

export default SprayTimes;
