import { Request } from "express";

interface TokenPayLoad{
    id: string
    email: string
    iat?: number
    exp?: number
}

export interface AuthenticatedRequest extends Request{
    user?: TokenPayLoad
}