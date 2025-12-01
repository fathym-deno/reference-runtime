import { IsRecord } from "../.deps.ts";
import type { $FluentTagExtract } from "./tags/$FluentTagExtract.ts";

export type IsFluentRecord<T> = "Record" extends $FluentTagExtract<T, "Methods">
  ? true
  : $FluentTagExtract<T, "Methods"> extends [never]
    ? true extends IsRecord<T> ? true
    : false
  : false;
