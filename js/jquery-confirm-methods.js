function AlertSuccess(dialogContent) {
    $.confirm({
        title: "Success!",
        content: dialogContent,
        icon: 'fa fa-checkfa fa-check',
        closeIcon: true,
        draggable: false,
        type: 'green',
        typeAnimated: true,
        buttons: {
            confirm: {
                text: 'OK',
                btnClass: 'btn-green'
            }
        }
    });
}

function AlertError(dialogContent) {
    $.confirm({
        title: "Fail!",
        content: dialogContent,
        icon: 'fa fa-warning',
        closeIcon: true,
        draggable: false,
        type: 'red',
        typeAnimated: true,
        buttons: {
            confirm: {
                text: 'OK',
                btnClass: 'btn-red'
            }
        }
    });
}

function DeleteConfirmationById(id, dialogTitle, dialogContent, assemblyName, cSharpMethod) {
    $.confirm({
        title: dialogTitle,
        content: dialogContent,
        icon: 'fa fa-warning',
        closeIcon: true,
        draggable: false,
        type: 'red',
        typeAnimated: true,
        buttons: {
            confirm: {
                text: 'Confirm',
                btnClass: 'btn-red',
                action: function () {
                    $.alert("Shafi");
                }
            },
            close: function () {
            }
        }
    });
}

//function ExecuteCSharpMethod(assemblyName, cSharpMethod, id) {
//    DotNet.invokeMethodAsync(assemblyName, cSharpMethod, id);
//    $.alert("C# Method Executed Successfully.");
//}