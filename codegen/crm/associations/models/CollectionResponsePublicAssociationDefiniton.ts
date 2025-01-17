/**
 * Associations
 * Associations define the relationships between objects in HubSpot. These endpoints allow you to create, read, and remove associations.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Paging } from '../models/Paging';
import { PublicAssociationDefiniton } from '../models/PublicAssociationDefiniton';

export class CollectionResponsePublicAssociationDefiniton {
    'results': Array<PublicAssociationDefiniton>;
    'paging'?: Paging;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<PublicAssociationDefiniton>",
            "format": ""
        },
        {
            "name": "paging",
            "baseName": "paging",
            "type": "Paging",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CollectionResponsePublicAssociationDefiniton.attributeTypeMap;
    }

    public constructor() {
    }
}

