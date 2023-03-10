/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../..";
import { Scale } from "@fern-api/scale";
import * as core from "../../../../../../../core";

export const CreateProjectGroupRequest: core.serialization.Schema<
    serializers.studio.CreateProjectGroupRequest.Raw,
    Scale.studio.CreateProjectGroupRequest
> = core.serialization.object({
    emails: core.serialization.list(core.serialization.string()),
    name: core.serialization.string(),
});

export declare namespace CreateProjectGroupRequest {
    interface Raw {
        emails: string[];
        name: string;
    }
}
