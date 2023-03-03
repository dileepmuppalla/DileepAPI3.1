import { request, response } from "express";
import supertest from "supertest";
import server from "server.js"


describe("POST /players",() => {

    describe("given players data",()=>{

        test("should return status 200",async()=>{
            const res = await request(server).post("/players").send({
                name:"name",
                rushing_yards :45,
                tochdowns:34,
                sacks:6,
                made_goals:4,
                missed_goals:4,
                catches_made:3
               
            })
            expect(res.statusCode).toBe(200)
        })
    })

});
