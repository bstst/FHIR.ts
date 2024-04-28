export declare class ResourceUtils {
    /**
     *
     * @param inputJson - valid json
     * @param propertyName - top level property for resource
     * @returns json property if it exists
     * @limitation currently just supports get for top level property on resource
     */
    getResourceProperty(inputJson: object, propertyName: string): any;
    /**
     *
     * @param identifierList list of identifiers
     * @param propertyToCompare identifier property to compare
     * @param propertyValue value we want to compare against
     * @returns array of matches
     * @limitations currently does not work with identifier.type, identifier.period & identifier.assigner
     */
    getIdentifiersByProperty(identifierList: any[], propertyToCompare: string, propertyValue: string): any[];
    /**
     *
     * @param extensionList list of extensions
     * @param extensionUrl Extension.url to compare
     * @returns array of matches
     */
    getExtensionsByUrl(extensionList: any[], extensionUrl: string): any[];
    /**
     *
     * @param codingList list of codings
     * @param propertyToCompare coding property to compare
     * @param propertyValue value we want to compare against string or boolean
     * @returns array of matches
     */
    getCodingsByProperty(codingList: any[], propertyToCompare: string, propertyValue: string | boolean): any[];
    /**
     *
     * @param resource resource for which path needs to be validated
     * @param elementPath path to validate in resource
     * @returns array of elements found at the provided path
     */
    getValuesAtResourcePath(resource: any, elementPath: string): any[];
    private isPrimitive;
    /**
     * @param resource resource to pull out references from
     * @returns array of references inside a resource
     */
    getAllReferencesFromResource(resource: any): string[];
}
