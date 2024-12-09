import { http, HttpResponse } from "msw";

const mockDashboardData = {
  summary: [
    { title: "Total Balance", value: "$10,000" },
    { title: "Total Spending", value: "$2,500" },
    { title: "Remaining Balance", value: "$7,500" },
  ],
  chartData: [
    { date: "2024-01-01", spending: 500 },
    { date: "2024-01-02", spending: 700 },
    { date: "2024-01-03", spending: 300 },
  ],
};

export const handlers = [
  http.get("https://example.com/user", () => {
    return HttpResponse.json({
      id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
      firstName: "John",
      lastName: "Maverick",
    });
  }),

  // Mock for balance summary
  http.get("/api/balance", (req, res, ctx) => {
    return res(
      ctx.json({
        total: 10000,
        spending: 3500,
        remaining: 6500,
      })
    );
  }),

  // Mock for recent activities
  http.get("/api/activities", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          date: "2024-11-05",
          activity: "Added $2000",
          amount: "+$2000",
        },
        {
          id: 2,
          date: "2024-11-03",
          activity: "Grocery shopping",
          amount: "-$150",
        },
      ])
    );
  }),

  // Dashboard
  http.get("https://dummyjson.com/dashboard", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockDashboardData));
  }),
];
