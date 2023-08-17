
describe('Risk Rating Calculation', () => {
  it('should calculate risk rating based on claim history', async () => {
    const claimHistory = "My only claim was a crash into my house's garage door that left a scratch on my car. There are no other crashes.";

    const res = await request(server)
      .post('/api/risk-rating')
      .send({ claim_history: claimHistory });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('risk_rating', 3);
  });

  // it('should return an error if the claim history is not provided', async () => {
  //   const res = await request(server)
  //     .get('/api/risk-rating')
  //     .send({});

  //   expect(res.statusCode).toEqual(200);
  //   expect(res.body).toHaveProperty('error', 'there is an error');
  // });

  it('should calculate risk rating based on claim history', async () => {
      const claimHistory = "Following a crash, the car had a collision, scratch, bump, and smashed headlight";
  
      const res = await request(server)
        .post('/api/risk-rating')
        .send({ claim_history: claimHistory });
  
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('risk_rating', 5);
    });

    
});