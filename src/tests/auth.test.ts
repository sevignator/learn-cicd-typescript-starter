import { describe, expect, test } from "vitest";
import { type IncomingHttpHeaders } from "http";

import { getAPIKey } from "../../src/api/auth.js";

describe("API key", () => {
  test("extracting API key from authorization header", () => {
    const httpHeaders: IncomingHttpHeaders = {
      authorization: "ApiKey test123",
    };
    const apiKey = getAPIKey(httpHeaders);

    expect(apiKey).toBe("test123");
  });

  test("missing authorization header", () => {
    const httpHeaders: IncomingHttpHeaders = {};
    const apiKey = getAPIKey(httpHeaders);

    expect(apiKey).toBeNull();
  });
});
