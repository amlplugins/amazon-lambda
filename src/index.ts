/**
 * @amlplugins/amazon-lambda
 *
 * Thin namespaced re-export of the native @aws-sdk/client-lambda SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * AWS Lambda — function CRUD, invocation, layers, aliases, event-source mappings, function URLs.
 */

import * as _sdk from "@aws-sdk/client-lambda";
export * from "@aws-sdk/client-lambda";
export { _sdk as sdk };
export default _sdk;
