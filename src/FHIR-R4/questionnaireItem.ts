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
import { Canonical } from './canonical';
import { Coding } from './coding';
import { Extension } from './extension';
import { QuestionnaireAnswerOption } from './questionnaireAnswerOption';
import { QuestionnaireEnableWhen } from './questionnaireEnableWhen';
import { QuestionnaireInitial } from './questionnaireInitial';
import { Uri } from './uri';


/**
 * A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.
 */
export interface QuestionnaireItem { 
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
     * An identifier that is unique within the Questionnaire allowing linkage to the equivalent item in a QuestionnaireResponse resource.
     */
    linkId?: string;
    /**
     * This element is a URI that refers to an [[[ElementDefinition]]] that provides information about this item, including information that might otherwise be included in the instance of the Questionnaire resource. A detailed description of the construction of the URI is shown in Comments, below. If this element is present then the following element values MAY be derived from the Element Definition if the corresponding elements of this Questionnaire resource instance have no value:  * code (ElementDefinition.code)  * type (ElementDefinition.type)  * required (ElementDefinition.min)  * repeats (ElementDefinition.max)  * maxLength (ElementDefinition.maxLength)  * answerValueSet (ElementDefinition.binding) * options (ElementDefinition.binding).
     */
    definition?: Uri;
    /**
     * A terminology code that corresponds to this group or question (e.g. a code from LOINC, which defines many questions and answers).
     */
    code?: Array<Coding>;
    /**
     * A short label for a particular group, question or set of display text within the questionnaire used for reference by the individual completing the questionnaire.
     */
    prefix?: string;
    /**
     * The name of a section, the text of a question or text content for a display item.
     */
    text?: string;
    /**
     * The type of questionnaire item this is - whether text for display, a grouping of other items or a particular type of data to be captured (string, integer, coded choice, etc.).
     */
    type?: QuestionnaireItem.TypeEnum;
    /**
     * A constraint indicating that this item should only be enabled (displayed/allow answers to be captured) when the specified condition is true.
     */
    enableWhen?: Array<QuestionnaireEnableWhen>;
    /**
     * Controls how multiple enableWhen values are interpreted -  whether all or any must be true.
     */
    enableBehavior?: QuestionnaireItem.EnableBehaviorEnum;
    /**
     * An indication, if true, that the item must be present in a \"completed\" QuestionnaireResponse.  If false, the item may be skipped when answering the questionnaire.
     */
    required?: boolean;
    /**
     * An indication, if true, that the item may occur multiple times in the response, collecting multiple answers for questions or multiple sets of answers for groups.
     */
    repeats?: boolean;
    /**
     * An indication, when true, that the value cannot be changed by a human respondent to the Questionnaire.
     */
    readOnly?: boolean;
    /**
     * The maximum number of characters that are permitted in the answer to be considered a \"valid\" QuestionnaireResponse.
     */
    maxLength?: number;
    /**
     * A reference to a value set containing a list of codes representing permitted answers for a \"choice\" or \"open-choice\" question.
     */
    answerValueSet?: Canonical;
    /**
     * One of the permitted answers for a \"choice\" or \"open-choice\" question.
     */
    answerOption?: Array<QuestionnaireAnswerOption>;
    /**
     * One or more values that should be pre-populated in the answer when initially rendering the questionnaire for user input.
     */
    initial?: Array<QuestionnaireInitial>;
    /**
     * Text, questions and other groups to be nested beneath a question or group.
     */
    item?: Array<QuestionnaireItem>;
}
export namespace QuestionnaireItem {
    export type TypeEnum = 'group' | 'display' | 'boolean' | 'decimal' | 'integer' | 'date' | 'dateTime' | 'time' | 'string' | 'text' | 'url' | 'choice' | 'open-choice' | 'attachment' | 'reference' | 'quantity';
    export const TypeEnum = {
        Group: 'group' as TypeEnum,
        Display: 'display' as TypeEnum,
        Boolean: 'boolean' as TypeEnum,
        Decimal: 'decimal' as TypeEnum,
        Integer: 'integer' as TypeEnum,
        Date: 'date' as TypeEnum,
        DateTime: 'dateTime' as TypeEnum,
        Time: 'time' as TypeEnum,
        String: 'string' as TypeEnum,
        Text: 'text' as TypeEnum,
        Url: 'url' as TypeEnum,
        Choice: 'choice' as TypeEnum,
        OpenChoice: 'open-choice' as TypeEnum,
        Attachment: 'attachment' as TypeEnum,
        Reference: 'reference' as TypeEnum,
        Quantity: 'quantity' as TypeEnum
    };
    export type EnableBehaviorEnum = 'all' | 'any';
    export const EnableBehaviorEnum = {
        All: 'all' as EnableBehaviorEnum,
        Any: 'any' as EnableBehaviorEnum
    };
}
