/**
 * Account-ActivityDefinition-AdverseEvent-AllergyIntolerance-Appointment-AppointmentResponse-AuditEvent-Basic-Binary-BiologicallyDerivedProduct-BodyStructure-Bundle-CapabilityStatement-CarePlan-CareTeam-CatalogEntry-ChargeItem-ChargeItemDefinition-Claim-ClaimResponse-ClinicalImpression-CodeSystem-Communication-CommunicationRequest-CompartmentDefinition-Composition-ConceptMap-Condition-Consent-Contract-Coverage-CoverageEligibilityRequest-CoverageEligibilityResponse-DetectedIssue-Device-DeviceDefinition-DeviceMetric-DeviceRequest-DeviceUseStatement-DiagnosticReport-DocumentManifest-DocumentReference-EffectEvidenceSynthesis-Encounter-Endpoint-EnrollmentRequest-EnrollmentResponse-EpisodeOfCare-EventDefinition-Evidence-EvidenceVariable-ExampleScenario-ExplanationOfBenefit-FamilyMemberHistory-Flag-Goal-GraphDefinition-Group-GuidanceResponse-HealthcareService-ImagingStudy-Immunization-ImmunizationEvaluation-ImmunizationRecommendation-ImplementationGuide-InsurancePlan-Invoice-Library-Linkage-List-Location-Measure-MeasureReport-Media-Medication-MedicationAdministration-MedicationDispense-MedicationKnowledge-MedicationRequest-MedicationStatement-MedicinalProduct-MedicinalProductAuthorization-MedicinalProductContraindication-MedicinalProductIndication-MedicinalProductIngredient-MedicinalProductInteraction-MedicinalProductManufactured-MedicinalProductPackaged-MedicinalProductPharmaceutical-MedicinalProductUndesirableEffect-MessageDefinition-MessageHeader-MolecularSequence-NamingSystem-NutritionOrder-Observation-ObservationDefinition-OperationDefinition-OperationOutcome-Organization-OrganizationAffiliation-Parameters-Patient-PaymentNotice-PaymentReconciliation-Person-PlanDefinition-Practitioner-PractitionerRole-Procedure-Provenance-Questionnaire-QuestionnaireResponse-RelatedPerson-RequestGroup-ResearchDefinition-ResearchElementDefinition-ResearchStudy-ResearchSubject-RiskAssessment-RiskEvidenceSynthesis-Schedule-SearchParameter-ServiceRequest-Slot-Specimen-SpecimenDefinition-StructureDefinition-StructureMap-Subscription-Substance-SubstanceNucleicAcid-SubstancePolymer-SubstanceProtein-SubstanceReferenceInformation-SubstanceSourceMaterial-SubstanceSpecification-SupplyDelivery-SupplyRequest-Task-TerminologyCapabilities-TestReport-TestScript-ValueSet-VerificationResult-VisionPrescription--FHIRAPI
 * Swagger for FHIR Resources Account, ActivityDefinition, AdverseEvent, AllergyIntolerance, Appointment, AppointmentResponse, AuditEvent, Basic, Binary, BiologicallyDerivedProduct, BodyStructure, Bundle, CapabilityStatement, CarePlan, CareTeam, CatalogEntry, ChargeItem, ChargeItemDefinition, Claim, ClaimResponse, ClinicalImpression, CodeSystem, Communication, CommunicationRequest, CompartmentDefinition, Composition, ConceptMap, Condition, Consent, Contract, Coverage, CoverageEligibilityRequest, CoverageEligibilityResponse, DetectedIssue, Device, DeviceDefinition, DeviceMetric, DeviceRequest, DeviceUseStatement, DiagnosticReport, DocumentManifest, DocumentReference, EffectEvidenceSynthesis, Encounter, Endpoint, EnrollmentRequest, EnrollmentResponse, EpisodeOfCare, EventDefinition, Evidence, EvidenceVariable, ExampleScenario, ExplanationOfBenefit, FamilyMemberHistory, Flag, Goal, GraphDefinition, Group, GuidanceResponse, HealthcareService, ImagingStudy, Immunization, ImmunizationEvaluation, ImmunizationRecommendation, ImplementationGuide, InsurancePlan, Invoice, Library, Linkage, List, Location, Measure, MeasureReport, Media, Medication, MedicationAdministration, MedicationDispense, MedicationKnowledge, MedicationRequest, MedicationStatement, MedicinalProduct, MedicinalProductAuthorization, MedicinalProductContraindication, MedicinalProductIndication, MedicinalProductIngredient, MedicinalProductInteraction, MedicinalProductManufactured, MedicinalProductPackaged, MedicinalProductPharmaceutical, MedicinalProductUndesirableEffect, MessageDefinition, MessageHeader, MolecularSequence, NamingSystem, NutritionOrder, Observation, ObservationDefinition, OperationDefinition, OperationOutcome, Organization, OrganizationAffiliation, Parameters, Patient, PaymentNotice, PaymentReconciliation, Person, PlanDefinition, Practitioner, PractitionerRole, Procedure, Provenance, Questionnaire, QuestionnaireResponse, RelatedPerson, RequestGroup, ResearchDefinition, ResearchElementDefinition, ResearchStudy, ResearchSubject, RiskAssessment, RiskEvidenceSynthesis, Schedule, SearchParameter, ServiceRequest, Slot, Specimen, SpecimenDefinition, StructureDefinition, StructureMap, Subscription, Substance, SubstanceNucleicAcid, SubstancePolymer, SubstanceProtein, SubstanceReferenceInformation, SubstanceSourceMaterial, SubstanceSpecification, SupplyDelivery, SupplyRequest, Task, TerminologyCapabilities, TestReport, TestScript, ValueSet, VerificationResult, VisionPrescription
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Code } from './code';
import { Extension } from './extension';
import { Id } from './id';


/**
 * A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification.
 */
export interface TestScriptAssert { 
    /**
     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
     */
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Array<Extension>;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Array<Extension>;
    /**
     * The label would be used for tracking/logging purposes by test engines.
     */
    label?: string;
    /**
     * The description would be used by test engines for tracking and reporting purposes.
     */
    description?: string;
    /**
     * The direction to use for the assertion.
     */
    direction?: TestScriptAssert.DirectionEnum;
    /**
     * Id of the source fixture used as the contents to be evaluated by either the \"source/expression\" or \"sourceId/path\" definition.
     */
    compareToSourceId?: string;
    /**
     * The FHIRPath expression to evaluate against the source fixture. When compareToSourceId is defined, either compareToSourceExpression or compareToSourcePath must be defined, but not both.
     */
    compareToSourceExpression?: string;
    /**
     * XPath or JSONPath expression to evaluate against the source fixture. When compareToSourceId is defined, either compareToSourceExpression or compareToSourcePath must be defined, but not both.
     */
    compareToSourcePath?: string;
    /**
     * The mime-type contents to compare against the request or response message 'Content-Type' header.
     */
    contentType?: Code;
    /**
     * The FHIRPath expression to be evaluated against the request or response message contents - HTTP headers and payload.
     */
    expression?: string;
    /**
     * The HTTP header field name e.g. 'Location'.
     */
    headerField?: string;
    /**
     * The ID of a fixture.  Asserts that the response contains at a minimum the fixture specified by minimumId.
     */
    minimumId?: string;
    /**
     * Whether or not the test execution performs validation on the bundle navigation links.
     */
    navigationLinks?: boolean;
    /**
     * The operator type defines the conditional behavior of the assert. If not defined, the default is equals.
     */
    operator?: TestScriptAssert.OperatorEnum;
    /**
     * The XPath or JSONPath expression to be evaluated against the fixture representing the response received from server.
     */
    path?: string;
    /**
     * The request method or HTTP operation code to compare against that used by the client system under test.
     */
    requestMethod?: TestScriptAssert.RequestMethodEnum;
    /**
     * The value to use in a comparison against the request URL path string.
     */
    requestURL?: string;
    /**
     * The type of the resource.  See http://build.fhir.org/resourcelist.html.
     */
    resource?: Code;
    /**
     * okay | created | noContent | notModified | bad | forbidden | notFound | methodNotAllowed | conflict | gone | preconditionFailed | unprocessable.
     */
    response?: TestScriptAssert.ResponseEnum;
    /**
     * The value of the HTTP response code to be tested.
     */
    responseCode?: string;
    /**
     * Fixture to evaluate the XPath/JSONPath expression or the headerField  against.
     */
    sourceId?: Id;
    /**
     * The ID of the Profile to validate against.
     */
    validateProfileId?: Id;
    /**
     * The value to compare to.
     */
    value?: string;
    /**
     * Whether or not the test execution will produce a warning only on error for this assert.
     */
    warningOnly?: boolean;
}
export namespace TestScriptAssert {
    export type DirectionEnum = 'response' | 'request';
    export const DirectionEnum = {
        Response: 'response' as DirectionEnum,
        Request: 'request' as DirectionEnum
    };
    export type OperatorEnum = 'equals' | 'notEquals' | 'in' | 'notIn' | 'greaterThan' | 'lessThan' | 'empty' | 'notEmpty' | 'contains' | 'notContains' | 'eval';
    export const OperatorEnum = {
        Equals: 'equals' as OperatorEnum,
        NotEquals: 'notEquals' as OperatorEnum,
        In: 'in' as OperatorEnum,
        NotIn: 'notIn' as OperatorEnum,
        GreaterThan: 'greaterThan' as OperatorEnum,
        LessThan: 'lessThan' as OperatorEnum,
        Empty: 'empty' as OperatorEnum,
        NotEmpty: 'notEmpty' as OperatorEnum,
        Contains: 'contains' as OperatorEnum,
        NotContains: 'notContains' as OperatorEnum,
        Eval: 'eval' as OperatorEnum
    };
    export type RequestMethodEnum = 'delete' | 'get' | 'options' | 'patch' | 'post' | 'put' | 'head';
    export const RequestMethodEnum = {
        Delete: 'delete' as RequestMethodEnum,
        Get: 'get' as RequestMethodEnum,
        Options: 'options' as RequestMethodEnum,
        Patch: 'patch' as RequestMethodEnum,
        Post: 'post' as RequestMethodEnum,
        Put: 'put' as RequestMethodEnum,
        Head: 'head' as RequestMethodEnum
    };
    export type ResponseEnum = 'okay' | 'created' | 'noContent' | 'notModified' | 'bad' | 'forbidden' | 'notFound' | 'methodNotAllowed' | 'conflict' | 'gone' | 'preconditionFailed' | 'unprocessable';
    export const ResponseEnum = {
        Okay: 'okay' as ResponseEnum,
        Created: 'created' as ResponseEnum,
        NoContent: 'noContent' as ResponseEnum,
        NotModified: 'notModified' as ResponseEnum,
        Bad: 'bad' as ResponseEnum,
        Forbidden: 'forbidden' as ResponseEnum,
        NotFound: 'notFound' as ResponseEnum,
        MethodNotAllowed: 'methodNotAllowed' as ResponseEnum,
        Conflict: 'conflict' as ResponseEnum,
        Gone: 'gone' as ResponseEnum,
        PreconditionFailed: 'preconditionFailed' as ResponseEnum,
        Unprocessable: 'unprocessable' as ResponseEnum
    };
}
