function passExecutionContext(executionContext) {
    var formContext = executionContext.getFormContext();
    var wrControl = formContext.getControl("WebResource_ourWebResourceName");
    if (wrControl) {
        wrControl.getContentWindow().then(
            function (contentWindow) {
                contentWindow.setClientApiContext(formContext);
            })
    }
}



