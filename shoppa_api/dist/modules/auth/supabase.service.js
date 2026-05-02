"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupabaseService = void 0;
const common_1 = require("@nestjs/common");
const supabase_js_1 = require("@supabase/supabase-js");
let SupabaseService = class SupabaseService {
    constructor() { }
    ensureClient() {
        if (!this.client) {
            const url = process.env.SUPABASE_URL;
            const key = process.env.SUPABASE_ANON_KEY;
            if (!url || !key) {
                throw new Error('Supabase is not configured. Set SUPABASE_URL and SUPABASE_ANON_KEY in env.');
            }
            this.client = (0, supabase_js_1.createClient)(url, key);
        }
        return this.client;
    }
    async signUp(email, password) {
        const { data, error } = await this.ensureClient().auth.signUp({ email, password });
        if (error)
            throw error;
        return data;
    }
    async signIn(email, password) {
        const { data, error } = await this.ensureClient().auth.signInWithPassword({ email, password });
        if (error)
            throw error;
        return data;
    }
    async signOut(accessToken) {
        if (accessToken) {
            await this.ensureClient().auth.setSession({ access_token: accessToken, refresh_token: '' });
        }
        const { error } = await this.ensureClient().auth.signOut();
        if (error)
            throw error;
        return { ok: true };
    }
    async getUser(accessToken) {
        const { data, error } = await this.ensureClient().auth.getUser(accessToken);
        if (error)
            throw error;
        return data;
    }
    async verify(accessToken) {
        const { data, error } = await this.ensureClient().auth.getUser(accessToken);
        if (error || !(data === null || data === void 0 ? void 0 : data.user))
            throw error || new Error('Unauthorized');
        return data.user;
    }
    async forgotPassword(email, redirectTo) {
        const { data, error } = await this.ensureClient().auth.resetPasswordForEmail(email, {
            redirectTo,
        });
        if (error)
            throw error;
        return { ok: true, data };
    }
    async oauthUrl(provider, redirectTo) {
        return { provider, redirectTo: redirectTo !== null && redirectTo !== void 0 ? redirectTo : null };
    }
    getClient() {
        return this.ensureClient();
    }
};
exports.SupabaseService = SupabaseService;
exports.SupabaseService = SupabaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], SupabaseService);
//# sourceMappingURL=supabase.service.js.map