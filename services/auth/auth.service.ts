import {AuthRepository} from "@/services/auth/auth.repository";
import {AuthBaseDTO, RegisterDTO, ForgotPasswordDTO} from "@/interfaces/auth";

export class AuthService {
    private repository: AuthRepository;

    constructor() {
        this.repository = new AuthRepository();
    }

    async register(dto: RegisterDTO): Promise<{ message: string }> {
        return this.repository.register(dto);
    }

    async login(dto: AuthBaseDTO): Promise<{ verified: boolean }> {
        return this.repository.login(dto);
    }

    async forgotPassword(dto: ForgotPasswordDTO): Promise<{ message: string }> {
        return this.repository.forgotPassword(dto);
    }

    async resetPassword(token: string, newPassword: string): Promise<{ message: string }> {
        return this.repository.resetPassword(token, newPassword);
    }

    async logout(): Promise<void> {
        await this.repository.logout();
    }
}
