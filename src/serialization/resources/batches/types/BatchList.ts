/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Scale } from "@fern-api/scale";
import * as core from "../../../../core";

export const BatchList: core.serialization.ObjectSchema<serializers.BatchList.Raw, Scale.BatchList> =
    core.serialization.object({
        docs: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).Batch))
            .optional(),
        total: core.serialization.number().optional(),
        limit: core.serialization.number().optional(),
        offset: core.serialization.number().optional(),
        hasMore: core.serialization.property("has_more", core.serialization.boolean().optional()),
    });

export declare namespace BatchList {
    interface Raw {
        docs?: serializers.Batch.Raw[] | null;
        total?: number | null;
        limit?: number | null;
        offset?: number | null;
        has_more?: boolean | null;
    }
}
