/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Scale } from "@fern-api/scale";
import * as core from "../../../../core";

export const ListTasksResponse: core.serialization.ObjectSchema<
    serializers.ListTasksResponse.Raw,
    Scale.ListTasksResponse
> = core.serialization.object({
    docs: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).Task))
        .optional(),
    total: core.serialization.number().optional(),
    limit: core.serialization.number().optional(),
    hasMore: core.serialization.property("has_more", core.serialization.boolean().optional()),
    nextToken: core.serialization.property("next_token", core.serialization.string().optional()),
});

export declare namespace ListTasksResponse {
    interface Raw {
        docs?: serializers.Task.Raw[] | null;
        total?: number | null;
        limit?: number | null;
        has_more?: boolean | null;
        next_token?: string | null;
    }
}
