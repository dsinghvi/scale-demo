/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Scale } from "@fern-api/scale";

export interface CreateProjectRequest {
    type: Scale.TaskType;
    name: string;
    rapid?: boolean;
    params?: Record<string, unknown>;
}
