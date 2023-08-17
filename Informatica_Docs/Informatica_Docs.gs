function myFunction() {
  var id = DriveApp.getFoldersByName('TIC').next().getId(); //Obtener el ID del folder
  var dir = DriveApp.getFolderById(id); //Obtener el dir del folder
  
  //Definir estilos
  var bodystyle = {};
  bodystyle[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
          DocumentApp.HorizontalAlignment.JUSTIFY;
      bodystyle[DocumentApp.Attribute.FONT_FAMILY] = 'Georgia';
      bodystyle[DocumentApp.Attribute.FONT_SIZE] = 11;
      bodystyle[DocumentApp.Attribute.BOLD] = false;
  var textstyle = {};
  textstyle[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
          DocumentApp.HorizontalAlignment.JUSTIFY;
      textstyle[DocumentApp.Attribute.FONT_FAMILY] = 'Oswald';
      textstyle[DocumentApp.Attribute.FONT_SIZE] = 16;
      textstyle[DocumentApp.Attribute.BOLD] = true;
  var paragraphstyle = {};
      paragraphstyle[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
          DocumentApp.HorizontalAlignment.LEFT;
      paragraphstyle[DocumentApp.Attribute.FONT_FAMILY] = 'Times New Roman';
      paragraphstyle[DocumentApp.Attribute.FONT_SIZE] = 38;
      paragraphstyle[DocumentApp.Attribute.BOLD] = true;
  
  //Crear doc
  var doc = DocumentApp.create('Ejercicio de Docs con Script');
  

  //Nombre del documento en el log
  var name= doc.getName();
  console.log('Se ha creado el documento',name);
  
  //Crear el cuerpo del doc
  var body = doc.getBody();
  body.appendParagraph('Tres tristes tigres comen trigo en un trigal.');
  body.appendParagraph('Willy no llegó al barco.');
  body.setAttributes(bodystyle)
  
  //Insertar una lista
  var item1 = body.appendListItem('Bing').setAttributes(textstyle);
  var item2 = body.appendListItem('Bong').setAttributes(textstyle);
  var item3 = body.appendListItem('Zoom').setAttributes(textstyle);
  item2.setListId(item1);

  //Agregar el list ID del item al log.
  Logger.log(item1.getListId());


  //Agregar tabla
  body.appendTable();
  //Crear tabla
  var rowsData = [['A', 'Rojo'], ['B', 'Azul'], ['C', 'Verde'], ['D', 'Amarillo'], []];
  body.insertParagraph(0, doc.getName()).setHeading(DocumentApp.ParagraphHeading.HEADING1);
  table = body.appendTable(rowsData);
  table.getRow(0).editAsText().setBold(true);
  var docFile = DriveApp.getFileById(doc.getId()); //Obtener documento como file
  dir.addFile(docFile);

  var firstChild = body.getChild(0)
  if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
    Logger.log('El primer elemento es un párrafo.');
  } else {
    Logger.log('El primer elemento no es un párrafo.');
  }

  function insertImageFromDrive(){
    var fileId = '1SdWLbshWgmxIL59ZzAy6IOqFhy3pDG4h';
    var img = DriveApp.getFileById(fileId).getBlob();
    DocumentApp.getActiveDocument().getBody().insertImage(0, img); 
  }
}