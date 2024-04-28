"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvenanceEntity = void 0;
/**
 * Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance. Provenance statement indicates clinical significance in terms of confidence in authenticity, reliability, and trustworthiness, integrity, and stage in lifecycle (e.g. Document Completion - has the artifact been legally authenticated), all of which may impact security, privacy, and trust policies.
 */
class ProvenanceEntity {
}
exports.ProvenanceEntity = ProvenanceEntity;
(function (ProvenanceEntity) {
    ProvenanceEntity.RoleEnum = {
        Derivation: 'derivation',
        Revision: 'revision',
        Quotation: 'quotation',
        Source: 'source',
        Removal: 'removal'
    };
})(ProvenanceEntity = exports.ProvenanceEntity || (exports.ProvenanceEntity = {}));
