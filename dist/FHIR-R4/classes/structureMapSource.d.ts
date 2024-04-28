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
import { Address } from './address';
import { Age } from './age';
import { Annotation } from './annotation';
import { Attachment } from './attachment';
import { CodeableConcept } from './codeableConcept';
import { Coding } from './coding';
import { ContactDetail } from './contactDetail';
import { ContactPoint } from './contactPoint';
import { Contributor } from './contributor';
import { Count } from './count';
import { DataRequirement } from './dataRequirement';
import { Distance } from './distance';
import { Dosage } from './dosage';
import { Duration } from './duration';
import { Expression } from './expression';
import { Extension } from './extension';
import { HumanName } from './humanName';
import { Identifier } from './identifier';
import { Money } from './money';
import { ParameterDefinition } from './parameterDefinition';
import { Period } from './period';
import { Quantity } from './quantity';
import { Range } from './range';
import { Ratio } from './ratio';
import { Reference } from './reference';
import { RelatedArtifact } from './relatedArtifact';
import { SampledData } from './sampledData';
import { Signature } from './signature';
import { Timing } from './timing';
import { TriggerDefinition } from './triggerDefinition';
import { UsageContext } from './usageContext';
/**
 * A Map of relationships between 2 structures that can be used to transform data.
 */
export declare class StructureMapSource {
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
     * Type or variable this rule applies to.
     */
    context?: string;
    /**
     * Specified minimum cardinality for the element. This is optional; if present, it acts an implicit check on the input content.
     */
    min?: number;
    /**
     * Specified maximum cardinality for the element - a number or a \"*\". This is optional; if present, it acts an implicit check on the input content (* just serves as documentation; it's the default value).
     */
    max?: string;
    /**
     * Specified type for the element. This works as a condition on the mapping - use for polymorphic elements.
     */
    type?: string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueBase64Binary?: string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueBoolean?: boolean;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueCanonical?: string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueCode?: string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueDate?: string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueDateTime?: string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueDecimal?: number;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueId?: string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueInstant?: string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueInteger?: number;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueMarkdown?: string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueOid?: string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValuePositiveInt?: number;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueString?: string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueTime?: string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueUnsignedInt?: number;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueUri?: string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueUrl?: string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueUuid?: string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueAddress?: Address;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueAge?: Age;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueAnnotation?: Annotation;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueAttachment?: Attachment;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueCodeableConcept?: CodeableConcept;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueCoding?: Coding;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueContactPoint?: ContactPoint;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueCount?: Count;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueDistance?: Distance;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueDuration?: Duration;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueHumanName?: HumanName;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueIdentifier?: Identifier;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueMoney?: Money;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValuePeriod?: Period;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueQuantity?: Quantity;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueRange?: Range;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueRatio?: Ratio;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueReference?: Reference;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueSampledData?: SampledData;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueSignature?: Signature;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueTiming?: Timing;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueContactDetail?: ContactDetail;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueContributor?: Contributor;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueDataRequirement?: DataRequirement;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueExpression?: Expression;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueParameterDefinition?: ParameterDefinition;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueRelatedArtifact?: RelatedArtifact;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueTriggerDefinition?: TriggerDefinition;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueUsageContext?: UsageContext;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueDosage?: Dosage;
    /**
     * Optional field for this source.
     */
    element?: string;
    /**
     * How to handle the list mode for this element.
     */
    listMode?: StructureMapSource.ListModeEnum;
    /**
     * Named context for field, if a field is specified.
     */
    variable?: string;
    /**
     * FHIRPath expression  - must be true or the rule does not apply.
     */
    condition?: string;
    /**
     * FHIRPath expression  - must be true or the mapping engine throws an error instead of completing.
     */
    check?: string;
    /**
     * A FHIRPath expression which specifies a message to put in the transform log when content matching the source rule is found.
     */
    logMessage?: string;
}
export declare namespace StructureMapSource {
    type ListModeEnum = 'first' | 'not_first' | 'last' | 'not_last' | 'only_one';
    const ListModeEnum: {
        First: ListModeEnum;
        NotFirst: ListModeEnum;
        Last: ListModeEnum;
        NotLast: ListModeEnum;
        OnlyOne: ListModeEnum;
    };
}