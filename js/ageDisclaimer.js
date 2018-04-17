
if (Cookies.get('ageConfirm') == null) {
    $( "#dialog" ).dialog ({ 
        autoOpen: true,
        modal: true,
        resizable: false,
        draggable: false,
        width: 'auto' 
    });
}

else {
    $( "#dialog" ).dialog ({ 
        autoOpen: false
    });
}

$("#dialog").dialog ({
    dialogClass: "dialogStyle",
    
  buttons: {
    'Yes, I am 21 years old!': function() {
        document.cookie = "ageConfirm=true; max-age=2628000";
        $("#dialog").dialog("close");
    },
    'No, I am not 21 years old.': function() {
        window.location.href = "http://www.google.com",
        $("#dialog").dialog("close");
    }
  },
        open: function (e, ui) {
        $("#dialog").parent().find(".ui-dialog-buttonpane .ui-button")
            .addClass("buttonStyle");
    }
});

