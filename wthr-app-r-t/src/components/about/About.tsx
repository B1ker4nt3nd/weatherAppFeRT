import './About.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ApiInformationIdGetRequest,
  CityDto,
  InfoDto,
} from '../../services/typescript-react-weather-client';
import * as apis from '../../services/typescript-react-weather-client/index';
import Moment from 'react-moment';

function About() {
  const [info, setInfo] = useState(null as InfoDto | null);

  useEffect(() => {
    new apis.InformationApi()
      .apiInformationIdGet({
        id: 1,
      } as ApiInformationIdGetRequest)
      .then((_info: InfoDto) => {
        setInfo(_info);
      });
  }, []);

  return (
    <div>
      made by: <strong>B1K3R4nt3nd</strong>
      <br />
      Utolsó adatbetöltés:{' '}
      {(info?.lastLoadTime && (
        <Moment format="YYYY.MM.DD HH:mm">{info.lastLoadTime}</Moment>
      )) ||
        'Nincs adat'}
      <br />
      <Link to="" className="btn btn-secondary">
        Főoldal
      </Link>
    </div>
  );
}

export default About;
