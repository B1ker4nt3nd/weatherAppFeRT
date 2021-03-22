/* tslint:disable */
/* eslint-disable */
/**
 * WeatherApplication
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    CanSprayTimeDto,
    CanSprayTimeDtoFromJSON,
    CanSprayTimeDtoFromJSONTyped,
    CanSprayTimeDtoToJSON,
} from './';

/**
 * 
 * @export
 * @interface CityDto
 */
export interface CityDto {
    /**
     * 
     * @type {number}
     * @memberof CityDto
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof CityDto
     */
    externalId?: number;
    /**
     * 
     * @type {string}
     * @memberof CityDto
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CityDto
     */
    country?: string | null;
    /**
     * 
     * @type {Array<CanSprayTimeDto>}
     * @memberof CityDto
     */
    canSprayTimes?: Array<CanSprayTimeDto> | null;
}

export function CityDtoFromJSON(json: any): CityDto {
    return CityDtoFromJSONTyped(json, false);
}

export function CityDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CityDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'externalId': !exists(json, 'externalId') ? undefined : json['externalId'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'canSprayTimes': !exists(json, 'canSprayTimes') ? undefined : (json['canSprayTimes'] === null ? null : (json['canSprayTimes'] as Array<any>).map(CanSprayTimeDtoFromJSON)),
    };
}

export function CityDtoToJSON(value?: CityDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'externalId': value.externalId,
        'name': value.name,
        'country': value.country,
        'canSprayTimes': value.canSprayTimes === undefined ? undefined : (value.canSprayTimes === null ? null : (value.canSprayTimes as Array<any>).map(CanSprayTimeDtoToJSON)),
    };
}


