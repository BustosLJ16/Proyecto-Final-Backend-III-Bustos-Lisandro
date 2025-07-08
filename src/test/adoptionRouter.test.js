import request from "supertest";
import chai from "chai";
import app from "../app.js";

const expect = chai.expect;

describe("Adoption Router", () => {

    it("GET /api/adoptions debería devolver 200 y un array dentro de payload", async () => {
        const res = await request(app).get("/api/adoptions");
        expect(res.status).to.equal(200);
        expect(res.body.payload).to.be.an("array");
    });

    it("POST /api/adoptions debería crear una adopción y devolver 201", async () => {
        const data = {
            userId: "686b536cd814036d5fa85b4d",
            petId: "686743439b7740372d3d0d99",
        };

        const res = await request(app)
            .post("/api/adoptions")
            .send(data);

        expect(res.status).to.equal(201);
        expect(res.body.status).to.equal("success");
        expect(res.body).to.have.property("payload");
        expect(res.body.payload).to.have.property("owner", data.userId);
        expect(res.body.payload).to.have.property("pet", data.petId);
        expect(res.body.payload).to.have.property("_id");
    });

    it("POST /api/adoptions con datos inválidos debería devolver 400", async () => {
        const res = await request(app)
            .post("/api/adoptions")
            .send({});

        expect(res.status).to.equal(400);
    });

});