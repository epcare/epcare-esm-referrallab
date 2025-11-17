import { Type } from '@openmrs/esm-framework';

export const configSchema = {
  laboratoryQueueConcept: {
    _type: Type.String,
    _default: '1836ac8a-a855-4c7e-b2ba-a290233c67b7',
    _description: 'Concept uuid for the laboratory queue.',
  },
  laboratoryLocationTag: {
    _type: Type.String,
    _default: 'Laboratory',
    _description: 'Location tag for laboratory locations.',
  },
  laboratorySpecimenTypeConcept: {
    _type: Type.ConceptUuid,
    _default: '162476AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
    _description: 'Concept UUID for laboratory specimen types',
  },
  laboratoryEncounterTypeUuid: {
    _type: Type.String,
    _default: '214e27a1-606a-4b1e-a96e-d736c87069d5',
    _description: 'Concept uuid for the laboratory tool encounter type.',
  },
  artCardEncounterTypeUuid: {
    _type: Type.String,
    _default: '8d5b2be0-c2cc-11de-8d13-0010c6dffd0f',
    _description: 'Concept uuid for the laboratory tool encounter type.',
  },
  laboratoryOrderTypeUuid: {
    _type: Type.String,
    _default: '52a447d3-a64a-11e3-9aeb-50e549534c5e',
    _description: 'Uuid for orderType',
  },
  laboratoryReferalDestinationUuid: {
    _type: Type.String,
    _default: 'b1f8b6c8-c255-4518-89f5-4236ab76025b',
    _description: 'Concept uuid for laboratory referals destinations',
  },

  enableSendingLabTestsByEmail: {
    _type: Type.Boolean,
    _default: false,
    _description: 'This enables sending results to patient via email',
  },
  enableSpecimenIdAutoGeneration: {
    _type: Type.Boolean,
    _default: false,
    _description: 'Configuration to enable/disable auto speciment id generation button.',
  },
  testReferralValidators: {
    _type: Type.String,
    _default:
      '{"validatableTest":["1eb05918-f50c-4cad-a827-3c78f296a10a","163610AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","dc8d4af2-30ab-102d-86b0-7a5022ba4115"],"testValidators":{"1eb05918-f50c-4cad-a827-3c78f296a10a":"413946009,385354005,202501002,LL5723-3,202501009,202501016,202501020,33882-2,202501021","163610AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA":"413946009,385354005,202501002,LL5723-3,202501009,202501016,202501020,33882-2,202501021","dc8d4af2-30ab-102d-86b0-7a5022ba4115":""}}',
    _description: 'globalproperty that has allowable referral tests ',
    _globalProperty: 'ugandaemrsync.testRefferalValidators',
  },
};

export type Config = {
  laboratoryQueueConcept: string;
  laboratoryLocationTag: string;
  laboratorySpecimenTypeConcept: string;
  laboratoryEncounterTypeUuid: string;
};
