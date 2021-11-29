export interface ServerReturnDataState {
    state: string;
}

export interface ServerReturnErrors {
    errorEmail: string;
}

export interface ServerReturnOldValues {
    oldValueEmail: string;
}

export interface ServerJsonState {
    token: string;
    redirectUrl: string;
    source?: string;
    role?: 'partner' | 'member';
}