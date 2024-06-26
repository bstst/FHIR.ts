"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceUtils = void 0;
class ResourceUtils {
    /**
     *
     * @param inputJson - valid json
     * @param propertyName - top level property for resource
     * @returns json property if it exists
     * @limitation currently just supports get for top level property on resource
     */
    getResourceProperty(inputJson, propertyName) {
        let resourcePropertyValue = null;
        if (inputJson.hasOwnProperty(propertyName)) {
            resourcePropertyValue = inputJson[propertyName];
        }
        return resourcePropertyValue;
    }
    /**
     *
     * @param identifierList list of identifiers
     * @param propertyToCompare identifier property to compare
     * @param propertyValue value we want to compare against
     * @returns array of matches
     * @limitations currently does not work with identifier.type, identifier.period & identifier.assigner
     */
    getIdentifiersByProperty(identifierList, propertyToCompare, propertyValue) {
        return (identifierList === null || identifierList === void 0 ? void 0 : identifierList.length)
            ? identifierList.filter((x) => x[propertyToCompare] === propertyValue)
            : [];
    }
    /**
     *
     * @param extensionList list of extensions
     * @param extensionUrl Extension.url to compare
     * @returns array of matches
     */
    getExtensionsByUrl(extensionList, extensionUrl) {
        return (extensionList === null || extensionList === void 0 ? void 0 : extensionList.length)
            ? extensionList.filter((x) => x["url"] === extensionUrl)
            : [];
    }
    /**
     *
     * @param codingList list of codings
     * @param propertyToCompare coding property to compare
     * @param propertyValue value we want to compare against string or boolean
     * @returns array of matches
     */
    getCodingsByProperty(codingList, propertyToCompare, propertyValue) {
        return (codingList === null || codingList === void 0 ? void 0 : codingList.length)
            ? codingList.filter((x) => x[propertyToCompare] === propertyValue)
            : [];
    }
    /**
     *
     * @param resource resource for which path needs to be validated
     * @param elementPath path to validate in resource
     * @returns array of elements found at the provided path
     */
    getValuesAtResourcePath(resource, elementPath) {
        const pathSections = elementPath.split(".");
        let resourcePathValue;
        for (let index = 1; index < pathSections.length; index++) {
            const subPaths = pathSections[index];
            resourcePathValue = resourcePathValue ? resourcePathValue[subPaths] : resource[subPaths];
            if (resourcePathValue) {
                if (this.isPrimitive(resourcePathValue)) {
                    return [resourcePathValue];
                }
                else if (Array.isArray(resourcePathValue) && resourcePathValue.length > 0) {
                    let resultSet = [];
                    for (let subPathIndex = 0; subPathIndex < resourcePathValue.length; subPathIndex++) {
                        const subPathValue = resourcePathValue[subPathIndex];
                        if (this.isPrimitive(subPathValue)) {
                            resultSet.push(subPathValue);
                        }
                        else {
                            resultSet.push(...this.getValuesAtResourcePath(subPathValue, pathSections.slice(index).join(".")));
                        }
                    }
                    return resultSet;
                }
                else if (typeof (resourcePathValue) === 'object') {
                    return this.getValuesAtResourcePath(resourcePathValue, pathSections.slice(index).join("."));
                }
            }
            else {
                break;
            }
        }
        return [];
    }
    isPrimitive(value) {
        return typeof (value) === "boolean" || typeof (value) === "string";
    }
    /**
     * @param resource resource to pull out references from
     * @returns array of references inside a resource
     */
    getAllReferencesFromResource(resource) {
        const stringifiedResource = JSON.stringify(resource);
        const referenceJsonString = '"reference":';
        let references = [];
        let cursor = stringifiedResource.indexOf(referenceJsonString, 0);
        while (cursor > -1) {
            const referenceStart = stringifiedResource.indexOf(referenceJsonString, cursor) + referenceJsonString.length;
            const referenceEnd = stringifiedResource.indexOf('"', referenceStart + 1);
            const reference = stringifiedResource.substring(referenceStart, referenceEnd);
            // this means the reference ends started reading from start again
            if (referenceEnd < cursor) {
                break;
            }
            references.push(reference);
            cursor = referenceEnd;
        }
        return references;
    }
}
exports.ResourceUtils = ResourceUtils;
