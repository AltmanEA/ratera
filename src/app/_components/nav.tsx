import { getLogtoContext, signIn, signOut } from "@logto/next/server-actions";
import { logtoConfig } from "../logto/config";
import SignOut from "../logto/sign-out";
import SignIn from "../logto/sign-in";

export default async function Nav(){
    const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

    return (
        <nav>
        {isAuthenticated ? (
          <p>
            Hello, {claims?.sub},
            <SignOut
              onSignOut={async () => {
                'use server';

                await signOut(logtoConfig);
              }}
            />
          </p>
        ) : (
          <p>
            <SignIn
              onSignIn={async () => {
                'use server';

                await signIn(logtoConfig);
              }}
            />
          </p>
        )}
      </nav>
    )
}