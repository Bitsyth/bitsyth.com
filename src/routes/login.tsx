import { createFileRoute } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  return (
    <div className="stage">
      <main className="flex flex-1 items-center justify-center px-4">
        <section className="portal-tile w-full max-w-sm !aspect-auto p-8">
          <span className="sheen" aria-hidden="true" />
          <span className="rim" aria-hidden="true" />
          <div className="relative space-y-5">
            <div className="space-y-1">
              <h1 className="text-xl font-medium tracking-tight text-fg">Sign in</h1>
              <p className="text-sm text-muted">Continue to Bitsyth</p>
            </div>
            {authEnabled ? (
              <div className="space-y-2">
                {GROK_PROVIDERS.map((provider) => (
                  <button
                    key={provider.providerId}
                    type="button"
                    onClick={() => signIn(provider.providerId, { callbackURL: "/" })}
                    className="w-full rounded-xl bg-fg px-4 py-2.5 text-sm font-medium text-bg transition-transform duration-150 ease-out hover:opacity-90 active:scale-[0.96]"
                  >
                    Continue with {provider.label}
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted">Sign-in is disabled.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
