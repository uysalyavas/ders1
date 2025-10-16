
describe('API testing', () => {

    it('TC01 GET istegi', () => {

        failOnStatusCode: false,

    cy.request("https://httpbin.org/get").then((response)=>{

    assert.equal(response.status,200);
    expect(response.status).to.eq(200);

   
        })
    })
    it('TC02 GET istegi', () => {
        const rq ={
            method: 'GET',
            url: "https://httpbin.org/get"
        }
        failOnStatusCode: false,

    cy.request(rq).then((response) => {

    assert.equal(response.status,200);
    expect(response.status).to.eq(200);
    console.log("response ::::::::::", response);
    cy.log("response :::::::::",JSON.stringify(response));
    cy.log("response body :::::::::",JSON.stringify(response.body));
    cy.log("response header :::::::::",JSON.stringify(response.headers));
    cy.log("response status :::::::::",JSON.stringify(response.ststus));
    cy.log("response status text :::::::::",JSON.stringify(response.statusText));
    cy.log("response duration :::::::::",JSON.stringify(response.duration));
 })
})
    it('TC03 GET istegi', () => {
        const rq ={
            method: 'GET',
            url: "https://httpbin.org/get",
            qs:{
                id:"1",
                name:"mr"
            },
            failOnStatusCode: false,

        }
    cy.request(rq).then((response)=>{

    assert.equal(response.status,200);
    expect(response.status).to.eq(200);
    cy.log("response body :::::::::",JSON.stringify(response.body));
   
        })
    })
    it('TC04 POST istegi', () => {
        const rq ={
            method: 'POST',
            url: "https://httpbin.org/post",
            body: {
                name: "mr",
                role: "QA",
                age: 30
            },
            failOnStatusCode: false,

        }
    cy.request(rq).then((response)=>{

    assert.equal(response.status,200);
    expect(response.status).to.eq(200);
    cy.log("response body :::::::::",JSON.stringify(response.body));
   
        })
    })
    it('TC05 POST istegi', () => {
        const body ={
            name: "mr",
            role: "QA",
            age: 30
        }
        const rq ={
            method: 'POST',
            url: "https://httpbin.org/post",
            body: body,
            failOnStatusCode: false,

        }
    cy.request(rq).then((response)=>{

    assert.equal(response.status,200);
    expect(response.status).to.eq(200);
    cy.log("response body :::::::::",JSON.stringify(response.body));
   
        })
    })
    it('TC06 POST istegi', () => {
        const body ={
            name: "mr",
            role: "QA",
            age: 30
        }
        const rq ={
            method: 'POST',
            url: "https://httpbin.org/post",
            body: body,
            headers:{
                'Content-Type':"application/json",
                'Connection':"keep-alive",
                'user-agent':'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0'
            },
            failOnStatusCode: false,

        }
    cy.request(rq).then((response)=>{

    assert.equal(response.status,200);
    expect(response.status).to.eq(200);
    cy.log("response body :::::::::",JSON.stringify(response.body));
   
        })
    })
    
})
