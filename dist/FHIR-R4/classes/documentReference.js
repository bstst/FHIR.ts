"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentReference = void 0;
/**
 * A reference to a document of any kind for any purpose. Provides metadata about the document so that the document can be discovered and managed. The scope of a document is any seralized object with a mime-type, so includes formal patient centric documents (CDA), cliical notes, scanned paper, and non-patient specific documents like policy text.
 */
class DocumentReference {
}
exports.DocumentReference = DocumentReference;
(function (DocumentReference) {
    DocumentReference.StatusEnum = {
        Current: 'current',
        Superseded: 'superseded',
        EnteredInError: 'entered-in-error'
    };
    DocumentReference.DocStatusEnum = {
        Preliminary: 'preliminary',
        Final: 'final',
        Amended: 'amended',
        EnteredInError: 'entered-in-error'
    };
})(DocumentReference = exports.DocumentReference || (exports.DocumentReference = {}));
