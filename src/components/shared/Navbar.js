import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
  const { data } = useSession();

  const router = useRouter();
  return (
    <div className="navbar bg-base-100">
      <div className="w-full max-w-full lg:max-w-screen-2xl mx-auto">
        <div className="flex-1">
          <button
            className="btn btn-ghost normal-case text-xl"
            onClick={() => {
              router.push("/");
            }}
          >
            PC Builder
          </button>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a
                className="whitespace-nowrap"
                onClick={() => router.push("/pcbuild")}
              >
                PC Builder
              </a>
            </li>
            <li>
              <details>
                <summary>Categories</summary>
                <ul className="p-2 bg-base-100 z-50">
                  <li>
                    <a
                      className="whitespace-nowrap"
                      onClick={() => router.push("/category/processor")}
                    >
                      Processor
                    </a>
                  </li>
                  <li>
                    <a
                      className="whitespace-nowrap"
                      onClick={() => router.push("/category/motherboard")}
                    >
                      Motherboard
                    </a>
                  </li>
                  <li>
                    <a
                      className="whitespace-nowrap"
                      onClick={() => router.push("/category/ram")}
                    >
                      RAM
                    </a>
                  </li>
                  <li>
                    <a
                      className="whitespace-nowrap"
                      onClick={() => router.push("/category/power-supply-unit")}
                    >
                      Power Supply Unit
                    </a>
                  </li>
                  <li>
                    <a
                      className="whitespace-nowrap"
                      onClick={() => router.push("/category/storage-device")}
                    >
                      Storage Device
                    </a>
                  </li>
                  <li>
                    <a
                      className="whitespace-nowrap"
                      onClick={() => router.push("/category/monitor")}
                    >
                      Monitor
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              {data ? (
                <a onClick={() => signOut()}>Log Out</a>
              ) : (
                <a
                  onClick={() =>
                    signIn("github", {
                      callbackUrl: "/",
                    })
                  }
                >
                  Login
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
