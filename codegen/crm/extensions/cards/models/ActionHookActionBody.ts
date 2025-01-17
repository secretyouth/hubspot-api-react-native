/**
 * CRM cards
 * Allows an app to extend the CRM UI by surfacing custom cards in the sidebar of record pages. These cards are defined up-front as part of app configuration, then populated by external data fetch requests when the record page is accessed by a user.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ActionConfirmationBody } from '../models/ActionConfirmationBody';

export class ActionHookActionBody {
    'type': ActionHookActionBodyTypeEnum;
    'confirmation'?: ActionConfirmationBody;
    'httpMethod': ActionHookActionBodyHttpMethodEnum;
    'url': string;
    'label'?: string;
    'propertyNamesIncluded': Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "ActionHookActionBodyTypeEnum",
            "format": ""
        },
        {
            "name": "confirmation",
            "baseName": "confirmation",
            "type": "ActionConfirmationBody",
            "format": ""
        },
        {
            "name": "httpMethod",
            "baseName": "httpMethod",
            "type": "ActionHookActionBodyHttpMethodEnum",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "propertyNamesIncluded",
            "baseName": "propertyNamesIncluded",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ActionHookActionBody.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ActionHookActionBodyTypeEnum = "ACTION_HOOK" ;
export type ActionHookActionBodyHttpMethodEnum = "CONNECT" | "DELETE" | "GET" | "HEAD" | "OPTIONS" | "PATCH" | "POST" | "PUT" | "TRACE" ;

