import type { IsRecord } from "jsr:@fathym/common@0.2.287-integration/types";
import type { $FluentTagExtract } from "./tags/$FluentTagExtract.ts";

export type IsFluentRecord<T> = "Record" extends $FluentTagExtract<T, "Methods">
  ? true
  : $FluentTagExtract<T, "Methods"> extends [never]
    ? true extends IsRecord<T> ? true
    : false
  : false;
