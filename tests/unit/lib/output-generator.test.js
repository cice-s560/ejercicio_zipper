const sinon = require("sinon");
const fs = require("fs");
const outputgenerator = require("../../../lib/output-generator");
let outputStream;

describe('Testing setListeners', () => {

  //Creamos el contexto
  beforeAll(() => {
    context = sinon.createSandbox();
    stubStreams = context.stub(fs, "createWriteStream");
    spy1 = sinon.spy();
  })

  //Lo reseteamos al final
  afterEach(() => {
    context.restore();
  })


  //Prueba 1 - funciones como tal (FUNCIONA)
  test("setListeners debería existir como función", () => {
    expect(typeof outputgenerator.setListeners === "function");
  })


  // Prueba 2 - Funciones sin params pasados
  test("generateOutputStream debería devolver una ruta a un archivo", () => {

    let setListenersCall = outputgenerator.setListeners(outputStream, '20');
    console.log(setListenersCall);
    expect(setListenersCall).throw();
  });


  // Prueba 3 deberían devolver los datos esperados

    test("generateOutputStream debería devolver una ruta a un archivo", () => {

      let setListenersCall = outputgenerator.setListeners(outputStream, '20');
      console.log(setListenersCall);
      expect(setListenersCall.path).toBe('archivo.zip');
    });
});














describe('Testing generateOutputStream', () => {



  //Prueba 1 - funciones como tal
  test("generateOutputStream debería existir como función", () => {
    expect(typeof generateOutputStream === "function");
  })

  test('generateOutputStream devuelve un stream', () => {

    const streamModel = {
      close: 'hola'
    }
    outputStream = generateOutputStream(filename);
    expect(outputStream).toMatchObject(streamModel)
  })

/*
  // Prueba 3 deberían devolver los datos esperados
  test("generateOutputStream debería devolver una ruta a un archivo", () => {

    const spy = spy.

    expect(filepath).toBe(/(\\\\?([^\\/]*[\\/])*)([^\\/]+)$/);
  })
*/

})