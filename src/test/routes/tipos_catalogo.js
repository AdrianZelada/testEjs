console.log("ejecucion test tipos_catalogo")
      describe("Ruta: ejemplo de consumo tipos_catalogo normal", () => {
      describe("GET /", () => {
        it("retorna si el servicio esta online", done => {
          request.get("/api/v1/tipos_catalogos/")
          .expect(200)
          .end((err, res) => {
            const expected = [];
            expect(res.body).to.eql(expected);
            done(err);
            });
        });
      });
      describe("POST /", () => {
        it("retorna si el servicio esta online", done => {
          request.post("/api/v1/tipos_catalogos/")
          .expect(200)
          .end((err, res) => {
            const expected = [];
            expect(res.body).to.eql(expected);
            done(err);
            });
        });
      });
      describe("PUT /", () => {
        it("retorna si el servicio esta online", done => {
          request.put("/api/v1/tipos_catalogos/")
          .expect(200)
          .end((err, res) => {
            const expected = [];
            expect(res.body).to.eql(expected);
            done(err);
            });
        });
      });
      describe("DELETE /", () => {
        it("retorna si el servicio esta online", done => {
          request.delete("/api/v1/tipos_catalogos/")
          .expect(200)
          .end((err, res) => {
            const expected = [];
            expect(res.body).to.eql(expected);
            done(err);
            });
        });
      });
      });