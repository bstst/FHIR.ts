export declare class FHIRElement {
    id: string;
    extension: Extension[];
}
export declare class BackboneElement extends FHIRElement {
    modifierExtension: any;
}
export declare class DomainResource {
    text: Narrative;
    contained: Resource[];
    extension: Extension[];
    modifierExtension: Extension[];
}
export declare class BaseResource extends DomainResource {
    resourceType: string;
    id: string;
    meta: Meta;
    implicitRules: string;
    language: string;
}
export declare class Narrative {
    status: Code;
    div: string;
}
export declare class Code extends FHIRElement {
    private _code;
    private codeRE;
    constructor(input?: string);
    private setCode;
    getcode(): string;
    setcode(input: string): void;
    toString(): string;
}
export declare class Coding extends FHIRElement {
    system: string;
    version: string;
    code: string;
    display: string;
    userSelected: boolean;
    value: string;
}
export declare class DoseCoding extends FHIRElement {
    system: string;
    code: string;
    value: number;
}
export declare class HumanName extends FHIRElement {
    use: Code;
    text: string;
    family: string;
    given: string[];
    prefix: string[];
    suffix: string[];
    period: Period;
}
export declare class Extension {
    url: string;
    valueString: string;
    valueCode: string;
    valueAddress: Address;
    valueBoolean?: boolean;
    valueHumanName: HumanName;
    valueReference: Reference;
    valueDate: Date;
    valueIdentifier: string;
    valueDecimal?: number;
    valueInteger: number;
}
export declare class Address extends FHIRElement {
    use: Code;
    type: Code;
    text: string;
    line: string[];
    city: string;
    district: string;
    state: string;
    postalCode: string;
    country: string;
    period: Period;
}
export declare class Meta extends FHIRElement {
    versionId: string;
    lastUpdated: string | Date;
    profile: string;
    security: Coding;
    tag: Coding;
}
export declare class CodeableConcept extends FHIRElement {
    coding: Coding[];
    text: string;
}
export declare class Period extends FHIRElement {
    start: string | Date;
    end: string | Date;
}
export declare class Quantity extends FHIRElement {
    value: number;
    comparator: Code;
    unit: string;
    system: string;
    code: Code;
}
export declare class UsageContext extends FHIRElement {
    code: Coding;
    value: any;
    setvalueCodeableConcept(value: CodeableConcept): void;
    setvalueQuantity(value: Quantity): void;
    setvalueRange(value: Range): void;
}
export declare class PractitionerForImmunization extends BackboneElement {
    role: CodeableConcept;
    actor: Reference;
}
export declare class ImmunizationExplaination extends BackboneElement {
    reason: CodeableConcept[];
    reasonNotGiven: CodeableConcept[];
}
export declare class ImmunizationReaction extends BackboneElement {
    date: Date;
    detail: Reference;
    reported: boolean;
}
export declare class VaccinationProtocol extends BackboneElement {
    doseSequence: number;
    description: string;
    authority: Reference;
    series: string;
    seriesDoses: number;
    targetDisease: CodeableConcept[];
    doseStatus: CodeableConcept;
    doseStatusReason: CodeableConcept;
}
export declare class Attachment extends FHIRElement {
    contentType: string;
    language: string;
    data: string;
    url: string;
    size: number;
    hash: string;
    title: string;
    creation: string;
}
export declare class Qualification extends BackboneElement {
    identifier: Identifier[];
    code: CodeableConcept;
    period: Period;
    issuer: Reference;
}
export declare class Content extends BackboneElement {
    attachment: Attachment;
    format: Coding;
}
export declare class Link extends BackboneElement {
    other: Reference;
    type: Code;
}
export declare class PatientCommunication extends BackboneElement {
    language: CodeableConcept;
    preferred: boolean;
}
export declare class Contact extends BackboneElement {
    relationship: CodeableConcept[];
    name: HumanName;
    telecom: ContactPoint[];
    address: Address;
    gender: Code;
    organization: Reference;
    period: Period;
}
export declare class ContactPoint extends FHIRElement {
    system: string;
    value: string;
    use: string;
    rank: number;
    period: Period;
}
export declare class ContactDetail extends FHIRElement {
    name: string;
    telecom: ContactPoint;
}
declare class Related extends BackboneElement {
    type: string;
    target: Reference;
}
export declare class Reference extends FHIRElement {
    reference: string;
    identifier: Identifier;
    display: string;
}
export declare class Identifier extends FHIRElement {
    use: string;
    type: CodeableConcept;
    system: string;
    value: string;
    period: Period;
    assigner: Reference;
}
export declare class Payload extends BackboneElement {
    contentString: string;
    contentAttachment: Attachment;
    contentReference: Reference;
}
export declare class Network extends BackboneElement {
    address: string;
    type: string;
}
export declare class EnableWhen extends BackboneElement {
    question: string;
    hasAnswer: boolean;
    answer: any;
    setanswerBoolean(answer: boolean): void;
    setanswerInteger(answer: number): void;
    setanswerDate(answer: string): void;
    setanswerdateTime(answer: string): void;
    setanswerTime(answer: string): void;
    setanswerUri(answer: string): void;
    setanswerAttachment(answer: any): void;
    setanswerCoding(answer: Coding): void;
    setanswerQuantity(answer: Quantity): void;
    setanswerReference(answer: string): void;
}
export declare class Answer extends BackboneElement {
    valueDecimal: number;
    valueInteger: number;
    valueDate: Date;
    valueDateTime: Date;
    valueTime: string;
    valueString: string;
    valueUri: string;
    valueAttachment: Attachment;
    valueCoding: Coding;
    valueQuantity: Quantity;
    valueBoolean: boolean;
    valueReference: Reference;
    item: QuestionnaireResponseItem[];
}
export declare class FHIROption extends BackboneElement {
    value: any;
    setvalueDate(value: string): void;
    setvalueTime(value: string): void;
    setvalueString(value: string): void;
    setvalueCoding(value: Coding): void;
}
export declare class Annotation extends FHIRElement {
    authorReference: Reference;
    authorString: string;
    time: Date;
    text: string;
}
export declare class ContextRelated extends BackboneElement {
    identifier: Identifier;
    ref: Reference[];
}
export declare class Context extends BackboneElement {
    encounter: Reference;
    event: CodeableConcept[];
    sourcePatientInfo: Reference;
    related: ContextRelated[];
}
export declare class ReferenceRange extends BackboneElement {
    low: string;
    high: string;
    type: CodeableConcept;
    appliesTo: CodeableConcept[];
    age: Range;
    text: string[];
}
export declare class Participant extends BackboneElement {
    type: CodeableConcept[];
    actor: Reference;
    required: string;
    status: string;
}
export declare class EncounterParticipant extends BackboneElement {
    type: CodeableConcept[];
    individual: Reference;
    period: Period;
}
export declare class Activity extends BackboneElement {
    outcomeCodeableConcept: CodeableConcept[];
    outcomeReference: Reference[];
    progress: Annotation[];
    reference: Reference;
    detail: ActivityDetail;
}
export declare class Timing extends FHIRElement {
    event: Date;
    repeat: string;
    location: Reference;
    performer: Reference[];
    productCodeableConcept: CodeableConcept;
    productReference: Reference;
    dailyAmount: string;
    quantity: string;
    description: string;
}
export declare class Component extends BackboneElement {
    code: CodeableConcept;
    valueQuantity: Quantity;
    valueCodeableConcept: CodeableConcept;
    valueString: string;
    valueBoolean: boolean;
    valueRange: Range;
    valueRatio: Ratio;
    valueSampledData: SampledData;
    valueAttachmnet: Attachment;
    valueTime: string;
    valueDateTime: Date;
    valuePeriod: Period;
    dataAbsentReason: CodeableConcept;
    interpretation: CodeableConcept;
    referenceRange: ReferenceRange[];
}
export declare class Ratio extends FHIRElement {
    numerator: Quantity;
    denominator: Quantity;
}
export declare class Range extends FHIRElement {
    low: number;
    high: number;
}
export declare class Input extends BackboneElement {
    type: CodeableConcept;
    value: any;
}
export declare class Output extends BackboneElement {
    type: CodeableConcept;
    value: any;
}
export declare class SampledData extends FHIRElement {
    origin: number;
    period: number;
    factor: number;
    lowerLimit: number;
    upperLimit: number;
    dimensions: number;
    data: string;
}
export declare class Restriction extends BackboneElement {
    repetitions: number;
    period: Period;
    recipient: Reference[];
}
export declare class AvailableTime extends BackboneElement {
    daysOfWeek: string[];
    allDay: boolean;
    availableStartTime: string | Date;
    availableEndTime: string | Date;
}
export declare class NotAvailable extends BackboneElement {
    description: string;
    during: Period;
}
export declare class BundleLink extends BackboneElement {
    relation: string;
    url: string;
}
export declare class BundleSignature extends FHIRElement {
    type: Coding[];
    when: string;
    who: Reference;
    onBehalfOfUri: string;
    onBehalfOfReference: Reference;
    targetFormat: string;
    sigFormat: string;
    data: string;
}
export declare class Search extends BackboneElement {
    mode: string;
    score: number;
}
export declare class BundleRequest extends BackboneElement {
    method: string;
    url: string;
    ifNoneMatch: string;
    ifModifiedSince: number;
    ifMatch: number;
    ifNoneExist: number;
}
export declare class BundleResponse extends BackboneElement {
    status: string;
    location: string;
    etag: string;
    lastModified: number;
    outcome: number;
}
export declare class BundleEntry extends BackboneElement {
    link: BundleLink[];
    fullUrl: string;
    resource: Resource;
    search: Search;
    request: BundleRequest;
    response: BundleResponse;
}
export declare class ActivityDetail extends BackboneElement {
    category: CodeableConcept;
    definition: Reference;
    code: CodeableConcept;
    reasonCode: CodeableConcept[];
    reasonReference: Reference[];
    goal: Reference;
    status: string;
    statusReason: string;
    prohibited: boolean;
    scheduledTiming: Timing;
    scheduledPeriod: Period;
    scheduledString: string;
    description: string;
}
export declare class Position extends BackboneElement {
    longitude: number;
    latitude: number;
    altitude: number;
}
export declare class Requester extends BackboneElement {
    agent: Reference;
    onBehalfOf: Reference;
}
export declare class QuestionnaireResponseItem extends BackboneElement {
    linkId: string;
    definition: string;
    text: string;
    answer: Answer[];
    item: QuestionnaireResponseItem[];
}
export declare class Item extends BackboneElement {
    linkId: string;
    definition: string;
    code: Coding[];
    prefix: string;
    text: string;
    type: Code;
    subject: Reference;
    enableWhen: EnableWhen[];
    required: boolean;
    repeats: boolean;
    readOnly: boolean;
    maxLength: number;
    options: string;
    option: FHIROption[];
    item: Item[];
    initial: any;
    answer: Answer[];
    initialReference: Reference;
    initialDateTime: Date;
}
export declare class Agent extends BackboneElement {
    role: CodeableConcept[];
    reference: Reference;
    userId: Identifier;
    altId: string;
    name: string;
    requestor: boolean;
    location: Reference;
    policy: string[];
    media: Coding;
    /**
     * Logical network location for application activity
     */
    network: Network;
    /**
     * Reason given for this user
     */
    purposeOfUse: CodeableConcept;
}
export declare class Source extends BackboneElement {
    site: string;
    identifier: Identifier;
    type: Coding[];
}
export declare class EntityDetail extends BackboneElement {
    type: string;
    value: string;
}
export declare class Entity extends BackboneElement {
    identifier: Identifier;
    reference: Reference;
    type: Coding;
    role: Coding;
    lifecycle: Coding;
    securityLabel: Coding[];
    name: string;
    description: string;
    query: string;
    detail: EntityDetail[];
}
export declare class Udi extends BackboneElement {
    deviceIdentifier: string;
    name: string;
    jurisdiction: string;
    carrierHRF: string;
    carrierAIDC: any;
    issuer: string;
    entryType: string;
}
export declare class QuestionnaireResponse extends BaseResource {
    resourceType: "QuestionnaireResponse";
    identifier: Identifier;
    basedOn: Reference[];
    parent: Reference[];
    questionnaire: Reference;
    status: string;
    context: Reference;
    authored: Date;
    author: Reference;
    source: Reference;
    item: QuestionnaireResponseItem[];
    subject: Reference;
}
export declare class Questionnaire extends BaseResource {
    resourceType: "Questionnaire";
    url: string;
    identifier: Identifier[];
    version: string;
    name: string;
    title: string;
    status: string;
    experimental: boolean;
    date: string | Date;
    publisher: string;
    description: string;
    purpose: string;
    rovalDate: string | Date;
    lastReviewedDate: string | Date;
    effectivePeriod: Period;
    useContext: UsageContext[];
    jurisdiction: CodeableConcept[];
    contact: ContactDetail[];
    copyright: string;
    code: Coding[];
    subjectType: Code[];
    item: Item[];
}
export declare class Patient extends BaseResource {
    resourceType: "Patient";
    identifier: Identifier[];
    active: boolean;
    name: HumanName[];
    telecom: ContactPoint[];
    gender: Code;
    birthDate: string | Date;
    address: Address;
    maritalStatus: CodeableConcept;
    contact: Contact[];
    communication: PatientCommunication[];
    generalPractitioner: Reference[];
    managingOrganization: Reference;
    link: Link[];
}
export declare class DocumentReference extends BaseResource {
    resourceType: "DocumentReference";
    masterIdentifier: Identifier;
    identifier: Identifier[];
    status: 'current' | 'superseded' | 'entered-in-error';
    docStatus: 'preliminary' | 'final' | 'amended' | 'entered-in-error';
    type: CodeableConcept;
    subject: Reference;
    created: Date;
    description: string;
    author: Reference[];
    content: Content[];
    indexed: Date;
    context: Context;
}
export declare class Appointment extends BaseResource {
    resourceType: "Appointment";
    identifier: Identifier[];
    status: string;
    serviceCategory: CodeableConcept;
    serviceType: CodeableConcept[];
    specialty: CodeableConcept[];
    appointmentType: CodeableConcept;
    indication: Reference[];
    priority: number;
    description: string;
    supportingInformation: Reference[];
    start: Date;
    end: Date;
    minutesDuration: number;
    slot: Reference[];
    created: Date;
    comment: string;
    incomingReferral: Reference[];
    participant: Participant[];
    requestPeriod: Period[];
}
export declare class AppointmentResponse extends BaseResource {
    resourceType: "AppointmentResponse";
    identifier: Identifier[];
    appointment: Reference;
    start: Date;
    end: Date;
    participationType: CodeableConcept[];
    actor: Reference;
    participantStatus: string;
    comment: string;
}
export declare class Organization extends BaseResource {
    resourceType: "Organization";
    identifier: Identifier[];
    active: boolean;
    status: string;
    name: string;
    alias: string[];
    description: string;
    type: CodeableConcept[];
    telecom: ContactPoint[];
    address: Address[];
    partOf: Reference;
    contact: Contact[];
    endpoint: Reference[];
}
export declare class Location extends BaseResource {
    resourceType: "Location";
    identifier: Identifier[];
    status: string;
    operationalStatus: Coding;
    name: string;
    alias: string[];
    description: string;
    mode: Code;
    type: CodeableConcept;
    telecom: ContactPoint[];
    address: Address;
    physicalType: CodeableConcept;
    managingOrganization: Reference;
    partOf: Reference;
    endpoint: Reference[];
    extension: Extension[];
}
export declare class Account extends BaseResource {
    resourceType: "Account";
    identifier: Identifier[];
    status: Code;
    type: CodeableConcept;
    name: string;
    subject: Reference;
    period: Period;
    active: Period;
    balance: number;
    alias: string[];
    description: string;
    mode: Code;
    telecom: ContactPoint;
    address: Address;
    physicalType: CodeableConcept;
    managingOrganization: Reference;
    partOf: Reference;
    endpoint: Reference[];
}
export declare class ProcessRequest extends BaseResource {
    resourceType: "ProcessRequest";
    identifier: Identifier[];
    status: string;
    created: Date;
    provider: Reference;
    request: Reference;
}
export declare class Encounter extends BaseResource {
    resourceType: "Encounter";
    identifier: Identifier[];
    status: 'planned' | 'arrived' | 'triaged' | 'in-progress' | 'onleave' | 'finished' | 'cancelled' | 'entered-in-error' | 'unknown';
    statusHistory: {
        status: 'planned' | 'arrived' | 'triaged' | 'in-progress' | 'onleave' | 'finished' | 'cancelled' | 'entered-in-error' | 'unknown';
        period: Period;
    }[];
    class: Coding;
    classHistory: {
        class: Coding;
        period: Period;
    }[];
    type: CodeableConcept[];
    priority: CodeableConcept;
    episodeOfCare: Reference[];
    subject: Reference;
    incomingReferral: Reference[];
    participant: EncounterParticipant[];
    appointment: Reference;
    period: Period;
    length: Quantity;
    reason: CodeableConcept[];
    diagnosis: {
        condition: Reference;
        role: CodeableConcept;
        rank: number;
    }[];
    account: Reference[];
    hospitalization: {
        preAdmissionIdentifer: Identifier;
        origin: Reference;
        admitSource: CodeableConcept;
        reAdmission: CodeableConcept;
        dietPreference: CodeableConcept[];
        specialCourtesy: CodeableConcept[];
        specialArrangement: CodeableConcept[];
        destination: Reference;
        dischargeDiposition: CodeableConcept;
    };
    location: {
        location: Reference;
        status: 'planned' | 'active' | 'reserved' | 'completed';
        period: Period;
    }[];
    serviceProvider: Reference;
    partOf: Reference;
}
export declare class CareTeamParticipant extends BackboneElement {
    role: CodeableConcept;
    member: Reference;
    onBehalfOf: Reference;
    period: Period;
}
export declare class CareTeam extends BaseResource {
    resourceType: "CareTeam";
    identifier: Identifier[];
    status: string;
    category: CodeableConcept[];
    name: string;
    subject: Reference;
    context: Reference;
    participant: CareTeamParticipant[];
    note: Annotation[];
}
export declare class EpisodeOfCare extends BaseResource {
    resourceType: "EpisodeOfCare";
    identifier: Identifier[];
    status: string;
    statusHistory: BackboneElement[];
    type: CodeableConcept[];
    diagnosis: BackboneElement[];
    patient: Reference;
    mangingOrganization: Reference;
    period: Period;
    referralRequest: Reference;
    careManager: Reference;
    team: Reference[];
    account: Reference[];
}
export declare class CarePlan extends BaseResource {
    resourceType: "CarePlan";
    identifier: Identifier[];
    definition: Reference[];
    basedOn: Reference[];
    replaces: Reference[];
    partOf: Reference[];
    status: string;
    intent: string;
    category: CodeableConcept[];
    title: string;
    description: string;
    subject: Reference;
    context: Reference;
    period: Period;
    author: Reference[];
    careTeam: Reference[];
    addresses: Reference[];
    supportingInfo: Reference[];
    goal: Reference[];
    activity: Activity[];
    note: Annotation[];
}
export declare class Communication extends BaseResource {
    resourceType: "Communication";
    identifier: Identifier[];
    definition: Reference[];
    basedOn: Reference[];
    partOf: Reference[];
    status: string;
    notDone: boolean;
    notDoneReason: CodeableConcept;
    category: CodeableConcept[];
    medium: CodeableConcept[];
    subject: Reference;
    context: Reference;
    recipient: Reference[];
    topic: Reference[];
    sent: Date;
    received: Date;
    sender: Reference;
    reasonCode: CodeableConcept[];
    reasonReference: Reference[];
    payload: Payload[];
    note: Annotation[];
}
export declare class Task extends BaseResource {
    resourceType: "Task";
    identifier: Identifier[];
    definitionUri: string;
    definitionReference: Reference;
    basedOn: Reference[];
    groupIdentifier: Identifier;
    replaces: Reference[];
    partOf: Reference[];
    status: string;
    statusReason: CodeableConcept;
    businessStatus: CodeableConcept;
    intent: string;
    priority: string;
    code: CodeableConcept;
    description: string;
    focus: Reference;
    for: Reference;
    context: Reference;
    executionPeriod: Period;
    authoredOn: string;
    lastModified: string;
    requester: Requester;
    performerType: CodeableConcept;
    owner: Reference;
    reason: CodeableConcept;
    note: Annotation[];
    relevantHistory: Reference[];
    restriction: Restriction;
    input: Input[];
    output: Output[];
}
export declare class ProcedureRequest extends BaseResource {
    resourceType: "ProcedureRequest";
    identifier: Identifier[];
    status: string;
    intent: string;
    category: CodeableConcept[];
    orderDetail: CodeableConcept[];
    subject: Reference;
    requester: Requester;
    performer: Reference;
    authoredOn: string;
    context: Reference;
    performerType: CodeableConcept;
    note: Annotation[];
}
export declare class PractitionerRole extends BaseResource {
    resourceType: "PractitionerRole";
    identifier: Identifier[];
    active: boolean;
    period: Period;
    practitioner: Reference;
    organization: Reference;
    code: CodeableConcept[];
    specialty: CodeableConcept[];
    location: Reference[];
    healthcareService: Reference[];
    telecom: ContactPoint[];
    availableTime: AvailableTime[];
    notAvailable: NotAvailable[];
    availabilityExceptions: string;
    endpoint: Reference[];
}
export declare class Practitioner extends BaseResource {
    resourceType: "Practitioner";
    identifier: Identifier[];
    active: boolean;
    name: HumanName[];
    telecom: ContactPoint[];
    address: Address[];
    gender: string;
    birthDate: string | Date;
    photo: Attachment[];
    qualification: Qualification[];
    communication: CodeableConcept[];
}
export declare class Device extends BaseResource {
    resourceType: "Device";
    identifier: Identifier[];
    udi: Udi;
    status: string;
    type: CodeableConcept;
    lotNumber: string;
    manufacturer: string;
    manufacturerDate: Date;
    expirationDate: Date;
    model: string;
    version: string;
    patient: Reference;
    owner: Reference;
    contact: ContactPoint[];
    location: Reference;
    url: string;
    note: Annotation[];
    safety: CodeableConcept[];
}
export declare class Observation extends BaseResource {
    resourceType: "Observation";
    identifier: Identifier[];
    basedOn: Reference[];
    status: string;
    category: CodeableConcept[];
    code: CodeableConcept;
    subject: Reference;
    context: Reference;
    effectiveDateTime: Date;
    effectivePeriod: Period;
    issued: string;
    performer: Reference[];
    valueQuantity: Quantity;
    valueCodeableConcept: CodeableConcept;
    valueString: string;
    valueBoolean: boolean;
    valueRange: Range;
    valueRatio: Ratio;
    valueSampledData: SampledData;
    valueAttachmnet: Attachment;
    valueTime: string;
    valueDateTime: Date;
    valuePeriod: Period;
    dataAbsentReason: CodeableConcept;
    interpretation: CodeableConcept;
    comment: string;
    bodySite: CodeableConcept;
    method: CodeableConcept;
    specimen: Reference;
    device: Reference;
    referenceRange: ReferenceRange[];
    related: Related[];
    component: Component[];
}
export declare class Immunization extends BaseResource {
    resourceType: "Immunization";
    identifier: Identifier[];
    status: string;
    notGiven: boolean;
    vaccineCode: CodeableConcept;
    patient: Reference;
    encounter: Reference;
    date: string | Date;
    primarySource: boolean;
    reportOrigin: CodeableConcept;
    location: Reference;
    manufacturer: Reference;
    lotNumber: string;
    expirationDate: string | Date;
    site: CodeableConcept;
    route: CodeableConcept;
    doseQuantity: DoseCoding;
    practitioner: PractitionerForImmunization[];
    note: Annotation[];
    reaction: ImmunizationReaction[];
    vaccinationProtocol: VaccinationProtocol[];
}
export declare class CommunicationRequest extends BaseResource {
    resourceType: "CommunicationRequest";
    identifier: Identifier[];
    basedOn: Reference[];
    replaces: Reference[];
    groupIdentifier: Identifier;
    status: string;
    category: CodeableConcept[];
    priority: string;
    medium: CodeableConcept[];
    subject: Reference;
    recipient: Reference[];
    topic: Reference[];
    context: Reference[];
    payload: Payload[];
    occurrenceDateTime: Date;
    occurrencePeriod: Period;
    authoredOn: Date;
    sender: Reference;
    requester: Requester;
    reasonCode: CodeableConcept[];
    reasonReference: Reference[];
    note: Annotation[];
}
export declare class AuditEvent extends BaseResource {
    resourceType: "AuditEvent";
    type: Coding;
    subtype: Coding[];
    action: string;
    recorded: Date;
    outcome: string;
    outcomeDesc: string;
    purposeOfEvent: CodeableConcept[];
    /**
     * (Required) Actor involved in the event
     */
    agent: Agent[];
    source: Source;
    entity: Entity[];
}
export declare class Bundle extends BaseResource {
    resourceType: "Bundle";
    identifier: Identifier;
    type: string;
    timestamp: string;
    total: number;
    link: BundleLink[];
    entry: BundleEntry[];
    signature: BundleSignature;
}
export declare class HealthcareService extends BaseResource {
    resourceType: "HealthcareService";
    identifier: Identifier[];
    active: string;
    providedBy: Reference;
    category: CodeableConcept;
    type: CodeableConcept[];
    specialty: CodeableConcept[];
    location: Reference[];
    name: string;
    comment: string;
    extraDetails: string;
    photo: Attachment;
    telecom: ContactPoint[];
    coverageArea: Reference[];
    serviceProvisionCode: CodeableConcept[];
    eligibility: CodeableConcept;
    eligibilityNote: string;
    programName: string;
    characteristic: CodeableConcept[];
    referralMethod: CodeableConcept[];
    appointmentRequired: string;
    availableTime: AvailableTime[];
    notAvailable: NotAvailable[];
    availibilityExceptions: string;
    endpoint: Reference[];
}
export declare class Schedule extends BaseResource {
    resourceType: "Schedule";
    identifier: Identifier[];
    active: boolean;
    serviceCategory: CodeableConcept;
    serviceType: CodeableConcept[];
    specialty: CodeableConcept[];
    actor: Reference[];
    planningHorizon: Period;
    comment: string;
}
export declare class Slot extends BaseResource {
    resourceType: "Slot";
    identifier: Identifier[];
    serviceCategory: CodeableConcept;
    serviceType: CodeableConcept[];
    speciality: CodeableConcept[];
    appointmentType: CodeableConcept;
    schedule: Reference;
    status: string;
    start: string;
    end: string;
    overbooked: boolean;
    comment: string;
}
export declare class ClinicalImpression extends BaseResource {
    resourceType: "ClinicalImpression";
    identifier: Identifier[];
    status: string;
    code: CodeableConcept;
    description: string;
    subject: Reference;
    context: Reference;
    effectiveDateTime: string | Date;
    effectivePeriod: Period;
    date: string | Date;
    assessor: Reference;
    previous: Reference;
    problem: Reference[];
    investigation: ClinicalImpressionInvestigation[];
    protocol: string[];
    summary: string;
    finding: ClinicalImpressionFinding[];
    prognosisCodeableConcept: CodeableConcept[];
    prognosisReference: Reference[];
    action: Reference[];
    note: Annotation[];
}
export declare class ClinicalImpressionInvestigation extends BackboneElement {
    code: CodeableConcept;
    item: Reference[];
}
export declare class ClinicalImpressionFinding extends BackboneElement {
    basis: string;
    itemCodeableConcept: CodeableConcept;
    itemReference: Reference;
}
export declare class AllergyIntolerance extends BaseResource {
    resourceType: "AllergyIntolerance";
    identifier: Identifier[];
    clinicalStatus: Code;
    verificationStatus: Code;
    type: Code;
    category: Code[];
    critically: Code;
    code: CodeableConcept;
    patient: Reference;
    onsetDateTime: Date | string;
    onsetAge: Age;
    onsetPeriod: Period;
    onsetRange: Range;
    onsetString: string;
    assertedDate: Date | string;
    recorder: Reference;
    asserter: Reference;
    lastOccurrence: Date | string;
    note: Annotation[];
    reaction: AllergyIntoleranceReaction[];
}
export declare class AllergyIntoleranceReaction extends BackboneElement {
    substance: CodeableConcept;
    manifestation: CodeableConcept[];
    description: string;
    onset: Date | string;
    severity: Code;
    exposureRoute: CodeableConcept;
    note: Annotation[];
}
export declare class Age extends FHIRElement {
    value: number;
    comparator: '<' | '<=' | '>=' | '>';
    unit: string;
    system: string;
    code: Code;
}
export declare class ValueSet extends BaseResource {
    resourceType: "ValueSet";
    url?: string;
    identifier?: Identifier[];
    version?: string;
    name?: string;
    title?: string;
    status: string;
    experimental?: boolean;
    date?: string | Date;
    publisher?: string;
    contact?: ContactDetail[];
    description?: string;
    useContext?: UsageContext[];
    jurisdiction?: CodeableConcept[];
    immutable?: boolean;
    purpose?: string;
    copyright?: string;
    extensible?: boolean;
    compose?: ValueSetCompose;
    expansion?: ValueSetExpansion;
}
export declare class ValueSetCompose extends BackboneElement {
    lockedDate?: string | Date;
    inactive?: boolean;
    include: ValueSetInclude[];
    exclude?: ValueSetInclude[];
}
export declare class ValueSetInclude extends BackboneElement {
    system?: string;
    version?: string;
    concept?: ValueSetConcept[];
    filter?: ValueSetFilter[];
    valueSet?: string[];
}
export declare class ValueSetConcept extends BackboneElement {
    code: string;
    display?: string;
    designation?: ValueSetDesignation[];
}
export declare class ValueSetDesignation extends BackboneElement {
    language?: string;
    use?: Coding;
    value: string;
}
export declare class ValueSetFilter extends BackboneElement {
    property: string;
    op: string;
    value: string;
}
export declare class ValueSetExpansion extends BackboneElement {
    identifier?: string;
    timestamp: string | Date;
    total?: number;
    offset?: number;
    parameter?: ValueSetParameter[];
    contains?: ValueSetContains[];
}
export declare class ValueSetParameter extends BackboneElement {
    name: string;
    valueString?: string;
    valueBoolean?: boolean;
    valueInteger?: number;
    valueDecimal?: number;
    valueUri?: string;
    valueCode?: string;
}
export declare class ValueSetContains extends BackboneElement {
    system?: string;
    abstract?: boolean;
    inactive?: boolean;
    version?: string;
    code?: Code;
    display?: string;
    designation?: ValueSetDesignation[];
    contains?: ValueSetContains[];
}
export type Resource = AllergyIntolerance | ClinicalImpression | Schedule | HealthcareService | Bundle | AuditEvent | CommunicationRequest | Immunization | Observation | Device | Practitioner | PractitionerRole | ProcedureRequest | Task | Communication | CarePlan | EpisodeOfCare | CareTeam | Encounter | ProcessRequest | Account | Location | Organization | AppointmentResponse | Appointment | QuestionnaireResponse | Questionnaire | Slot | Patient | DocumentReference | ValueSet;
export {};
