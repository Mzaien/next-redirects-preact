import { useEffect } from "preact/hooks";
import { useRouter } from "next/router";

export interface nextRedirectsprop {
  href: string;
  asPath?: string;
  fallBack?: string;
  status?: boolean;
  shallow?: boolean;
  query?:
    | string
    | number
    | boolean
    | readonly string[]
    | readonly number[]
    | readonly boolean[]
    | null
    | undefined;
}

export function Redirects({
  href,
  status,
  fallBack,
  shallow,
  asPath,
  query,
}: nextRedirectsprop) {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      status !== undefined
        ? (router.prefetch(status === true ? href : `${fallBack}`),
          router.push(
            status === true ? href : fallBack ? fallBack : router.asPath,
            asPath,
            { shallow: shallow !== undefined ? shallow : false }
          ))
        : (router.prefetch(href),
          router.push(href, asPath, {
            shallow: shallow !== undefined ? shallow : false,
          }));
    }
  }, [status]);
  return null;
}
