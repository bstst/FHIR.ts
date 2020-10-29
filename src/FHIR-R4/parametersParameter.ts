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
import { ResourceList } from './resourceList';
import { SampledData } from './sampledData';
import { Signature } from './signature';
import { Timing } from './timing';
import { TriggerDefinition } from './triggerDefinition';
import { UsageContext } from './usageContext';


/**
 * This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it.
 */
export interface ParametersParameter { 
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
     * The name of the parameter (reference to the operation definition).
     */
    name?: string;
    /**
     * If the parameter is a data type.
     */
    valueBase64Binary?: string;
    /**
     * If the parameter is a data type.
     */
    valueBoolean?: boolean;
    /**
     * If the parameter is a data type.
     */
    valueCanonical?: string;
    /**
     * If the parameter is a data type.
     */
    valueCode?: string;
    /**
     * If the parameter is a data type.
     */
    valueDate?: string;
    /**
     * If the parameter is a data type.
     */
    valueDateTime?: string;
    /**
     * If the parameter is a data type.
     */
    valueDecimal?: number;
    /**
     * If the parameter is a data type.
     */
    valueId?: string;
    /**
     * If the parameter is a data type.
     */
    valueInstant?: string;
    /**
     * If the parameter is a data type.
     */
    valueInteger?: number;
    /**
     * If the parameter is a data type.
     */
    valueMarkdown?: string;
    /**
     * If the parameter is a data type.
     */
    valueOid?: string;
    /**
     * If the parameter is a data type.
     */
    valuePositiveInt?: number;
    /**
     * If the parameter is a data type.
     */
    valueString?: string;
    /**
     * If the parameter is a data type.
     */
    valueTime?: string;
    /**
     * If the parameter is a data type.
     */
    valueUnsignedInt?: number;
    /**
     * If the parameter is a data type.
     */
    valueUri?: string;
    /**
     * If the parameter is a data type.
     */
    valueUrl?: string;
    /**
     * If the parameter is a data type.
     */
    valueUuid?: string;
    /**
     * If the parameter is a data type.
     */
    valueAddress?: Address;
    /**
     * If the parameter is a data type.
     */
    valueAge?: Age;
    /**
     * If the parameter is a data type.
     */
    valueAnnotation?: Annotation;
    /**
     * If the parameter is a data type.
     */
    valueAttachment?: Attachment;
    /**
     * If the parameter is a data type.
     */
    valueCodeableConcept?: CodeableConcept;
    /**
     * If the parameter is a data type.
     */
    valueCoding?: Coding;
    /**
     * If the parameter is a data type.
     */
    valueContactPoint?: ContactPoint;
    /**
     * If the parameter is a data type.
     */
    valueCount?: Count;
    /**
     * If the parameter is a data type.
     */
    valueDistance?: Distance;
    /**
     * If the parameter is a data type.
     */
    valueDuration?: Duration;
    /**
     * If the parameter is a data type.
     */
    valueHumanName?: HumanName;
    /**
     * If the parameter is a data type.
     */
    valueIdentifier?: Identifier;
    /**
     * If the parameter is a data type.
     */
    valueMoney?: Money;
    /**
     * If the parameter is a data type.
     */
    valuePeriod?: Period;
    /**
     * If the parameter is a data type.
     */
    valueQuantity?: Quantity;
    /**
     * If the parameter is a data type.
     */
    valueRange?: Range;
    /**
     * If the parameter is a data type.
     */
    valueRatio?: Ratio;
    /**
     * If the parameter is a data type.
     */
    valueReference?: Reference;
    /**
     * If the parameter is a data type.
     */
    valueSampledData?: SampledData;
    /**
     * If the parameter is a data type.
     */
    valueSignature?: Signature;
    /**
     * If the parameter is a data type.
     */
    valueTiming?: Timing;
    /**
     * If the parameter is a data type.
     */
    valueContactDetail?: ContactDetail;
    /**
     * If the parameter is a data type.
     */
    valueContributor?: Contributor;
    /**
     * If the parameter is a data type.
     */
    valueDataRequirement?: DataRequirement;
    /**
     * If the parameter is a data type.
     */
    valueExpression?: Expression;
    /**
     * If the parameter is a data type.
     */
    valueParameterDefinition?: ParameterDefinition;
    /**
     * If the parameter is a data type.
     */
    valueRelatedArtifact?: RelatedArtifact;
    /**
     * If the parameter is a data type.
     */
    valueTriggerDefinition?: TriggerDefinition;
    /**
     * If the parameter is a data type.
     */
    valueUsageContext?: UsageContext;
    /**
     * If the parameter is a data type.
     */
    valueDosage?: Dosage;
    /**
     * If the parameter is a whole resource.
     */
    resource?: ResourceList;
    /**
     * A named part of a multi-part parameter.
     */
    part?: Array<ParametersParameter>;
}
