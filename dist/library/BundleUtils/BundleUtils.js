"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BundleUtils = void 0;
class BundleUtils {
    /**
     *
     * @param bundleEntry Bundle.entry[] i.e. the bundle entries to filter
     * @param resourceTypeToFilter ResourceType to filter from bundle entries
     * @returns array of resources
     */
    getResources(bundleEntry, resourceTypeToFilter) {
        return (bundleEntry === null || bundleEntry === void 0 ? void 0 : bundleEntry.length) ? bundleEntry.filter(x => x['resource']['resourceType'] === resourceTypeToFilter) : [];
    }
    /**
     *
     * @param bundleEntry Bundle.entry[] i.e. the bundle entries to filter
     * @param resourceId Resource ID to filter from bundle entries
     * @returns single resource
     */
    getResource(bundleEntry, resourceId) {
        return (bundleEntry === null || bundleEntry === void 0 ? void 0 : bundleEntry.length) ? bundleEntry.find(x => x['resource']['id'] === resourceId) : null;
    }
}
exports.BundleUtils = BundleUtils;
