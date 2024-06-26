"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionChannel = void 0;
/**
 * The subscription resource is used to define a push-based subscription from a server to another system. Once a subscription is registered with the server, the server checks every resource that is created or updated, and if the resource matches the given criteria, it sends a message on the defined \"channel\" so that another system can take an appropriate action.
 */
class SubscriptionChannel {
}
exports.SubscriptionChannel = SubscriptionChannel;
(function (SubscriptionChannel) {
    SubscriptionChannel.TypeEnum = {
        RestHook: 'rest-hook',
        Websocket: 'websocket',
        Email: 'email',
        Sms: 'sms',
        Message: 'message'
    };
})(SubscriptionChannel = exports.SubscriptionChannel || (exports.SubscriptionChannel = {}));
