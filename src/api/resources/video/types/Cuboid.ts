/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Scale } from "@fern-api/scale";

export interface Cuboid {
    objectsToAnnotate?: unknown[];
    minHeight?: number;
    minWidth?: number;
    cameraIntrinsics?: Scale.CameraIntrinsics;
    cameraRotationQuaternion?: Scale.CameraRotationQuaternion;
    cameraHeight?: number;
}
