import { http, HttpResponse } from "msw";
import { CONFIG } from "@shared/utils/config";

console.log("CONFIG: ", CONFIG.MSW);

export const handlers = [
  // Mock for balance summary
  http.get("/msw/api/balance", () => {
    console.log("xxxBalance request received!xxx");
    return HttpResponse.json({
      total: 10000,
      spending: 3500,
      remaining: 6500,
    });
  }),
];
