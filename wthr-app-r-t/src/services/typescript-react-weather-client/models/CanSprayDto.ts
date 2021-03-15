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
 * @interface CanSprayDto
 */
export interface CanSprayDto {
    /**
     * 
     * @type {Date}
     * @memberof CanSprayDto
     */
    actualTime?: Date;
    /**
     * 
     * @type {Date}
     * @memberof CanSprayDto
     */
    lastLoadTime?: Date;
    /**
     * 
     * @type {Array<CanSprayTimeDto>}
     * @memberof CanSprayDto
     */
    canSprayInTimes?: Array<CanSprayTimeDto> | null;
}

export function CanSprayDtoFromJSON(json: any): CanSprayDto {
    return CanSprayDtoFromJSONTyped(json, false);
}

export function CanSprayDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CanSprayDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actualTime': !exists(json, 'actualTime') ? undefined : (new Date(json['actualTime'])),
        'lastLoadTime': !exists(json, 'lastLoadTime') ? undefined : (new Date(json['lastLoadTime'])),
        'canSprayInTimes': !exists(json, 'canSprayInTimes') ? undefined : (json['canSprayInTimes'] === null ? null : (json['canSprayInTimes'] as Array<any>).map(CanSprayTimeDtoFromJSON)),
    };
}

export function CanSprayDtoToJSON(value?: CanSprayDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actualTime': value.actualTime === undefined ? undefined : (value.actualTime.toISOString()),
        'lastLoadTime': value.lastLoadTime === undefined ? undefined : (value.lastLoadTime.toISOString()),
        'canSprayInTimes': value.canSprayInTimes === undefined ? undefined : (value.canSprayInTimes === null ? null : (value.canSprayInTimes as Array<any>).map(CanSprayTimeDtoToJSON)),
    };
}


