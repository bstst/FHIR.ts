import { ExampleScenarioContainedInstance } from './exampleScenarioContainedInstance';
import { ExampleScenarioVersion } from './exampleScenarioVersion';
import { Extension } from './extension';
import { Markdown } from './markdown';
import { ResourceList } from './resourceList';
/**
 * Example of workflow instance.
 */
export declare class ExampleScenarioInstance {
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
     * The id of the resource for referencing.
     */
    resourceId: string;
    /**
     * The type of the resource.
     */
    resourceType: ResourceList;
    /**
     * A short name for the resource instance.
     */
    name?: string;
    /**
     * Human-friendly description of the resource instance.
     */
    description?: Markdown;
    /**
     * A specific version of the resource.
     */
    version?: Array<ExampleScenarioVersion>;
    /**
     * Resources contained in the instance (e.g. the observations contained in a bundle).
     */
    containedInstance?: Array<ExampleScenarioContainedInstance>;
}
