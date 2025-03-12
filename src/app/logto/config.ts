import { UserScope } from "@logto/next";

export const logtoConfig = {
  scopes: [UserScope.Email, UserScope.Phone, UserScope.CustomData],
  endpoint: 'http://localhost:3001/',
  appId: 'e6c6zvfxxt40pqoa1t7yy',
  appSecret: 'j0AZ1tBHmiOdAYR4kwPVNY3DjAXvGav5',
  baseUrl: 'http://localhost:3000', // Change to your own base URL
  cookieSecret: 'X66X4zfCljjuinEymslrlko5y6Omvv7H', // Auto-generated 32 digit secret
  cookieSecure: process.env.NODE_ENV === 'production',
};