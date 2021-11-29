import { encodeQueryData } from "./queryString";

export function generateMemberRegisterUrl(
    ssoRedirectUrl?: string,
    source?: string
): string {
    const queryData = encodeQueryData({
        redirect_url: ssoRedirectUrl ? ssoRedirectUrl : undefined,
        source: source ? source : undefined,
    });
    if (!queryData) {
        return process.env.MIX_TRUEPROFILE_MEMBER_REGISTER_URL;
    }
    return (
        process.env.MIX_TRUEPROFILE_MEMBER_REGISTER_URL +
        "?" +
        queryData
    );
}
