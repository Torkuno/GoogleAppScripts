function crearDoc() {
    var id = DriveApp.getFoldersByName('TIC').next().getId();
    var dir = DriveApp.getFolderById(id);
    
    var bodystyle = {};
    bodystyle[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
            DocumentApp.HorizontalAlignment.JUSTIFY;
        bodystyle[DocumentApp.Attribute.FONT_FAMILY] = 'Calibrí';
        bodystyle[DocumentApp.Attribute.FONT_SIZE] = 11;
        bodystyle[DocumentApp.Attribute.BOLD] = false;
    var textstyle = {};
    textstyle[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
            DocumentApp.HorizontalAlignment.JUSTIFY;
        textstyle[DocumentApp.Attribute.FONT_FAMILY] = 'Arial';
        textstyle[DocumentApp.Attribute.FONT_SIZE] = 18;
        textstyle[DocumentApp.Attribute.BOLD] = true;
    var paragraphstyle = {};
        paragraphstyle[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
            DocumentApp.HorizontalAlignment.LEFT;
        paragraphstyle[DocumentApp.Attribute.FONT_FAMILY] = 'Times New Roman';
        paragraphstyle[DocumentApp.Attribute.FONT_SIZE] = 38;
        paragraphstyle[DocumentApp.Attribute.BOLD] = true;
    
    var doc = DocumentApp.create('Clase Google Docs Informática');
    
    var name= doc.getName();
    console.log('Este es el nombre del documento creado',name);
    
    var body = doc.getBody();
    body.insertParagraph(1,name).setHeading(DocumentApp.ParagraphHeading.HEADING1);
    body.insertPageBreak(1);
    body.appendParagraph('La idea de la clase es la siguiente: cada estudiante debe saber editar documentos en la consola de google');
    
    var item1 = body.appendListItem('Item 1').setAttributes(textstyle);
    var item2 = body.appendListItem('Item 2').setAttributes(textstyle);
    item2.setListId(item1);

    Logger.log(item1.getListId());


    body.appendTable();
    var rowsData = [['Equipo 1', 'Animals'], ['Equipo 2', 'Goat'], ['Equipo 3', 'Cat'], ['Equipo 4', 'Frog'], []];
    body.insertParagraph(0, doc.getName())
        .setHeading(DocumentApp.ParagraphHeading.HEADING1);
    table = body.appendTable(rowsData);
    table.getRow(0).editAsText().setBold(true);
    var docFile = DriveApp.getFileById(doc.getId()); // Get Document as File
    dir.addFile(docFile);
}