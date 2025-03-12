
import { getLogtoContext } from "@logto/next/server-actions";
import { logtoConfig } from "./logto/config";

export default async function Home() {
  const { userInfo, claims } =
    await getLogtoContext(logtoConfig, { fetchUserInfo: true });

  const cd = userInfo?.custom_data as any
  console.log("cd", userInfo)
  return (

    <main>
      {claims && (
        <div>
          <h2>Claims:</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(claims).map(([key, value]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{String(value)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
