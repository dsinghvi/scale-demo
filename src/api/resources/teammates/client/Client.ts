/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { Scale } from "@fern-api/scale";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Teammates {
    interface Options {
        environment?: environments.ScaleEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class Teammates {
    constructor(private readonly options: Teammates.Options) {}

    /**
     * Retrieves basic information about all team members associate with your account.
     */
    public async list(): Promise<Scale.Teammate[]> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.ScaleEnvironment.Production, "/teams"),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.teammates.list.Response.parseOrThrow(
                _response.body as serializers.teammates.list.Response.Raw,
                { allowUnknownKeys: true }
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.ScaleError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ScaleError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ScaleTimeoutError();
            case "unknown":
                throw new errors.ScaleError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Invites one or multiple users by email to your team. `team_role` can be either `labeler`, `member`, or `manager`. Returns information about all team members.
     */
    public async invite(request: Scale.TeamsInvite): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.ScaleEnvironment.Production, "/teams/invite"),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.TeamsInvite.jsonOrThrow(request),
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.ScaleError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ScaleError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ScaleTimeoutError();
            case "unknown":
                throw new errors.ScaleError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Changes the role of non-admin team members. `emails` should be a list of emails of team members who are either labelers, members, managers, or disabled. `team_role` should be one of `labeler`, `member`, or `manager`. Returns information about all members of your team.
     */
    public async updateRole(request: Scale.TeamsInvite): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.ScaleEnvironment.Production, "/teams/set_role"),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.TeamsInvite.jsonOrThrow(request),
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.ScaleError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ScaleError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ScaleTimeoutError();
            case "unknown":
                throw new errors.ScaleError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
