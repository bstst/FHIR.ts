export declare class BundleUtils {
    /**
     *
     * @param bundleEntry Bundle.entry[] i.e. the bundle entries to filter
     * @param resourceTypeToFilter ResourceType to filter from bundle entries
     * @returns array of resources
     */
    getResources(bundleEntry: any[], resourceTypeToFilter: string): any[];
    /**
     *
     * @param bundleEntry Bundle.entry[] i.e. the bundle entries to filter
     * @param resourceId Resource ID to filter from bundle entries
     * @returns single resource
     */
    getResource(bundleEntry: any[], resourceId: string): any;
}
