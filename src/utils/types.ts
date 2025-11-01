import { Request } from "express";

interface TokenPayLoad{
    userId: string
    username: string
    iat?: number
    exp?: number
}

export interface AuthenticatedRequest extends Request{
    user?: TokenPayLoad
}