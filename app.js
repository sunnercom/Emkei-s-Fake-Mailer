// Mail Send ---------------------------
function sendMail() {
    (function(){
        emailjs.init("D4E5bs2R3cgJ9zVBN");
        let params = {
            sendername : document.querySelector("#sendername").value,
            to : document.querySelector("#to").value,
            subject : document.querySelector("#subject").value,
            attachment : document.querySelector("#attachment").value,
            message : document.querySelector("#message").value,

        };
        let serviceID = "service_6wv1fmt";
        let templateID = "template_2tojmow";

        emailjs.send(serviceID, templateID, params)
        .then(res => {
            alert("Email Send Successfully!");
        })
        .catch()
    })
}


// Text editor------------------------------
document.addEventListener("DOMContentLoaded", function() {
    const textPlainRadio = document.getElementById("textPlain");
    const textHtmlRadio = document.getElementById("textHtml");
    const textEditorCheckbox = document.getElementById("textEditor");
    const messageTextarea = document.getElementById("message");

    textHtmlRadio.addEventListener("change", function() {
        if (textHtmlRadio.checked) {
            textEditorCheckbox.disabled = false;
        }
    });

    textPlainRadio.addEventListener("change", function() {
        if (textPlainRadio.checked) {
            textEditorCheckbox.disabled = true;
            textEditorCheckbox.checked = false;
            tinymce.remove('#message');
            messageTextarea.style.display = 'block'; // Show textarea
        }
    });

    textEditorCheckbox.addEventListener("change", function() {
        if (textEditorCheckbox.checked) {
            tinymce.init({
                selector: '#message'
            });
        } else {
            tinymce.remove('#message');
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Initialize TinyMCE if needed
    tinymce.init({
        selector: '#message'
    });

    const textPlainRadio = document.getElementById("textPlain");
    const textHtmlRadio = document.getElementById("textHtml");
    const textEditorCheckbox = document.getElementById("textEditor");
    const messageTextarea = document.getElementById("message");

    textHtmlRadio.addEventListener("change", function() {
        if (textHtmlRadio.checked) {
            textEditorCheckbox.disabled = false;
            if (textEditorCheckbox.checked) {
                tinymce.init({
                    selector: '#message'
                });
            }
        }
    });

    textPlainRadio.addEventListener("change", function() {
        if (textPlainRadio.checked) {
            textEditorCheckbox.disabled = true;
            textEditorCheckbox.checked = false;
            tinymce.remove('#message');
            messageTextarea.style.display = 'block'; // Show textarea
            // Remove TinyMCE and ensure textarea is visible
            messageTextarea.style.display = 'block';
            messageTextarea.focus();
        }
    });

    textEditorCheckbox.addEventListener("change", function() {
        if (textEditorCheckbox.checked) {
            tinymce.init({
                selector: '#message'
            });
        } else {
            tinymce.remove('#message');
        }
    });

    // Ensure the initial state of the textarea or TinyMCE
    if (textPlainRadio.checked) {
        messageTextarea.style.display = 'block';
        tinymce.remove('#message');
    } else if (textHtmlRadio.checked && textEditorCheckbox.checked) {
        tinymce.init({
            selector: '#message'
        });
    }
});
