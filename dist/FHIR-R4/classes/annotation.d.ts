import { Extension } from './extension';
import { Markdown } from './markdown';
import { Reference } from './reference';
/**
 * A  text note which also  contains information about who made the statement and when.
 */
export declare class Annotation {
    /**
     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
     */
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Array<Extension>;
    /**
     * The individual responsible for making the annotation.
     */
    authorReference?: Reference;
    /**
     * The individual responsible for making the annotation.
     */
    authorString?: string;
    /**
     * Indicates when this particular annotation was made.
     */
    time?: Date | string;
    /**
     * The text of the annotation in markdown format.
     */
    text?: Markdown;
}
