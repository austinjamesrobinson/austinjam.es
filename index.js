function resizeIframeWidth(e){
    // Set width of iframe according to its content
    if (e.Document && e.Document.body.scrollWidth) //ie5+ syntax
        e.width = e.contentWindow.document.body.scrollWidth;
    else if (e.contentDocument && e.contentDocument.body.scrollWidth) //ns6+ & opera syntax
        e.width = e.contentDocument.body.scrollWidth + 35;
    else (e.contentDocument && e.contentDocument.body.offsetWidth) //standards compliant syntax – ie8
        e.width = e.contentDocument.body.offsetWidth + 35;
}