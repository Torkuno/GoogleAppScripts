var id = DriveApp.getFoldersByName('TIC_Ejercicios').next().getId();
var dir = DriveApp.getFolderById(id);

var name = 'Slides con Apps Script';
var pres = SlidesApp.create(name);

function crearSlides() {

  console.log("Nombre de la presentación:",name);
  console.log("Id de la presentación:",id);

  function slideConImagen(link, index){
    var slide = pres.appendSlide(SlidesApp.PredefinedLayout.BLANK);
    var imagen = slide.insertImage(link);

    var imagenW = imagen.getWidth();
    var imagenH = imagen.getHeight();
    var slideW = pres.getPageWidth();
    var slideH = pres.getPageHeight();

    var posX = (slideW/2) - (imagenW/2);
    var posY = (slideH/2) - (imagenH/2);
    imagen.setLeft(posX).setTop(posY);
  }
  
  var imagenes = [
    "https://www.zoobarcelona.cat/sites/default/files/animal/2016-12/1400x846%20CYNLUD%202.jpg",
    "https://www.seriouseats.com/thmb/-9Xe6VElxNdWY_MgH2jpuzHIoUA=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__05__20140530-294420-best-bbq-beans-f286c0d665a548f28ed3dbbff6bc2380.jpg"
  ];
  var [titulo, subtitulo] = pres.getSlides()[0].getPageElements();
  titulo.asShape().getText().setText(name);
  subtitulo.asShape().getText().setText("Buscando una buena nota\nCon práctica constante");
  imagenes.forEach(slideConImagen);

  //var colorHex = '#e3bb1b';
  //var selection = SlidesApp.getActivePresentation().getSelection();
  //var selectionType = selection.getSelectionType();
  //var paginaActual = selection.getCurrentPage();
  //var fondo = paginaActual.getBackground();
  //fondo.setSolidFill(colorHex);

  var slide = pres.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  var [titulo, body] = slide.getPageElements();
  titulo.asShape().getText().setText("Feliz Viernes");
  body.asShape().getText().setText('Modificación de un layout predefinido.');
  var obj = slide.insertTextBox("Hola");

  var slide = pres.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  var obj = slide.insertTable(3,7);

  var docFile = DriveApp.getFileById(pres.getId());
  dir.addFile(docFile);
  
}
