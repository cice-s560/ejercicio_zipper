const sinon = require("sinon");
const fs = require("fs");
const outputgenerator = require("../../../lib/output-generator");


describe('Testing output-generator.js', () => {

  let context, spyConsole, stubStreams, setListenersCall, outputStream;
  const ref = '20';


  beforeAll(() => {
    context = sinon.createSandbox();
    stubStreams = context.stub(fs, "close");
    spyConsole = sinon.spy(console, 'log');
    outputStream = outputgenerator.generateOutputStream('archivo_test');
    setListenersCall = outputgenerator.setListeners(outputStream, '20');
  })


  afterAll(() => {
    context.restore();
    outputStream.restore();
    setListenersCall.restore();
    spyConsole.restore();
  })


  test("setListeners debería existir como función", () => {
    expect(typeof outputgenerator.setListeners === "function");
  })


  test("setListeners debería devolver un path", () => {
    expect(setListenersCall).toHaveProperty('path');
  });


  test("setListeners su path debe corresponder a lo pasado", () => {
    expect(setListenersCall.path).toBe('archivo_test.zip');
  });


  test("setListeners debería lanzar un log", () => {
    expect(spyConsole.called).toBe(true);
  })


  test("generateOutputStream debería existir como función", () => {
    expect(typeof generateOutputStream === "function");
  })


  test('generateOutputStream debería devolver un objeto', () => {
    expect(typeof outputStream === 'object')
  })


  test('generateOutputStream debería lanzar un error si no se le pasa filename', () => {
    expect(() => {
      outputgenerator.generateOutputStream();
    }).toThrow();
  })

})