describe('API testing', () => {

    it('TC01 GET03 istegi', () => {
        const rq ={
            method: 'GET',
            url: "https://httpbin.org/get"
        }

        failOnStatusCode: false,

    cy.request(rq).then((response)=>{
    debugger
    assert.equal(200,response.status);
    debugger
    expect(response.status).to.eq(200);
    debugger
    assert.equal("https://httpbin.org/get",response.body['url']);
    debugger
    assert.equal('application/json',response.headers['content-type']);
    debugger
    assert.isTrue(response.duration<=60000);

   
        })
    })

})    