describe('API testing - assertion', () =>{

    it('TC01 POST isteği assertion', () =>{
        const rq ={
            method: 'POST',
            url: "https://httpbin.org/post",
            body:{
                name:"mr",
                role:"QA",
                age:30
            },
            failOnStatusCode: false
        }

        cy.request(rq).then((response) => {

            assert.equal(response.status,200);
            expect(response.status).to.eq(200);
            cy.log("response body ::::::::",JSON.stringify(response.body));
            assert.equal(response.body.json.age, 30);
            expect(response.body.json.role).to.eq("QA");
            assert.equal(response.body.json.name,"mr");

            assert.equal(response.body.url,"https://httpbin.org/post");

            expect(response.body.json).to.deep.eq({
                name:"mr",
                role:"QA",
                age:30
            });
            expect(response.headers['content-type']).to.eq('application/json');

            expect(response.headers['content-type']).to.include('application/json');
            expect(response.duration).to.be.lessThan(7500)

        })
    })
})