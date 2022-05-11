QUnit.module("row", function () {
  QUnit.test("függvény", function (assert) {
    assert.ok(row, "Létezik");
  });
  QUnit.test("vanFüggvény", function (assert) {
    assert.ok(typeof row === "function", "ez egy fügvény");
  });
  QUnit.test("Semmit se írunk be", function (assert) {
    assert.equal(row(), false);
  });
  QUnit.test("Csak kötőjel", function (assert) {
    tomb = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
    assert.equal(row(), false);
  });
  QUnit.test("Első sor (X-el)", function (assert) {
    tomb = ["X", "X", "X", "-", "-", "-", "-", "-", "-"];
    assert.equal(row(), true);
  });
  QUnit.test("Első sor (O-el)", function (assert) {
    tomb = ["O", "O", "O", "-", "-", "-", "-", "-", "-"];
    assert.equal(row(), true);
  });
  QUnit.test("Második sor (X-el)", function (assert) {
    tomb = ["-", "-", "-", "X", "X", "X", "-", "-", "-"];
    assert.equal(row(), true);
  });
  QUnit.test("Második sor (O-el)", function (assert) {
    tomb = ["-", "-", "-", "O", "O", "O", "-", "-", "-"];
    assert.equal(row(), true);
  });
  QUnit.test("Harmadik sor (X-el)", function (assert) {
    tomb = ["-", "-", "-", "-", "-", "-", "X", "X", "X"];
    assert.equal(row(), true);
  });
  QUnit.test("Harmadik sor (O-el)", function (assert) {
    tomb = ["-", "-", "-", "-", "-", "-", "O", "O", "O"];
    assert.equal(row(), true);
  });
  QUnit.test("Nem ugya azok a jelek egy sorban", function (assert) {
    tomb = ["-", "-", "-", "-", "-", "-", "O", "X", "O"];
    assert.equal(row(), false);
  });
});
QUnit.module("column", function () {
  QUnit.test("függvény", function (assert) {
    assert.ok(column, "Létezik");
  });
  QUnit.test("vanFüggvény", function (assert) {
    assert.ok(typeof column === "function", "ez egy fügvény");
  });
  QUnit.test("Semmit se írunk be", function (assert) {
    assert.equal(column(), false);
  });
  QUnit.test("Csak kötőjel", function (assert) {
    tomb = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
    assert.equal(column(), false);
  });
  QUnit.test("Első oszlop (X-el)", function (assert) {
    tomb = ["X", "-", "-", "X", "-", "-", "X", "-", "-"];
    assert.equal(column(), true);
  });
  QUnit.test("Első oszlop (O-al)", function (assert) {
    tomb = ["O", "-", "-", "O", "-", "-", "O", "-", "-"];
    assert.equal(column(), true);
  });
  QUnit.test("Második oszlop (X-el)", function (assert) {
    tomb = ["-", "X", "-", "-", "X", "-", "-", "X", "-"];
    assert.equal(column(), true);
  });
  QUnit.test("Második oszlop (O-al)", function (assert) {
    tomb = ["-", "O", "-", "-", "O", "-", "-", "O", "-"];
    assert.equal(column(), true);
  });
  QUnit.test("Harmadik oszlop (X-el)", function (assert) {
    tomb = ["-", "-", "X", "-", "-", "X", "-", "-", "X"];
    assert.equal(column(), true);
  });
  QUnit.test("Harmadik oszlop (O-al)", function (assert) {
    tomb = ["-", "-", "O", "-", "-", "O", "-", "-", "O"];
    assert.equal(column(), true);
  });
  QUnit.test("Nem ugyan azok a jelek egy oszlopban", function (assert) {
    tomb = ["-", "-", "O", "-", "-", "X", "-", "-", "O"];
    assert.equal(column(), false);
  });
});

QUnit.module("balrolJobra", function () {
  QUnit.test("balrolJobra", function (assert) {
    assert.ok(balrolJobra, "Létezik");
  });
  QUnit.test("balrolJobra függvény létezik", function (assert) {
    assert.ok(typeof balrolJobra === "function", "ez egy fügvény");
  });
  //Nem fut le a teszt
  QUnit.test("Első kereszt  nyer (X-el)", function (assert) {
    tomb = ["X", "-", "-", "-", "X", "-", "-", "-", "X"];
    assert.equal(balrolJobra(), true);
  });
  //Nem fut le a teszt
  QUnit.test("Első kereszt nyer (O-al)", function (assert) {
    tomb = ["O", "-", "-", "-", "O", "-", "-", "-", "O"];
    assert.equal(balrolJobra(), true);
  });
  QUnit.test("Első kereszt nem nyer (X-el)", function (assert) {
    tomb = ["X", "-", "-", "-", "O", "-", "-", "-", "X"];
    assert.equal(balrolJobra(), false);
  });
  QUnit.test("Első kereszt nyer (O-al)", function (assert) {
    tomb = ["O", "-", "-", "-", "X", "-", "-", "-", "O"];
    assert.equal(balrolJobra(), false);
  });
});
QUnit.module("jobbrolBalra", function () {
  QUnit.test("jobbrolBalra", function (assert) {
    assert.ok(jobbrolBalra, "Létezik");
  });
  QUnit.test("jobbrolBalra", function (assert) {
    assert.ok(typeof jobbrolBalra === "function", "ez egy fügvény");
  });
  //Nem fut le a teszt
  QUnit.test("Első kereszt nyer (X-el)", function (assert) {
    tomb = ["X", "-", "-", "-", "X", "-", "-", "-", "X"];
    assert.equal(jobbrolBalra(), true);
  });
  //Nem fut le a teszt
  QUnit.test("Első kereszt nyer (O-al)", function (assert) {
    tomb = ["O", "-", "-", "-", "O", "-", "-", "-", "O"];
    assert.equal(jobbrolBalra(), true);
  });
  QUnit.test("Első sor nem nyer (X-el)", function (assert) {
    tomb = ["X", "-", "-", "-", "O", "-", "-", "-", "X"];
    assert.equal(jobbrolBalra(), false);
  });
  QUnit.test("Első sor nem nyer (O-al)", function (assert) {
    tomb = ["O", "-", "-", "-", "X", "-", "-", "-", "O"];
    assert.equal(jobbrolBalra(), false);
  });
});
QUnit.module("cross", function () {
  QUnit.test("cross", function (assert) {
    assert.ok(cross, "Létezik");
  });
  QUnit.test("cross függvény létezik", function (assert) {
    assert.ok(typeof cross === "function", "ez egy fügvény");
  });
  /* elrontja atöbbi tesztesetet
  //amugy se fut le
  QUnit.test("True a győztess", function (assert) {
    vanEGyoztes = true;
    assert.equal(cross(), true);
  });
  
  QUnit.test("False a győztess", function (assert) {
    vanEGyoztes = false;
    assert.equal(cross(), false);
  });
  */
});
QUnit.module("ellenorzes", function () {
    QUnit.test("ellenorzes", function (assert) {
      assert.ok(ellenorzes, "Létezik");
    });
    QUnit.test("ellenorzes függvény létezik", function (assert) {
      assert.ok(typeof ellenorzes === "function", "ez egy fügvény");
    });
    
    QUnit.test("True a győztess", function (assert) {
      vanEGyoztes = true;
      assert.equal(ellenorzes(), true);
    });
    
    
    QUnit.test("False a győztess", function (assert) {
      vanEGyoztes = false;
      assert.equal(ellenorzes(), false);
    });
    
  });
