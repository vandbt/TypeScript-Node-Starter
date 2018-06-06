import request from "supertest";
import app from "../src/app";

describe("GET /api", () => {
  it("should return 200 OK", () => {
    return request(app).get("/api")
      .expect(200);
  });
});

describe("GET /version", () => {
  it("should return 200 OK", () => {
    return request(app).get("/version")
      .expect(200);
  });
});

describe("GET /api/v1/todo", () => {
  it("should return 200 OK", () => {
    return request(app).get("/api/v1/todo")
      .expect(200);
  });

});

describe("GET /api/v1/contact", () => {
  it("should return 200 OK", () => {
    return request(app).get("/api/v1/contact")
      .expect(200);
  });

});

describe("GET /api/v1/location", () => {
  it("should return 200 OK", () => {
    return request(app).get("/api/v1/location")
      .expect(200);
  });

});
