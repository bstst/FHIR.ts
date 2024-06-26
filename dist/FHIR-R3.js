"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restriction = exports.SampledData = exports.Output = exports.Input = exports.Range = exports.Ratio = exports.Component = exports.Timing = exports.Activity = exports.EncounterParticipant = exports.Participant = exports.ReferenceRange = exports.Context = exports.ContextRelated = exports.Annotation = exports.FHIROption = exports.Answer = exports.EnableWhen = exports.Network = exports.Payload = exports.Identifier = exports.Reference = exports.ContactDetail = exports.ContactPoint = exports.Contact = exports.PatientCommunication = exports.Link = exports.Content = exports.Qualification = exports.Attachment = exports.VaccinationProtocol = exports.ImmunizationReaction = exports.ImmunizationExplaination = exports.PractitionerForImmunization = exports.UsageContext = exports.Quantity = exports.Period = exports.CodeableConcept = exports.Meta = exports.Address = exports.Extension = exports.HumanName = exports.DoseCoding = exports.Coding = exports.Code = exports.Narrative = exports.BaseResource = exports.DomainResource = exports.BackboneElement = exports.FHIRElement = void 0;
exports.ClinicalImpressionFinding = exports.ClinicalImpressionInvestigation = exports.ClinicalImpression = exports.Slot = exports.Schedule = exports.HealthcareService = exports.Bundle = exports.AuditEvent = exports.CommunicationRequest = exports.Immunization = exports.Observation = exports.Device = exports.Practitioner = exports.PractitionerRole = exports.ProcedureRequest = exports.Task = exports.Communication = exports.CarePlan = exports.EpisodeOfCare = exports.CareTeam = exports.CareTeamParticipant = exports.Encounter = exports.ProcessRequest = exports.Account = exports.Location = exports.Organization = exports.AppointmentResponse = exports.Appointment = exports.DocumentReference = exports.Patient = exports.Questionnaire = exports.QuestionnaireResponse = exports.Udi = exports.Entity = exports.EntityDetail = exports.Source = exports.Agent = exports.Item = exports.QuestionnaireResponseItem = exports.Requester = exports.Position = exports.ActivityDetail = exports.BundleEntry = exports.BundleResponse = exports.BundleRequest = exports.Search = exports.BundleSignature = exports.BundleLink = exports.NotAvailable = exports.AvailableTime = void 0;
exports.ValueSetContains = exports.ValueSetParameter = exports.ValueSetExpansion = exports.ValueSetFilter = exports.ValueSetDesignation = exports.ValueSetConcept = exports.ValueSetInclude = exports.ValueSetCompose = exports.ValueSet = exports.Age = exports.AllergyIntoleranceReaction = exports.AllergyIntolerance = void 0;
/* This is base class from which other elements are derived */
class FHIRElement {
}
exports.FHIRElement = FHIRElement;
class BackboneElement extends FHIRElement {
}
exports.BackboneElement = BackboneElement;
/* FHIR classes used in resources */
class DomainResource {
}
exports.DomainResource = DomainResource;
class BaseResource extends DomainResource {
}
exports.BaseResource = BaseResource;
class Narrative {
}
exports.Narrative = Narrative;
class Code extends FHIRElement {
    constructor(input) {
        super();
        this.codeRE = new RegExp('[^\\s]+([\\s]?[^\\s]+)*');
        this.setCode(input);
    }
    setCode(input) {
        if (this.codeRE.test(input)) {
            this._code = input;
        }
        else {
            throw new RangeError('Not a valid Id string - must match reg exp [^\\s]+([\\s]?[^\\s]+)* Was provided: ' + input);
        }
    }
    getcode() {
        return this._code;
    }
    setcode(input) {
        this.setCode(input);
    }
    toString() {
        return this._code;
    }
}
exports.Code = Code;
class Coding extends FHIRElement {
}
exports.Coding = Coding;
class DoseCoding extends FHIRElement {
}
exports.DoseCoding = DoseCoding;
class HumanName extends FHIRElement {
}
exports.HumanName = HumanName;
class Extension {
}
exports.Extension = Extension;
class Address extends FHIRElement {
}
exports.Address = Address;
class Meta extends FHIRElement {
}
exports.Meta = Meta;
class CodeableConcept extends FHIRElement {
}
exports.CodeableConcept = CodeableConcept;
class Period extends FHIRElement {
}
exports.Period = Period;
class Quantity extends FHIRElement {
}
exports.Quantity = Quantity;
class UsageContext extends FHIRElement {
    setvalueCodeableConcept(value) {
        this.value = value;
    }
    setvalueQuantity(value) {
        this.value = value;
    }
    setvalueRange(value) {
        this.value = value;
    }
}
exports.UsageContext = UsageContext;
class PractitionerForImmunization extends BackboneElement {
}
exports.PractitionerForImmunization = PractitionerForImmunization;
class ImmunizationExplaination extends BackboneElement {
}
exports.ImmunizationExplaination = ImmunizationExplaination;
class ImmunizationReaction extends BackboneElement {
}
exports.ImmunizationReaction = ImmunizationReaction;
class VaccinationProtocol extends BackboneElement {
}
exports.VaccinationProtocol = VaccinationProtocol;
class Attachment extends FHIRElement {
}
exports.Attachment = Attachment;
class Qualification extends BackboneElement {
}
exports.Qualification = Qualification;
class Content extends BackboneElement {
}
exports.Content = Content;
class Link extends BackboneElement {
}
exports.Link = Link;
class PatientCommunication extends BackboneElement {
}
exports.PatientCommunication = PatientCommunication;
class Contact extends BackboneElement {
}
exports.Contact = Contact;
class ContactPoint extends FHIRElement {
}
exports.ContactPoint = ContactPoint;
class ContactDetail extends FHIRElement {
}
exports.ContactDetail = ContactDetail;
class Related extends BackboneElement {
}
class Reference extends FHIRElement {
}
exports.Reference = Reference;
class Identifier extends FHIRElement {
}
exports.Identifier = Identifier;
class Payload extends BackboneElement {
}
exports.Payload = Payload;
class Network extends BackboneElement {
}
exports.Network = Network;
class EnableWhen extends BackboneElement {
    setanswerBoolean(answer) {
        this.answer = answer;
    }
    setanswerInteger(answer) {
        this.answer = answer;
    }
    setanswerDate(answer) {
        this.answer = answer;
    }
    setanswerdateTime(answer) {
        this.answer = answer;
    }
    setanswerTime(answer) {
        this.answer = answer;
    }
    setanswerUri(answer) {
        this.answer = answer;
    }
    setanswerAttachment(answer) {
        this.answer = answer;
    }
    setanswerCoding(answer) {
        this.answer = answer;
    }
    setanswerQuantity(answer) {
        this.answer = answer;
    }
    setanswerReference(answer) {
        this.answer = answer;
    }
}
exports.EnableWhen = EnableWhen;
class Answer extends BackboneElement {
}
exports.Answer = Answer;
class FHIROption extends BackboneElement {
    setvalueDate(value) {
        this.value = value;
    }
    setvalueTime(value) {
        this.value = value;
    }
    setvalueString(value) {
        this.value = value;
    }
    setvalueCoding(value) {
        this.value = value;
    }
}
exports.FHIROption = FHIROption;
class Annotation extends FHIRElement {
}
exports.Annotation = Annotation;
class ContextRelated extends BackboneElement {
}
exports.ContextRelated = ContextRelated;
class Context extends BackboneElement {
}
exports.Context = Context;
class ReferenceRange extends BackboneElement {
}
exports.ReferenceRange = ReferenceRange;
class Participant extends BackboneElement {
}
exports.Participant = Participant;
class EncounterParticipant extends BackboneElement {
}
exports.EncounterParticipant = EncounterParticipant;
class Activity extends BackboneElement {
}
exports.Activity = Activity;
class Timing extends FHIRElement {
}
exports.Timing = Timing;
class Component extends BackboneElement {
}
exports.Component = Component;
class Ratio extends FHIRElement {
}
exports.Ratio = Ratio;
class Range extends FHIRElement {
}
exports.Range = Range;
class Input extends BackboneElement {
}
exports.Input = Input;
class Output extends BackboneElement {
}
exports.Output = Output;
class SampledData extends FHIRElement {
}
exports.SampledData = SampledData;
class Restriction extends BackboneElement {
}
exports.Restriction = Restriction;
class AvailableTime extends BackboneElement {
}
exports.AvailableTime = AvailableTime;
class NotAvailable extends BackboneElement {
}
exports.NotAvailable = NotAvailable;
class BundleLink extends BackboneElement {
}
exports.BundleLink = BundleLink;
class BundleSignature extends FHIRElement {
}
exports.BundleSignature = BundleSignature;
class Search extends BackboneElement {
}
exports.Search = Search;
class BundleRequest extends BackboneElement {
}
exports.BundleRequest = BundleRequest;
class BundleResponse extends BackboneElement {
}
exports.BundleResponse = BundleResponse;
class BundleEntry extends BackboneElement {
}
exports.BundleEntry = BundleEntry;
class ActivityDetail extends BackboneElement {
}
exports.ActivityDetail = ActivityDetail;
class Position extends BackboneElement {
}
exports.Position = Position;
class Requester extends BackboneElement {
}
exports.Requester = Requester;
class QuestionnaireResponseItem extends BackboneElement {
}
exports.QuestionnaireResponseItem = QuestionnaireResponseItem;
class Item extends BackboneElement {
}
exports.Item = Item;
class Agent extends BackboneElement {
}
exports.Agent = Agent;
class Source extends BackboneElement {
}
exports.Source = Source;
class EntityDetail extends BackboneElement {
}
exports.EntityDetail = EntityDetail;
class Entity extends BackboneElement {
}
exports.Entity = Entity;
class Udi extends BackboneElement {
}
exports.Udi = Udi;
class QuestionnaireResponse extends BaseResource {
}
exports.QuestionnaireResponse = QuestionnaireResponse;
class Questionnaire extends BaseResource {
}
exports.Questionnaire = Questionnaire;
class Patient extends BaseResource {
}
exports.Patient = Patient;
class DocumentReference extends BaseResource {
}
exports.DocumentReference = DocumentReference;
class Appointment extends BaseResource {
}
exports.Appointment = Appointment;
class AppointmentResponse extends BaseResource {
}
exports.AppointmentResponse = AppointmentResponse;
class Organization extends BaseResource {
}
exports.Organization = Organization;
class Location extends BaseResource {
}
exports.Location = Location;
class Account extends BaseResource {
}
exports.Account = Account;
class ProcessRequest extends BaseResource {
}
exports.ProcessRequest = ProcessRequest;
class Encounter extends BaseResource {
}
exports.Encounter = Encounter;
class CareTeamParticipant extends BackboneElement {
}
exports.CareTeamParticipant = CareTeamParticipant;
class CareTeam extends BaseResource {
}
exports.CareTeam = CareTeam;
class EpisodeOfCare extends BaseResource {
}
exports.EpisodeOfCare = EpisodeOfCare;
class CarePlan extends BaseResource {
}
exports.CarePlan = CarePlan;
class Communication extends BaseResource {
}
exports.Communication = Communication;
class Task extends BaseResource {
}
exports.Task = Task;
class ProcedureRequest extends BaseResource {
}
exports.ProcedureRequest = ProcedureRequest;
class PractitionerRole extends BaseResource {
}
exports.PractitionerRole = PractitionerRole;
class Practitioner extends BaseResource {
}
exports.Practitioner = Practitioner;
class Device extends BaseResource {
}
exports.Device = Device;
class Observation extends BaseResource {
}
exports.Observation = Observation;
class Immunization extends BaseResource {
}
exports.Immunization = Immunization;
class CommunicationRequest extends BaseResource {
}
exports.CommunicationRequest = CommunicationRequest;
class AuditEvent extends BaseResource {
}
exports.AuditEvent = AuditEvent;
class Bundle extends BaseResource {
}
exports.Bundle = Bundle;
class HealthcareService extends BaseResource {
}
exports.HealthcareService = HealthcareService;
class Schedule extends BaseResource {
}
exports.Schedule = Schedule;
class Slot extends BaseResource {
}
exports.Slot = Slot;
class ClinicalImpression extends BaseResource {
}
exports.ClinicalImpression = ClinicalImpression;
class ClinicalImpressionInvestigation extends BackboneElement {
}
exports.ClinicalImpressionInvestigation = ClinicalImpressionInvestigation;
class ClinicalImpressionFinding extends BackboneElement {
}
exports.ClinicalImpressionFinding = ClinicalImpressionFinding;
class AllergyIntolerance extends BaseResource {
}
exports.AllergyIntolerance = AllergyIntolerance;
class AllergyIntoleranceReaction extends BackboneElement {
}
exports.AllergyIntoleranceReaction = AllergyIntoleranceReaction;
class Age extends FHIRElement {
}
exports.Age = Age;
class ValueSet extends BaseResource {
}
exports.ValueSet = ValueSet;
class ValueSetCompose extends BackboneElement {
}
exports.ValueSetCompose = ValueSetCompose;
class ValueSetInclude extends BackboneElement {
}
exports.ValueSetInclude = ValueSetInclude;
class ValueSetConcept extends BackboneElement {
}
exports.ValueSetConcept = ValueSetConcept;
class ValueSetDesignation extends BackboneElement {
}
exports.ValueSetDesignation = ValueSetDesignation;
class ValueSetFilter extends BackboneElement {
}
exports.ValueSetFilter = ValueSetFilter;
class ValueSetExpansion extends BackboneElement {
}
exports.ValueSetExpansion = ValueSetExpansion;
class ValueSetParameter extends BackboneElement {
}
exports.ValueSetParameter = ValueSetParameter;
class ValueSetContains extends BackboneElement {
}
exports.ValueSetContains = ValueSetContains;
