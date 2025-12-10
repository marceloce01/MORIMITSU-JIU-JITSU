import { Request } from "express";

interface TokenPayLoad{
    userId: string
    username: string
    role: string
    iat?: number
    exp?: number
}

export interface AuthenticatedRequest extends Request{
    user?: TokenPayLoad
}